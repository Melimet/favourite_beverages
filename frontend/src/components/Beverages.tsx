import useBeverages from "../hooks/useBeverages"
import { BeverageType } from "../types"
import Beverage from "./Beverage"
import "../Beverage.css"
import BeverageForm from "./BeverageForm"

function Beverages() {
  const [beverages, setBeverages] = useBeverages()

  function splitBeverages(
    beverages: BeverageType[]
  ): [BeverageType[], BeverageType[]] {
    return beverages.reduce(
      ([coffee, tea], beverage) => {
        return beverage.beverageType === "Coffee"
          ? [[...coffee, beverage], tea]
          : [coffee, [...tea, beverage]]
      },
      [[], []] as [BeverageType[], BeverageType[]]
    )
  }

  function addBeverage(beverage: BeverageType) {
    setBeverages([...beverages, beverage])
  }

  const [coffees, teas] = splitBeverages(beverages)

  return (
    <div>
      <BeverageForm addBeverage={addBeverage} />
      <main className="gridWrapper">
        <div>
          <h2>Coffees</h2>
          {coffees.map((coffee, index) => (
            <Beverage key={index} beverage={coffee} />
          ))}
        </div>
        <div>
          <h2>Teas</h2>
          {teas.map((tea, index) => (
            <Beverage key={index} beverage={tea} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Beverages

import useBeverages from "../hooks/useBeverages"
import { BeverageType } from "../types"
import Beverage from "./Beverage"

function Beverages() {
  const beverages = useBeverages()

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

  const [coffees, teas] = splitBeverages(beverages)

  return (
    <div>
      <h2>Coffees</h2>
      {coffees.map((coffee, index) => (
        <Beverage key={index} beverage={coffee} />
      ))}
      <h2>Teas</h2>
      {teas.map((tea, index) => (
        <Beverage key={index} beverage={tea} />
      ))}
    </div>
  )
}

export default Beverages

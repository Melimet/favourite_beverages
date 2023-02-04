import { useState } from "react"
import { postBeverage } from "../services/beverage"
import { BeverageType } from "../types"

interface BeverageFormProps {
  addBeverage: (beverage: BeverageType) => void
}

function BeverageForm({ addBeverage }: BeverageFormProps) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("0")
  const [weight, setWeight] = useState("0")
  const [roastLevel, setRoastLevel] = useState("1")
  const [beverageType, setBeverageType] = useState("Coffee")

  async function handleSubmit(event: React.MouseEvent) {
    event.preventDefault()

    const beverage = {
      name,
      price: Number(price),
      weight: Number(weight),
      roastLevel: Number(roastLevel),
      beverageType,
    }

    const result = await postBeverage(beverage)
    if (!result) return

    addBeverage(result)
  }

  return (
    <form>
      <fieldset>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={({ target }) => setName(target.value)}
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={({ target }) => setPrice(target.value)}
        />

        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          id="weight"
          name="weight"
          onChange={({ target }) => setWeight(target.value)}
        />

        <label htmlFor="roastLevel">Roast Level</label>
        <select
          id="roastLevel"
          name="roastLevel"
          onChange={({ target }) => setRoastLevel(target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="beverageType">Coffee</label>
        <input
          type="radio"
          id="beverageType"
          name="beverageType"
          value="Coffee"
          onChange={() => setBeverageType("Coffee")}
        />
        <input
          type="radio"
          id="beverageType"
          name="beverageType"
          value="Tea"
          onChange={() => setBeverageType("Tea")}
        />
        <label htmlFor="beverageType">Tea</label>

        <button onClick={handleSubmit} type="submit">
          Add beverage
        </button>
      </fieldset>
    </form>
  )
}

export default BeverageForm

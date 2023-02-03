
import { BeverageType, BeverageZod } from "../types"


const ADDRESS = 'http://localhost:8080'

async function postBeverage(beverage: unknown): Promise<void | BeverageType> {

  const validatedBeverage = BeverageZod.safeParse(beverage)

  if (!validatedBeverage.success) {
    console.log(validatedBeverage.error)
    return
  }
  
  const response = await fetch(`${ADDRESS}/api/beverages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(validatedBeverage.data),
  })

  const responseJson = await response.json()

  const validateJson = BeverageZod.safeParse(responseJson)

  if (!validateJson.success) {
    console.log(validateJson.error)
    return 
  }

  return validateJson.data
}

export default postBeverage
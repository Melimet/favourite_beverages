import { BeverageType, BeverageZod } from "../types"

const ADDRESS = "http://localhost:8080"

export async function getBeverages() {
  const response = await fetch(`${ADDRESS}/api/beverages`).catch((error) => {
    console.log(error.message)
    return undefined
  })

  if (!response) return []

  console.log(response)
  const data = await response.json()

  const validatedData = await data.flatMap((beverage: unknown) => {
    const zodParse = BeverageZod.safeParse(beverage)
    return zodParse.success ? beverage : []
  })

  return validatedData
}

interface Error {
  message: string
}

export async function postBeverage(
  beverage: unknown
): Promise<void | BeverageType> {
  const validatedBeverage = BeverageZod.safeParse(beverage)

  if (!validatedBeverage.success) {
    console.log(validatedBeverage.error)
    return undefined
  }

  const response = await fetch(`${ADDRESS}/api/beverages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validatedBeverage.data),
  }).catch((error) => {
    console.log(error.message)
    return undefined
  })

  if (!response) return undefined

  const responseJson = await response.json()

  const validateJson = BeverageZod.safeParse(responseJson)

  if (!validateJson.success) {
    console.log(validateJson.error)
    return undefined
  }

  return validateJson.data
}

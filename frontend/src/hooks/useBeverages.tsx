import { useEffect, useState } from "react"
import { BeverageType, BeverageZod } from "../types"

function useBeverages(): BeverageType[] {
  const [beverages, setBeverages] = useState<BeverageType[]>([])

  useEffect(() => {
    async function fetchBeverages() {
      const response = await fetch("http://localhost:8080/api/beverages")
      const data = await response.json()

      const validatedData = await data.flatMap((beverage: unknown) => {
        const zodParse = BeverageZod.safeParse(beverage)
        return zodParse.success ? beverage : []
      })
      
      console.log(validatedData)
      setBeverages(validatedData)
    }

    fetchBeverages()
  }, [])

  return beverages
}

export default useBeverages

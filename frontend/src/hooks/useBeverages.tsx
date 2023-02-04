import { useEffect, useState } from "react"
import { BeverageType } from "../types"
import { getBeverages } from "../services/beverage"

function useBeverages(): [BeverageType[], React.Dispatch<React.SetStateAction<BeverageType[]>>] {
  const [beverages, setBeverages] = useState<BeverageType[]>([])

  useEffect(() => {
    async function fetchBeverages() {
      
      const response = await getBeverages()
      console.log(response)

      setBeverages(response)
    }

    fetchBeverages()
  }, [])

  return [beverages, setBeverages]
}

export default useBeverages

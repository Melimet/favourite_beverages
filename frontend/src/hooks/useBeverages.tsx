import { useEffect, useState } from "react";
import { Beverage } from "../types";

function useBeverages(): Beverage[] {
  const [beverages, setBeverages] = useState<Beverage[]>([]);

  useEffect(() => {
    async function fetchBeverages() {
      const response = await fetch('http://localhost:8080/api/beverages');
      const data = await response.json();
      
      

      setBeverages(data);
      console.log(beverages)
    };

    fetchBeverages();
  }, []);

  return beverages;
}

export default useBeverages;
import { useEffect, useState } from "react";


export default function useLoading() { 
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => { 
  setIsLoading(true)
  setTimeout(() => {setIsLoading(false) },500)
}, [])
  

  return isLoading
}


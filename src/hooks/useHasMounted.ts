// hooks/useHasMounted.ts
//este hooks sirve para prevenir el renderizado en el servidor 
import { useEffect, useState } from 'react'

export default function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}

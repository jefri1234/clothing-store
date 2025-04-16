// components/theme-provider.tsx
'use client'

import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"
import useHasMounted from  "@/app/hooks/useHasMounted"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const hasMounted = useHasMounted()

  if (!hasMounted) return null // Previene renderizado en SSR

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

//Esto asegura que el ThemeProvider no renderice hasta que el cliente esté montado, evitando así el desajuste entre SSR y CSR.
// components/PageVisibilityListener.tsx
"use client";

import { useEffect, useState } from "react";

export default function PageVisibilityListener() {
  // Guardamos el título original en el estado,
  // pero solo se definirá cuando se ejecute en el cliente.
  const [originalTitle, setOriginalTitle] = useState("");

  useEffect(() => {
    // Esto se ejecuta solo en el cliente
    // Guardamos el título original al cargar el componente
    // y lo usamos como fallback en caso de que no haya un título definido.
    setOriginalTitle(document.title);
    
    // Escuchamos el evento de visibilidad
    // y cambiamos el título según el estado de visibilidad.
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "¡No te vayas, regresa😭!";
      } else {
        document.title = originalTitle || "Mi Sitio"; // fallback
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [originalTitle]);

  return null;//este componente no renderiza nada, solo se encarga de escuchar el evento de visibilidad
}

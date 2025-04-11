import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              MODA<span className="text-primary">STYLE</span>
            </h3>
            <p className="text-muted-foreground">
              Tu tienda de ropa favorita con las mejores prendas para todas las ocasiones.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categoria/gorras" className="text-muted-foreground hover:text-primary transition-colors">
                  Gorras
                </Link>
              </li>
              <li>
                <Link href="/categoria/polos" className="text-muted-foreground hover:text-primary transition-colors">
                  Polos
                </Link>
              </li>
              <li>
                <Link href="/categoria/poleras" className="text-muted-foreground hover:text-primary transition-colors">
                  Poleras
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/pantalones"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Pantalones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-condiciones"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <address className="not-italic text-muted-foreground">
              <p>Av. Principal 123</p>
              <p>Ciudad, País</p>
              <p className="mt-2">Email: info@modastyle.com</p>
              <p>Teléfono: +123 456 7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MODASTYLE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

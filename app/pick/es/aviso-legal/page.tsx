import type { Metadata } from "next"
import { PICK } from "@/lib/pick-content"
import { LegalChrome, LegalHeader } from "@/components/pick/chrome"

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal e identificación del titular de Pick, app publicada por TREMPIDO SL.",
  alternates: {
    canonical: "/pick/es/aviso-legal",
    languages: {
      en: "https://www.trempido.com/pick/legal",
      "es-ES": "https://www.trempido.com/pick/es/aviso-legal",
      "x-default": "https://www.trempido.com/pick/legal",
    },
  },
}

export default function AvisoLegalPage() {
  return (
    <LegalChrome lang="es">
      <LegalHeader lang="es" crumb="Aviso legal" eyebrow="Legal" title="aviso legal" />
      <section className="p-section p-section--tight">
        <div className="p-wrap p-prose">
          <p className="p-prose__meta">Última actualización: julio de 2026.</p>

          <h2>1. Identificación del titular</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico (LSSI-CE), el titular de la app Pick y de estas páginas es:
          </p>
          <div className="p-legal-card">
            <strong>TREMPIDO SL</strong>
            <br />
            NIF: {PICK.company.taxId}
            <br />
            Domicilio social: {PICK.company.address}
            <br />
            Correo electrónico: <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a>
          </div>

          <h2>2. Objeto</h2>
          <p>
            Pick es una aplicación para iPhone que ayuda a planificar las cenas de la semana, montar la lista de
            la compra y estimar el coste de la compra en el supermercado elegido. Estas páginas ofrecen
            información sobre la app y sus condiciones legales.
          </p>

          <h2>3. Marcas</h2>
          <p>
            Los nombres y logotipos de los supermercados (incluidos Mercadona, Carrefour, Lidl, Dia, Eroski,
            Alcampo, El Corte Inglés, Consum, Aldi, Walmart, Kroger, Target, Safeway, Publix, Trader
            Joe&apos;s, Costco y Whole Foods) son marcas registradas de sus respectivos titulares. TREMPIDO SL y
            Pick <strong>no mantienen ninguna relación comercial, de afiliación ni de patrocinio</strong> con
            ninguno de ellos. Estos nombres se usan únicamente para ayudar a los usuarios a organizar su compra
            y estimar precios.
          </p>

          <h2>4. Propiedad intelectual</h2>
          <p>
            La marca, el diseño, el software y el contenido de recetas de Pick son titularidad de TREMPIDO SL o
            se utilizan bajo licencia, y están protegidos por la normativa de propiedad intelectual. Queda
            prohibida su reproducción, distribución o modificación sin autorización.
          </p>

          <h2>5. Soporte</h2>
          <p>
            ¿Dudas, sugerencias o un problema con la app? Escríbenos a{" "}
            <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a>.
          </p>

          <h2>6. Legislación aplicable</h2>
          <p>
            Estas condiciones se rigen por la legislación española. Cualquier controversia se someterá a los
            juzgados y tribunales de Barcelona, salvo que la normativa imperativa de protección de los
            consumidores disponga otra cosa.
          </p>

          <h2>Relacionado</h2>
          <ul>
            <li><a href="/pick/es/terminos">Condiciones de uso (EULA)</a></li>
            <li><a href="/pick/es/privacidad">Política de Privacidad</a></li>
          </ul>
        </div>
      </section>
    </LegalChrome>
  )
}

import type { Metadata } from "next"
import { PICK, PRICING } from "@/lib/pick-content"
import { LegalChrome, LegalHeader } from "@/components/pick/chrome"

export const metadata: Metadata = {
  title: "Condiciones de uso (EULA)",
  description:
    "Condiciones de uso y contrato de licencia de usuario final de Pick: licencia, suscripciones de renovación automática, aviso sobre nutrición y alergias, precios estimados y términos mínimos de Apple.",
  alternates: {
    canonical: "/pick/es/terminos",
    languages: {
      en: "https://www.trempido.com/pick/terms",
      "es-ES": "https://www.trempido.com/pick/es/terminos",
      "x-default": "https://www.trempido.com/pick/terms",
    },
  },
}

const APPLE_EULA = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"

export default function TerminosPage() {
  return (
    <LegalChrome lang="es">
      <LegalHeader lang="es" crumb="Condiciones" eyebrow="Legal" title="condiciones de uso (EULA)" />
      <section className="p-section p-section--tight">
        <div className="p-wrap p-prose">
          <p className="p-prose__meta">Última actualización: 25 de julio de 2026.</p>

          <div className="p-legal-card">
            <strong>Estas condiciones son el contrato de licencia de usuario final (EULA) de Pick.</strong> Son
            un acuerdo entre tú y TREMPIDO SL, no con Apple. Incorporan el{" "}
            <a href={APPLE_EULA} target="_blank" rel="noopener noreferrer">
              Contrato de licencia de usuario final de aplicación licenciada
            </a>{" "}
            de Apple como términos mínimos; el apartado 11 los recoge. Versión en inglés en{" "}
            <a href="/pick/terms">trempido.com/pick/terms</a>.
          </div>

          <h2>1. Aceptación</h2>
          <p>
            Pick es una app para iPhone publicada por <strong>TREMPIDO SL</strong> (NIF {PICK.company.taxId}),{" "}
            {PICK.company.address}. Al descargar, instalar o usar Pick aceptas estas condiciones y los Términos
            y condiciones de Apple Media Services, incluidas las Reglas de uso del App Store. Si no estás de
            acuerdo, no uses la app.
          </p>

          <h2>2. Qué es Pick</h2>
          <p>
            Pick te ayuda a planificar una semana de cenas según tu presupuesto, tus preferencias alimentarias y
            los electrodomésticos que tienes, monta la lista de la compra ordenada por pasillo y muestra precios
            estimados en el supermercado que elijas. Pick es una herramienta de organización y planificación.{" "}
            <strong>No es asesoramiento médico, dietético ni nutricional</strong> y no sustituye a un médico,
            dietista u otro profesional cualificado.
          </p>

          <h2>3. Nutrición, alergias y seguridad alimentaria</h2>
          <p>
            La información de las recetas — calorías, macronutrientes, ingredientes y filtros de alérgenos — es
            orientativa y puede contener errores u omisiones. Los filtros de alérgenos y de dieta son una guía
            y <strong>no una garantía</strong>: describen los ingredientes que pide la receta y no pueden tener
            en cuenta los productos concretos que compres, los avisos de tipo &laquo;puede contener&raquo; ni
            las <strong>trazas y la contaminación cruzada</strong> que se producen en la fabricación, el
            envasado o el cocinado. Lee siempre la etiqueta de los productos que compres y manipula los
            alimentos de forma segura. Si tienes una alergia alimentaria, una intolerancia o una condición
            médica, guíate por el etiquetado y por consejo profesional, no por la app.
          </p>

          <h2>4. Precios estimados y fotos de las recetas</h2>
          <p>
            Los precios y los totales de presupuesto que muestra la app son <strong>estimaciones</strong> para
            ayudarte a planificar. No son presupuestos y pueden diferir del precio real de cualquier tienda, que
            varía según la ubicación, la cadena y el momento. Las fotos de las recetas son{" "}
            <strong>ilustraciones generadas con IA</strong> del plato, no fotografías de la comida que vas a
            preparar. TREMPIDO SL no se responsabiliza de las diferencias entre el precio estimado y el precio
            en tienda, ni entre la foto y tu resultado.
          </p>

          <h2>5. Nombres de supermercados y marcas</h2>
          <p>
            Los nombres y logotipos de los supermercados — incluidos Mercadona, Carrefour, Lidl, Dia, Eroski,
            Alcampo, El Corte Inglés, Consum y Aldi en España, y Walmart, Kroger, Target, Safeway, Publix,
            Trader Joe&apos;s, Costco y Whole Foods en Estados Unidos — son marcas de sus respectivos titulares.
            Pick y TREMPIDO SL <strong>no tienen ninguna relación comercial, de afiliación, de patrocinio ni de
            respaldo</strong> con ninguno de ellos. Los nombres se usan únicamente para ayudarte a organizar la
            compra y estimar precios.
          </p>

          <h2>6. Licencia</h2>
          <p>
            Con sujeción a estas condiciones, te concedemos una licencia personal, limitada, no exclusiva, no
            transferible y revocable para usar Pick en dispositivos de la marca Apple que poseas o controles,
            según permiten las Reglas de uso del App Store. No puedes copiar, revender, sublicenciar, alquilar,
            aplicar ingeniería inversa, descompilar ni redistribuir la app, su software o su catálogo de
            recetas, en todo o en parte, sin nuestro permiso previo por escrito.
          </p>

          <h2>7. Suscripciones, prueba gratuita y cancelación</h2>
          <p>
            El acceso completo a Pick (&laquo;Pick Premium&raquo;) se vende como{" "}
            <strong>suscripción de renovación automática</strong> gestionada por Apple. Hay dos planes:
          </p>
          <ul>
            <li>
              <strong>Pick Premium — Anual</strong>: 12 meses, {PRICING.es.yearly} al año en España
              ({PRICING.en.yearly} al año en Estados Unidos), lo que equivale a {PRICING.es.yearlyWeekly} por
              semana. Incluye una <strong>prueba gratuita de {PRICING.es.trialDays} días</strong> para quien no
              la haya usado antes.
            </li>
            <li>
              <strong>Pick Premium — Semanal</strong>: 7 días, {PRICING.es.weekly} por semana en España
              ({PRICING.en.weekly} por semana en Estados Unidos). Sin prueba gratuita.
            </li>
          </ul>
          <p>
            Los precios de otras tiendas del App Store, y el precio y las condiciones de prueba exactos que se
            te aplican, se muestran siempre en la app y en el App Store antes de que confirmes la compra.
          </p>
          <ul>
            <li>El pago se carga a tu cuenta de Apple al confirmar la compra.</li>
            <li>
              La suscripción se renueva automáticamente salvo que desactives la renovación al menos 24 horas
              antes del final del periodo en curso.
            </li>
            <li>
              El cobro de la renovación se realiza dentro de las 24 horas previas al final del periodo en curso,
              al precio del plan que hayas elegido.
            </li>
            <li>
              Puedes gestionar o cancelar la suscripción en los ajustes de tu cuenta de Apple (Ajustes &rarr; tu
              nombre &rarr; Suscripciones) después de la compra. Borrar la app no cancela la suscripción.
            </li>
            <li>
              Si te suscribes durante una prueba gratuita, se pierde la parte no disfrutada de esa prueba al
              contratar la suscripción.
            </li>
            <li>
              Salvo que la ley imperativa disponga otra cosa, los pagos no son reembolsables. Los reembolsos los
              gestiona Apple según sus propias políticas, en{" "}
              <a href="https://support.apple.com/billing" target="_blank" rel="noopener noreferrer">
                support.apple.com/billing
              </a>
              .
            </li>
            <li>
              Podemos modificar el precio de la suscripción para periodos futuros. Cuando sea necesario, Apple
              te pedirá que aceptes el nuevo precio antes de aplicarlo; si no lo aceptas, la suscripción no se
              renovará.
            </li>
          </ul>

          <h2>8. Tus datos</h2>
          <p>
            Pick no tiene cuenta ni servidores nuestros: tu plan, tus preferencias, tu presupuesto y tus
            favoritos se guardan en tu dispositivo, y puedes borrarlos cuando quieras desde Ajustes &rarr;
            Borrar mis datos, o eliminando la app. Lo que sí recibimos son analíticas de uso anónimas, descritas
            al detalle en nuestra <a href="/pick/es/privacidad">Política de Privacidad</a>, que forma parte de
            estas condiciones.
          </p>

          <h2>9. Uso aceptable y propiedad intelectual</h2>
          <p>
            Te comprometes a usar Pick de forma lícita y a no utilizarla de un modo que infrinja derechos de
            terceros o interfiera en su funcionamiento. La marca, el diseño, el software, los textos de las
            recetas y las imágenes de Pick pertenecen a TREMPIDO SL o se usan bajo licencia y están protegidos
            por la normativa de propiedad intelectual.
          </p>

          <h2>10. Exención de garantías y limitación de responsabilidad</h2>
          <p>
            La app se ofrece &laquo;tal cual&raquo; y &laquo;según disponibilidad&raquo;, sin más garantías que
            las que no puedan excluirse por ley. En la máxima medida permitida por la ley, TREMPIDO SL no
            responde de los daños indirectos o consecuenciales derivados del uso de la app, incluida la
            confianza en precios estimados, información nutricional o filtros de alérgenos.{" "}
            <strong>Nada en estas condiciones limita ni excluye la responsabilidad que no pueda limitarse o
            excluirse legalmente</strong>, incluidos tus derechos como consumidor.
          </p>

          <h2>11. EULA del App Store — términos mínimos de Apple</h2>
          <p>
            Estas condiciones son un EULA propio e incorporan el{" "}
            <a href={APPLE_EULA} target="_blank" rel="noopener noreferrer">
              Contrato de licencia de usuario final de aplicación licenciada
            </a>{" "}
            de Apple como términos mínimos. Cuando estas condiciones sean menos restrictivas que los términos
            mínimos de Apple, o entren en conflicto con ellos, prevalecen los de Apple. Si has obtenido la app
            en el App Store de Apple, se aplica además lo siguiente:
          </p>
          <ul>
            <li>
              <strong>Partes.</strong> Este acuerdo se celebra únicamente entre tú y TREMPIDO SL, y no con
              Apple. Apple no es responsable de la app ni de su contenido.
            </li>
            <li>
              <strong>Alcance de la licencia.</strong> La licencia que se te concede es una licencia no
              transferible para usar la app en cualquier dispositivo de la marca Apple que poseas o controles,
              según permiten las Reglas de uso de los Términos y condiciones de Apple Media Services.
            </li>
            <li>
              <strong>Mantenimiento y soporte.</strong> TREMPIDO SL es la única responsable de prestar
              mantenimiento y soporte de la app. Apple no tiene ninguna obligación de prestar servicios de
              mantenimiento o soporte.
            </li>
            <li>
              <strong>Garantía.</strong> Si la app no cumple alguna garantía aplicable, puedes notificarlo a
              Apple y Apple te reembolsará el precio de compra de la app. En la máxima medida permitida por la
              ley aplicable, Apple no tendrá ninguna otra obligación de garantía respecto de la app.
            </li>
            <li>
              <strong>Reclamaciones sobre el producto.</strong> TREMPIDO SL, y no Apple, es responsable de
              atender cualquier reclamación relativa a la app o a tu posesión y uso de ella, incluidas las
              reclamaciones por responsabilidad del producto, las que aleguen que la app no cumple algún
              requisito legal o reglamentario y las derivadas de la normativa de protección del consumidor,
              privacidad o similar.
            </li>
            <li>
              <strong>Propiedad intelectual.</strong> Si un tercero reclama que la app o tu posesión y uso de
              ella infringen sus derechos de propiedad intelectual, TREMPIDO SL, y no Apple, será la única
              responsable de la investigación, defensa, acuerdo y resolución de esa reclamación.
            </li>
            <li>
              <strong>Cumplimiento legal.</strong> Declaras y garantizas que no te encuentras en un país sujeto
              a embargo del Gobierno de EE. UU. o designado como país &laquo;que apoya el terrorismo&raquo;, y
              que no figuras en ninguna lista del Gobierno de EE. UU. de partes prohibidas o restringidas.
            </li>
            <li>
              <strong>Tercero beneficiario.</strong> Apple y sus filiales son terceros beneficiarios de estas
              condiciones y, al aceptarlas tú, tienen derecho (y se considera que lo han aceptado) a hacerlas
              valer frente a ti como tercero beneficiario.
            </li>
            <li>
              <strong>Contacto.</strong> Las preguntas, quejas o reclamaciones sobre la app deben dirigirse a{" "}
              <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a>.
            </li>
          </ul>

          <h2>12. Ley aplicable</h2>
          <p>
            Estas condiciones se rigen por la ley española. Si eres consumidor, conservas la protección de las
            disposiciones imperativas de la ley de tu país de residencia y puedes acudir a los tribunales de tu
            domicilio. Los consumidores de la UE también pueden usar la{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              plataforma de resolución de litigios en línea
            </a>{" "}
            de la Comisión Europea.
          </p>

          <h2>13. Cambios y contacto</h2>
          <p>
            Podemos actualizar estas condiciones; la versión vigente se publica siempre en esta página con su
            fecha. Seguir usando la app tras un cambio implica que aceptas las condiciones actualizadas. Para
            cualquier cosa, escríbenos a <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a>.
          </p>
        </div>
      </section>
    </LegalChrome>
  )
}

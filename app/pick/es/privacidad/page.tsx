import type { Metadata } from "next"
import { PICK } from "@/lib/pick-content"
import { LegalChrome, LegalHeader } from "@/components/pick/chrome"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Pick: sin cuenta, tu plan se queda en tu iPhone y analíticas de uso anónimas alojadas en la Unión Europea.",
  alternates: {
    canonical: "/pick/es/privacidad",
    languages: {
      en: "https://www.trempido.com/pick/privacy",
      "es-ES": "https://www.trempido.com/pick/es/privacidad",
      "x-default": "https://www.trempido.com/pick/privacy",
    },
  },
}

export default function PrivacidadPage() {
  return (
    <LegalChrome lang="es">
      <LegalHeader lang="es" crumb="Privacidad" eyebrow="Legal" title="política de privacidad" />
      <section className="p-section p-section--tight">
        <div className="p-wrap p-prose">
          <p className="p-prose__meta">Última actualización: julio de 2026.</p>

          <div className="p-legal-card">
            <strong>La versión corta.</strong> Pick no tiene cuenta ni servidores propios. Tu plan de comidas,
            tus preferencias, tu presupuesto y tus favoritos se guardan solo en tu iPhone. Recogemos analíticas
            de uso anónimas para mejorar la app, y nunca vendemos ni cedemos tus datos personales.
          </div>

          <h2>1. Quiénes somos</h2>
          <p>
            Pick está publicada por <strong>TREMPIDO SL</strong> (NIF {PICK.company.taxId}),{" "}
            {PICK.company.address}. Para cualquier cuestión de privacidad, escribe a{" "}
            <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a>.
          </p>

          <h2>2. Datos guardados en tu dispositivo</h2>
          <p>
            Para funcionar, Pick guarda lo siguiente <strong>únicamente en local, en tu dispositivo</strong> (en
            el almacenamiento privado de la app): tu nombre (opcional), el supermercado elegido, para cuántas
            personas cocinas, los días que quieres cenar, el presupuesto semanal, tus preferencias de dieta, los
            alérgenos que excluyes, las proteínas que te gustan, tus electrodomésticos, el plan generado, la
            lista de la compra y tus favoritos. La copia principal de esta información vive solo en tu
            dispositivo: no tenemos sistema de cuentas y no podemos consultarla. Una parte de tus respuestas del
            onboarding se incluye en las analíticas anónimas del apartado 3.
          </p>

          <h2>3. Analíticas de uso</h2>
          <p>
            Para entender cómo se usa la app y mejorarla, Pick envía <strong>analíticas de uso anónimas</strong>{" "}
            a PostHog, un proveedor de analítica cuyos servidores para nuestro proyecto están en la{" "}
            <strong>Unión Europea</strong>. Incluyen eventos como qué pantallas se ven, las respuestas del
            onboarding (por ejemplo el supermercado elegido, el tamaño del hogar o las preferencias de dieta), la
            generación de planes y las compras, junto con un identificador generado aleatoriamente e información
            estándar del dispositivo (modelo, versión de iOS, versión de la app, idioma). También pueden
            grabarse repeticiones de sesión de la interacción dentro de la app, con los campos de texto y las
            imágenes enmascarados. Estos datos no están vinculados a tu nombre, tu correo ni a ninguna cuenta (no
            existen), y no los usamos para publicidad ni los vendemos a nadie.
          </p>

          <h2>4. Qué no recogemos</h2>
          <ul>
            <li>Ni cuenta, ni correo, ni contraseña.</li>
            <li>Ni ubicación precisa.</li>
            <li>Ni venta ni cesión de datos personales a anunciantes.</li>
            <li>Ni publicidad de terceros ni seguimiento entre apps.</li>
          </ul>

          <h2>5. Pagos</h2>
          <p>
            Las suscripciones y la prueba gratuita las procesa <strong>Apple</strong> a través del App Store.
            Nunca recibimos ni almacenamos tus datos de pago. Para validar las compras y gestionar el estado de
            la suscripción usamos <strong>RevenueCat</strong>, que recibe el recibo de compra del App Store y un
            identificador de usuario generado aleatoriamente, nunca tu nombre, tu correo ni tus datos de pago.
            El tratamiento que hace Apple de tus datos se rige por su política de privacidad, y el de RevenueCat
            por la suya.
          </p>

          <h2>6. Diagnósticos</h2>
          <p>
            Si lo tienes activado en iOS, Apple puede compartir con los desarrolladores diagnósticos estándar y
            anonimizados de fallos y rendimiento. Son datos agregados que no te identifican. Puedes desactivarlo
            en Ajustes de iOS &rarr; Privacidad y seguridad &rarr; Análisis y mejoras.
          </p>

          <h2>7. Esta web</h2>
          <p>
            Esta página está alojada en Vercel y usa analítica agregada y respetuosa con la privacidad (Vercel
            Analytics), que no utiliza cookies para identificarte personalmente. Mide visitas anónimas para
            entender el tráfico.
          </p>

          <h2>8. Tus derechos</h2>
          <p>
            Tu plan y tus preferencias viven en tu dispositivo y se eliminan al borrar la app (o desde Ajustes
            &rarr; Borrar mis datos, dentro de la app). Las analíticas se asocian a un identificador aleatorio y
            no a tu nombre ni a ninguna cuenta, así que en la mayoría de los casos no podemos vincular los
            registros contigo; si tienes cualquier duda o solicitud, escríbenos a{" "}
            <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a>. Si estás en la UE/EEE, tienes los
            derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición que reconoce el
            RGPD (Reglamento (UE) 2016/679), y puedes presentar una reclamación ante la Agencia Española de
            Protección de Datos (AEPD).
          </p>

          <h2>9. Menores</h2>
          <p>Pick no está dirigida a menores de 13 años y no recogemos sus datos conscientemente.</p>

          <h2>10. Cambios</h2>
          <p>
            Podemos actualizar esta política; la versión vigente se publica siempre aquí. Los cambios
            significativos se reflejarán en la fecha de &laquo;última actualización&raquo; de arriba.
          </p>
        </div>
      </section>
    </LegalChrome>
  )
}

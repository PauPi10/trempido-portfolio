"use client"

import { useLanguage } from "@/lib/language-context"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqKeys = [
  { q: "umi.faq.q1", a: "umi.faq.a1" },
  { q: "umi.faq.q2", a: "umi.faq.a2" },
  { q: "umi.faq.q3", a: "umi.faq.a3" },
  { q: "umi.faq.q4", a: "umi.faq.a4" },
  { q: "umi.faq.q5", a: "umi.faq.a5" },
  { q: "umi.faq.q6", a: "umi.faq.a6" },
  { q: "umi.faq.q7", a: "umi.faq.a7" },
] as const

export function UmiFaq() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
          {t("umi.faq.title")}
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqKeys.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-amber-50/50 border border-amber-100 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-neutral-900 font-medium hover:no-underline py-5">
                {t(faq.q)}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600 leading-relaxed pb-5">
                {t(faq.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

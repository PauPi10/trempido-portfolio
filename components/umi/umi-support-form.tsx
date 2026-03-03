"use client"

import React, { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function UmiSupportForm() {
  const { t } = useLanguage()
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="support" className="py-20 px-6 bg-[var(--umi-cream)]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t("umi.support.title")}
          </h2>
          <p className="text-lg text-neutral-600">
            {t("umi.support.sub")}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-amber-100 border border-amber-100">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                {t("umi.support.sent.title")}
              </h3>
              <p className="text-neutral-600 mb-6">
                {t("umi.support.sent.text")}
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="border-amber-200 hover:bg-amber-50"
              >
                {t("umi.support.sent.another")}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-neutral-700 font-medium">
                  {t("umi.support.name")}
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("umi.support.name.ph")}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="h-12 rounded-xl border-neutral-200 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-neutral-700 font-medium">
                  {t("umi.support.email")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="h-12 rounded-xl border-neutral-200 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-neutral-700 font-medium">
                  {t("umi.support.message")}
                </Label>
                <Textarea
                  id="message"
                  placeholder={t("umi.support.message.ph")}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={5}
                  className="rounded-xl border-neutral-200 focus:border-amber-400 focus:ring-amber-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-[var(--umi-yellow)] hover:bg-amber-400 text-neutral-900 h-14 rounded-xl text-lg shadow-lg shadow-amber-200 font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-neutral-900/30 border-t-neutral-900 rounded-full animate-spin mr-2" />
                    {t("umi.support.sending")}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t("umi.support.send")}
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

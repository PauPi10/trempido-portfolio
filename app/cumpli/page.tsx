"use client"

import React from "react"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Bell, Calendar, Gift, Heart, Users, ChevronRight, Send, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function CumpliPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBF5]/80 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
          <div className="flex items-center gap-3">
            <Image
              src="/images/chatgpt-20image-2028-20de-20gen.png"
              alt="Cumpli"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="font-semibold text-neutral-900">Cumpli</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/cumpli/privacy" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              Privacidad
            </Link>
            <Link href="/cumpli/terms" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              Terminos
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            Disponible pronto en iOS
          </div>
          
          <div className="mb-8">
            <Image
              src="/images/chatgpt-20image-2028-20de-20gen.png"
              alt="Cumpli App Icon"
              width={120}
              height={120}
              className="mx-auto rounded-3xl shadow-2xl shadow-amber-200"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 text-balance">
            Nunca olvides un cumpleaños
          </h1>
          
          <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Cumpli te ayuda a recordar los cumpleaños de todos tus seres queridos. 
            Recibe notificaciones a tiempo y nunca más te pierdas una fecha importante.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-amber-200"
              disabled
            >
              <Bell className="w-5 h-5 mr-2" />
              Proximamente en App Store
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Todo lo que necesitas para no olvidar
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Funciones pensadas para que celebrar cumpleaños sea facil y divertido
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <Bell className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Recordatorios Inteligentes</h3>
              <p className="text-neutral-600 leading-relaxed">
                Recibe notificaciones dias antes del cumpleaños para que tengas tiempo de preparar algo especial.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
              <div className="w-14 h-14 bg-rose-500 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Calendario Visual</h3>
              <p className="text-neutral-600 leading-relaxed">
                Visualiza todos los cumpleaños del mes de un vistazo con nuestro calendario intuitivo.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-100">
              <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Organiza por Grupos</h3>
              <p className="text-neutral-600 leading-relaxed">
                Agrupa a tus contactos por familia, amigos, trabajo y mas para una mejor organizacion.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Gift className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Ideas de Regalos</h3>
              <p className="text-neutral-600 leading-relaxed">
                Guarda notas e ideas de regalos para cada persona y nunca te quedes sin inspiracion.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-100">
              <div className="w-14 h-14 bg-violet-500 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Privacidad Total</h3>
              <p className="text-neutral-600 leading-relaxed">
                Tus datos se quedan en tu dispositivo. No recopilamos ni compartimos informacion personal.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
              <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <ChevronRight className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Facil de Usar</h3>
              <p className="text-neutral-600 leading-relaxed">
                Interfaz simple e intuitiva. Anade cumpleaños en segundos y deja que Cumpli haga el resto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Form Section */}
      <section id="support" className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Contacta con Soporte
            </h2>
            <p className="text-lg text-neutral-600">
              Tienes alguna pregunta, sugerencia o problema? Estamos aqui para ayudarte.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-amber-100 border border-amber-100">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Mensaje enviado</h3>
                <p className="text-neutral-600 mb-6">
                  Gracias por contactarnos. Te responderemos lo antes posible.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                  className="border-amber-200 hover:bg-amber-50"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-neutral-700 font-medium">Nombre</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="h-12 rounded-xl border-neutral-200 focus:border-amber-400 focus:ring-amber-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-neutral-700 font-medium">Email</Label>
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
                  <Label htmlFor="message" className="text-neutral-700 font-medium">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe tu consulta, sugerencia o problema..."
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
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white h-14 rounded-xl text-lg shadow-lg shadow-amber-200"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-white border-t border-amber-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/chatgpt-20image-2028-20de-20gen.png"
                alt="Cumpli"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold text-neutral-900">Cumpli</span>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/cumpli/privacy" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Politica de Privacidad
              </Link>
              <Link href="/cumpli/terms" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Terminos de Uso
              </Link>
              <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Mas Apps
              </Link>
            </div>

            <p className="text-sm text-neutral-500">
              2026 Pau Pidelaserra
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

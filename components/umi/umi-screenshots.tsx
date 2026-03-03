"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const screenshots = [
  "/images/umi/screenshot-1.png",
  "/images/umi/screenshot-2.png",
  "/images/umi/screenshot-3.png",
  "/images/umi/screenshot-4.png",
]

export function UmiScreenshots() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-6 bg-[var(--umi-cream)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
          {t("umi.screenshots.title")}
        </h2>

        <Carousel
          opts={{ align: "center", loop: true }}
          className="mx-auto max-w-xs sm:max-w-md"
        >
          <CarouselContent>
            {screenshots.map((src, i) => (
              <CarouselItem key={i}>
                <div className="relative mx-auto w-[240px] sm:w-[280px]">
                  {/* Phone frame */}
                  <div className="rounded-[2.5rem] border-[8px] border-neutral-900 bg-neutral-900 shadow-2xl overflow-hidden">
                    <Image
                      src={src}
                      alt={`Umi screenshot ${i + 1}`}
                      width={280}
                      height={607}
                      className="w-full h-auto rounded-[2rem]"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-amber-200 text-neutral-600 hover:bg-amber-50 -left-12" />
          <CarouselNext className="border-amber-200 text-neutral-600 hover:bg-amber-50 -right-12" />
        </Carousel>
      </div>
    </section>
  )
}

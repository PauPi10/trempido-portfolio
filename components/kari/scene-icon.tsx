/* Renders a roleplay scene icon by name — the same Lucide icons the app
   uses in RoleplayCatalog.swift (lucide-martini, lucide-coffee, …). */

import {
  Martini,
  Coffee,
  HeartCrack,
  CloudRain,
  Briefcase,
  TrendingUp,
  OctagonX,
  Coins,
  Gem,
  Scissors,
  ToyBrick,
  House,
  Volume2,
  Receipt,
  Footprints,
  CarTaxiFront,
  HandHeart,
  Soup,
  PhoneCall,
  Timer,
  Sparkles,
} from "lucide-react"

const ICONS = {
  Martini,
  Coffee,
  HeartCrack,
  CloudRain,
  Briefcase,
  TrendingUp,
  OctagonX,
  Coins,
  Gem,
  Scissors,
  ToyBrick,
  House,
  Volume2,
  Receipt,
  Footprints,
  CarTaxiFront,
  HandHeart,
  Soup,
  PhoneCall,
  Timer,
} as const

export function SceneIcon({ name, size = 20 }: { name: string; size?: number }) {
  const Icon = ICONS[name as keyof typeof ICONS] ?? Sparkles
  return <Icon size={size} strokeWidth={2.1} aria-hidden="true" />
}

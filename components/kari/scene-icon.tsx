/* Renders a roleplay scene icon using the app's own pre-rendered art
   (Assets.xcassets rpg-*.imageset), not generic stroke icons. */

import Image from "next/image"

export function SceneIcon({ name, size = 20, alt = "" }: { name: string; size?: number; alt?: string }) {
  return (
    <Image
      src={`/images/kari/rpg/rpg-${name}.png`}
      alt={alt}
      width={size}
      height={size}
      style={{ borderRadius: size >= 40 ? 10 : 6 }}
    />
  )
}

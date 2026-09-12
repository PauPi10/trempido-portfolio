/* Renders a roleplay scene icon using the app's own pre-rendered art
   (Assets.xcassets rpg-*.imageset), not generic stroke icons.
   Icons sit next to the scene title, so by default they are decorative:
   alt="" plus aria-hidden keeps them out of screen readers and lets
   crawlers know the text carries the meaning. Pass `alt` to make one
   informative. */

import Image from "next/image"

export function SceneIcon({ name, size = 20, alt = "" }: { name: string; size?: number; alt?: string }) {
  return (
    <Image
      src={`/images/kari/rpg/rpg-${name}.png`}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      width={size}
      height={size}
      style={{ borderRadius: size >= 40 ? 10 : 6 }}
    />
  )
}

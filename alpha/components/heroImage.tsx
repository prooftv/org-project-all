/* eslint indent: "off" */
import { FC, useCallback, useEffect, useState } from "react"
import { urlFor } from "lib/utils"
import { Image } from "lib/interfaces"
import s from "styles/heroImage.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  alt: string
  image: Image
}

export const HeroImage: FC<Props> = ({ alt, image }) => {
  const [loaded, setLoaded] = useState(false)
  const onLoad = useCallback(() => {
    setLoaded(true)
  }, [])
  useEffect(() => {
    setLoaded(true)
  }, [loaded, onLoad])
  const hotspot = image.hotspot
  const position = hotspot
    ? `${Math.round(hotspot.x * 100)}% ${Math.round(hotspot.y * 100)}%`
    : "50% 50%"
  return (
    <div className={`${u.relative}`}>
      <div className={`${s.imageContainer} ${u.relative}`}>
        <img
          onLoad={onLoad}
          loading="eager"
          className={`
            ${s.image} ${loaded ? s.loaded : null} ${u.relative} ${u.cover}
          `}
          alt={alt}
          src={urlFor(image)
            .width(1600)
            .height(450)
            .auto("format")
            .quality(75)
            .url()}
          srcSet={
            `${urlFor(image)
              .width(400)
              .height(350)
              .auto("format")
              .quality(70)
              .url()} 400w,
            ${urlFor(image)
              .width(800)
              .height(700)
              .auto("format")
              .quality(70)
              .url()} 800w,
            ${urlFor(image)
              .width(1200)
              .height(667)
              .auto("format")
              .quality(70)
              .url()} 1200w,
            ${urlFor(image)
              .width(1620)
              .height(900)
              .auto("format")
              .quality(70)
              .url()} 1620w,
            ${urlFor(image)
              .width(1620)
              .height(900)
              .auto("format")
              .quality(70)
              .url()} 1620w,
            ${urlFor(image)
              .width(2000)
              .height(900)
              .auto("format")
              .quality(70)
              .url()} 2000w,
            ${urlFor(image)
              .width(2500)
              .height(900)
              .auto("format")
              .quality(70)
              .url()} 2500w,
            ${urlFor(image)
              .width(3000)
              .height(900)
              .auto("format")
              .quality(70)
              .url()} 3000w,
            ${urlFor(image)
              .width(3500)
              .height(900)
              .auto("format")
              .quality(70)
              .url()} 3500w,
            ${urlFor(image)
              .width(4000)
              .height(900)
              .auto("format")
              .quality(70)
              .url()} 4000w,
            ${urlFor(image)
              .width(5000)
              .height(900)
              .auto("format")
              .quality(70)
              .url()} 5000w
          `}
          width={1600}
          height={450}
          style={{
            objectPosition: position
          }}
        />
      </div>
      <div className={`${s.placeholderContainer} ${u.absolute}`}>
        <img
          src={urlFor(image)
            .width(10)
            .height(10)
            .auto("format")
            .quality(5)
            .url()}
          alt=""
          className={`${s.placeholder} ${u.relative} ${u.cover}`}
          width={1600}
          height={450}
          loading="eager"
          style={{
            objectPosition: position
          }}
        />
      </div>
    </div>
  )
}
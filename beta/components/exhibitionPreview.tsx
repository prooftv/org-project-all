import { FC } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { urlFor } from "@/lib/utils"
import ExhibitionDate from "components/exhibitionDate"
import Link from "components/link"
import Localize from "components/localize"
import { ExhibitionPreviewProps } from "lib/interfaces"

const ExhibitionPrieview: FC<ExhibitionPreviewProps> = ({
  exhibition, heading
}) => {
  const { locale } = useRouter()
  return (
    <div className="exhibitionPreview">
      {heading ?
        <p>{heading}</p> : <p dangerouslySetInnerHTML={{__html: "&nbsp;"}}/>
      }
      <Link href={`/exhibitions/${exhibition.slug.en.current}`}>
        <Image
          src={urlFor(exhibition.mainImage)
            .width(624)
            .height(624)
            .auto("format")
            .quality(75)
            .url()}
          alt={
            locale === "cy" && exhibition.title.cy
              ? exhibition.title.cy
              : exhibition.title.en
          }
          width={2000}
          height={2000}
        />
        {exhibition &&
          <div className="gridCaption">
            <Localize data={exhibition.title} />
          </div>
        }
        {exhibition && (
          <div className="gridCaption">
            <span>
              <ExhibitionDate
                dateEnd={exhibition.dateEnd}
                dateStart={exhibition.dateStart}
              />
            </span>
          </div>
        )}
      </Link>
    </div>
  )
}
export default ExhibitionPrieview
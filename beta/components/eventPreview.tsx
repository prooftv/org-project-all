import { FC } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { urlFor } from "@/lib/utils"
import Link from "components/link"
import Localize from "components/localize"
import PostDate from "components/postDate"
import { EventPreviewProps } from "lib/interfaces"

const EventPreview: FC<EventPreviewProps> = ({
  heading, eventData, marginTop, grid
}) => {
  const { locale } = useRouter()
  return (
    <>
      <div className="sidebarContainer" style={marginTop}>
        <div className="portableContainer">
          <p>{heading}</p>
        </div>
      </div>
      <div className={grid}>
        {eventData.map(event => (
          <Link
            href={`/events/${event.slug.en.current}`}
            key={event._id}
            style={{ margin: 0 }}
          >
            <Image
              src={urlFor(event.mainImage)
                .width(468)
                .height(468)
                .auto("format")
                .quality(75)
                .url()}
              alt={
                locale === "cy" && event.title.cy
                  ? event.title.cy
                  : event.title.en
              }
              width={2000}
              height={2000}
            />
            <div className="gridCaption">
              {event.title && <Localize data={event.title} />}
            </div>
            <div className="gridCaption">
              {event.date && <PostDate date={event.date} />}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
export default EventPreview
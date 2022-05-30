import { FC, MouseEventHandler } from "react"
import { useRouter } from "next/router"
import { localize, urlFor } from "lib/utils"
import { Artwork } from "lib/interfaces"
import s from "styles/artist.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  modal: boolean
  modalImage: Artwork | Record<string, never>
  closeModal: MouseEventHandler<HTMLDivElement>
  prevIndex: MouseEventHandler<HTMLDivElement>
  nextIndex: MouseEventHandler<HTMLDivElement>
}

export const Modal: FC<Props> = ({
  modal, modalImage, closeModal, prevIndex, nextIndex
}) => {
  const { locale } = useRouter()
  // const aspect = modalImage.aspect
  // const imageAspect = {
  //   aspectRatio: aspect,
  //   height: `${aspect >= 1 ? "min(81vh, 51vw)" : "unset"}`,
  //   width: `${aspect < 1 ? "min(57vh, -4rem + 100vw)" : "unset"}`
  // } as CSSProperties
  return (
    <div className={`${s.modalContainer} ${modal ? null : s.hideModal} ${u.flex} ${u.fixed}`}>
      <div className={`${s.btnPrev} ${u.absolute} ${u.pointer}`} onClick={prevIndex}>
        <img
          alt="Previous"
          src="data:image/svg+xml,%3Csvg viewBox='0 0 54 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.15 52.05l48.1 48.1c.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0L.75 53.45c-.8-.8-.8-2.1 0-2.9L50.35.95c.8-.8 2.1-.8 2.9 0 .8.8.8 2.1 0 2.9l-48.1 48.1v.1z' fill='%234C4C4C'/%3E%3C/svg%3E"
          loading="lazy"
        />
      </div>
      <div className={`${s.btnNext} ${u.absolute} ${u.pointer}`} onClick={nextIndex}>
        <img
          alt="Next"
          src="data:image/svg+xml,%3Csvg viewBox='0 0 54 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48.85 52.05l-48.1 48.1c-.8.8-.8 2.1 0 2.9.8.8 2.1.8 2.9 0l49.6-49.6c.8-.8.8-2.1 0-2.9L3.65.95c-.8-.8-2.1-.8-2.9 0-.8.8-.8 2.1 0 2.9l48.1 48.1v.1z' fill='%234C4C4C'/%3E%3C/svg%3E"
        />
      </div>
      <div className={`${s.handleClose} ${u.absolute}`} onClick={closeModal}></div>
      <div className={`${s.modalClose} ${u.absolute} ${u.pointer}`} onClick={closeModal}>
        <img
          alt="Close lightbox"
          src="data:image/svg+xml,%3Csvg viewBox='0 0 104 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M49.104 51.877L.949 3.722c-.8-.8-.8-2.1 0-2.9.8-.8 2.1-.8 2.9 0l48.1 48.1h.1l48.1-48.1c.8-.8 2.1-.8 2.9 0 .8.8.8 2.1 0 2.9L54.928 51.843l48.155 48.155c.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0l-48.1-48.1h-.1l-48.1 48.1c-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9l48.121-48.121z' fill='%234C4C4C'/%3E%3C/svg%3E"
        />
      </div>
      <div className={`${s.modalImageContiner} ${u.mAuto}`}>
        <div className={`${s.modalImageWrapper} ${u.relative}`}>
          <img
            src={urlFor(modalImage.mainImage)
              .width(893)
              .auto("format")
              .quality(75)
              .url()}
            alt={`
              ${modalImage.artist}${", "}
              ${modalImage.title}${", "}
              ${modalImage.date}
            `}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }}
          />
        </div>
        <p className={`${s.modalCaption} ${u.textRight}`}>
          <em>{modalImage.title && localize(modalImage.title, locale)}</em>,
          {" "}{modalImage.artist}
        </p>
        <p className={`${s.modalCaption} ${u.textRight}`}>
          {modalImage.medium && localize(modalImage.medium, locale)},
          {" "}{modalImage.price}
        </p>
      </div>
    </div>
  )
}

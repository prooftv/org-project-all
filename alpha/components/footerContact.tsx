import { FC } from "react"
import { useRouter } from "next/router"
import { LocaleString, Organisation, Settings } from "lib/interfaces"
import s from "styles/layout.module.scss"

interface Props {
  label: LocaleString
  organisation: Organisation
  settings: Settings
}

export const FooterContact: FC<Props> = ({ label, organisation, settings }) => {
  const { locale } = useRouter()
  const year = new Date().getFullYear()
  return (
    <div>
      <p className={`${s.footerText}`}>
        <b>{label[locale]}<br /></b>
        {organisation.opening[locale]}
      </p>
      <p className={`${s.footerText}`}>
        <b>{settings.title[locale]}</b><br />
        {organisation.address.town}<br />
        {organisation.address.county}{" "}{organisation.address.postcode}
      </p>
      <p className={`${s.footerText}`}>
        {organisation.telephone}<br />
        <a href={`mailto:${organisation.email}`} className={`${s.footerLink}`}>
          <b>{organisation.email}</b>
        </a>
      </p>
      <p className={`${s.footerText} ${s.copy}`}>
        &copy;{" "}{settings.title[locale]}{" "}{year}
      </p>
    </div>
  )
}

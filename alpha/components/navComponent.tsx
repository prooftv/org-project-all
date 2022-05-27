import { FC } from "react"
import { useState } from "react"
import { useRouter } from "next/router"
import { Language } from "components/language"
import { LinkTo } from "components/linkTo"
import { Label, Navigation, PageContext } from "lib/interfaces"
import s from "styles/layout.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
  navigation: Navigation[]
  pageContext: PageContext
}

// TODO: change icons to svg
export const NavComponent: FC<Props> = ({ labels, navigation, pageContext }) => {
  const router = useRouter()
  const { locale } = router
  const [isActive, setActive] = useState(false)
  const menuOpen = () => {
    setActive(true)
  }
  const menuClose = () => {
    setActive(false)
  }
  let align = { right: "calc(50% - 27rem)" }
  if (locale === "cy") align = { right: "calc(50% - 35.5rem)" }
  return (
    <nav
      className={`${s.menuOverlay} ${u.absolute}`}
      onClick={isActive ? menuClose : null}
    >
      <div
        className={`${s.headerMenu} ${isActive ? s.isActive : null} ${u.fixed}`}
      >
        <ul style={align}>
          {navigation.map(item => (
            <li key={item._key}>
              <LinkTo href={`/${item.slug[locale].replace("index", "")}`}>
                {item.label[locale]}
              </LinkTo>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div
          className={`${s.hamburgerContainer} ${u.pointer}`}
          onClick={isActive ? menuClose : menuOpen}
        >
          <span className={`${u.srOnly}`}>{labels[1].text[locale]}</span>
          <div
            className={`${s.hamburger} ${isActive ? s.active : null} ${u.relative}`}
          ></div>
        </div>
        <Language pageContext={pageContext} />


      </div>
    </nav>
  )
}

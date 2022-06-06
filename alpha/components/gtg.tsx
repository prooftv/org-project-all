import { useRouter } from "next/router"
import s from "styles/footer.module.scss"

export const GTG = () => {
  const { locale } = useRouter()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 57"
      className={`${s.funderLogo}`}
    >
      <title>{locale === "cy"
        ? "Logo Mae'n Dda i Ni Fynd"
        : "We're Good To Go Logo"
      }</title>
      <path d="M25.34 56.46c-.02.26-.14.38-.46.37l-.03-.1c.28.01.35-.06.37-.26v-.04a.34.34 0 01-.27.1c-.17 0-.3-.15-.28-.45.02-.3.18-.46.36-.44.1 0 .18.05.23.13l.01-.1h.12l-.05.8zm1.82.13h-.12v-.5c.01-.2-.05-.28-.2-.28-.11 0-.2.07-.21.26v.51h-.13l.01-.87h.12v.11a.28.28 0 01.24-.12c.19 0 .3.11.3.36v.53zm1.2-.26c0 .17-.13.25-.28.26a.48.48 0 01-.31-.1l.07-.1c.07.06.15.1.23.1.12-.01.18-.06.17-.15 0-.07-.05-.1-.2-.17-.18-.06-.25-.11-.26-.25 0-.13.1-.23.26-.23.12 0 .22.03.28.08l-.06.1a.3.3 0 00-.22-.08c-.1 0-.14.05-.14.11 0 .08.05.1.2.17.16.06.26.1.26.26zm-.8.25h-.12v-.86h.11l.02.86zm-1.33 0h-.13v-.11a.36.36 0 01-.27.11c-.13 0-.27-.08-.26-.29 0-.19.17-.27.34-.26.09 0 .16.03.21.06v-.1c.01-.13-.05-.2-.17-.2a.45.45 0 00-.24.05l-.04-.1a.6.6 0 01.29-.06c.18.01.3.1.29.3l-.02.6zm3-.07h-.13v-.1a.36.36 0 01-.27.14c-.13.01-.28-.05-.3-.26 0-.2.15-.28.32-.3.09 0 .17.02.22.04v-.1c-.02-.13-.08-.19-.2-.18-.1 0-.17.04-.24.08l-.05-.1a.63.63 0 01.29-.08c.18-.01.3.06.31.26l.04.6zm.57-.81l-.22.02.05.56c0 .07.03.1.1.1l.12-.04v.1a.4.4 0 01-.16.05c-.1 0-.17-.04-.18-.18l-.05-.58h-.1l-.02-.1h.11l-.02-.27.12-.08.02.33.22-.01v.1zm-3.69.66v-.17a.41.41 0 00-.21-.06c-.13 0-.2.05-.2.16-.01.13.05.19.16.2a.3.3 0 00.25-.13zm-1.5-.73l-.04.12a.26.26 0 00-.12-.05c-.12 0-.2.08-.21.25l-.05.5h-.12l.08-.87.12.01-.01.1a.25.25 0 01.22-.1l.14.04zm4.48.67l-.02-.17a.42.42 0 00-.22-.04c-.13.01-.2.08-.2.19.02.13.1.18.2.17a.3.3 0 00.24-.14zm1.14.12l-.12.01-.1-.86.13-.01.1.86zm-5-.1l.03-.43a.28.28 0 00-.23-.15c-.14 0-.22.11-.24.34-.01.22.06.34.2.35.1 0 .17-.04.24-.11zm-1.34-.47c-.04.34-.27.56-.55.53-.28-.04-.44-.3-.4-.65.04-.34.26-.56.55-.53.28.04.44.3.4.65zm7.25.02c.04.29-.1.47-.31.5-.21.02-.4-.11-.43-.4-.04-.3.11-.47.32-.5.21-.02.39.1.42.4zm.95.3l-.12.01-.08-.5c-.03-.18-.1-.25-.24-.23-.12.02-.2.11-.17.3l.08.5-.13.02-.13-.86.12-.02.02.1a.28.28 0 01.22-.15c.18-.03.31.06.35.3l.08.52zm-8.33-.34c.04-.28-.1-.49-.29-.51-.2-.03-.37.14-.4.43-.04.28.09.49.29.51.2.03.37-.14.4-.43zm7.26.06c-.03-.23-.14-.33-.29-.31-.15.02-.23.14-.2.37.02.22.14.33.29.3.14-.01.23-.14.2-.36zm-8.65-.43l-.21-.04-.1.56c0 .07.01.1.08.11a.3.3 0 00.12 0l-.03.1a.38.38 0 01-.16 0c-.1-.01-.15-.07-.13-.21l.1-.58-.1-.02.01-.1.1.02.05-.26.13-.05-.05.33.2.03v.1zm10.47.33c.04.17-.1.27-.24.3a.48.48 0 01-.32-.05l.05-.1c.08.04.17.06.25.04.12-.02.16-.08.15-.16-.01-.07-.07-.1-.23-.14-.19-.03-.27-.07-.3-.21-.02-.13.07-.24.23-.27.11-.02.21 0 .29.04l-.05.1a.31.31 0 00-.23-.03c-.09.01-.13.07-.12.13.01.07.06.1.22.13.17.04.28.07.3.22zm-11.13.1c-.03.16-.2.2-.34.18a.48.48 0 01-.28-.17l.09-.07c.06.07.13.12.21.14.12.02.19-.02.2-.1.01-.07-.03-.12-.17-.21-.15-.1-.21-.17-.19-.31.03-.13.15-.2.3-.17.12.03.2.08.26.15l-.08.07a.31.31 0 00-.2-.11c-.09-.02-.15.01-.16.07-.02.08.02.11.15.2.15.1.24.17.2.33zm-.84.06l-.12-.02.18-.85.12.02-.18.85zm13.24-.65c.07.28-.06.48-.26.53-.2.04-.4-.07-.46-.36-.07-.28.06-.47.26-.52.2-.05.4.06.46.35zm-13.37-.25l-.06.11a.24.24 0 00-.11-.06c-.12-.03-.21.05-.25.21l-.11.5-.12-.03.2-.84.11.02-.02.1c.05-.05.15-.09.24-.06.06 0 .1.03.12.05zm13.26.28c-.06-.22-.18-.31-.33-.28-.14.04-.22.17-.16.4.05.21.17.3.32.27.14-.03.22-.17.16-.4zm-14.18.38l-.12-.03.02-.1a.28.28 0 01-.26.06c-.17-.05-.26-.18-.2-.42l.13-.51.12.03-.13.49c-.04.18 0 .28.13.31.12.03.23-.02.28-.2l.12-.5.12.04-.21.83zm14.7-1.16h-.11c-.05.02-.08.04-.06.11l.03.13.16-.05.03.1-.17.05.2.73-.12.04-.2-.74-.11.03-.03-.1.12-.03-.03-.12c-.04-.15.03-.22.14-.25.05-.02.08-.02.11-.02l.03.12zm-6.94.92c0 .05-.04.09-.09.1a.09.09 0 01-.09-.1c0-.04.04-.08.09-.08.05 0 .09.03.09.08zm-8.5-.4c-.08.28-.3.39-.5.33s-.3-.26-.22-.54c.08-.28.28-.38.49-.32.2.06.31.25.23.53zm11.06.24c0 .05-.03.1-.07.1a.09.09 0 01-.1-.08c0-.05.03-.1.08-.1.04 0 .09.03.1.08zm5.94-.6c.1.31-.04.52-.27.59-.27.08-.52-.1-.62-.43-.1-.33.01-.63.28-.7a.42.42 0 01.4.06l-.07.1c-.1-.07-.18-.1-.3-.06-.2.06-.27.29-.19.56.09.27.29.41.47.36.18-.06.25-.2.18-.42v-.01l-.2.06-.03-.11.32-.1.03.1zm-17.12.33c.06-.22 0-.36-.15-.4-.14-.04-.27.04-.33.25-.07.22 0 .36.14.4.14.05.28-.04.34-.25zm-.41-.75l-.33-.1-.31.98-.12-.04.31-.99-.32-.1.03-.11.77.25-.03.1zm18.05-.17v.13h-.12c-.12.04-.15.16-.1.31l.16.49-.11.04-.28-.83.12-.03.03.1a.26.26 0 01.16-.2c.06-.01.1-.02.14-.01zm-15.47.75a.09.09 0 01-.1.07.09.09 0 01-.08-.1.09.09 0 01.11-.07c.05 0 .08.05.07.1zm16.36-.64l.02.06-.54.2c.07.17.2.25.33.2.1-.04.14-.08.2-.16l.08.06a.51.51 0 01-.26.2c-.15.06-.37.02-.48-.3-.1-.26-.01-.47.18-.55.21-.07.39.05.47.29zm-20.64.58l-.11-.04.38-1.06.14-.03-.4 1.13zm-.38-.13l-.11-.05.04-.1a.36.36 0 01-.3.02c-.13-.05-.23-.16-.16-.36.07-.18.25-.2.41-.14.08.04.15.08.18.13l.04-.1c.05-.12.01-.2-.1-.24a.45.45 0 00-.25-.03v-.1c.08-.02.19 0 .3.03.17.07.25.19.17.37l-.22.57zm21.96-.33l-.11.04-.04-.1a.35.35 0 01-.2.22c-.13.05-.29.04-.37-.16-.07-.18.05-.31.2-.38a.45.45 0 01.23-.03l-.04-.1c-.05-.11-.13-.15-.25-.1a.45.45 0 00-.2.15l-.07-.08a.64.64 0 01.24-.17c.18-.07.31-.04.39.15l.22.56zm-22 .08l.07-.16a.41.41 0 00-.2-.13c-.1-.04-.2-.01-.24.09-.05.12 0 .2.1.23.1.04.2.02.28-.03zm21.8-.24l-.06-.16c-.06 0-.12 0-.22.04-.12.05-.17.13-.13.23.05.12.14.15.23.1a.3.3 0 00.19-.2zm-.86.04c-.07-.15-.17-.24-.32-.18-.12.04-.17.16-.12.34l.44-.16zm-21.72.12l-.12-.05.2-.47c.07-.17.04-.27-.08-.33-.11-.04-.23 0-.3.17l-.2.47-.12-.05.34-.8.11.05-.04.1a.28.28 0 01.27-.02c.17.07.24.21.14.44l-.2.49zm23.07-.96l-.2.09.23.52c.03.07.06.08.12.06a.28.28 0 00.1-.07l.04.1a.39.39 0 01-.14.09c-.1.04-.17.01-.23-.12l-.23-.53-.1.04-.04-.1.1-.04-.1-.24.08-.12.14.31.2-.08.03.1zm-23.71.2c-.13.27-.35.35-.54.26-.19-.08-.27-.3-.15-.56.12-.27.34-.34.53-.25.2.09.28.3.16.56zm25.2-.42c.1.2.02.36-.2.47l-.37.18-.5-1.04.38-.19c.17-.08.32-.05.4.13.06.11.03.2-.04.28.1-.02.24 0 .32.17zm-25.32.38c.1-.2.05-.35-.08-.41-.14-.07-.28 0-.37.2-.1.2-.06.36.08.42s.28 0 .37-.21zm25.2-.32c-.06-.13-.18-.16-.32-.1l-.26.12.2.4.26-.12c.16-.08.18-.18.12-.3zm-26.16.35l-.1-.06.37-.77.11.05-.38.78zm.02-.84l-.2-.1-.25.5c-.04.07-.03.1.03.13.04.03.08.03.12.04l-.06.09a.39.39 0 01-.15-.05c-.1-.05-.12-.12-.06-.25l.27-.52-.1-.05.05-.09.1.05.11-.24h.15l-.16.3.2.1-.05.09zm26.63-.35l.03.13c-.04 0-.08 0-.13.03-.11.05-.13.17-.05.32l.23.45-.1.05-.4-.77.1-.05.06.1c0-.09.05-.17.13-.22.06-.03.1-.04.13-.04zm-.77.39c-.04-.1-.13-.13-.24-.08l-.26.13.15.32.25-.12c.13-.06.15-.16.1-.25zm-26.78.34l-.1-.06.04-.09a.35.35 0 01-.3-.02c-.11-.06-.2-.19-.1-.37.09-.17.27-.17.42-.09.08.04.13.1.17.15l.04-.1c.07-.1.04-.2-.07-.25a.45.45 0 00-.24-.05v-.11a.6.6 0 01.3.07c.16.1.23.22.13.4l-.29.52zM41.27 53l-.11.06-.41-.77.1-.05.42.76zm-28.24-.12l.08-.16a.41.41 0 00-.17-.15c-.11-.06-.21-.04-.26.06-.06.1-.03.2.06.24.1.06.2.05.29 0zm28.43-.86l-.18.1.27.5c.04.06.07.08.13.04a.3.3 0 00.1-.08l.04.1a.39.39 0 01-.13.1c-.1.06-.17.04-.24-.09l-.28-.5-.1.05-.05-.1.1-.05-.13-.23.07-.12.17.3.18-.11.05.09zm-29.95.24l.59-1 .1.07.03.95v.17l.48-.82.1.06-.58 1-.1-.07-.04-.93v-.17l-.47.8-.1-.06zm2.93.34a.09.09 0 01-.16-.08.09.09 0 01.12-.04c.05.02.06.07.04.12zm29.68-19.88a18.45 18.45 0 01-18.3 11.97 18.3 18.3 0 01-16.2-12.17l-7.45 2.64a26.2 26.2 0 0039.26 13.09 26.44 26.44 0 0010.11-12.8l-7.42-2.73zm-1.57 19.54l-.1.07-.06-.1a.35.35 0 01-.17.25c-.11.07-.27.08-.38-.1-.1-.17 0-.32.15-.4a.46.46 0 01.2-.07l-.04-.1c-.07-.1-.15-.12-.26-.06a.45.45 0 00-.17.18l-.1-.07a.6.6 0 01.22-.2c.16-.1.3-.09.4.08l.31.52zm-.21-.12l-.09-.15a.42.42 0 00-.22.07c-.1.07-.14.16-.08.25.06.11.15.13.24.07a.3.3 0 00.15-.24zm-1.57-.13c.02.04 0 .1-.04.12-.04.02-.1 0-.12-.04a.1.1 0 01.04-.12c.04-.02.1 0 .12.04zm2.12.04l-.1.07-.46-.73.1-.07.46.73zm.8-.51l-.1.07-.28-.42c-.1-.16-.2-.2-.32-.12-.1.07-.14.19-.03.34l.27.43-.1.06-.47-.72.1-.07.06.1c0-.1.04-.18.13-.24.15-.1.31-.08.45.13l.29.44zm-32.5-.02a.27.27 0 01-.04.05l-.49-.31c-.09.16-.08.3.04.38a.4.4 0 00.24.06v.1a.5.5 0 01-.31-.08c-.13-.08-.23-.28-.04-.57.15-.23.37-.29.54-.18.19.13.2.34.06.55zm-.08-.1c.08-.14.09-.27-.04-.36-.1-.07-.23-.04-.35.11l.39.26zm-.95-.03l-.1-.07.3-.41c.1-.16.1-.26-.02-.34-.1-.07-.22-.06-.33.1l-.3.41-.1-.07.66-.93.14.02-.26.36a.28.28 0 01.27.03c.15.1.19.27.05.47l-.3.43zm32.17-.29c.02.04 0 .1-.03.12a.09.09 0 01-.12-.03.09.09 0 01.03-.12c.04-.02.09-.01.12.03zm2.43-.31l-.1.07-.06-.08a.35.35 0 01-.15.25c-.11.08-.27.11-.39-.06-.11-.16-.03-.32.1-.42a.46.46 0 01.21-.08l-.06-.09c-.07-.1-.16-.12-.26-.04a.45.45 0 00-.15.19l-.1-.06a.6.6 0 01.2-.22c.15-.1.29-.11.4.05l.36.49zm-.23-.1l-.1-.14a.43.43 0 00-.2.09c-.11.07-.14.16-.07.25.07.1.16.11.25.05a.3.3 0 00.12-.25zm-34.66-.44l-.17-.12-.34.45c-.04.06-.04.1.01.14l.12.05-.07.08a.4.4 0 01-.15-.07c-.09-.07-.1-.14-.02-.26l.35-.47-.09-.06.07-.08.08.06.16-.22.14.02-.2.27.17.13-.06.08zm35.64-.03l-.1.07-.3-.4c-.12-.15-.22-.17-.33-.09-.1.07-.12.2 0 .35l.3.4-.1.07-.52-.68.1-.08.06.08c0-.08.03-.17.11-.24.15-.1.3-.1.46.1l.32.42zm-36.94 0l-.1-.07.32-.4c.12-.14.12-.25.01-.33-.1-.08-.22-.07-.33.08l-.32.39-.1-.08.71-.88.14.02-.28.35a.28.28 0 01.27.05c.14.11.17.27.01.47l-.33.4zm37.65-.57l-.1.07-.06-.08c0 .1-.04.19-.13.26-.13.11-.32.1-.51-.14-.2-.24-.18-.45-.04-.57a.31.31 0 01.26-.06l-.23-.28.05-.14.76.94zm-.23-.1l-.27-.33a.28.28 0 00-.27.05c-.1.09-.09.23.06.41.14.17.27.2.38.12.07-.06.1-.15.1-.24zm-37.64-.47l-.16-.14-.36.43c-.05.06-.05.09 0 .13.04.04.07.05.1.06l-.07.08a.38.38 0 01-.14-.08c-.08-.07-.1-.15 0-.26l.38-.44-.08-.07.06-.08.08.07.18-.2.13.02-.21.26.16.14-.07.08zm-.98.16l-.09-.08.57-.66.1.09-.58.65zm39.4-.06l-.77-.86.1-.09.9.27.16.05-.63-.7.09-.09.77.86-.1.08-.9-.25a2.95 2.95 0 01-.15-.05l.62.7-.09.08zm-39.07-.8l-.76.48-.08-.08.28-.53c0-.03.04-.08.06-.11l-.1.07-.51.32-.08-.07.42-.8.09.09-.29.51-.06.1.1-.06.5-.32.08.08-.27.52-.06.11.1-.07.49-.33.09.08zm.42.04a.09.09 0 01-.12.01.09.09 0 01-.01-.13.09.09 0 01.13 0c.03.03.04.08 0 .12zm39.69-.8c.2.2.19.44.04.59-.15.14-.38.14-.58-.07-.2-.21-.2-.44-.04-.59.15-.14.37-.15.58.06zm-.1.08c-.15-.16-.3-.17-.4-.07-.12.1-.11.26.05.42.15.16.3.18.42.08.1-.1.1-.26-.06-.43zm.28-.88l.06.11a.26.26 0 00-.11.07c-.08.09-.06.2.05.32l.37.36-.1.09-.6-.61.08-.09.08.08a.26.26 0 01.06-.25.34.34 0 01.1-.08zm-41.76.75c-.22.21-.43.22-.56.09a.3.3 0 01-.09-.25l-.25.24-.13-.04.84-.83.09.09-.08.07c.1 0 .2.02.27.1.13.12.13.31-.09.53zm-.09-.09c.16-.15.18-.29.09-.39-.07-.06-.16-.08-.25-.07l-.31.3c-.02.09 0 .19.07.26.1.1.24.06.4-.1zm42.3-1l-.14.16.4.39c.07.05.1.05.15 0a.3.3 0 00.06-.1l.07.08a.4.4 0 01-.08.14c-.08.07-.16.08-.26-.02l-.43-.4-.07.08-.08-.07.08-.08-.2-.18.04-.14.24.23.15-.16.08.07zm-43.2.7l-.1-.09.64-.59.09.1-.64.58zm-.28-.29l-.08-.09.37-.34c.14-.12.16-.23.07-.33-.08-.1-.2-.1-.35.02l-.37.34-.08-.1.84-.75.13.05-.33.29c.09-.01.18.02.26.1.12.13.12.3-.07.46l-.39.35zm44.65-.56l-.08.1-.38-.34c-.14-.12-.25-.13-.34-.03-.08.1-.08.22.06.34l.38.34-.09.09-.84-.75.03-.14.33.3a.28.28 0 01.07-.27c.12-.13.28-.15.47.01l.39.35zm-43.55.12a.09.09 0 01-.12 0 .09.09 0 010-.13c.04-.04.1-.03.13 0 .03.04.03.1-.01.13zm-1.53-.38c-.13.11-.28.05-.38-.07a.49.49 0 01-.1-.3h.1c0 .09.03.17.09.24.07.09.15.1.21.04.06-.04.05-.1 0-.27-.05-.18-.06-.26.05-.35.1-.09.24-.06.34.06.08.09.1.18.1.27h-.1a.32.32 0 00-.08-.21c-.06-.07-.13-.08-.18-.04-.05.05-.05.1 0 .26.05.17.07.27-.05.37zm45.33-.75l.05.05-.37.44c.15.11.3.12.39.01a.39.39 0 00.09-.23h.1a.51.51 0 01-.12.31c-.1.12-.31.2-.57-.02-.21-.18-.25-.4-.11-.56.14-.18.36-.16.54 0zm-.1.07c-.13-.1-.27-.12-.36 0-.09.1-.07.22.06.36l.3-.36zm.22-.85l.08.1a.25.25 0 00-.11.08c-.08.1-.04.2.09.3l.4.33-.08.1-.68-.55.08-.1.08.07a.26.26 0 01.04-.24.34.34 0 01.1-.1zm-45.4.6l-.12.06a.23.23 0 00-.05-.12c-.08-.1-.2-.1-.33.01l-.4.32-.07-.1.67-.54.08.1-.08.07c.08-.02.17.01.23.08l.07.12zm-.75-.29a.35.35 0 01-.06.04l-.35-.46c-.14.12-.18.26-.1.38.07.08.13.1.22.14l-.04.1a.51.51 0 01-.27-.19c-.1-.12-.12-.35.15-.55.22-.17.45-.16.57 0 .14.19.07.39-.12.54zm47.35-.47l-.08.1-.4-.3c-.15-.12-.26-.12-.34 0-.07.09-.06.21.09.33l.4.3-.07.1-.7-.52.08-.1.09.06a.28.28 0 01.04-.26c.11-.15.27-.18.47-.03l.42.32zm-47.4.36c.13-.11.18-.24.09-.36-.08-.1-.21-.12-.37-.01l.28.37zm-.88-.35l-.07-.1.4-.3c.16-.1.19-.2.1-.32-.06-.1-.18-.12-.34-.01l-.4.3-.08-.1.7-.51.08.1-.1.06c.1 0 .19.03.25.12.1.15.09.3-.11.45l-.43.31zm48.76-.69l-.07.1-.95-.66.08-.1.94.66zM3 43.22l-.12-.17-.47.31c-.06.05-.07.08-.03.13a.3.3 0 00.09.1l-.1.04a.38.38 0 01-.11-.11c-.06-.09-.05-.17.07-.25l.48-.33-.06-.09.09-.05.06.08.22-.15.12.07-.27.19.12.17-.09.06zm48.38-.64l.09.1a.24.24 0 00-.1.09c-.07.1-.03.2.11.3l.42.28-.07.1-.71-.48.06-.1.1.06a.25.25 0 010-.25.34.34 0 01.1-.1zm-48.61.12l-.12.04a.24.24 0 00-.05-.12c-.06-.1-.18-.11-.32-.02l-.43.28-.06-.1.72-.48.07.1-.09.06c.08 0 .17.04.22.11.04.06.05.1.06.13zm49.38-.57l.05.04-.3.49c.15.09.3.08.38-.04a.39.39 0 00.05-.25h.11c0 .12-.01.2-.08.32-.09.13-.29.23-.57.05-.24-.15-.3-.37-.19-.54.12-.2.34-.2.55-.07zm-.1.08c-.14-.08-.28-.08-.36.05-.07.1-.04.23.12.35l.25-.4zm-50.4.34l-.07-.1.09-.06a.36.36 0 01-.25-.17c-.07-.11-.09-.27.1-.38.16-.1.31-.01.4.14.05.07.07.15.07.2l.09-.05c.1-.06.13-.15.06-.26a.46.46 0 00-.18-.16l.07-.1c.07.05.15.12.2.21.1.16.1.3-.07.41l-.52.32zm.1-.22l.16-.1a.41.41 0 00-.08-.2c-.06-.11-.15-.15-.25-.1-.1.08-.12.17-.06.26.06.1.15.13.24.14zm50.97-.26l-.06.1-.97-.59v-.14l1.03.63zm.45-.78l-.06.1-.09-.04c.03.08.03.18-.03.3-.06.1-.2.2-.37.1-.17-.1-.16-.28-.08-.43.04-.08.1-.13.15-.16l-.09-.06c-.1-.06-.2-.04-.26.07a.46.46 0 00-.06.24l-.1-.01c0-.09.02-.2.08-.29.09-.16.22-.22.4-.12l.51.3zm-51.58.32c-.26.15-.47.1-.56-.05a.3.3 0 01-.02-.27l-.3.17-.13-.07 1.03-.59.06.1-.09.06c.09.02.18.07.24.17.08.15.04.33-.23.48zm51.34-.32l-.15-.08a.42.42 0 00-.16.16c-.06.11-.05.2.05.26.11.07.2.03.25-.06a.3.3 0 000-.28zm-51.4.22c.19-.11.25-.24.18-.36-.05-.08-.13-.12-.22-.13l-.38.21a.28.28 0 000 .27c.08.12.22.12.42 0zm52.1-1.04l-.07.1-.44-.23c-.17-.1-.27-.07-.34.05-.05.1-.03.23.14.31l.45.24-.06.11-.77-.4.06-.12.1.06a.28.28 0 010-.27c.09-.17.24-.22.46-.1l.46.25zm-53.1.15l-.06-.11.45-.23c.16-.09.2-.19.15-.3-.06-.12-.17-.16-.34-.08l-.45.24-.06-.11.77-.4.06.1-.1.06c.09 0 .17.06.22.15.09.17.05.32-.18.44l-.46.24zm53.5-.97l-.05.1-.1-.04c.04.08.05.18 0 .29-.08.15-.26.22-.53.08s-.35-.34-.27-.5a.3.3 0 01.21-.16l-.32-.17v-.14l1.06.54zm-.24.01l-.39-.2a.28.28 0 00-.22.16c-.06.13.02.25.22.35.2.1.34.07.4-.05.04-.08.03-.17-.01-.26zm-53.7.1l-.05-.12 1.03-.5.06.12-1.04.5zm39.43-22.74l-4.2-3.08L23.16 30.5l-3.01-2.21-5.8 2.2 9.88 7.26.05.03 15.25-20.76zM51.88 31.3l.02-.14.25.04.15.02-.1-.06-.29-.18.32-.1.12-.03-.15-.02-.25-.04.02-.13.69.1-.02.12-.33.1-.12.04c.02 0 .07.04.1.06l.3.18-.02.13-.69-.09zm.66-.69l.02-.2-.55-.07.02-.14.55.08.03-.2.13.02-.07.53-.13-.02zm-43.9-7.03l-.03 1.22-5.4.89 5.36 1.13-.03 1.26-7.87 1.06.03-1.28 5.61-.52-5.57-1.14.02-1.16 5.63-.88-5.59-.78.03-1.21 7.81 1.4zm44.62 3.07v.09c-.02 1.19-.5 1.96-1.7 1.94l-4.7-.08c-1.18-.02-1.64-.81-1.62-2v-.09c.02-1.19.5-1.96 1.7-1.94l4.7.08c1.2.02 1.64.81 1.62 2zm-6.88-.07c0 .42.15.71.7.72l4.3.08c.57 0 .73-.28.74-.7 0-.43-.15-.72-.7-.73l-4.3-.08c-.57 0-.73.28-.74.7zm.44-3.05c-1.18.28-1.8-.37-2.08-1.53l-.02-.08c-.28-1.16-.04-2.02 1.15-2.31l4.57-1.11c1.13-.28 1.8.37 2.08 1.52l.02.09c.28 1.15-.02 2.03-1.15 2.3l-1.09.27-.3-1.26.89-.22c.54-.13.63-.45.52-.87-.1-.41-.32-.66-.86-.52l-4.18 1.01c-.54.13-.63.46-.53.87.1.41.32.66.87.53l1.13-.28-.18-.74 1.07-.26.48 2-2.4.59zm-37.84-1.4l-7.46-2.41 1.06-3.27 1.09.35-.66 2.03 2.04.67.56-1.7 1.08.35-.55 1.7 2.15.7.67-2.07 1.1.36-1.08 3.3zm39.87-10.47l.05.08c.66.99.7 1.9-.3 2.56l-3.91 2.6c-1 .65-1.82.26-2.47-.73l-.05-.08c-.66-.99-.7-1.9.29-2.56l3.92-2.6c1-.66 1.82-.26 2.47.73zM13.1 14.13L10.03 13l-.4.51 2.46 1.93-.8 1.02-6.18-4.83 1.25-1.6c.73-.93 1.59-1.26 2.52-.53l1.1.87c.6.46.77 1 .63 1.56l3.3 1.17-.8 1.04zM5 14.07c.63.33 1.06.94 1.28 1.49l-.44.3c-.2-.39-.54-.8-.85-1.03l-.28.53-1.29-.67.6-1.14.99.52zm38.14 1.42c.24.35.53.5 1 .2l3.58-2.38c.47-.3.44-.63.2-.99-.23-.35-.52-.51-.99-.2l-3.59 2.38c-.46.3-.43.63-.2.99zm2.42-6.18l-.95-.9-4.59 4.89-.95-.9 4.59-4.88-.96-.9.79-.83 2.85 2.69-.78.83zM14.3 12.82L9.44 6.66l2.7-2.13.7.9-1.67 1.32 1.33 1.7 1.4-1.12.71.9-1.4 1.11 1.4 1.78 1.7-1.35.71.9-2.72 2.15zm-5.56 0l.42-.54c.27-.34.32-.67-.12-1.01l-.8-.63c-.44-.34-.75-.21-1 .12l-.43.54 1.93 1.51zM39 4.73l-1.88 4.12c-.5 1.08-1.4 1.18-2.49.69l-1.82-.84 3.26-7.13 1.82.83c1.08.5 1.6 1.25 1.1 2.33zM22.3 6.75c.39 1.15-.21 1.83-1.33 2.21l-.09.03c-1.12.4-2 .23-2.4-.92l-1.54-4.45c-.38-1.1.2-1.82 1.33-2.2l.08-.04c1.12-.39 2.03-.17 2.4.93l.37 1.06-1.23.42-.3-.87c-.18-.53-.5-.58-.9-.44-.41.14-.63.38-.45.9l1.4 4.08c.18.52.51.58.91.44.4-.14.63-.38.45-.91l-.38-1.1-.72.24-.36-1.03 1.95-.68.8 2.33zm15.08-3.32l-.6-.27-2.31 5.05.6.28c.38.17.71.15.95-.36l1.71-3.74c.24-.51.04-.78-.35-.96zM31.46.32l.09.01c1.17.2 1.86.8 1.65 1.98l-.81 4.63c-.21 1.17-1.06 1.5-2.23 1.3l-.1-.02c-1.16-.2-1.85-.8-1.65-1.98l.82-4.63C29.43.43 30.29.1 31.46.3zm-6.68-.3h.09c1.18-.1 2 .3 2.1 1.49l.38 4.68c.1 1.19-.64 1.72-1.83 1.82h-.09c-1.18.1-2-.3-2.1-1.49l-.38-4.69c-.1-1.2.65-1.71 1.83-1.8zM30.3 7.1c.42.07.73-.03.83-.58l.75-4.24c.1-.55-.17-.76-.59-.83-.42-.07-.73.03-.83.58l-.74 4.24c-.1.55.16.76.58.83zm-4.93-.23c.43-.03.7-.21.66-.77l-.35-4.29c-.05-.56-.35-.69-.77-.65-.43.03-.7.21-.66.77l.35 4.29c.05.55.35.69.77.65z" fill="#666666"/>
    </svg>
  )
}
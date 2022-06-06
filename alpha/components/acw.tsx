import { useRouter } from "next/router"
import s from "styles/footer.module.scss"

export const ACW = () => {
  const { locale } = useRouter()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 57"
      className={`${s.funderLogo} ${s.first}`}
    >
      <title>{locale === "cy"
        ? "Logo Cyngor Celfyddydau Cymru"
        : "Arts Council of Wales Logo"
      }</title>
      <path d="M31.83 49.64A23.79 23.79 0 019.51 29.1a23.78 23.78 0 1047 .88 23.79 23.79 0 01-24.68 19.66zM7.69 28.84A23.78 23.78 0 0131.32 9.82a23.78 23.78 0 10-7.86 46.34A23.78 23.78 0 017.69 28.84zm40.8-1.03a23.79 23.79 0 01-23.5 19.18A23.78 23.78 0 1032.53.59a23.79 23.79 0 0115.94 27.22zm119.59 4.52h1.4l2.76 8.01 2.88-8.45 2.91 8.45 2.78-8.01h1.4l-4.22 11.3-2.85-8.4-2.84 8.4-4.22-11.3zm20.72 4.08v6.81h-1.13v-1.24c-.27.5-.62.88-1.05 1.14-.42.26-.9.4-1.42.4a3 3 0 01-2.36-1.01c-.6-.68-.9-1.57-.9-2.68 0-1.12.29-2.01.87-2.68.58-.66 1.36-1 2.33-1 .57 0 1.06.13 1.48.39.42.25.76.63 1.02 1.14V36.4h1.16zm-71.49 0v3.35c0 .98.15 1.67.44 2.06.3.4.78.59 1.48.59.68 0 1.17-.2 1.46-.58.29-.39.43-1.07.43-2.07v-3.35h1.2v3.98c0 1.03-.27 1.8-.8 2.33-.52.53-1.3.8-2.32.8-1.01 0-1.78-.27-2.3-.8-.54-.53-.8-1.3-.8-2.33v-3.98h1.21zm33.94 3.42a3.7 3.7 0 011.08-2.6 3.7 3.7 0 015.24 0 3.63 3.63 0 01.8 4 3.82 3.82 0 01-3.42 2.28 3.68 3.68 0 01-3.7-3.68zm-44.24 0a3.68 3.68 0 011.08-2.6 3.7 3.7 0 015.24 0 3.49 3.49 0 011.08 2.6 3.6 3.6 0 01-2.3 3.4 3.68 3.68 0 01-5.1-3.4zm31.28 1.78v1.35c-.3.19-.65.33-1.04.42-.38.09-.8.13-1.25.13-1.05 0-1.9-.33-2.54-1a3.64 3.64 0 01-.96-2.63c0-1.1.33-2 1-2.69a3.38 3.38 0 012.55-1.04 5.21 5.21 0 012.12.48v1.24c-.3-.2-.6-.34-.92-.44-.32-.1-.64-.15-.97-.15-.76 0-1.38.25-1.84.72-.46.49-.69 1.12-.69 1.92a2.41 2.41 0 002.44 2.46c.35 0 .7-.06 1.03-.18.34-.12.7-.32 1.07-.59zm62.6-1.6h-5.4v.1c0 .72.22 1.3.63 1.75.42.45.96.67 1.63.67.46 0 .87-.12 1.24-.37.36-.24.69-.61.97-1.11l.89.6a3.63 3.63 0 01-1.31 1.4c-.53.3-1.15.46-1.84.46a3.27 3.27 0 01-2.52-1.02 3.79 3.79 0 01-.96-2.7c0-1.06.32-1.94.95-2.61a3.2 3.2 0 012.45-1.03c1 0 1.8.33 2.4.97.58.65.87 1.53.87 2.65V40zm1.06 2.06l1-.67c.18.37.42.64.7.82.3.18.63.27 1.02.27s.7-.1.93-.28a.9.9 0 00.35-.75.8.8 0 00-.24-.6c-.16-.15-.44-.3-.83-.43l-.19-.07c-1.65-.57-2.48-1.28-2.48-2.15 0-.6.22-1.1.67-1.48a2.58 2.58 0 011.74-.57c.6 0 1.1.11 1.52.35.42.24.72.57.9 1l-.94.59a1.6 1.6 0 00-1.56-.98c-.34 0-.62.1-.84.29a.95.95 0 00-.32.73c0 .42.45.77 1.35 1.05l.4.13c.75.24 1.27.51 1.56.82.29.3.43.7.43 1.2 0 .65-.23 1.18-.69 1.58-.46.4-1.05.6-1.8.6-.63 0-1.17-.12-1.62-.36-.44-.24-.8-.6-1.06-1.09zm-116.88 0l1-.67c.18.37.42.64.7.82.3.18.63.27 1.02.27s.7-.1.93-.28a.9.9 0 00.35-.75.8.8 0 00-.24-.6c-.16-.15-.44-.3-.83-.43l-.2-.07c-1.64-.57-2.47-1.28-2.47-2.15 0-.6.22-1.1.67-1.48a2.58 2.58 0 011.74-.57c.6 0 1.1.11 1.52.35.42.24.72.57.9 1l-.95.59a1.6 1.6 0 00-1.55-.98c-.34 0-.62.1-.84.29a.94.94 0 00-.32.73c0 .42.45.77 1.35 1.05l.4.13a3.8 3.8 0 011.56.82c.29.3.43.7.43 1.2 0 .65-.23 1.18-.69 1.58-.46.4-1.06.6-1.8.6-.63 0-1.17-.12-1.62-.36-.44-.24-.8-.6-1.06-1.09zm20.4-7.14a4.66 4.66 0 00-5.31-1.31 4.27 4.27 0 00-2.37 2.42c-.2.54-.31 1.13-.31 1.77 0 .5.06.98.18 1.4a4.52 4.52 0 004.24 3.11c.7 0 1.34-.14 1.93-.43.6-.29 1.14-.71 1.64-1.29v1.72a6.24 6.24 0 01-3.68 1.2 5.6 5.6 0 01-3.22-1.01 5.63 5.63 0 01-2.45-4.69 5.51 5.51 0 011.7-4.16 5.6 5.6 0 014.06-1.6 5.9 5.9 0 013.59 1.18v1.7zm-23.44 2.44h-1.25v-.96h1.25v-2.74h1.2v2.74h1.25v.96h-1.26v5.85h-1.19v-5.85zm57.94-.96h1.18v6.81h-1.18v-6.81zm-15.4 6.81v-6.81h1.13v1.04c.3-.44.65-.76 1.06-.97.41-.22.89-.32 1.43-.32.8 0 1.43.2 1.89.64.45.42.68 1.02.68 1.78v4.64h-1.2V39.2c0-.69-.14-1.2-.43-1.54-.3-.33-.74-.5-1.35-.5-.35 0-.66.06-.95.19-.28.13-.52.3-.71.54a1.7 1.7 0 00-.31.61c-.06.23-.1.63-.1 1.2v3.52h-1.14zm-48.06 0v-6.81h1.03v1.42a3.6 3.6 0 011-1.27c.36-.26.79-.38 1.3-.38a2.4 2.4 0 01.79.13l-.39 1.06a3.16 3.16 0 00-.72-.14c-.62 0-1.09.23-1.4.67a3.53 3.53 0 00-.46 2v3.32h-1.15zm84.27 0v-5.85h-1.31v-.96h1.31v-1.98c0-1.13.15-1.9.43-2.3.29-.4.8-.6 1.54-.6.18 0 .35.02.52.04.17.03.33.07.48.12v1.2a1.8 1.8 0 00-.91-.25c-.34 0-.58.11-.7.33-.13.22-.2.76-.2 1.62v1.82h1.81v.96h-1.78v5.85h-1.19zm31.61-11.54h-1.19v11.54h1.2V31.68zm-47.53 0h-1.2v11.54h1.2V31.68zm-74.33.21l4.96 11.33h-1.4l-1.42-3.34H68.4L67 43.22h-1.41l4.95-11.33zm81.95 7.93c0 .73.24 1.34.73 1.84.48.5 1.06.75 1.74.75a2.3 2.3 0 001.73-.75c.48-.5.72-1.11.72-1.84 0-.72-.24-1.33-.72-1.83a2.3 2.3 0 00-1.73-.75c-.69 0-1.27.25-1.75.75s-.72 1.11-.72 1.83zm-44.24 0c0 .73.24 1.34.72 1.84s1.07.75 1.75.75a2.3 2.3 0 001.73-.75c.48-.5.72-1.11.72-1.84 0-.72-.24-1.33-.72-1.83a2.3 2.3 0 00-1.73-.75c-.69 0-1.27.25-1.75.75s-.72 1.11-.72 1.83zm79.43.05c0-.77-.21-1.39-.63-1.86a2.1 2.1 0 00-1.64-.7c-.7 0-1.25.21-1.64.64a2.6 2.6 0 00-.59 1.81c0 .83.2 1.47.6 1.91.39.45.95.67 1.67.67.7 0 1.24-.21 1.64-.65.4-.43.59-1.04.59-1.82zm11.97-.8a1.97 1.97 0 00-.6-1.4 2.11 2.11 0 00-1.47-.49c-.57 0-1.04.17-1.42.51-.37.34-.6.8-.65 1.37h4.14zM70.53 34.75l-1.74 4.01h3.47l-1.73-4.01zm69.15-1.64c0-.23.09-.43.25-.6a.83.83 0 01.61-.25c.24 0 .44.08.6.25.17.17.26.38.26.61 0 .24-.09.44-.25.6a.83.83 0 01-.6.25.84.84 0 01-.87-.86zM27.96 7.78a23.8 23.8 0 0118.56 24A23.78 23.78 0 10.34 23.02 23.78 23.78 0 0127.96 7.78zM76.7 27.05l1.85-4-2.67-6.14h1.35l1.98 4.9 2.1-4.9h1.28L78 27.05h-1.3zm69.44 0l1.84-4-2.67-6.14h1.35l1.98 4.9 2.1-4.9h1.28l-4.57 10.14h-1.31zm24.14 0l1.85-4-2.68-6.14h1.35l1.98 4.9 2.1-4.9h1.29l-4.58 10.14h-1.31zm48 0l1.84-4-2.67-6.14h1.35l1.98 4.9 2.1-4.9h1.28l-4.57 10.14h-1.31zM98.52 16.9v6.69c0 .74-.05 1.27-.14 1.58-.1.31-.27.6-.5.84-.31.35-.7.6-1.16.77-.46.17-.99.26-1.58.26a3.72 3.72 0 01-2.42-.71 2.56 2.56 0 01-.9-2.01h1.31v.09c0 .51.18.9.53 1.18.35.28.85.42 1.49.42.46 0 .86-.07 1.2-.23.32-.15.57-.37.74-.67.1-.17.18-.37.23-.59.04-.22.06-.54.06-.96v-1.14a2.7 2.7 0 01-2.47 1.5 3 3 0 01-2.35-1c-.6-.66-.9-1.55-.9-2.65 0-1.1.3-2 .87-2.64a2.95 2.95 0 012.33-.98c.56 0 1.06.12 1.48.38.43.26.77.63 1.01 1.13v-1.26h1.17zm117.95-1.48a4.65 4.65 0 00-5.31-1.31 4.29 4.29 0 00-2.37 2.42c-.2.54-.3 1.13-.3 1.77 0 .5.05.98.18 1.4a4.53 4.53 0 004.24 3.11c.69 0 1.33-.14 1.93-.43.6-.29 1.14-.71 1.63-1.29v1.72a6.22 6.22 0 01-5.36.94 5.64 5.64 0 01-3.98-5.43 5.54 5.54 0 011.7-4.16 5.64 5.64 0 014.06-1.61 5.93 5.93 0 013.58 1.18v1.7zm-141.57 0a4.65 4.65 0 00-5.31-1.31 4.28 4.28 0 00-2.37 2.42c-.2.54-.3 1.13-.3 1.77 0 .5.05.98.18 1.4a4.5 4.5 0 004.24 3.11c.69 0 1.33-.14 1.93-.43.6-.29 1.14-.71 1.63-1.29v1.72a6.22 6.22 0 01-5.36.94 5.7 5.7 0 01-3.99-5.44 5.52 5.52 0 011.7-4.16 5.62 5.62 0 014.07-1.6 5.92 5.92 0 013.58 1.18v1.7zm53.49 0a4.65 4.65 0 00-5.31-1.31 4.29 4.29 0 00-2.37 2.42c-.2.54-.31 1.13-.31 1.77 0 .5.06.98.19 1.4a4.52 4.52 0 004.23 3.11c.7 0 1.34-.14 1.94-.43.6-.29 1.14-.71 1.63-1.29v1.72a6.18 6.18 0 01-5.36.94 5.63 5.63 0 01-3.98-5.43 5.5 5.5 0 011.7-4.16 5.63 5.63 0 014.06-1.61 5.91 5.91 0 013.58 1.18v1.7zm-28.04 4.9a3.65 3.65 0 013.7-3.67 3.64 3.64 0 012.62 1.08 3.5 3.5 0 011.08 2.6 3.61 3.61 0 01-2.3 3.4 3.6 3.6 0 01-2.82 0 3.73 3.73 0 01-2.28-3.4zm59.1-8.15v11.54h-1.13V22.5c-.27.5-.62.87-1.04 1.13-.43.26-.9.4-1.43.4A3 3 0 01153.5 23c-.6-.67-.9-1.56-.9-2.67 0-1.12.3-2 .88-2.67.58-.67 1.36-1 2.33-1 .56 0 1.05.12 1.47.38.41.25.75.64 1 1.14v-6h1.18zm8.73 0v11.54h-1.14V22.5c-.27.5-.62.87-1.04 1.13-.43.26-.9.4-1.43.4a3 3 0 01-2.36-1.02c-.6-.67-.89-1.56-.89-2.67 0-1.12.3-2 .88-2.67.58-.67 1.36-1 2.33-1 .56 0 1.05.12 1.47.38.41.25.75.64 1 1.14v-6h1.18zm15.43 0v11.54h-1.15V22.5a2.67 2.67 0 01-2.46 1.52 3 3 0 01-2.36-1c-.6-.68-.9-1.57-.9-2.68 0-1.12.3-2 .88-2.67.59-.67 1.36-1 2.34-1 .56 0 1.05.12 1.47.38.41.25.75.64 1 1.14v-6h1.18zm61.03 4.73v3.35c0 .99.14 1.67.44 2.06.29.4.78.59 1.47.59s1.18-.2 1.46-.58c.3-.39.43-1.07.43-2.07v-3.35h1.2v3.98c0 1.03-.27 1.8-.8 2.33-.52.53-1.3.8-2.32.8-1.01 0-1.78-.27-2.3-.8-.53-.53-.8-1.3-.8-2.33v-3.98h1.22zm-108.1 3.6h-5.4v.1c0 .72.21 1.3.63 1.75.41.45.96.67 1.63.67.45 0 .86-.12 1.23-.37.37-.24.7-.61.98-1.11l.88.6a3.6 3.6 0 01-1.3 1.4c-.54.3-1.15.47-1.85.47a3.28 3.28 0 01-2.51-1.03 3.79 3.79 0 01-.96-2.7c0-1.06.32-1.93.95-2.61a3.2 3.2 0 012.45-1.02c1 0 1.8.32 2.39.97.58.64.88 1.53.88 2.64v.23zm55.78-3.6v6.81h-1.12v-1.24a3 3 0 01-1.05 1.14c-.42.26-.9.4-1.43.4a3 3 0 01-2.36-1.01c-.6-.68-.9-1.57-.9-2.68 0-1.12.3-2.02.88-2.68.58-.66 1.35-1 2.33-1 .57 0 1.06.13 1.48.39.42.25.76.63 1.02 1.14v-1.27h1.15zm3.43 0v3.35c0 .99.15 1.67.44 2.06.29.4.78.59 1.47.59.7 0 1.18-.2 1.47-.58.28-.39.43-1.07.43-2.07v-3.35h1.19v3.98c0 1.03-.26 1.8-.8 2.33-.52.53-1.3.8-2.31.8-1.02 0-1.79-.27-2.31-.8-.53-.53-.8-1.3-.8-2.33v-3.98h1.22zm-56.18-4.73h-1.2v11.54h1.2V12.18zM83.69 23.72v-6.81h1.14v1.04c.3-.43.65-.76 1.06-.97.4-.22.89-.32 1.43-.32.8 0 1.43.21 1.88.64.46.42.68 1.02.68 1.78v4.64H88.7V19.7c0-.69-.14-1.2-.43-1.54-.3-.33-.74-.5-1.35-.5-.35 0-.66.06-.95.19-.29.13-.52.3-.71.54-.15.18-.25.38-.31.61-.07.23-.1.63-.1 1.2v3.52H83.7zm58.63 0v-5.85H141v-.96h1.32v-1.98c0-1.13.14-1.9.43-2.3.29-.4.8-.6 1.54-.6a3.67 3.67 0 011 .16v1.2a1.9 1.9 0 00-.91-.25c-.34 0-.58.11-.7.33a4 4 0 00-.2 1.62v1.82h1.81v.96h-1.78v5.85h-1.19zm92.44 0V19.7c0-.69-.14-1.2-.42-1.54-.28-.33-.7-.5-1.28-.5a1.87 1.87 0 00-1.54.73c-.13.18-.23.39-.3.63-.05.24-.08.63-.08 1.17v3.53h-1.13V19.7c0-.69-.14-1.2-.42-1.54-.27-.33-.7-.5-1.27-.5-.32 0-.61.06-.88.19s-.5.3-.68.54c-.13.17-.22.38-.28.6-.06.23-.09.63-.09 1.2v3.53h-1.12v-6.81h1.14v1.04c.28-.43.62-.76 1.01-.97.4-.22.85-.32 1.36-.32.55 0 1.02.11 1.4.35.4.24.68.58.89 1.03A3 3 0 01232.1 17c.4-.23.87-.34 1.39-.34.76 0 1.35.21 1.78.64.42.42.64 1.02.64 1.78v4.64h-1.15zm3.46 0v-6.81h1.03v1.42c.31-.6.65-1.02 1-1.27a2.44 2.44 0 012.09-.25l-.4 1.06a2.75 2.75 0 00-.72-.14c-.61 0-1.08.23-1.39.67-.3.44-.46 1.11-.46 2v3.32h-1.15zm-128.63 0v-6.81h1.03v1.42c.31-.6.65-1.02 1-1.27a2.41 2.41 0 012.09-.25l-.4 1.06a2.83 2.83 0 00-.72-.14c-.61 0-1.08.23-1.39.67-.3.44-.46 1.11-.46 2v3.32h-1.15zm-8-3.4c0 .73.23 1.34.71 1.84s1.07.75 1.75.75a2.3 2.3 0 001.73-.75c.48-.5.72-1.11.72-1.83 0-.73-.24-1.34-.72-1.84a2.3 2.3 0 00-1.73-.75c-.69 0-1.27.25-1.75.75s-.72 1.11-.72 1.84zm56.73.03c0-.77-.21-1.38-.63-1.85-.42-.46-.98-.7-1.67-.7-.68 0-1.22.22-1.6.64-.4.42-.58 1.01-.58 1.76 0 .84.2 1.5.58 1.97.4.48.93.72 1.62.72.71 0 1.27-.23 1.67-.68.4-.44.6-1.07.6-1.86zm8.72 0c0-.77-.21-1.38-.63-1.85-.42-.46-.98-.7-1.67-.7-.68 0-1.22.22-1.6.64-.4.42-.59 1.01-.59 1.76 0 .84.2 1.5.59 1.97.4.48.93.72 1.62.72.71 0 1.27-.23 1.67-.68.4-.44.6-1.07.6-1.86zm15.42 0c0-.77-.2-1.38-.63-1.85-.42-.46-.97-.7-1.66-.7s-1.22.22-1.61.64c-.38.42-.58 1.01-.58 1.76 0 .84.2 1.5.59 1.97.39.48.93.72 1.62.72.7 0 1.27-.23 1.67-.68.4-.44.6-1.07.6-1.86zm8.74.02c0-.77-.21-1.39-.63-1.86a2.1 2.1 0 00-1.64-.7c-.7 0-1.25.21-1.64.65a2.6 2.6 0 00-.59 1.8c0 .83.2 1.47.6 1.91.39.45.95.68 1.67.68.7 0 1.24-.22 1.63-.66.4-.43.6-1.04.6-1.82zm-93.82-.04c0-.76-.2-1.38-.62-1.84a2.1 2.1 0 00-1.64-.7c-.7 0-1.24.21-1.63.64a2.6 2.6 0 00-.59 1.82c0 .82.2 1.46.6 1.9.38.45.94.67 1.66.67.7 0 1.24-.22 1.63-.66.4-.43.6-1.05.6-1.83zm37.9-.77a1.97 1.97 0 00-.6-1.39 2.11 2.11 0 00-1.47-.49c-.56 0-1.04.17-1.41.51-.38.34-.6.8-.66 1.37h4.14z" fill="#666666"/>
    </svg>
  )
}
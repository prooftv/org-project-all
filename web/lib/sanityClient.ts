import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "e78eosta",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2022-05-25",
  useCdn: true
})

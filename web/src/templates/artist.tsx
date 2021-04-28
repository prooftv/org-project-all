import * as React from "react"
import clientConfig from '../../client-config'
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import BasePortableText from '@sanity/block-content-to-react'

import Layout from "../components/layout"

const PortableText = ({blocks}) => (
  <BasePortableText blocks={blocks} {...clientConfig.sanity} />
)

export const query = graphql `
  query singleArtistQuery($name: String!) {
    allSanityArtwork(filter: {artist: { eq: $name } }) {
      edges {
        node {
          id
          artist
          date
          dimensions
          mainImage {
            asset {
              gatsbyImageData(width: 400, height: 400, formats: WEBP, placeholder: BLURRED)
            }
          }
          medium {
            en
          }
          price
          title {
            en
          }
        }
      }
    }
    sanityArtist(title: { eq: $name }) {
      body {
        _rawEn(resolveReferences: {maxDepth: 10})
      }
      disciplines {
        title {
          en
        }
      }
      id
      mainImage {
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
        }
      }
      title
    }
  }
`

const ArtistPage = props => {
  const { data } = props
  const artist = data && data.sanityArtist
  const artwork = data && data.allSanityArtwork;
  return (
    <Layout
      heroImage={artist.mainImage.asset.gatsbyImageData}
      heroImageCaption="&nbsp;"
    >
      <section>
        <div className="container">
          <h1>{artist.title}</h1>
          {artist.body._rawEn && <PortableText blocks={artist.body._rawEn} />}
        </div>
        <div className="imageGrid">
          {artwork.edges.map(artworks => (
            <>
              <div style={{margin: 0}}>
                <GatsbyImage 
                  image={artworks.node.mainImage.asset.gatsbyImageData}
                  alt=""
                />
                <div className="gridCaption">{artworks.node.title.en} ({artworks.node.date})</div>
              </div>
            </>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default ArtistPage

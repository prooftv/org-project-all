import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import PortableText from '../components/portableText'
import Modal from '../components/modal'

export const query = graphql `
  query singleExhibitionQuery($title: String!) {
    allSanityArtwork(
      filter: {exhibition: {elemMatch: {title: {en: {eq: $title}}}}}
      sort: {fields: artist, order: ASC}
    ) {
      edges {
        node {
          id
          artist
          date
          dimensions
          artworkGridImage: mainImage {
            asset {
              gatsbyImageData(width: 468, height: 468, formats: WEBP, placeholder: BLURRED)
            }
          }
          artworkModalImage: mainImage {
            asset {
              gatsbyImageData(height: 670, formats: WEBP, placeholder: BLURRED)
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
    sanityExhibition(title: {en: { eq: $title }}) {
      body {
        _rawEn(resolveReferences: {maxDepth: 10})
      }
      dateStart(formatString: "Do MMMM")
      dateEnd(formatString: "Do MMMM YYYY")
      id
      title {
        en
      }
      mainImage {
        caption
        asset {
          gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
`

const ExhibitionPage = ({ data }) => {

  const [info, setInfo] = useState(true)
  const [gallery, setGallery] = useState(false)
  const [modal, setModal] = useState(true)
  const [imageToShow, setImageToShow] = useState(0)

  const artwork = data && data.allSanityArtwork
  const exhibition = data && data.sanityExhibition
  const modalImage = artwork.edges[imageToShow].node

  const toggleInfo = () => {
    setInfo(false)
    setGallery(true)
  }

  const toggleGallery = () => {
    setInfo(true)
    setGallery(false)
  }

  const openModal = (index: number) => {
    setModal(false)
    setImageToShow(index)
  }

  const closeModal = () => {
    setModal(true)
  }

  let currentIndex = imageToShow

  function prevIndex() {
    currentIndex = currentIndex - 1
    if (currentIndex < 0) {
      setModal(true)
      return
    }
    setImageToShow(currentIndex)
  }

  function nextIndex() {
    currentIndex = currentIndex + 1
    if (currentIndex >= artwork.edges.length) {
      setModal(true)
      return
    }
    setImageToShow(currentIndex)
  }

  return (
    <Layout
      heroImage={exhibition.mainImage.asset.gatsbyImageData}
      heroImageCaption={exhibition.mainImage.caption}
    >
      <section>
        <div className="sidebarContainer">
          <div className="portableContainer">
            <h1>{exhibition.title.en}</h1>
            <p className="subTitle">{exhibition.dateStart} to {exhibition.dateEnd}</p>
            <ul className="galleryMenu">
              <li onClick={toggleInfo} className={info ? "" : "selected"}>Overview</li>
              <li onClick={toggleGallery} className={info ? "selected" : ""}>Works</li>
            </ul>
            <div className={info ? "hidden galleryInfo" : "galleryInfo"} >
              {exhibition.body._rawEn && <PortableText blocks={exhibition.body._rawEn} />}
            </div>
          </div>
        </div>
        <div className={gallery ? "hidden galleryImageGrid" : "galleryImageGrid"}>
          {artwork.edges.map((artworks: any, index: number) => (
            <div style={{margin: 0}} key={artworks.node.id} onClick={() => openModal(index)}>
              <GatsbyImage
                image={artworks.node.artworkGridImage.asset.gatsbyImageData}
                alt={`${artworks.node.artist}, ${artworks.node.title.en}, ${artworks.node.date}`}
                className="gridImage"
              />
              <div className="gridCaption">{artworks.node.artist}</div>
              <div className="gridCaption"><em>{artworks.node.title.en}</em></div>
            </div>
          ))}
        </div>
        <div><p className="backLink"><Link to="/exhibitions/">Back to Exhibitions</Link></p></div>
        <Modal
          modal={modal}
          modalImage={modalImage}
          closeModal={closeModal}
          prevIndex={prevIndex}
          nextIndex={nextIndex}
        />
      </section>
    </Layout>
  )
}

export default ExhibitionPage

import * as React from "react"
import getYouTubeID from "get-youtube-id"

const VideoEmbed = ({ videoId }) => {
  const id = getYouTubeID(videoId)
  const url = `https://www.youtube-nocookie.com/embed/${id}?modestbranding=1`

  if (!id) {
    return <div>YouTube video missing</div>
  }
  return (
    <section>
      <div className="embedContainer">
        <iframe
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

export default VideoEmbed

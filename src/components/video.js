import React from "react"
import styled from "styled-components"

const VideoContainer = styled.div`
  margin: 0 auto 128px auto;
  max-width: 1152px;
  position: relative;
  overflow: hidden;
  padding-bottom: 0;

  iframe {
    width: 1152px;
    height: 648px;
    border: 0;
  }

  @media only screen and (max-width: 1152px) {
    padding-bottom: 56.25%;

    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }

  @media only screen and (max-width: 900px) {
    margin-bottom: 64px;
  }
`

const Video = ({ video, title }) => (
  <VideoContainer>
    <iframe title={title} src={video} />
  </VideoContainer>
)

export default Video

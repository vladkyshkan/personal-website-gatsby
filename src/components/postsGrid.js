import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import PostPreview from "./postPreview"
import Button from "./designSystem/Button"
import ExternalLink from "./designSystem/ExternalLink"
import IconArrow from "./designSystem/IconArrow"

const PostsGridStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -128px;

  button {
    margin: 0;
  }

  @media only screen and (max-width: 900px) {
    margin-bottom: -64px;
  }

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
  }

  @media only screen and (max-width: 500px) {
    a {
      width: 100%;
    }
  }
`

const PostsPreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 32px;

  @media only screen and (max-width: 900px) {
    gap: 24px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const PostsGrid = () => {
  const data = useStaticQuery(graphql`
    {
      allPostsJson {
        edges {
          node {
            title
            date
            url
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allPostsJson.edges

  return (
    <PostsGridStyled>
      <PostsPreviewGrid>
        {posts.map(({ node: post }) => {
          const { title, date, url } = post
          const imageData = post.image.childImageSharp.fluid

          return (
            <PostPreview title={title} date={date} url={url} imageData={imageData} key={title} />
          )
        })}
      </PostsPreviewGrid>
      <ExternalLink href="https://vladkyshkan.medium.com" target="_blank" rel="noopener">
        <Button light>
          See all posts
          <IconArrow />
        </Button>
      </ExternalLink>
    </PostsGridStyled>
  )
}

export default PostsGrid

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import PostPreview from "./postPreview"

const PostsGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: -128px;

  @media only screen and (max-width: 900px) {
    margin-bottom: -64px;
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
      {posts.map(({ node: post }) => {
        const { title, date, url } = post
        const imageData = post.image.childImageSharp.fluid

        return (
          <PostPreview title={title} date={date} url={url} imageData={imageData} key={title} />
        )
      })}
    </PostsGridStyled>
  )
}

export default PostsGrid

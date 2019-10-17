import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BookCard from "./bookCard"

const BooksGridStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;

  div {
    margin-right: 16px;
    margin-bottom: 8px;

    &:nth-child(6n) {
      margin-right: 0;
    }
  }
`

const BooksGrid = () => {
  const data = useStaticQuery(graphql`
    {
      allBooksJson {
        edges {
          node {
            title
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

  const books = data.allBooksJson.edges

  return (
    <BooksGridStyled>
      {books.map(({ node: book }) => {
        const { title, url } = book
        const imageData = book.image.childImageSharp.fluid

        return (
          <BookCard title={title} url={url} imageData={imageData} key={title} />
        )
      })}
    </BooksGridStyled>
  )
}

export default BooksGrid

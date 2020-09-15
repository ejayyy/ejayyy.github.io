import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/laptop-cat-night.svg"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <div css={css`
          max-width: 530px;
          width: 100%;
          float: left;
          padding: 1.5rem;
        `}>
        <Logo />
      </div>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} css={{ display: 'inline-block' }}>
              <h3>
                {node.frontmatter.title}
                <small
                  css={css`
                    opacity: .8
                    `}>
                  — {node.frontmatter.date}
                </small>
              </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
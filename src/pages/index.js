import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/laptop-cat-night.svg"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <div css={css`
          width: 530px;
          float: left;
          padding: 1.5rem;
        `}>
        <Logo />
      </div>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3
                css={css`
                    margin-top: 0;
                    margin-bottom: ${rhythm(1 / 4)};
                  `}>
                {node.frontmatter.title}
                <small
                  css={css`
                      color: #bbb;
                    `}
                >
                  — {node.frontmatter.date}
                </small>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
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
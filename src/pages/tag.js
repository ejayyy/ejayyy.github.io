import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default function Tags({ data }) {
  return (
    <Layout>
      {data.allMarkdownRemark.group.map(group => (
        <div css={css`
          margin-bottom: 1rem;
        `}>
          <h3>{group.fieldValue} <small>({group.totalCount})</small></h3>
          {group.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug} css={css`
                display: inline-block;
              `}>
                <h4>
                  {node.frontmatter.title}
                  <small
                    css={css`
                    opacity: .8
                    `}>
                    — {node.frontmatter.date}
                  </small>
                </h4>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
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
  }
`
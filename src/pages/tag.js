import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Tags({ data }) {
  return (
    <Layout>
      <SEO title="Tag" />
      {data.allMarkdownRemark.group.map(group => (
        <div css={css`
                    margin-bottom: 1.2rem;
                    display: flex;
                    flex-direction: column;`}>
          <h3 css={css`margin-bottom: 0.2rem;`}>{group.fieldValue} <small>({group.totalCount})</small></h3>
          {group.edges.map(({ node }) => (
            <Link key={node.id} to={node.fields.slug} css={css`display: inline-block;width: fit-content;`}>
              <h4 className={'post-head'}>
                {node.frontmatter.title}
                <small css={css`opacity: .8`}>
                  — {node.frontmatter.date}
                </small>
              </h4>
            </Link>
          ))}
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}) {
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
          }
        }
      }
    }
  }
`
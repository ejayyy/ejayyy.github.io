import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Tags({ data }) {
  return (
    <Layout>
      <Seo title="Tag" />
      <div css={css`
                  margin-bottom: 1.2rem;
                  display: flex;
                  flex-direction: column;
                  gap: 2rem;
      `}>
        {data.allMarkdownRemark.group.map(group => (
          <div>
            <h3>{group.fieldValue} <small>({group.totalCount})</small></h3>
            <ul css={css`margin:0`}>
              {group.edges.map(({ node }) => (
                <li>
                  <Link key={node.id} to={node.fields.slug} css={css`display: inline-block;width: fit-content;`}>
                    {node.frontmatter.title}
                    <small className="post-tail">
                      {node.frontmatter.date}
                    </small>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {draft: {ne: true}}}
    ) {
      group(field: {frontmatter: {tags: SELECT}}) {
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
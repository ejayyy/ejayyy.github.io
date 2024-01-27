import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <Seo title="Home" />
      <div css={css`margin: 2.5rem auto 0 auto;`}>
        <div css={css`
                max-width: 24.5rem;
                width: 100%;
                float: left;
                padding: 0.5rem;
      `}>
          <img className={'main-logo'} alt="logo" css={css`margin-bottom: 0`} />
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} css={css`display: inline-block`}>
              <h3 className={'post-head'}>
                {node.frontmatter.title}
                <small
                  css={css`opacity: .8`}>
                  — {node.frontmatter.date}
                </small>
              </h3>
            </Link>
            <p>{node.frontmatter.spoiler}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {draft: {ne: true}}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            spoiler
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
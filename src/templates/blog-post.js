import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <h1 css={css`
                margin: 2.5rem 0 2rem 0;
                font-size: 2.5rem;
                font-weight: 900;
                stroke-color: var(--textNormal);
                stroke-width: 1px;
                `}>{post.frontmatter.title}</h1>
            <p css={css`margin-top: -1.75rem;`}>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export const query = graphql`
query($slug: String!){
    markdownRemark(fields:{slug:{eq:$slug}}){
        html
        frontmatter{
            title
            date(formatString: "MMMM DD, YYYY")
        }
        excerpt
    }
}`
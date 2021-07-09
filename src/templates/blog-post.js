import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
            <SEO title={post.frontmatter.title} description={post.frontmatter.spoiler} />
            <div css={css`margin: 3rem 0`}>
                <h1 id="post-header" css={css`
                    margin: 0.75rem 0;
                    font-size: 2.5rem;
                    font-weight: 900;
                    text-stroke: 2px var(--textNormal);
                    -webkit-text-stroke: 2px var(--textNormal);
                `}>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.date}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
        </Layout>
    )
}

export const query = graphql`
query($slug: String!){
    markdownRemark(fields:{slug:{eq:$slug}}){
        tableOfContents
        html
        frontmatter{
            title
            date(formatString: "MMMM DD, YYYY")
            spoiler
        }
    }
}`
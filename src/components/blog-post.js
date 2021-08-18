import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "./layout"
import SEO from "./seo"

export default function BlogPost({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
            <SEO title={post.frontmatter.title} description={post.frontmatter.spoiler} />
            <aside css={css`
                position: fixed;
                width: 300px;
                z-index: 2;
                right: 20px;
                @media (max-width: 1350px) {
                    display: none;
                }
            `} dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
            <main>
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
                <div css={css`margin: 1rem 0.5rem`}>
                    <div id="vc-feelback-main" data-access-token="3b1c367068a84e0c870dcd49b5b5fb37" data-display-type="4"></div>
                </div>
            </main>
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
import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "./layout"
import Seo from "./seo"

export default function BlogPost({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
            <Seo title={post.frontmatter.title} description={post.frontmatter.spoiler} />
            <aside css={css`
                position: fixed;
                width: 300px;
                z-index: 2;
                right: 20px;
                max-height: 70vh;
                overflow-y: auto;
                @media (max-width: 1350px) {
                    display: none;
                }
            `} dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
            <article>
                <section css={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 60%;
                    height: 50%;
                    z-index: -10;
                `}></section>
                <section css={css`margin: 3rem 0`}>
                    <h1 id="post-header" css={css`
                    margin: 0.75rem 0;
                    font-size: 2.5rem;
                    font-weight: 900;
                    text-stroke: 2px var(--textNormal);
                    -webkit-text-stroke: 2px var(--textNormal);
                `}>{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                </section>
                <section css={css`
                    @media (max-width: 45rem) {
                        margin: 0 1rem;
                    }
                `} dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
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
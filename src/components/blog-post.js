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
            <article>
                <section css={css`margin-bottom:2.5rem`}>
                    <h1 id="post-header" css={css`
                    font-size: 2.2rem;
                    font-weight: 700;
                `}>{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.spoiler}</p>
                    <p css={css`text-align:right`}>{post.frontmatter.date}</p>
                </section>
                <section className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
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
            spoiler
        }
    }
}`
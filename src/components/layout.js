import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import Footer from "./footer"

const nonStyle = `
    box-shadow: none;
    &:hover{
        color: inherit;
        box-shadow: none;
        text-decoration: underline;
    }
`
const menuStyle = `
    margin: 0.1rem 0.5rem;
`
const maxWidth = 45

export default function Layout({ children }) {
    return (
        <>
            <header
                css={css`
                    padding: 2rem 0;
                    `}>
                <nav css={css`
                    display: flex;
                    justify-content: space-between;
                    margin: 0 auto;
                    max-width: ${maxWidth}rem;
                `}>
                    <Link to="/" css={css`${nonStyle}`}>
                        <h3 css={css`margin: 0`}>MySweetLittleBlog</h3>
                    </Link>
                    <Link to="/tag" css={css`${menuStyle} ${nonStyle}`}>Tag</Link>
                </nav>
            </header>
            <main css={css`
                margin: 0 auto;
                max-width: ${maxWidth}rem;
           `}>
                {children}
            </main>
            <Footer maxWidth={maxWidth} />
        </>
    )
}
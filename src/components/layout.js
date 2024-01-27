import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

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
        <div css={css`
            background-color: var(--bg);
            color: var(--textNormal);
            transition: color 0.2s ease-out, background 0.2s ease-out;
            @media (max-width: 45rem) {
                padding: 0 1rem;
            }
        `}>
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
                    <div css={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    `}>
                        <Link to="/tag" css={css`${menuStyle} ${nonStyle}`}>Tag</Link>
                    </div>
                </nav>
            </header>
            <main css={css`
                margin: 0 auto;
                max-width: ${maxWidth}rem;
                min-height: 100vh;
           `}>
                {children}
            </main>
            <footer css={css`
                display: flex;
                justify-content: space-around;
                max-width: ${maxWidth}rem;
                margin: 0 auto;
                padding: 3rem 0;
            `}>
                <a href="https://github.com/ejayyy" target="_blank" rel="noreferrer" css={css`${nonStyle}`}>
                    <img className="logo github" alt="logo" />
                    GitHub
                </a>
                <a href="https://leetcode.com/ejayyy/" target="_blank" rel="noreferrer" css={css`${nonStyle}`}>
                    <img className="logo leetcode" alt="logo" />
                    Leetcode
                </a>
                <a href="https://ejayyy.github.io/blog/" target="_blank" rel="noreferrer" css={css`${nonStyle}`}>
                    <img className="logo blog" alt="logo" />
                    Previous Blog
                </a>
            </footer>
        </div>
    )
}
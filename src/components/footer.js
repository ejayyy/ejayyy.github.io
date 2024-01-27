import React from "react"
import { css } from "@emotion/react"

export default function Footer({ maxWidth }) {
    return (
        <footer css={css`
                display: flex;
                justify-content: space-around;
                max-width: ${maxWidth}rem;
                margin: 0 auto;
                padding: 3rem 0;
            `}>
            <a href="https://github.com/ejayyy" target="_blank" rel="noreferrer">
                <img className="logo github" alt="logo" />
                GitHub
            </a>
            <a href="https://leetcode.com/ejayyy/" target="_blank" rel="noreferrer">
                <img className="logo leetcode" alt="logo" />
                Leetcode
            </a>
            <a href="https://ejayyy.github.io/blog/" target="_blank" rel="noreferrer">
                <img className="logo blog" alt="logo" />
                Previous Blog
            </a>
        </footer>
    )
}
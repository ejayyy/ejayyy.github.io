import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"

export default function Footer({ maxWidth }) {
    return (
        <footer css={css`
                display: flex;
                justify-content: space-around;
                max-width: ${maxWidth}rem;
                margin: 3rem auto 0;
                padding: 5rem 0;
                border-top: 2px solid #e9e9e9;
            `}>
            <Link to="/portfolio">Portfolio</Link>
            <a href="https://github.com/ejayyy" target="_blank" rel="noreferrer">
                <img className="logo github" alt="logo" />
                GitHub
            </a>
            <a href="https://leetcode.com/ejayyy/" target="_blank" rel="noreferrer">
                <img className="logo leetcode" alt="logo" />
                Leetcode
            </a>
        </footer>
    )
}
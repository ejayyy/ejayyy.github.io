import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

export default function Layout({ children }) {
    return (
        <div css={css`
            margin: 3rem auto;
            max-width: 1350px;
        `}>
            <header
                css={css`
                margin-bottom: 1.5rem;
                `}>
                <Link to="/">
                    <h3>MySweetLittleBlog</h3>
                </Link>
            </header>
            {children}
        </div>
    )
}
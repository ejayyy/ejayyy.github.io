import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

export default function Layout({ children }) {
    return (
        <div>
            <header
                css={css`
                    padding: 1rem 0;
                    margin-bottom: 1.5rem;
                    border-bottom: 1px solid #DDDDE1;
                    `}>
                <nav css={css`
                    display: flex;
                    justify-content: space-between;
                    margin: 0 auto;
                    max-width: 1350px;
                `}>
                    <Link to="/">
                        <h3 css={css`
                            margin: 0;
                        `}>MySweetLittleBlog</h3>
                    </Link>
                    <div>
                        <Link to="/" css={css`padding:0 0.3rem`}>Develop</Link>
                        <Link to="/" css={css`padding:0 0.3rem`}>Life</Link>
                        <Link to="/" css={css`padding:0 0.3rem`}>Tag</Link>
                    </div>
                </nav>
            </header>
            <div css={css`
                margin: 0 auto;
                max-width: 1350px;
           `}>
                {children}
            </div>
        </div>
    )
}
import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const nonStyle = `
    box-shadow: none;
    &:hover{
        color: initial;
        box-shadow: none;
    }
`
const menuStyle = `
    margin: 0.1rem 0.5rem;
`

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
                    padding: 0 .5rem;
                    max-width: 1350px;
                `}>
                    <Link to="/" css={css`${nonStyle}`}>
                        <h3>MySweetLittleBlog</h3>
                    </Link>
                    <div>
                        <Link to="/" css={css`${menuStyle} ${nonStyle}`}>Develop</Link>
                        <Link to="/" css={css`${menuStyle} ${nonStyle}`}>Life</Link>
                        <Link to="/tag" css={css`${menuStyle} ${nonStyle}`}>Tag</Link>
                    </div>
                </nav>
            </header>
            <div css={css`
                margin: 0 auto;
                max-width: 1350px;
                padding: 0 .5rem;
           `}>
                {children}
            </div>
        </div>
    )
}
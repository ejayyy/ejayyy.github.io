import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

const nonStyle = `
    box-shadow: none;
    &:hover{
        color: inherit;
        box-shadow: none;
    }
`
const menuStyle = `
    margin: 0.1rem 0.5rem;
`
const maxWidth = 45

export default function Layout({ children }) {
    return (
        <div css={css`
            background-color: 'var(--bg)',
            color: 'var(--textNormal)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
        `}>
            <header
                css={css`
                    padding: 1rem 0;
                    margin-bottom: 1.5rem;
                    `}>
                <nav css={css`
                    display: flex;
                    justify-content: space-between;
                    margin: 0 auto;
                    padding: 0 .5rem;
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
            <div css={css`
                margin: 0 auto;
                max-width: ${maxWidth}rem;
                padding: 0 .5rem;
           `}>
                {children}
            </div>
        </div>
    )
}
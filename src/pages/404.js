import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default function Lost() {
  return (
    <Layout>
      <div css={css`
          max-width: 1000px;
          margin: auto;
          text-align: center;
        `}>
        <img className={'main-logo'} css={css`max-width: 65%;`} alt="logo" />
        <h3>Are you lost way?</h3>
        <h1 css={css`font-size: 4.1rem;`}><span role="img" aria-label="balloon">🎈</span>404<span role="img" aria-label="balloon">🎈</span></h1>
      </div>
    </Layout>
  )
}
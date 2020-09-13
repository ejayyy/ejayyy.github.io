import React from "react"
import Layout from "../components/layout"
import Logo from "../images/laptop-cat-night.svg"

export default function Lost() {
  return (
    <Layout>
      <div css={{ maxWidth: 1000, margin: `auto`, textAlign: `center` }}>
        <Logo css={{ maxWidth: `65%` }} />
        <h3>Are you lost way?</h3>
        <h1 css={{ fontSize: '4.1rem' }}><span role="img" aria-label="balloon">🎈</span>404<span role="img" aria-label="balloon">🎈</span></h1>
      </div>
    </Layout>
  )
}
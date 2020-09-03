import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Header headerText="Hi WORLD" />
      <p>How sleepy</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  )
}
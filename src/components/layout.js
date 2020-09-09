import React from "react"
import { Link } from "gatsby"

export default function Layout({ children }) {
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            <header style={{ marginBottom: `1.5rem` }}>
                <Link to="/">
                    <h3 style={{ display: `inline` }}>MySweetLittleBlog</h3>
                </Link>
            </header>
            {children}
        </div>
    )
}
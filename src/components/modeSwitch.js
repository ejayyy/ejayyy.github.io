import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { css } from "@emotion/core"

class ModeSwitch extends React.Component {
    render() {
        return (
            <ThemeToggler>
                {({ theme, toggleTheme }) => {
                    return (
                        <label role="img" aria-label="switch dark mode">
                            <input
                                type="checkbox"
                                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                                checked={theme === 'dark'}
                                css={css`display:none;`}
                            />{theme === 'dark' ? '🌞' : '🌚'}
                        </label>
                    )
                }}
            </ThemeToggler>
        )
    }
}

export default ModeSwitch
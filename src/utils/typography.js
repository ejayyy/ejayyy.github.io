import Typography from "typography"
import funston from "typography-theme-funston"

funston.baseLineHeight = 1.25
funston.scaleRatio = 2.25
funston.paragraphSpaceing = 1.25
funston.bodyGray = 11
funston.boldWeight = 600
funston.paragraphSpaceing = 1.25
funston.overrideThemeStyles = () => ({
    'h1,h2,h3,h4,h5,h6': {
        margin: '0'
    },
    'a': {
        textDecoration: 'none',
        boxShadow: 'inset 0 -3px 0 #9bc5ec',
        transition: 'box-shadow .5s, color .2s'
    },
    'a:hover': {
        boxShadow: 'inset 0 -50px 0 #3498DB',
        color: '#fff'
    }
})

const typography = new Typography(funston)

export const { scale, rhythm, options } = typography
export default typography
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
        marginBottom: '1rem'
    },
    'a': {
        textDecoration: 'none'
    },
    'a:hover': {
        textDecoration: 'underline'
    }
})

const typography = new Typography(funston)

export const { scale, rhythm, options } = typography
export default typography
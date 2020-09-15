import Typography from "typography"
import funston from "typography-theme-funston"

const typography = new Typography({
    baseLineHeight: 1.25,
    scaleRatio: 2.25,
    paragraphSpaceing: 1.25,
    bodyGray: 11,
    boldWeight: 600,
    headerFontFamily: ['Youth'],
    bodyFontFamily: ['SeoulNamsanM'],
    overrideThemeStyles: () => ({
        'h1,h2,h3,h4,h5,h6': {
            margin: '0'
        },
        'a': {
            color: '#000',
            textDecoration: 'none',
            boxShadow: 'inset 0 -3px 0 #9bc5ec',
            transition: 'box-shadow .5s, color .2s'
        },
        'a:hover': {
            boxShadow: 'inset 0 -50px 0 #3498DB',
            color: '#fff'
        }
    })
}, funston)

export const { scale, rhythm, options } = typography
export default typography
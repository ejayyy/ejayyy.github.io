module.exports = {
    pathPrefix: "/",
    siteMetadata: {
        title: `My sweet little blog`,
        description: `Brand new journal`,
        author: `EJ`,
    },
    plugins: [
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,
                display: `standalone`,
                icon: `src/assets/image/logo/icon.png`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-js",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            languageExtensions: [{
                                language: "superscript",
                                extend: "javascript",
                                definition: {
                                    superscript_types: /(SuperType)/,
                                },
                                insertBefore: {
                                    function: {
                                        superscript_keywords: /(superif|superelse)/,
                                    },
                                },
                            }, ],
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                            escapeEntities: {},
                        }
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                omitGoogleFont: true,
                pathToConfigModule: `src/assets/typography`,
            },
        },
    ],
}
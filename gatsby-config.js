module.exports = {

    siteMetadata: {
        title: 'Gatsby blog baby',
    },

    plugins: [
        'gatsby-plugin-sass',

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'files',
                path: `${__dirname}/src/pages`,
            },
        },
    ]
}
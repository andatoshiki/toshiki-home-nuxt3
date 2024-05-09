const Feed = () => {
    const baseUrlArticles = 'https://toshiki.dev/blog'

    const feedFormats = {
        rss: { type: 'rss2', file: 'rss.xml' },
        json: { type: 'json1', file: 'feed.json' }
    }

    const { $content } = require('@nuxt/content')

    const createFeedArticles = async function (feed: any) {
        feed.options = {
            title: "Toshiki's Blog",
            description: 'Real life stories anecdotes & developmental journeys for embarking your inspirations.',
            link: baseUrlArticles
        }

        const articles = await $content('blog').fetch()

        articles.forEach((article: any) => {
            const url = `${baseUrlArticles}/${article.slug}`

            const hostName = process.env.NODE_ENV === 'production' ? 'https://toshiki.dev' : 'http://localhost:3000'

            const postImagesPath = `${hostName}/assets/images/posts`

            feed.addItem({
                title: article.title,
                slug: article.slug,
                link: url,
                image: article.image
                    ? `${hostName}${article.image}`
                    : `${postImagesPath}/${url?.split('/')?.at(-1)}.jpg`,
                date: new Date(article.createdAt),
                description: article.description,
                content: article.summary
            })
        })
    }

    return Object.values(feedFormats).map(({ file, type }) => ({
        path: `${file}`,
        create: createFeedArticles,
        type
    }))
}

export default Feed

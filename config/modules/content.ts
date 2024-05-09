import type { IContentOptions } from '@nuxt/content/types/index'

// prism highlighter
const Content: IContentOptions = {
    liveEdit: false,
    dir: 'content',
    markdown: {
        prism: {
            theme: 'prism-themes/themes/prism-one-dark.css'
        },
        /* @ts-ignore-next-line */
        remarkExternalLinks: {
            target: '_blank',
            rel: 'noreferrer noopener'
        },
        remarkPlugins: [
            [
                'remark-autolink-headings',
                {
                    behavior: 'append'
                }
            ],
            'remark-math'
        ],
        rehypePlugins: [
            // this next line here
            ['rehype-katex', { output: 'html' }]
        ]
    }
}

export default Content

<script lang="ts">
import Vue from 'vue'

/* Interfaces */
import type { Repository } from '../types/Response/GitHub'

interface Project {
    title: string
    description: string
    href?: string
    to?: string
    icon?: string
}

interface Experience {
    title: string
    url: string
    position: string
    date: string
    isHidden?: boolean
}

interface ExperienceObject {
    jobs: Experience[]
    education: Experience[]
}

export default Vue.extend({
    data() {
        return {
            showModal: false,
            showExtra: {
                jobs: false,
                education: false
            },
            repos: [] as Repository[],
            experiences: {
                jobs: [
                    {
                        title: 'Hexbyte',
                        url: 'https://github.com/hexbytemd',
                        position: 'Co-founder & DevOps',
                        date: 'Forthcoming'
                    },
                    {
                        title: 'Shikiology',
                        url: 'https://github.com/shikiology',
                        position: 'Co-founder & developer',
                        date: '2024-future'
                    },
                    {
                        title: 'RRorg',
                        url: 'https://github.com/rrorg/rr',
                        position: 'Core developer & interpreter',
                        date: '2024-future'
                    },
                    {
                        title: "Toshiki's Devpedia",
                        url: 'https://github.com/toshikidev',
                        position: 'Co-founder & developer',
                        date: '2023-future'
                    },
                    {
                        title: 'GoHUGO Fixit',
                        url: 'https://github.com/hugo-fixit',
                        position: 'Core developer',
                        date: '2022-2023'
                    },
                    {
                        title: 'Microsoft 365 Developer Program',
                        url: 'https://developer.microsoft.com/en-us/microsoft-365/dev-program',
                        position: 'Core contributor',
                        data: '2020-2022'
                    }
                ],
                education: [
                    {
                        title: 'University of California, San Diego',
                        url: 'https://ucsd.edu/',
                        position: 'Computer Science, B.S.',
                        date: '2026-future'
                    },
                    {
                        title: 'Ira A. Fulton Schools of Engineering',
                        url: 'https://engineering.asu.edu/',
                        position: 'Computer Science, B.S.',
                        date: '2024-present'
                    },
                    {
                        title: 'W.P. Carey School of Business',
                        url: 'https://wpcarey.asu.edu/',
                        position: 'Finance & Business, B.A.',
                        date: '2023-present'
                    },
                    {
                        title: 'Arizona State University, Global Launch',
                        url: 'https://www.asu.edu/',
                        position: 'Global Launch Intl. Program',
                        date: '2023-2024'
                    }
                ]
            } as ExperienceObject,
            cards: {
                me: [
                    {
                        title: 'About',
                        description:
                            'Explore the journey of a dedicated student developer and designer, driven by passion for innovation.',
                        href: '/me/about'
                    },
                    {
                        title: 'Songs',
                        description:
                            'Songs I listen to on a daily bases with a truncated statistical report of listening histories.',
                        href: '/me/songs'
                    },
                    {
                        title: 'Friends',
                        description:
                            'Curated selection of trusted affiliate links, handpicked friends and companions for quality and value.',
                        href: '/me/friends'
                    },
                    {
                        title: 'Contacts',
                        description:
                            'Perceive the intents to contact me for communication? Check all platform applied to your favor for contacts.',
                        href: '/me/contact'
                    }
                ],
                pages: [
                    {
                        title: 'Blog',
                        description:
                            'Real life stories anecdotes & developmental journeys for embarking your inspirations.',
                        href: '/blog'
                    },
                    {
                        title: 'Projects',
                        description:
                            'View all my notable public projects with illustrations and descriptions for better insights.',
                        href: '/projects'
                    },
                    {
                        title: 'Repositories',
                        description:
                            'View all my public repositories on GitHub and discover particular ones to your interests for collab.',
                        href: '/me/repos'
                    },
                    {
                        title: 'Donate',
                        description:
                            'Support our mission and make a difference by contributing to our future developments and researches with a tip.',
                        href: '/donate'
                    }
                ]
            },
            skills: [
                {
                    title: 'Languages',
                    items: [
                        'Go',
                        'C',
                        'C++',
                        'Markdown',
                        'Vue.js',
                        'React.js',
                        'HTML',
                        'Tailwind CSS',
                        'Node.js',
                        'CSS',
                        'Shell',
                        'Sass',
                        'EJS',
                        'Vite',
                        'Babel',
                        'Angular',
                        'Rust',
                        'LaTeX',
                        'Python',
                        'SQLite',
                        'TypeScript',
                        'JavaScript',
                        'Nuxt.js',
                        'Pug'
                    ]
                },
                {
                    title: 'Apps',
                    items: [
                        {
                            title: 'VS Code',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Figma'
                        },
                        {
                            title: 'Telegram',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'PhotoShop',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Illustrator',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Premiere Pro',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'BitWarden',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Goland',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Android Studio',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'iTerm2',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Vim',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Windows Terminal',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Safari',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'AdGuard',
                            iconPack: 'IconBrand'
                        }
                    ]
                },
                {
                    title: 'Services',
                    items: [
                        {
                            title: 'GitHub',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Firebase'
                        },
                        {
                            title: 'Youtube',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Netlify',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'BitBucket',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Notion',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'CloudFlare',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Amazon AWS',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Vercel',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'NPM',
                            iconPack: 'IconDev'
                        },
                        {
                            title: 'Yarn',
                            iconPack: 'IconDev'
                        },
                        {
                            title: 'PNPM',
                            iconPack: 'IconDev'
                        },
                        {
                            title: 'Supabase',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'GoDaddy',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Superuser',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Steam',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Adobe',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Reddit',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Stack Overflow',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Stack Exchange',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Instagram',
                            iconPack: 'IconBrand'
                        }
                    ]
                },
                {
                    title: 'Machines',
                    items: [
                        {
                            title: 'MacOS',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Windows',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Ubuntu',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Debian',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'FreeBSD',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Arch Linux',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'OpenWrt',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Switch',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'PlayStation',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Xbox',
                            iconPack: 'IconBrand'
                        }
                    ]
                },
                {
                    title: 'Vehicles',
                    items: [
                        {
                            title: 'Audi',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Toyota',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'Ducati',
                            iconPack: 'IconBrand'
                        },
                        {
                            title: 'KTM',
                            iconPack: 'IconBrand'
                        }
                    ]
                }
            ]
        }
    },
    head: {
        title: 'Home'
    },
    methods: {
        async scrollToSection(id: string) {
            if (this.$route.hash === id)
                await this.$router.replace({
                    hash: ''
                })

            await this.$router.replace({
                hash: id
            })
        }
    }
})
</script>

<template>
    <div class="margin space-y-24 mb-10">
        <header
            class="rounded-md flex flex-col-reverse my-16 py-10 md:(flex-row items-center justify-between) justify-center"
        >
            <div class="md:w-8/12">
                <div class="space-y-5">
                    <Status class="mt-4 flex justify-center md:justify-start" />
                    <h1
                        class="font-semibold text-center text-lg md:(text-xl text-left) text-black/50 dark:text-white/50"
                    >
                        Hi, I am
                        <span class="text-black/90 dark:text-white/90"> 安田俊樹 </span>
                    </h1>

                    <h1
                        class="font-semibold text-center text-4xl md:(text-6xl text-left) text-black/90 leading-normal dark:text-white/90"
                    >
                        Anda Toshiki
                        <!-- <br />
                        <p
                            class="font-bold text-center text-2xl md:(text-4xl text-left) text-black/90 leading-normal dark:text-white/90"
                        >
                            安田俊樹
                        </p> -->
                    </h1>

                    <!-- most commonly used language by user showcase with 4 or more slots reserved within the existing empty space between the splitting area -->
                    <div class="flex items-center justify-center md:justify-start gap-x-3 gap-y-2 flex-wrap">
                        <Button
                            v-for="item in ['Nuxt.js', 'JavaScript', 'TypeScript', 'Vue.js']"
                            :key="item"
                            class="inline-block"
                        >
                            <IconDev :brand="item" class="h-5 w-5" />
                        </Button>

                        <Button
                            v-tippy="{ content: 'More', placement: 'bottom' }"
                            @click.native="scrollToSection('#technologies')"
                        >
                            <IconEllipsis class="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>

            <div class="mx-auto mb-4 md:mb-0">
                <SmartImage src="/assets/images/avatar.png" class="h-50 w-43" />
            </div>
        </header>

        <section id="pages">
            <Title>Pages</Title>

            <div class="mt-4 grid gap-4 md:grid-cols-2">
                <Card
                    v-for="(card, index) in cards.pages"
                    :key="`card-p-${index}`"
                    :title="card.title"
                    :href="card.href"
                >
                    {{ card.description }}
                </Card>
            </div>
        </section>

        <section id="me">
            <Title>Me</Title>

            <div class="mt-4 grid gap-4 md:grid-cols-2">
                <Card v-for="(card, index) in cards.me" :key="`card-m-${index}`" :title="card.title" :href="card.href">
                    {{ card.description }}
                </Card>
            </div>
        </section>

        <section id="experiences" class="grid gap-x-8 gap-y-24 md:grid-cols-2">
            <div>
                <div class="flex items-center gap-4 justify-between">
                    <Title>Experience</Title>
                    <button
                        type="button"
                        class="text-black/50 text-sm hover:underline dark:text-white/30"
                        @click="showExtra.jobs = !showExtra.jobs"
                    >
                        {{ showExtra.jobs ? 'show less' : 'show more' }}
                    </button>
                </div>

                <div class="mt-4 grid gap-2">
                    <CardExperience
                        v-for="(experience, index) in experiences.jobs"
                        v-show="experience.isHidden ? showExtra.jobs : true"
                        :key="`experience-job-${index}`"
                        :title="experience.title"
                        :url="experience.url"
                        :hidden-badge="experience.isHidden"
                        :date="experience.date"
                        :position="experience.position"
                    />
                </div>
            </div>

            <div>
                <div class="flex items-center gap-4 justify-between">
                    <Title>Education</Title>
                    <button
                        type="button"
                        class="text-black/50 text-sm hover:underline dark:text-white/30"
                        @click="showExtra.education = !showExtra.education"
                    >
                        {{ showExtra.education ? 'show less' : 'show more' }}
                    </button>
                </div>

                <div class="mt-4 grid gap-2">
                    <CardExperience
                        v-for="(experience, index) in experiences.education"
                        v-show="experience.isHidden ? showExtra.education : true"
                        :key="`experience-education-${index}`"
                        :title="experience.title"
                        :url="experience.url"
                        :hidden-badge="experience.isHidden"
                        :date="experience.date"
                        :position="experience.position"
                    />
                </div>
            </div>
        </section>

        <section id="technologies">
            <Title>Technologies & Peripherals</Title>

            <div class="flex flex-col space-y-6 mt-8">
                <section v-for="category in skills" :key="category.title">
                    <h5
                        class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:(text-white/30 border-white/5)"
                    >
                        {{ category.title }}
                    </h5>

                    <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
                        <CardSkill
                            v-for="(skill, index) in category.items"
                            :key="`skill-${index}`"
                            v-bind="typeof skill === 'object' ? skill : { title: skill }"
                        />
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.description-link {
    @apply border-neutral-500 border-b-2 border-opacity-50 hover:border-opacity-75;
}
</style>

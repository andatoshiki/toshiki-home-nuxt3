<script>
export default {
    head() {
        const title = 'Projects'
        const description = 'Check out my projects and see what I can build for you!'

        return {
            title,
            meta: this.$prepareMeta({
                title,
                description
            })
        }
    },
    data: () => ({
        projects: [
            // project card component tiles template
            // {
            //     label: '',
            //     description: '',
            //     image: '',
            //     buttons: [
            //     {
            //             text: '',
            //             link: '',
            //             icon: ''
            //         }
            //     ]
            // },
            {
                note: 'You are here!',
                name: "Toshiki's Homepage",
                description:
                    "The ultimate yet complete nirvana of Toshiki's personal all-in-one home-landing page/blog/portfolio website with an entire reconstruction powered by Nuxt3, Vue, Vercel, Cloudflare Workers & Netlifly! This is a derivative fork of eggsy's homepage with custom modification.",
                image: 'https://r2.toshiki.dev/image/toshiki-home-nuxt/b81061c5cb551302f65fe96d2878f3a0.png',
                buttons: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/andatoshiki/toshiki-home-nuxt3',
                        icon: 'IconBrand:github'
                    }
                ]
            },
            {
                name: "Toshiki's Notebook",
                description:
                    "Toshiki's web notebook built upon Vitepress and deployed via Vercel! Eternal & digital knowledge base for content creation and notes management.",
                image: 'https://r2.toshiki.dev/image/toshiki-home-nuxt/94bb1c4c78f65f8b099fbb58d1b37685.png',
                buttons: [
                    {
                        text: 'Visit',
                        link: 'https://note.toshiki.dev',
                        icon: 'IconLink'
                    }
                ]
            },
            {
                name: "Toshiki's HTTP",
                description:
                    "Toshiki's self-hosted version of HTTP error code illustration API HTTP status code replacement in a joyful way with the beloved Ukuku character as an anime representative",
                image: 'https://r2.toshiki.dev/image/toshiki-home-nuxt/edee54791a6a37109000015ebfd4de18.png',
                buttons: [
                    {
                        text: 'Visit',
                        link: 'https://http.toshiki.dev',
                        icon: 'IconLink'
                    },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/andatoshiki/toshiki-http',
                        icon: 'IconBrand:github'
                    }
                ]
            },
            {
                name: "Toshiki's Live2D Viewer",
                description: 'A simple web based live2d viewer based off pixi live2d display',
                image: 'https://r2.toshiki.dev/image/toshiki-home-nuxt/662f008132d08becac07f8b2eac7b55b.png',
                buttons: [
                    {
                        text: 'Visit',
                        link: 'https://live2d.toshiki.dev',
                        icon: 'IconLink'
                    },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/andatoshiki/toshiki-live2d-viewer',
                        icon: 'IconBrand:github'
                    }
                ]
            },
            {
                name: "Toshiki's Temple Block",
                description: "Toshiki's virtual temple block to accumulate virtual merits for positive morality!",
                image: 'https://r2.toshiki.dev/image/toshiki-home-nuxt/4c107f75be0eb7df9f5d6de2a0dfc612.png',
                buttons: [
                    {
                        text: 'Visit',
                        link: 'https://merit.toshiki.dev',
                        icon: 'IconLink'
                    },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/andatoshiki/toshiki-temple-block',
                        icon: 'IconBrand:github'
                    }
                ]
            },
            {
                name: "Toshiki's Gallery",
                description: "Toshiki's own self-hosted web album with HUGO+rhythm+Vercel+GitHub",
                image: 'https://r2.toshiki.dev/image/toshiki-home-nuxt/129e5b1ad70708054e51f6b7d789f479.png',
                buttons: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/andatoshiki/toshiki-gallery',
                        icon: 'IconBrand:github'
                    }
                ]
            },
            {
                name: "Toshiki's Mahjong Calculator",
                description:
                    "Mahjong calculator tool that calculates players' scores in a game based on their collected tiles and the scoring rules of Mahjong, aiding in efficient scorekeeping and determining the winner.",
                image: 'https://r2.toshiki.dev/image/toshiki-home-nuxt/153f7c6864ae5289122c78358a36b553.png',
                buttons: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/andatoshiki/toshiki-mahjong-calc',
                        icon: 'IconBrand:github'
                    }
                ]
            }
        ]
    }),
    mounted() {
        this.$applyMediumZoom()
    }
}
</script>

<template>
    <PageLayout class="margin" title="My Projects" description="Check out the projects I worked on!">
        <section class="mr-3 ml-3 flex items-center flex-wrap gap-2">
            <span class="text-sm">Jump to:</span>
            <Button
                v-for="(project, index) in projects"
                :key="`skipto-button-${index}`"
                :href="`#${project.name.toLowerCase().split(' ').join('-')}`"
            >
                {{ project.name }}
            </Button>
        </section>

        <section
            v-for="(project, index) in projects"
            :key="`project-${index}`"
            :id="project.name.toLowerCase().split(' ').join('-')"
            class="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            :class="index === 0 ? 'mt-24 mb-42' : 'my-42'"
        >
            <div class="space-y-4">
                <span
                    v-if="project.label"
                    class="bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5 dark:(bg-white/5 text-white/30)"
                >
                    {{ project.label }}
                </span>

                <span
                    v-if="project.note"
                    class="bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:(bg-white/5 text-white/30)"
                >
                    {{ project.note }}
                </span>

                <h2 class="text-4xl text-black/90 font-bold dark:text-white/90">
                    {{ project.name }}
                </h2>

                <p>
                    {{ project.description }}
                </p>

                <div v-if="project.buttons" class="flex flex-wrap gap-2">
                    <Button
                        v-for="(button, index) in project.buttons"
                        :key="`button-${index}`"
                        :href="button.link"
                        :blank="!button.link.startsWith('/')"
                    >
                        <template #icon>
                            <component
                                v-if="button.icon"
                                :is="button.icon.split(':')[0]"
                                v-bind="{
                                    brand: button.icon.split(':')[1]
                                }"
                                class="h-4 w-4"
                            />
                        </template>

                        {{ button.text }}
                    </Button>
                </div>
            </div>

            <SmartFigure v-if="project.image" :src="project.image" :class="index % 2 === 0 && 'md:order-first'" />
        </section>
    </PageLayout>
</template>

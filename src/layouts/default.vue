<script lang="ts">
import Vue from 'vue'

// Types
import type { Post } from '~/src/types/Post'
import type { FetchReturn } from '@nuxt/content/types/query-builder'

export default Vue.extend({
    data() {
        return {
            posts: [] as (Post[] & FetchReturn) | (Post[] & FetchReturn)[]
        }
    },
    fetchOnServer: false,
    async fetch() {
        const posts = await this.$content('blog').sortBy('createdAt', 'desc').only(['title', 'slug']).fetch<Post[]>()

        this.posts = posts
    },
    head() {
        let string = 'toshiki.dev'
        if (this.routeIsBlog) string = 'toshiki.dev - blog'

        return {
            titleTemplate: `%s - ${string}`,
            htmlAttrs: {
                class: `min-h-screen ${this.$colorMode.value}`
            },
            meta: [
                {
                    hid: 'og:site_name',
                    name: 'og:site_name',
                    content: string
                }
            ]
        }
    },
    computed: {
        menuActions() {
            return [
                /* Navigation */
                {
                    section: 'Navigation',
                    text: 'Home',
                    icon: 'IconHome',
                    action: () => {
                        this.$router.push('/')
                    }
                },
                {
                    section: 'Navigation',
                    text: 'Blog',
                    tag: 'Search a blog post',
                    icon: 'IconDocument',
                    keybindings: ['b'],
                    childActions: [
                        {
                            text: 'All Posts',
                            icon: 'IconEye',
                            action: () => {
                                this.$router.push('/blog')
                            }
                        },
                        ...this.posts.map((post: Post) => ({
                            text: post.title,
                            icon: 'IconDocument',
                            action: () => {
                                this.$router.push(`/blog/${post.slug}`)
                            }
                        }))
                    ]
                },
                {
                    section: 'Navigation',
                    text: 'Projects',
                    icon: 'IconCog',
                    action: () => {
                        this.$router.push('/projects')
                    }
                },
                {
                    section: 'Navigation',
                    text: 'Donate',
                    icon: 'IconDollar',
                    action: () => {
                        this.$router.push('/donate')
                    }
                },

                /* Me */
                {
                    section: 'Me',
                    text: 'Repositories',
                    icon: 'IconBranch',
                    action: () => {
                        this.$router.push('/me/repos')
                    }
                },
                {
                    section: 'Me',
                    text: 'Contact',
                    icon: 'IconInbox',
                    action: () => {
                        this.$router.push('/me/contact')
                    }
                },
                {
                    section: 'Me',
                    text: 'Songs',
                    icon: 'IconMusicNote',
                    action: () => {
                        this.$router.push('/me/song')
                    }
                },
                {
                    section: 'Me',
                    text: 'Friends',
                    icon: 'IconDev:Friends',
                    action: () => {
                        this.$router.push('/me/friends')
                    }
                },

                {
                    section: 'Me',
                    text: 'About',
                    icon: 'IconDev:User',
                    action: () => {
                        this.$router.push('/me/about')
                    }
                },

                /* Social Links */
                {
                    section: 'Social Links',
                    text: 'GitHub',
                    icon: 'IconBrand:github',
                    action: () => {
                        window.open(this.$config.social.github, '_blank')?.focus()
                    }
                },
                {
                    section: 'Social Links',
                    text: 'Twitter',
                    icon: 'IconBrand:twitter',
                    action: () => {
                        window.open(this.$config.social.twitter, '_blank')?.focus()
                    }
                },
                {
                    section: 'Social Links',
                    text: 'Mastodon',
                    icon: 'IconBrand:mastodon',
                    action: () => {
                        window.open(this.$config.social.twitter, '_blank')?.focus()
                    }
                },
                {
                    section: 'Social Links',
                    text: 'Telegram',
                    icon: 'IconBrand:telegram',
                    action: () => {
                        window.open(this.$config.social.telegram, '_blank')?.focus()
                    }
                },
                {
                    section: 'Social Links',
                    text: 'Youtube',
                    icon: 'IconBrand:youtube',
                    action: () => {
                        window.open(this.$config.social.youtube, '_blank')?.focus()
                    }
                },

                /* Controls */
                {
                    section: 'Controls',
                    text: 'Toggle Color Theme',
                    icon: 'IconSun',
                    action: () => {
                        this.$colorMode.preference = this.$colorMode.value === 'dark' ? 'light' : 'dark'
                    }
                }
            ]
        }
    }
})
</script>

<template>
    <div class="min-h-screen bg-gray-50 dark:bg-neutral-900">
        <Navbar class="pt-10" />

        <!-- Nuxt component -->
        <main class="responsive-screen min-h-screen pb-8">
            <Nuxt />
        </main>

        <!-- Footer -->
        <Footer />

        <!-- Command Palette -->
        <CommandMenu :actions="menuActions" :theme="$colorMode.value">
            <template v-slot:icon="{ icon }">
                <component :is="icon.split(':')[0]" :brand="icon.split(':')[1]" class="w-4 h-4" />
            </template>
        </CommandMenu>

        <!-- Go to top button -->
        <GoTop />

        <!-- Sponsor Popup -->
        <SponsorPopup />
    </div>
</template>

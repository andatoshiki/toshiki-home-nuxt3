<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            friends: [
                {
                    logo: 'https://note.toshiki.dev/logos/logo.svg',
                    name: "Toshki's Notebook",
                    description: 'Eternal & digital knowledge base for content creation and notes management.',
                    website: 'https://note.toshiki.dev'
                },
                {
                    logo: 'https://blog.listder.xyz/pic/listder.jpg',
                    name: 'listder',
                    description: '一只很变态的萝莉控，喜欢打音游',
                    website: 'https://blog.listder.xyz/'
                },
                {
                    logo: 'https://soft.moe/avatar.webp',
                    name: "KUN's moe blog!",
                    description: "KUN's moe blog, KUN IS THE CUTEST!",
                    website: 'https://soft.moe'
                },
                {
                    logo: 'https://r2.toshiki.dev/image/toshiki-home-nuxt/fe7b01d1a1c07ed4f6010344d5ff6030.png',
                    name: "Funeral Rain's Blog",
                    description: 'The blog for Toya, kawaii but "arrogant" little girl !',
                    website: 'https://toya.moe'
                },
                {
                    logo: 'https://static.gridea.dev/cb5d8721-b666-40c6-ac0e-8c57868016d6/TQRtVrfVz.jpeg',
                    name: 'Summit’s Blog',
                    description: 'So who’s Summit?',
                    website: 'https://csmoe.top/'
                }
            ]
        }
    },
    head() {
        const title = 'Friends'
        const description =
            'Curated selection of trusted affiliate links, handpicked friends and companions for quality and value.'
        const keywords =
            "friends, @andatoshiki's friends, toshiki friends, social network, community, friendship, connections, social media, online friends, user profiles, friend list, social interaction"

        return {
            title,
            meta: this.$prepareMeta({
                title,
                description,
                keywords,
                url: 'https://toshiki.dev/friends'
            }),
            link: [
                {
                    rel: 'friends',
                    href: 'https://toshiki.dev/friends'
                }
            ]
        }
    }
})
</script>

<template>
    <PageLayout
        title="Friends"
        :description="[
            'Curated selection of trusted affiliate links, handpicked friends and companions for quality and value.'
        ]"
        class="space-y-2 margin"
    >
        <div class="flex flex-col space-y-2">
            <Title>Add Your Link</Title>
            <!-- <p class="text-black/50 dark:text-white/30">Comtemplating</p> -->
            <p>Fundamental information details of my website including 4 major fields of data.</p>
            <pre class="rounded-md h-38 shadow w-full overflow-y-auto language-json scrollbar text-sm space-y-2">
{
    logo: 'https://toshiki.dev/assets/icons/favicon.svg',
    name: 'Anda Toshiki/安田俊樹',
    description: 'Caffein overdose & Hypomanic INTJ',
    website: 'https://toshiki.dev/'
}
            </pre>
            <p>
                Contemplating to be involved or engaged as a part of my affiliation/friend list as showcased below?
                Consider to apply and submit your own homepage or portfolios through issues tab of my homepage's GitHub
                repository at
                <SmartLink
                    href="https://github.com/andatoshiki/toshiki-home-nuxt3/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:underline"
                    >@andatoshiki/toshiki-home-nuxt3</SmartLink
                >
                via an issue template pre-configured. But <b>make sure</b> you and your sites meet the following
                prerequisite conditions before submitted or else the request will be automatically triaged as nonentity,
                and will <b>not be</b> granted with consent. Make sure you read through the following truncated list for
                your reference carefully, hence.
            </p>

            <ul class="list-disc list-inside">
                <li class="indent-0.5">
                    Full site must be installed with SSL certificate with complete HTTPS coverage on full site for
                    secure & reputable connections which should be standardized on all websites.
                </li>

                <li>
                    Friend/affiliation link for this website must be added alongside submitting issue request on GitHub
                    prior to adding your website, contact me via
                    <SmartLink
                        href="https://andatoshiki.t.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:underline"
                        >@andatoshiki</SmartLink
                    >
                    on Telegram if no response has made within 24 hours of your submission.
                </li>
            </ul>

            <ul class="list-disc list-inside">
                <li>
                    Ensure the accessibility and the uptime of your website is operational throughout, or simple SLA≥90%
                    for minimizing downtime, your website will be added to uptime monitor upon the addendum and it will
                    be removed if a prolonged period of downtime is detected with inactivity.
                </li>
            </ul>

            <ul class="list-disc list-inside">
                <li>
                    Ensure the content of your website examplifying blog posts and publications are original, if a
                    reference is made, please accredit the original author or publisher for proper bibliography,
                    technical-oriented sites are preferred and prioritized during consideration.
                </li>
            </ul>

            <ul class="list-disc list-inside">
                <li>
                    Ensure your website does not contain violent or sexually abusive content and assure your content is
                    compliant and abiding regional law of your residency.
                </li>
            </ul>

            <ul class="list-disc list-inside">
                <li>
                    Your website retains constant development such as new feature implementation or vital updates of
                    article post contents.
                </li>
            </ul>
        </div>

        <p>
            <b
                >P.S.: The arrangements order of website is subjectively unbiased but solely based on chronological date
                of request without favoring parties of any types.</b
            >
        </p>
        <section class="space-y-4">
            <Title>Friend links/affiliation & my list of haremu waifus!</Title>
            <div class="grid lg:grid-cols-2 gap-4 cursor-pointer sm:grid-cols-1">
                <div
                    v-for="(friends, index) in friends"
                    :key="`friends-${index}`"
                    class="flex h-full space-x-4 items-center rounded-lg card-base"
                >
                    <div class="rounded-lg">
                        <SmartImage :src="friends.logo" class="rounded-lg h-12 w-12" />
                    </div>

                    <div class="rounded-tr rounded-br flex h-full">
                        <div>
                            <a :href="friends.website" target="_blank" rel="noopener noreferrer">
                                <h3 class="font-medium text-lg">
                                    {{ friends.name }}
                                </h3>
                            </a>
                            <!-- <span class="text-black/30 dark:text-white/30">
                                    {{ friends.website }}
                                </span> -->
                            <span class="text-black/30 dark:text-white/30">
                                {{ friends.description }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </PageLayout>
</template>
<style lang="scss">
@media (min-width: 768px) and (max-width: 1023) {
    .margin {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }
}
</style>

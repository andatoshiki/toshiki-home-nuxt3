<script lang="ts">
import Vue from 'vue'

/* Interfaces */
import type { SponsorLinks } from '~/@types/runtimeConfig'
import type { ISponsor } from '@/types/Response/Sponsors'

export default Vue.extend({
    data() {
        return {
            sponsors: [] as ISponsor[],
            accounts: [
                {
                    icon: 'Bitcoin',
                    name: 'Bitcoin',
                    address: 'bc1qkjdt4w2930yd0dgyxnxsw3v3hssggdv8eg768m',
                    revealed: false
                },
                {
                    icon: 'Ethereum',
                    name: 'Ethereum',
                    address: '0xe05FFEADb3b9E1f376dD1180A7A30C13D1cC153d',
                    revealed: false
                },
                {
                    icon: 'USDT',
                    name: 'Tether USDT',
                    address: '0xe05FFEADb3b9E1f376dD1180A7A30C13D1cC153d',
                    revealed: false
                },
                // {
                //     icon: 'Matic',
                //     name: 'Matic',
                //     address: '0xe05FFEADb3b9E1f376dD1180A7A30C13D1cC153d',
                //     revealed: false
                // },
                {
                    icon: 'Ton',
                    name: 'Ton',
                    address: 'EQC1NWQPii2MJAViwk74YQg7DjUroKif0IKC2_fItsvPVB6E',
                    revealed: false
                },
                {
                    icon: 'BNB',
                    name: 'BNB',
                    address: '0xe05FFEADb3b9E1f376dD1180A7A30C13D1cC153d',
                    revealed: false
                }
            ]
        }
    },
    fetchOnServer: false,
    async fetch() {
        const { data } = await this.$axios.get('https://raw.toshiki.dev/andatoshiki/.github/main/sponsors.json')

        this.sponsors = data
    },
    head() {
        const title = 'Donate'
        const description =
            'Support our mission and make a difference by contributing to our future developments and researches with a tip with a slight caffeinated boost via monster.'

        return {
            title,
            meta: this.$prepareMeta({
                title,
                description,
                keywords: 'donate',
                url: 'https://toshiki.dev/donate'
            }),
            link: [
                {
                    rel: 'Donate',
                    href: 'https://toshiki.dev/donate'
                }
            ]
        }
    },
    computed: {
        /**
         * Returns the Sponsor object in runtime config.
         * @returns {SponsorLinks}
         */
        getSponsorLinks(): SponsorLinks {
            return this.$config.sponsor as SponsorLinks
        },

        getSortedSponsors(): { oneTime: ISponsor[]; monthly: ISponsor[] } {
            const sponsors = this.sponsors

            const sortByPrice = (a: ISponsor, b: ISponsor) => b.monthlyDollars - a.monthlyDollars

            return {
                oneTime: sponsors.filter(sponsor => sponsor.isOneTime).sort(sortByPrice),
                monthly: sponsors.filter(sponsor => !sponsor.isOneTime).sort(sortByPrice)
            }
        }
    }
})
</script>

<template>
    <PageLayout
        title="Donate"
        :description="[
            'Donation is always considered as the best mean of sponsoring to worthy causes and initiatives, enabling positive change and supporting those in need, yet providing the motivational energy to supercharge the workload of developers! Navigate to my donation page for more information.'
        ]"
        class="space-y-12 margin"
    >
        <section class="space-y-4">
            <Title>Support me via</Title>

            <div class="flex flex-wrap gap-x-4 gap-y-2">
                <Button :href="getSponsorLinks.github" blank>
                    <template #icon>
                        <IconBrand brand="github" class="h-5 w-5" />
                    </template>

                    GitHub Sponsors
                </Button>
            </div>
        </section>

        <section class="space-y-4">
            <Title :padding="false">Sponsors</Title>

            <div>
                <transition name="fade" mode="out-in">
                    <SkeletonLoader v-if="$fetchState.pending" type="spinner" class="margin w-full py-4" />

                    <p v-else-if="$fetchState.error !== null">An error occured.</p>
                    <p v-else-if="!$fetchState.pending && !$fetchState.error && sponsors.length === 0">
                        No sponsors yet :(
                    </p>

                    <div v-else class="grid grid-cols-2 lg:grid-cols-4 gap-2">
                        <CardSponsor
                            v-for="(item, index) in getSortedSponsors.monthly"
                            :key="`sponsor-monthly-${index}`"
                            :sponsor="item.sponsor"
                            monthly
                        />

                        <CardSponsor
                            v-for="(item, index) in getSortedSponsors.oneTime"
                            :key="`sponsor-oneTime-${index}`"
                            :sponsor="item.sponsor"
                        />
                    </div>
                </transition>
            </div>
        </section>

        <section class="space-y-4">
            <Title>Cryptocurrency Addresses</Title>

            <div class="grid gap-4">
                <div
                    v-for="(account, index) in accounts"
                    :key="`account-${index}`"
                    class="flex h-full space-x-4 items-center rounded-lg card-base"
                >
                    <div class="rounded-lg">
                        <IconBrand :brand="account.icon" class="rounded-lg h-12 w-12" />
                        <SmartImage :src="account.image" class="rounded-lg h-12 w-12" />
                    </div>

                    <div class="rounded-tr rounded-br flex h-full">
                        <div>
                            <h3 class="font-medium text-lg">
                                {{ account.name }}
                            </h3>

                            <span
                                class="text-black/30 dark:text-white/30"
                                :class="!account.revealed && 'hover:underline cursor-pointer select-none'"
                                @click="account.revealed = true"
                            >
                                {{ account.revealed ? account.address : 'Click to Reveal' }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </PageLayout>
</template>

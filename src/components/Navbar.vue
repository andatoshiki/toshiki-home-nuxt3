<script lang="ts">
import Vue from 'vue'
import Logo from './Logo.vue'

export default Vue.extend({
    computed: {
        routeIsBlog() {
            return this.$route.name?.includes('blog')
        },
        getTargetLink() {
            const path = this.$route.path

            if (path !== '/projects/premid' && path.startsWith('/projects/premid')) return '/projects/premid'
            else if (this.routeIsBlog && this.$route.params?.slug) return '/'
            else return '/'
        }
    }
})
</script>

<template>
    <nav class="margin">
        <div class="responsive-screen relative">
            <div class="flex items-center gap-6 justify-between">
                <SmartLink :href="getTargetLink" class="flex-shrink-0 h-10 w-10 flex items-center space-x-4">
                    <Logo
                        class="rounded-md bg-transparent transition-transform sm:transform hover:-rotate-6 flex-shrink-0 h-10 w-10"
                    />
                    <!-- <SmartImage
                        src="/assets/signature-with-merged-stroke.svg"

                        class="rounded-md bg-transparent transition-transform sm:transform hover:-rotate-6 flex-shrink-0 h-10 w-10"
                    /> -->
                    <!-- class="rounded-md bg-transparent ring-black transition-transform ring-2 ring-opacity-5 sm:transform hover:-rotate-6 flex-shrink-0 h-10 w-10" -->

                    <!-- <Transition name="fade" mode="out-in">
                        <span v-if="routeIsBlog" class="text-black/90 text-sm uppercase font-medium dark:text-white/90">
                            Blog
                        </span>
                    </Transition> -->
                </SmartLink>

                <div class="flex space-x-2 items-center">
                    <OmnibarButton />
                    <ColorSwitcher />
                </div>
            </div>
        </div>
    </nav>
</template>

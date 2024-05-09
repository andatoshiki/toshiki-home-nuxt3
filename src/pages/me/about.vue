<script lang="ts">
import Vue from 'vue'

// Import type
// import type { Repository } from '~/src/types/Response/GitHub'

export default Vue.extend({
    head() {
        const title = 'About me'
        const description = 'A full biographical background of Anda Toshiki.'

        return {
            title,
            meta: this.$prepareMeta({
                title,
                description
            })
        }
    }
})
</script>

<template>
    <!-- Loader -->
    <div v-if="error === false" class="w-full pt-14">
        <section class="space-y-8">
            <!-- Header -->
            <div class="bg-black/10 h-30 rounded-lg animate-pulse w-full dark:bg-white/5" />

            <div class="space-y-4">
                <!-- Reading time & date  -->
                <div class="flex space-x-2 justify-center">
                    <div class="bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5" />
                    <div class="bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5" />
                    <div class="bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5" />
                </div>

                <!-- Title -->
                <div class="bg-black/10 h-10 mx-auto w-full animate-pulse sm:w-8/12 dark:bg-white/5" />

                <!-- Content -->
                <div class="flex flex-col space-y-2 items-center justify-center">
                    <div class="bg-black/10 h-4 w-full animate-pulse sm:w-8/12 dark:bg-white/5" />
                    <div class="bg-black/10 h-4 animate-pulse w-1/2 sm:w-4/12 dark:bg-white/5" />
                </div>
            </div>
        </section>

        <!-- Content -->
        <div class="space-y-10 mt-10 w-full">
            <div class="space-y-1">
                <div
                    v-for="_ in 6"
                    :key="_"
                    class="bg-black/10 h-4 animate-pulse dark:bg-white/5"
                    :class="_ !== 6 ? 'w-full' : 'w-8/12'"
                />
            </div>

            <div class="space-y-1">
                <div
                    v-for="_ in 4"
                    :key="_"
                    class="bg-black/10 h-4 animate-pulse dark:bg-white/5"
                    :class="_ !== 4 ? 'w-full' : 'w-1/2'"
                />
            </div>

            <div class="space-y-1">
                <div
                    v-for="_ in 24"
                    :key="_"
                    class="bg-black/10 h-4 animate-pulse dark:bg-white/5"
                    :class="_ !== 24 ? 'w-full' : 'w-1/2'"
                />
            </div>
        </div>
    </div>

    <div v-else class="pt-14 text-black/50 dark:text-white/30 space-y-5 margin">
        <h1 class="font-semibold text-2xl text-black/90 dark:text-white/90">
            <h1 class="wave">👋</h1>
            ようこそ、Developers!
        </h1>

        <blockquote
            class="p-2 my-1 dark:bg-black border-l-5 border-gray-500 dark:border-gray-600 bg-gray-200 rounded-md"
        >
            Former full time INTP & current INTJ & part time ISTP whom is caffein overdosed hyperboosted by Monster
            meanwhile an egoistic capitalist that overthinks ;)
        </blockquote>

        <p>
            Hey there, fellow developers, hackers and geeks, my name is Anda Toshiki romanized form Japanese Kanji of
            安田俊樹 originated from my Japanese name. Alternatively, you could refer me as kiki as a nickname in a
            short substitute (the same name as the protagonist Majo from Kiki's Delivery Service by Hayao Miyazaki). I'm
            the cutest yet most moe developer Majo Shoujo whom she watches anime, drinks monster, writes codes,
            documents tutorials, takes photos, eats burgers and pulls up all-nighters!
        </p>

        <p>
            Allow and forgive me for the redundant introduction yet again, I am Anda Toshiki, pronounced as
            <code>AHN-dah TOH-shee-kee</code> in case you perceive my name obscure to articulate. I am a current
            undergraduate Sun Devil (ASU students are called Sun Devils as a nod to the university's mascot) at Arizona
            State University majored concurrently in Business & Finance B.A. at
            <a href="https://wpcarey.asu.edu/" target="_blank" rel="noopener noreferrer" class="underline"
                >W. P. Carey School of Business</a
            >
            and Computer Science B.S. at Ira A. Fulton School of
            <a href="https://engineering.asu.edu/" target="_blank" rel="noopener noreferrer" class="underline"
                >Ira A. Fulton School of Engineering</a
            >. I am the co-founder and core team developer & DevOps for both Toshik's Devpedia @toshikidev and
            Shikiology @shikiology aiming for a better technological pursuit and open-source spiritual virtue, and
            additionally I am maintaining the community with both of my feline companion kitties 😺 (玉ちゃん & 桃ちゃん
            both of them are cute girls!), as attached in the image for your visual references,
        </p>
        <!-- <blog-image-container class="text-size-13px">
            <smart-figure src="https://r2.toshiki.dev/image%2Ftoshiki-home-nuxt%2Fkitten-sleeping-1.jpeg" image-class="w-200" caption="Tamachan & Momochan both huddling peacefully in curl."></smart-figure>
             <smart-figure src="https://r2.toshiki.dev/image%2Ftoshiki-home-nuxt%2Fkitten-sleeping-2.jpeg" image-class="w-300" caption="Woops! Momochan seems awakening! Ready for a yawn!"></smart-figure>
        </blog-image-container> -->

        <blog-image-container class="text-size-13px">
            <smart-figure
                src="https://r2.toshiki.dev/image%2Ftoshiki-home-nuxt%2Fkitten-sleeping-1.jpeg"
                image-class="w-200"
            ></smart-figure>
            <smart-figure
                src="https://r2.toshiki.dev/image%2Ftoshiki-home-nuxt%2Fkitten-sleeping-2.jpeg"
                image-class="w-300"
            ></smart-figure>
        </blog-image-container>

        <p>
            I am utterly passionate yet unwavering in my dedication to establishing a harmonious balance between
            technological advancement and spiritual enlightenment, striving to inspire others to join me on this
            transformative journey towards a brighter and more connected future whilst abiding intimately with the the
            objective vignette of "Design, Build & Ship; Privacy, Secure & Automation".
        </p>
        <p>
            I'm not the type of individual whom they eagerly vying for their rights for personal identification
            pronounces, he/him is preferably appreciated for avoiding dramatic disputes during physical meetups or
            trysts. I was originally born and bred in a trilingual family with a biracial ethnicities of Japanese and
            Chinese, meanwhile exposed to a pure yet immersive multifaceted American Christianity culture as educational
            environment since born. I, hence, am native in English and Japanese meanwhile proficient in Chinese with a
            linguistic proficiency certification beyond HSK (level VI). You are absolutely welcomed and do not hesitate
            to contact me with any of the language you are most comfortable to communicate in with, please refer to
            contacts page for a relatively complete means of contacts though email via hello@toshiki.dev is personally
            favored. I'm currently learning Español as one of the second-most widely spoken language in the world to fit
            the demands of writing Spanish oriented documentation for better i18n practices with accuracies and
            grammatical credibilities. (Well, with regard to my abject procrastinative virtue as an INTP striving
            through a sustained phase of transformation into INTJ, perhaps it frankly will dwell a while before I
            initiate my action).
        </p>

        <p>
            The primary focal interests of my developmental pursuits are the obsession with automation and self-hosted
            open source alternatives for all type of proprietary softwares. The triumph of successfully configuring a
            local project and deploying them to actual production stage for private employment is undoubtedly hard to
            vividly describe with just a feel lines of words, but as of now, I have established approximately 300
            applications established under my local LAN environment on NAS with practical usages that serves my daily
            needs to alleviate the processes of workloads. Computer networking is yet an fascinating field of skilled
            essentials which allowing me to orchestrate and inaugurate a interdependent ecosystem to transform
            individual applications from isolated tools to a cohesive and powerful automated ecosystem, despite the
            field of expertise still remains as a flower on the high ridge for me to exert more researches and efforts
            to ensure the grasps of full knowledges whilst I am still maintaining a sustenance of progressive learning.
            I also managed to learn and research on SysAdmin in addition with DevOps as affiliated benefits throughout
            active exploring and constant developing.
        </p>

        <p>
            Leaving aside a tediously laborious personal historic background autobiography, time to start on fun facts
            about myself. I have a severe sense of collectomania or hoarding habits for a diverse types of data even if
            I barely read through any of them instead just let them sit in my hard drives rather XD. I have intermediate
            experience with photography editing with both PhotoShop and Illustrator and have been using both tools on
            daily bases to commit minor edits on photos to level of perfections; I am also interested in photography, I
            records everything aesthetics in life with cameras and showcase them at my
            <a href="https://gallery.toshiki.dev/" target="_blank" rel="noopener noreferrer" class="underline"
                >web gallery</a
            >. I do spare my time by immersively soaking myself into the realm of anime, which is my indefinite virtual
            oasis at leisure to delve into fantastical worlds and narratives that ignite my imagination and provide a
            much-needed escape from the rigors of reality, and my favorite anime by far is "DanMachi"
            (ダンジョンに出会いを求めるのは間違っているだろうか)!
        </p>

        <p>
            Up until here, the above should be a hefty amount of text wall to entirely read through as for my
            biographical background, and hopefully these will supply you a fundamental understanding of myself as a
            current yet part-time student developer, please proceed to explore other sectors of this website with joy!
            If you would like more in-depth and detailed overview of my experiences or interests, feel free to ask! I'm
            here to provide any additional information you may need.
        </p>
        <!-- <DemoVideo /> -->

        <section class="space-y-12">
            <div>
                <Title :padding="false"> Consider Donating! </Title>

                <p class="text-black/50 text-sm dark:text-white/30 mt-4">
                    Donation is always considered as the best mean of sponsoring to worthy causes and initiatives,
                    enabling positive change and supporting those in need, yet providing the motivational energy to
                    supercharge the workload of developers! Navigate to
                    <SmartLink :href="{ name: 'donate' }" class="font-medium hover:underline"
                        >my donation page</SmartLink
                    >
                    {{ '' }} for more information.
                </p>
            </div>

            <div class="grid gap-6 md:grid-cols-2">
                <div>
                    <Title :padding="false">Want a little more? </Title>

                    <p class="text-black/50 text-sm dark:text-white/30 mt-4">
                        I'm also a designer! I target UI/UX designs for application, softwares and websites and
                        architectural designs towards for my own if I'm in desperate needs of bringing my creative
                        perceptions to life or exploring new concepts and possibilities in the world of design.
                    </p>
                </div>

                <div>
                    <Title :padding="false">Even more!?</Title>

                    <p class="text-black/50 text-sm dark:text-white/30 mt-4">
                        I possess a profound commitment to resolving encountered issues by diligently seeking the
                        optimal solutions. I am deeply devoted to comprehending intricate concepts, dedicating myself to
                        thorough note-taking and documentation, regardless of the time investment, as I firmly believe
                        it is essential to uphold professionalism and dedication in my endeavors.
                    </p>
                </div>
            </div>
        </section>

        <Button icon="IconBack" @click.native="$router.back()">Return home</Button>
    </div>
</template>
<style lang="scss">
.wave {
    animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
    animation-duration: 2.5s; /* Change to speed up or slow down */
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
}

@keyframes wave-animation {
    0% {
        transform: rotate(0deg);
    }
    10% {
        transform: rotate(20deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
        transform: rotate(-8deg);
    }
    30% {
        transform: rotate(20deg);
    }
    40% {
        transform: rotate(-4deg);
    }
    50% {
        transform: rotate(10deg);
    }
    60% {
        transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
        transform: rotate(0deg);
    }
}
</style>

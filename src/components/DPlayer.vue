<template>
    <div ref="dplayer" class="rounded-md"></div>
</template>
<!-- Pitfall record: import DPlayer from 'dplayer' is not allowed, it will cause build error: referenceerror: self is not defined -->
<!-- dplayer is asynchronous and needs to be initialized using import("dplayer").then(({ default: DPlayer }) => { }); -->
<!-- https://github.com/u2sb/www.u2sb.com/blob/main/docs/OpenSw/vuepress-plugin-smplayer/dplayer.md -->
<script>
export default {
    props: {
        // Video URL
        url: {
            type: String,
            default: ''
        },
        // Subtitle URL
        zm: {
            type: String,
            default: ''
        },
        // Autoplay
        autoplay: {
            type: Boolean,
            default: false
        },
        // Loop
        loop: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            dp: null
        }
    },
    mounted() {
        this.$nextTick(() => {
            import('dplayer').then(({ default: DPlayer }) => {
                this.dp = new DPlayer({
                    // Player container element
                    container: this.$refs.dplayer,
                    // Enable live mode
                    live: false,
                    // Video autoplay
                    autoplay: this.autoplay,
                    // Theme color
                    theme: 'var(--vp-c-brand-1)',
                    // Video loop
                    loop: this.loop,
                    // Language
                    lang: 'en',
                    // Enable screenshot, if enabled, video and video cover need to allow cross-origin
                    screenshot: false,
                    // Enable hotkeys, support fast forward, rewind, volume control, play/pause
                    hotkey: true,
                    // Enable AirPlay in Safari
                    airplay: true,
                    // Enable Chromecast
                    chromecast: false,
                    // Video preload, optional values: 'none', 'metadata', 'auto'
                    preload: 'auto',
                    // Default volume, please note that the player will remember user settings, and the default volume will be invalid after the user manually sets the volume
                    volume: 0.5,
                    // Optional playback speed, can be set to a custom array
                    playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2],
                    // Show a logo in the upper left corner, you can adjust its size and position through CSS
                    logo: '',
                    // Prevent automatic toggle of play/pause when clicking on the player
                    preventClickToggle: false,
                    // Video information
                    video: {
                        // Video link
                        url: this.url,
                        // Video cover
                        pic: '/images/dplayer.png',
                        // Optional values: 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' or other custom types
                        type: 'auto'
                        // Quality switching
                        // quality:'',
                        // Default quality
                        // defaultQuality:''
                        // Video thumbnail, can be generated using DPlayer-thumbnails
                        // thumbnails:''
                        // Custom type
                        // customType:''
                    },
                    // Subtitle information
                    subtitle: {
                        // Subtitle link
                        url: this.zm,
                        // Subtitle type, optional values: 'webvtt', 'ass', currently only supports webvtt
                        type: 'webvtt',
                        // Subtitle font size
                        fontSize: '20px',
                        // Distance from the bottom of the player to the subtitle, the value is like: '10px' '10%'
                        bottom: '40px',
                        // Subtitle color
                        color: 'var(--vp-c-brand)'
                    },
                    // Danmaku
                    // https://dplayer.diygod.dev/zh/guide.html#%E5%8F%82%E6%95%B0
                    // Mutual exclusion, prevent multiple players from playing at the same time, pause other players when the current player is playing
                    mutex: true
                })
                // Disable right-click to download video
                this.$refs.dplayer.oncontextmenu = () => {
                    document.querySelector('.dplayer-menu').style.display = 'none'
                    document.querySelector('.dplayer-mask').style.display = 'none'
                    return false
                }
                // Modify loop display
                document
                    .getElementsByClassName('dplayer-setting-item dplayer-setting-loop')[0]
                    .getElementsByClassName('dplayer-label')[0].innerText = 'Loop'
                // Modify playback speed display
                document
                    .getElementsByClassName('dplayer-setting-item dplayer-setting-speed')[0]
                    .getElementsByClassName('dplayer-label')[0].innerText = 'Playback Speed'
            })
        })
    },
    unmounted() {
        this.dp.destroy()
    }
}
// @ts-ignore
</script>

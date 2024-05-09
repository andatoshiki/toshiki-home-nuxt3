import { Handler } from '@netlify/functions'
import LastFMTyped from 'lastfm-typed'

// Can also be set through Netlify environment variables
const LASTFM_API_KEY = process.env.LASTFM_API_KEY
const username = 'andatoshiki'

const handler: Handler = async () => {
    if (!LASTFM_API_KEY)
        return {
            statusCode: 401
        }

    try {
        const lastFm = new LastFMTyped(LASTFM_API_KEY)

        const [info, topTracks, topArtists, recentTracks] = [
            await lastFm.user.getInfo(username),
            await lastFm.user.getTopTracks(username, { limit: 6, period: '7day' }),
            await lastFm.user.getTopArtists(username, { limit: 4, period: '7day' }),
            await lastFm.user.getRecentTracks(username, { limit: 15 })
        ]

        // Origin for CORS
        const origin = process.env.NODE_ENV === 'production' ? 'https://toshiki.dev' : 'http://localhost:3000'
        const allowedOrigins = [
            'https://toshiki.dev',
            'http://localhost:3000',
            'https://toshiki-home-nuxt3.netlify.app/'
        ]
        if (!allowedOrigins.includes(origin)) {
            return {
                statusCode: 403,
                body: 'Forbidden'
            }
        }

        // Map track function
        const mapTrack = (track: any): any => {
            const artist = typeof track.artist === 'string' ? track.artist : track.artist.name

            const object: any = {
                artist,
                name: track.name,
                image: track.image.find((image: any) => image.size === 'large')?.url,
                url: track.url,
                date: track.date?.uts,
                nowPlaying: track.nowplaying
            }

            if (track.playcount) object.plays = track.playcount

            return object
        }

        // Map artist function
        const mapArtist = (artist: any) => {
            const object: any = {
                name: artist.name,
                image: artist.image.find((image: any) => image.size === 'large')?.url,
                url: artist.url
            }

            if (artist.playcount) object.plays = artist.playcount

            return object
        }

        // Formatted user info
        const formattedUserInfo = {
            name: info.name,
            image: info.image.find(image => image.size === 'large')?.url,
            url: info.url,
            totalPlays: info.playcount,
            registered: info.registered
        }

        // Return
        return {
            statusCode: 200,
            error: false,
            headers: {
                'access-control-allow-origin': '*'
            },
            body: JSON.stringify({
                user: formattedUserInfo,
                recentTracks: recentTracks?.tracks?.map(mapTrack) || [],
                topTracks: topTracks?.tracks?.map(mapTrack) || [],
                topArtists: topArtists?.artists?.map(mapArtist) || []
            })
        }
    } catch (error: any) {
        console.log(error)

        return {
            error: true,
            statusCode: error.statusCode || 500,
            message: error.message
        }
    }
}

export { handler }

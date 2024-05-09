/**
 * I don't know if I'm too dumb to get it using browser JS but every method,
 * every package I tried doesn't really return the correct date in Arizona
 * so I made a worker that returns the correct date.
 */
export default function getArizonaTime(): Date {
    return new Date(
        new Date().toLocaleString('en-US', {
            timeZone: 'US/Arizona'
        })
    )
}

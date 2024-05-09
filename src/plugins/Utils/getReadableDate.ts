const intlFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})

export default function getReadableDate(date: Date): string {
    const today = new Date()
    const diff = Math.floor((today.getTime() - date.getTime()) / 86400000)

    if (diff === 0) return 'Today'
    else if (diff === 1) return 'Yesterday'
    else if (diff <= 30) return `${diff} days ago`
    else if (diff >= 30 && diff <= 90) return `${Math.floor(diff / 30)} months ago`
    else return intlFormatter.format(date)
}

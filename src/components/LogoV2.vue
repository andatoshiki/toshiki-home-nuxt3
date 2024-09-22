<template>
    <svg width="140" height="136" viewBox="0 0 140 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            id="atstroke"
            d="M25 80.8543C28.6667 71.8543 25.6911 56.3012 10.4911 73.9012C-8.50895 95.9012 13.5 98.8543 23 82.3543C32.5 65.8543 33.5 68.8543 33 69.3543C32.5 69.8543 15 93.3543 18 102.354C20.4 109.554 26.8334 103.188 32.5 93.8543L61.5 50.5808C86.3334 17.4141 126.1 -35.2819 70.5 46.3181L40.5 106.561C31.6637 124.394 15.9929 153.581 38 111.581"
            stroke="black"
            stroke-linecap="round"
        />
        <path id="tbar" d="M39 45L136.5 38.5" stroke="black" stroke-linecap="round" />
    </svg>
</template>
<style scoped>
@media (prefers-reduced-motion) {
    path {
        animation: none !important;
        stroke-dasharray: unset !important;
    }
}

#atstroke {
    stroke-dashoffset: 1px;
    stroke-dasharray: 641px 0;
    animation: scribeatstroke 10s ease forwards infinite;
    animation-delay: 0s;
    transform-origin: center;
    stroke: #000000;
    stroke-width: 6.5;
}

#tbar {
    stroke-dashoffset: 0.1px;
    stroke-dasharray: 98px 0;
    animation: scribetbar 10s ease forwards infinite;
    animation-delay: 0s;
    transform-origin: center;
    stroke: #000000;
    stroke-width: 6.5;
    opacity: 0;
}

@keyframes scribetbar {
    0% {
        stroke-dashoffset: 0px;
        stroke-dasharray: 0 98px;
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    40% {
        stroke-dashoffset: 0;
    }

    85% {
        stroke-dasharray: 98px 0;
    }
    95%,
    to {
        stroke-dasharray: 0 100px;
        opacity: 1;
    }
}

@keyframes scribeatstroke {
    0% {
        stroke-dashoffset: 0px;
        stroke-dasharray: 0 641px;
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    40% {
        stroke-dashoffset: 0;
    }
    85% {
        stroke-dasharray: 641px 0;
    }
    95%,
    to {
        stroke-dasharray: 0 641px;
        opacity: 1;
    }
}

.dark #atstroke {
    stroke: #ffffff;
}
.dark #tbar {
    stroke: #ffffff;
}
</style>

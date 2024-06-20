function getImageURL(name) {
    return new URL(`../assets/bg/${name}`, import.meta.url).href
}

export { getImageURL };
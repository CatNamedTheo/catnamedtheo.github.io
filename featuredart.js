const featuredArtList = [
    ["1.png", "https://x.com/nepnepu_2/status/1754642894500028532", "https://x.com/nepnepu_2", "@nepnepu_2"],
    ["2.jpg", "https://x.com/The_ChosenWoon/status/1766246555018043843", "https://x.com/The_ChosenWoon", "@The_ChosenWoon"],
    ["3.png", "https://x.com/jollepoker/status/1729583219098481068", "https://x.com/jollepoker", "@jollepoker"],
    ["4.gif", "https://x.com/YagiPagi/status/1739393188740145514", "https://x.com/jollepoker", "@jollepoker"],
].map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value);

document.addEventListener('DOMContentLoaded', (event) => {
    let currentArtIndex = 0;

    // Preload images
    const preloadedImages = featuredArtList.map(art => {
        const img = new Image();
        img.src = `./assets/images/featuredart/${art[0]}`;
        return img;
    });

    const updateFeaturedArt = (direction) => {
        // Update the current index
        currentArtIndex = (currentArtIndex + direction + featuredArtList.length) % featuredArtList.length;

        // Update the featured art
        const featuredArt = featuredArtList[currentArtIndex];
        const aElements = document.querySelector("#nepClock-featuredArt").querySelectorAll("a");
        aElements[0].children[0].src = preloadedImages[currentArtIndex].src;
        aElements[0].href = `${featuredArt[1]}`;
        aElements[1].href = `${featuredArt[2]}`;
        aElements[1].innerHTML = `art: ${featuredArt[3]}`;
    };

    // Add event listeners to the arrow buttons
    document.querySelector("#nepClock-featuredArt > .arrow-left").addEventListener('click', () => updateFeaturedArt(-1));
    document.querySelector("#nepClock-featuredArt > .arrow-right").addEventListener('click', () => updateFeaturedArt(1));

    // Initialize the featured art
    updateFeaturedArt(0);
});

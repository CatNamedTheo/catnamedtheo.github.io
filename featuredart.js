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
    let isAnimating = false;

    // Preload images
    const preloadedImages = featuredArtList.map(art => {
        const img = new Image();
        img.src = `./assets/images/featuredart/${art[0]}`;
        return img;
    });

    // Set the initial featured art without animation
    const featuredArt = featuredArtList[currentArtIndex];
    const aElements = document.querySelector("#nepClock-featuredArt").querySelectorAll("a");
    const artImage = aElements[0].children[0];
    artImage.src = preloadedImages[currentArtIndex].src;
    aElements[0].href = `${featuredArt[1]}`;
    aElements[1].href = `${featuredArt[2]}`;
    aElements[1].innerHTML = `art: ${featuredArt[3]}`;

    const updateFeaturedArt = (direction) => {
        if (isAnimating) return; // Prevent animation if one is already in progress
        isAnimating = true; // Set the animation flag to true

        const oldArt = artImage;
        const newArtIndex = (currentArtIndex + direction + featuredArtList.length) % featuredArtList.length;
        const newArt = preloadedImages[newArtIndex];

        // Set the appropriate classes for the animation direction
        if (direction === 1) {
            oldArt.className = "slide-out-left";
        } else {
            oldArt.className = "slide-out-right";
        }

        // Hide the old image before the slide-out animation completes
        setTimeout(() => {
            oldArt.style.visibility = "hidden"; // Hide the old image before animation completes
        }, 700); // Adjust this to be shorter than the duration of your slide-out animation

        // Wait for the slide-out animation to complete
        setTimeout(() => {
            oldArt.src = newArt.src;
            oldArt.style.visibility = "visible"; // Make the new image visible again
            if (direction === 1) {
                oldArt.className = "slide-in-left";
            } else {
                oldArt.className = "slide-in-right";
            }
            aElements[0].href = `${featuredArtList[newArtIndex][1]}`;
            aElements[1].href = `${featuredArtList[newArtIndex][2]}`;
            aElements[1].innerHTML = `art: ${featuredArtList[newArtIndex][3]}`;

            // Wait for the slide-in animation to complete before resetting
            setTimeout(() => {
                oldArt.className = "";
                isAnimating = false; // Reset the animation flag
            }, 1000); // Adjust this to match the duration of your slide-in animation
        }, 1000); // Adjust this to match the duration of your slide-out animation

        currentArtIndex = newArtIndex;
    };

    // Add event listeners to the arrow buttons
    document.querySelector("#nepClock-featuredArt > .arrow-left").addEventListener('click', () => {
        if (!isAnimating) updateFeaturedArt(-1);
    });
    document.querySelector("#nepClock-featuredArt > .arrow-right").addEventListener('click', () => {
        if (!isAnimating) updateFeaturedArt(1);
    });
});

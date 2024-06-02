const featuredArtList = [
    ["1.png", "https://x.com/nepnepu_2/status/1754642894500028532", "https://x.com/nepnepu_2", "@nepnepu_2"],
    ["2.jpg", "https://x.com/The_ChosenWoon/status/1766246555018043843", "https://x.com/The_ChosenWoon", "@The_ChosenWoon"],
    ["3.png", "https://x.com/jollepoker/status/1729583219098481068", "https://x.com/jollepoker", "@jollepoker"],
    ["4.gif", "https://x.com/YagiPagi/status/1739393188740145514", "https://x.com/jollepoker", "@jollepoker"],
].map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value);
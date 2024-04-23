const featuredArtList = [
    ["2.jpg", "https://x.com/The_ChosenWoon", "@The_ChosenWoon"],
    ["3.png", "https://x.com/jollepoker", "@jollepoker"],
    ["4.gif", "https://x.com/jollepoker", "@jollepoker"],
].map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value);

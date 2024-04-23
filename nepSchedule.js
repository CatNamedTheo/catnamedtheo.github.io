const schedule = [
    {
        time: "2024-03-26T17:00:00.000+00:00",
        title: "Gurumin: A Monstrous Adventure",
        lEmote: null,
        rEmote: 'nepuPeek.png',
    },
    {
        time: "2024-03-27T16:00:00.000+00:00",
        title: "Final Fantasy VII: Rebirth",
        lEmote: 'nepuPray.png',
        rEmote: null,
    },
    {
        time: "2024-03-29T16:00:00.000+00:00",
        title: "LIMBO",
        lEmote: 'nepuScared.png',
        rEmote: null,
    },
    {
        time: "2024-03-29T22:00:00.000+00:00",
        title: "Watchalong: Bakemonogatari ep 9-15",
        lEmote: null,
        rEmote: 'nepuBlanky.png',
    },
    {
        time: "2024-03-30T17:00:00.000+00:00",
        title: "Dark Souls II: Scholar of the First Sin then maybe Minecraft",
        lEmote: null,
        rEmote: null,
    },
    {
        time: "2024-03-31T17:00:00.000+00:00",
        title: "happy easter! lets draw together!!",
        lEmote: 'nepuHug.png',
        rEmote: 'nepuHug.png',
    },
].sort((streamA, streamB) => {
    if (streamA[0] === streamB[0]) {
        return 0;
    } else {
        return (streamA[0] < streamB[0]) ? -1 : 1;
    }
});
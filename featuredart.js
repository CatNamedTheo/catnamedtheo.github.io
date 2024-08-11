const unsortedArtList = [
    ["1.png", "https://x.com/nepnepu_2/status/1754642894500028532", "@nepnepu_2"],
    ["2.jpg", "https://x.com/The_ChosenWoon/status/1766246555018043843", "@The_ChosenWoon"],
    ["3.png", "https://x.com/jollepoker/status/1729583219098481068", "@jollepoker"],
    ["4.gif", "https://x.com/YagiPagi/status/1739393188740145514", "@jollepoker"],
    ["5.jpg", "https://x.com/The_ChosenWoon/status/1811870848057507943", "@The_ChosenWoon"],
    ["6.jpg", "https://x.com/The_ChosenWoon/status/1809872746987553127", "@The_ChosenWoon"],
    ["7.jpg", "https://x.com/The_ChosenWoon/status/1806796255886275011", "@The_ChosenWoon"],
    ["8.jpg", "https://x.com/The_ChosenWoon/status/1805501265260298522", "@The_ChosenWoon"],
    ["9.jpg", "https://x.com/The_ChosenWoon/status/1803354730728661014", "@The_ChosenWoon"],
    ["10.jpg", "https://x.com/The_ChosenWoon/status/1802628778784678311", "@The_ChosenWoon"],
    ["11.jpg", "https://x.com/The_ChosenWoon/status/1801361330756325891", "@The_ChosenWoon"],
    ["12.jpg", "https://x.com/The_ChosenWoon/status/1799120651086864655", "@The_ChosenWoon"],
    ["13.jpg", "https://x.com/The_ChosenWoon/status/1796663987691794530", "@The_ChosenWoon"],
    ["14.jpg", "https://x.com/The_ChosenWoon/status/1794225744136245582", "@The_ChosenWoon"],
    ["15.jpg", "https://x.com/The_ChosenWoon/status/1793502942613610702", "@The_ChosenWoon"],
    ["16.jpg", "https://x.com/The_ChosenWoon/status/1791971159774552416", "@The_ChosenWoon"],
    ["17.jpg", "https://x.com/The_ChosenWoon/status/1789843831065653402", "@The_ChosenWoon"],
    ["18.jpg", "https://x.com/The_ChosenWoon/status/1788574752187248819", "@The_ChosenWoon"],
    ["19.jpg", "https://x.com/The_ChosenWoon/status/1787868142427062358", "@The_ChosenWoon"],
    ["20.jpg", "https://x.com/The_ChosenWoon/status/1787612054129647848", "@The_ChosenWoon"],
    ["21.jpg", "https://x.com/The_ChosenWoon/status/1781518291258982403", "@The_ChosenWoon"],
    ["22.jpg", "https://x.com/The_ChosenWoon/status/1780504606071787733", "@The_ChosenWoon"],
    ["23.jpg", "https://x.com/The_ChosenWoon/status/1775411187880235131", "@The_ChosenWoon"],
    ["24.jpg", "https://x.com/The_ChosenWoon/status/1770351172584345937", "@The_ChosenWoon"],
    ["25.jpg", "https://x.com/nepnepu_2/status/1801641641968562417", "@nepnepu_2"],
    ["26.jpg", "https://x.com/nepnepu_2/status/1793417331101798841", "@nepnepu_2"],
    ["27.jpg", "https://x.com/nepnepu_2/status/1790030101087748500", "@nepnepu_2"],
    ["28.jpg", "https://x.com/nepnepu_2/status/1787490951813828974", "@nepnepu_2"],
    ["29.jpg", "https://x.com/nepnepu_2/status/1774377311011262606", "@nepnepu_2"],
    ["30.jpg", "https://x.com/nepnepu_2/status/1646198032059318282", "@nepnepu_2"],
    ["31.jpg", "https://x.com/nepnepu_2/status/1648128368766754817", "@nepnepu_2"],
    ["32.jpg", "https://x.com/nepnepu_2/status/1663704909118676992", "@nepnepu_2"],
    ["33.jpg", "https://x.com/nepnepu_2/status/1640398151063420945", "@nepnepu_2"],
    ["34.jpg", "https://x.com/nepnepu_2/status/1630426856179527681", "@nepnepu_2"],
    ["35.jpg", "https://x.com/nepnepu_2/status/1625686002298765317", "@nepnepu_2"],
    ["36.jpg", "https://x.com/nepnepu_2/status/1610788123268489216", "@nepnepu_2"],
    ["37.jpg", "https://x.com/nepnepu_2/status/1606082951879438336", "@nepnepu_2"],
    ["38.jpg", "https://x.com/nepnepu_2/status/1605668689973501963", "@nepnepu_2"],
    ["39.jpg", "https://x.com/nepnepu_2/status/1605668689973501963", "@nepnepu_2"],
    ["40.jpg", "https://x.com/nepnepu_2/status/1605668689973501963", "@nepnepu_2"],
    ["41.jpg", "https://x.com/nepnepu_2/status/1605668689973501963", "@nepnepu_2"],
    ["42.jpg", "https://x.com/nepnepu_2/status/1582829947626094592", "@nepnepu_2"],
    ["43.jpg", "https://x.com/nepnepu_2/status/1582829947626094592", "@nepnepu_2"],
    ["44.jpg", "https://x.com/nepnepu_2/status/1582829947626094592", "@nepnepu_2"],
    ["45.jpg", "https://x.com/kiirokumart/status/1806883386377601176", "@kiirokumart"],
    ["46.jpg", "https://x.com/kiirokumart/status/1806823973562265695", "@kiirokumart"],
    ["47.jpg", "https://x.com/kiirokumart/status/1804674482717458780", "@kiirokumart"],
    ["48.jpg", "https://x.com/kiirokumart/status/1803292156594913315", "@kiirokumart"],
    ["49.jpg", "https://x.com/kiirokumart/status/1802904228853113242", "@kiirokumart"],
    ["50.jpg", "https://x.com/kiirokumart/status/1802159624461713527", "@kiirokumart"],
    ["51.jpg", "https://x.com/kiirokumart/status/1801430077692924124", "@kiirokumart"],
    ["52.jpg", "https://x.com/kiirokumart/status/1798394371131449611", "@kiirokumart"],
    ["53.jpg", "https://x.com/kiirokumart/status/1796935663662604550", "@kiirokumart"],
    ["54.jpg", "https://x.com/kiirokumart/status/1796357010281451869", "@kiirokumart"],
    ["55.jpg", "https://x.com/kiirokumart/status/1795528963227554194", "@kiirokumart"],
    ["56.jpg", "https://x.com/kiirokumart/status/1793799354597204394", "@kiirokumart"],
    ["57.jpg", "https://x.com/kiirokumart/status/1793013805624012839", "@kiirokumart"],
    ["58.jpg", "https://x.com/kiirokumart/status/1788759289412124752", "@kiirokumart"],
    ["59.jpg", "https://x.com/kiirokumart/status/1758714889499979998", "@kiirokumart"],
    ["60.jpg", "https://x.com/kiirokumart/status/1756468590679867678", "@kiirokumart"],
    ["61.jpg", "https://x.com/kiirokumart/status/1754570936693543395", "@kiirokumart"],
    ["62.jpg", "https://x.com/kiirokumart/status/1754022541817967006", "@kiirokumart"],
    ["63.jpg", "https://x.com/kiirokumart/status/1747788613776019752", "@kiirokumart"],
    ["64.jpg", "https://x.com/kiirokumart/status/1745676667840758142", "@kiirokumart"],
    ["65.jpg", "https://x.com/kiirokumart/status/1738907097385873726", "@kiirokumart"],
    ["66.jpg", "https://x.com/kiirokumart/status/1731158412103135467", "@kiirokumart"],
    ["67.png", "https://x.com/kiirokumart/status/1726073732374942046", "@kiirokumart"],
    ["68.jpg", "https://x.com/kiirokumart/status/1696978319604863159", "@kiirokumart"],
    ["69.jpg", "https://x.com/kiirokumart/status/1693345447606104151", "@kiirokumart"],
    ["70.jpg", "https://x.com/kiirokumart/status/1682928831454228482", "@kiirokumart"],
    ["71.jpg", "https://x.com/kiirokumart/status/1678125526022598658", "@kiirokumart"],
    ["72.jpg", "https://x.com/kiirokumart/status/1811933861447688451", "@kiirokumart"],
    ["73.jpg", "https://x.com/kiirokumart/status/1811238946996670956", "@kiirokumart"],
    ["74.jpg", "https://x.com/kiirokumart/status/1810361471064272898", "@kiirokumart"],
    ["75.jpg", "https://x.com/kiirokumart/status/1810148394318311924", "@kiirokumart"],
    ["76.jpg", "https://x.com/jollepoker/status/1812842926797389912", "@The_ChosenWoon"],
    ["77.jpg", "https://x.com/The_ChosenWoon/status/1813099176785232269", "@The_ChosenWoon"],
    ["78.jpg", "https://x.com/kiirokumart/status/1813084433202966745", "@kiirokumart"],
    ["79.jpg", "https://x.com/kiirokumart/status/1814159280066416804", "@kiirokumart"],
    ["80.jpg", "https://x.com/Belphegoer_/status/1769661917382037684", "@Belphegoer_"],
    ["81.jpg", "https://x.com/Belphegoer_/status/1783945190710898932", "@Belphegoer_"],
    ["82.jpg", "https://x.com/Belphegoer_/status/1789004816091427141", "@Belphegoer_"],
    ["83.jpg", "https://x.com/Belphegoer_/status/1791556161373626652", "@Belphegoer_"],
    ["84.jpg", "https://x.com/Belphegoer_/status/1802443301758312878", "@Belphegoer_"],
    ["85.jpg", "https://x.com/Belphegoer_/status/1815059147487867361", "@Belphegoer_"],
    ["86.jpg", "https://x.com/grungoboi/status/1624382789343748099", "@grungoboi"],
    ["87.jpg", "https://x.com/grungoboi/status/1663227188366262284", "@grungoboi"],
    ["88.jpg", "https://x.com/ZXSTRLABORATORY/status/1781204272895385664", "@AmoebaLe"],
    ["89.jpg", "https://x.com/ZXSTRLABORATORY/status/1781204272895385664", "@AmoebaLe"],
    ["90.jpg", "https://x.com/ZXSTRLABORATORY/status/1781204272895385664", "@AmoebaLe"],
    ["91.jpg", "https://x.com/CristoCrisp/status/1760524193526092038", "@CristoCrisp"],
    ["92.jpg", "https://x.com/CristoCrisp/status/1773213418041815098", "@CristoCrisp"],
    ["93.png", "https://x.com/upupdowndownetc/status/1778301913253171696", "@upupdowndownetc"],
    ["94.jpeg", "https://x.com/TheTravelerHD/status/1802217510856474776", "@TheTravelerHD"],
    ["95.jpg", "https://x.com/TheTravelerHD/status/1676724668982517761", "@TheTravelerHD"],
    ["96.jpg", "https://x.com/TheTravelerHD/status/1630243534027763714", "@TheTravelerHD"],
    ["97.jpg", "https://x.com/TheTravelerHD/status/1732140833271624084", "@TheTravelerHD"],
    ["98.jpg", "https://x.com/TheTravelerHD/status/1756752174007062828", "@TheTravelerHD"],
    ["99.jpg", "https://x.com/grungoboi/status/1624382789343748099", "@grungoboi"],
    ["100.jpg", "https://x.com/grungoboi/status/1663227188366262284", "@grungoboi"],
    ["101.gif", "https://x.com/grungoboi/status/1634220016223637506", "@grungoboi"],
    ["102.jpg", "https://x.com/Heavic_/status/1767085177417707582", "@Heavic_"],
    ["103.png", "https://x.com/Heavic_/status/1686299564452564992", "@Heavic_"],
    ["104.jpeg", "https://x.com/Heavic_/status/1800493537362072019", "@Heavic_"],
    ["105.jpg", "https://x.com/Heavic_/status/1795010990523703394", "@Heavic_"],
    ["106.jpg", "https://x.com/SpookieJukes/status/1783946951450361922", "@SpookieJukes"],
    ["107.jpeg", "https://x.com/SpookieJukes/status/1779599629182480812", "@SpookieJukes"],
    ["108.jpeg", "https://x.com/SpookieJukes/status/1800231719167246437", "@SpookieJukes"],
    ["109.jpg", "https://x.com/SpookieJukes/status/1812968547007799358", "@SpookieJukes"],
    ["110.png", "https://x.com/SpookieJukes/status/1817370874418204966", "@SpookieJukes"],
    ["111.png", "https://x.com/animated15265/status/1795063367746388359", "@animated15265"],
    ["112.png", "https://x.com/animated15265/status/1795188202904469595", "@animated15265"],
    ["113.png", "https://x.com/animated15265", "@animated15265"],
    ["114.png", "https://x.com/animated15265", "@animated15265"],
    ["115.png", "https://x.com/animated15265", "@animated15265"],
    ["116.png", "https://x.com/animated15265", "@animated15265"],
    ["117.jpg", "https://x.com/KMantidae/status/1781044817654403464", "@KMantidae"],
    ["118.jpg", "https://x.com/KMantidae/status/1786810841104265717", "@KMantidae"],
    ["119.jpg", "https://x.com/Komeji_nouzy/status/1651031217519616007", "@Komeji_nouzy"],
    ["120.jpg", "https://x.com/Komeji_nouzy/status/1655757885815521280", "@Komeji_nouzy"],
    ["121.jpg", "https://x.com/Komeji_nouzy/status/1660073969494499328", "@Komeji_nouzy"],
    ["122.png", "https://x.com/Laced_Ends/status/1664327822129741825", "@Laced_Ends"],
    ["123.jpg", "https://x.com/Laced_Ends/status/1676674674606985234", "@Laced_Ends"],
    ["124.jpg", "https://x.com/meranyf__/status/1687180630029692928", "@meranyf__"],
    ["125.jpg", "https://x.com/meranyf__/status/1717680989135085753", "@meranyf__"],
    ["126.png", "https://x.com/meranyf__", "@meranyf__"],
    ["127.jpg", "https://x.com/MarvinCraft02", "@MarvinCraft02"],
    ["128.jpg", "https://x.com/MarvinCraft02", "@MarvinCraft02"],
    ["129.jpg", "https://x.com/MarvinCraft02", "@MarvinCraft02"],
    ["130.png", "-", "@runespoon001"],
    ["131.png", "-", "@runespoon001"],
    ["132.png", "-", "@runespoon001"],
    ["133.png", "-", "@runespoon001"],
    ["134.png", "-", "@runespoon001"],
    ["135.png", "-", "@runespoon001"],
    ["136.png", "-", "@runespoon001"],
    ["137.png", "-", "@wenpart"],
    ["138.png", "-", "@wenpart"],
    ["139.png", "-", "stanleyjhusdon_02365"],
    ["140.png", "-", "stanleyjhusdon_02365"],
    ["141.png", "-", "stanleyjhusdon_02365"],
    ["142.jpg", "https://x.com/YagiPagi/status/1764347159388868881", "@YagiPagi"],
    ["143.jpg", "https://x.com/YagiPagi/status/1676707906413002755", "@YagiPagi"],
    ["144.jpeg", "https://x.com/tsukimochiart/status/1818408034101522508", "@tsukimochiart"],
    ["145.jpg", "https://x.com/ACatNamedTheo1/status/1773438636995805664/", "@ACatNamedTheo1"],
    ["146.jpg", "https://x.com/ACatNamedTheo1", "@ACatNamedTheo1"],
];

const artists = {
    "@nepnepu_2": "https://x.com/nepnepu_2",
    "@The_ChosenWoon": "https://x.com/The_ChosenWoon",
    "@jollepoker": "https://x.com/jollepoker",
    "@kiirokumart": "https://x.com/kiirokumart",
    "@Belphegoer_": "https://x.com/Belphegoer_",
    "@grungoboi": "https://x.com/grungoboi",
    "@AmoebaLe": "https://x.com/AmoebaLe",
    "@CristoCrisp": "https://x.com/CristoCrisp",
    "@upupdowndownetc": "https://x.com/upupdowndownetc",
    "@TheTravelerHD": "https://x.com/TheTravelerHD",
    "@Heavic_": "https://x.com/Heavic_",
    "@SpookieJukes": "https://x.com/SpookieJukes",
    "@animated15265": "https://x.com/animated15265",
    "@KMantidae": "https://x.com/KMantidae/status",
    "@Komeji_nouzy": "https://x.com/Komeji_nouzy",
    "@Laced_Ends": "https://x.com/Laced_Ends",
    "@meranyf__": "https://x.com/meranyf__",
    "@MarvinCraft02": "https://x.com/MarvinCraft02",
    "@YagiPagi": "https://x.com/YagiPagi",
    "@tsukimochiart": "https://x.com/tsukimochiart",
    "@ACatNamedTheo1": "https://x.com/ACatNamedTheo1",
}

// Organize art by artist
const artSortedByArtist = unsortedArtList.reduce((acc, [image, imageLink, artist]) => {
    if (!acc[artist]) {
        acc[artist] = [];
    }
    const artistLink = artists[artist];
    acc[artist].push({ image, imageLink, artist, artistLink });
    return acc;
}, {});

// Create a list of all available art pieces
const allAvailableArt = Object.values(artSortedByArtist).flat();

// Track appearances of each artist
const artistAppearanceCount = {};

// Create the featured art list
const featuredArtList = [];

// Maximum appearances per artist
const maxAppearances = 12;

while (allAvailableArt.length > 0) {
    // Filter artists who can still be selected
    const eligibleArtists = Object.keys(artSortedByArtist).filter(artist => {
        return artSortedByArtist[artist].length > 0 &&
               (!artistAppearanceCount[artist] || artistAppearanceCount[artist] < maxAppearances);
    });

    if (eligibleArtists.length === 0) {
        break; // Exit loop if no eligible artists are left
    }

    // Randomly pick an artist from the eligible list
    const randomArtist = eligibleArtists[Math.floor(Math.random() * eligibleArtists.length)];

    // Pick a random art piece from the selected artist
    const artistArtList = artSortedByArtist[randomArtist];
    const randomIndex = Math.floor(Math.random() * artistArtList.length);
    const [selectedArt] = artistArtList.splice(randomIndex, 1);
    
    // Add the selected art piece to the featured list
    featuredArtList.push(selectedArt);

    // Increment the appearance count for the artist
    artistAppearanceCount[randomArtist] = (artistAppearanceCount[randomArtist] || 0) + 1;

    // Remove the artist from the artSortedByArtist if no more art is left
    if (artSortedByArtist[randomArtist].length === 0) {
        delete artSortedByArtist[randomArtist];
    }
}

console.log(featuredArtList);

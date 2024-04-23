/*
 * There are six different types of layout copmonents:
 * title, titleLogo, titleLogoText, lEmote, rEmote and comment, 
 * These can be used to fill the schedule.
 * Rules:
 * A schedule layout HAS to include ONLY ONE of the "title" types
 * A schedule layout HAS to be accompanied with the scheduled time (Format example: 2024-04-08T16:00:00.000+01:00)
 * The components gets put on the schedule in the order specified
 * 
 * There are no issues in saving mutliple weeks worth of schedule, no matter if the weeks are in the past or the future.
 * 
 * Examples components:
 * Title
 * Used to show a dedicated stream title
 * type: 'title',
 * text: 'Stream title',
 * 
 * Title Logo
 * Used to show a dedicated logo for the stream
 * type: 'titleLogo',
 * image: 'name of image in titleimages folder, including filetype',
 * 
 * Title Logo Text
 * Used to save space in case the schedule is too large by placing a text row underneath the image logo
 * type: 'titleLogoText',
 * image: 'name of image in titleimages folder, including filetype',
 * text: 'text to accompany the image'
 * 
 * REmote
 * Used to show a twitch emote slightly leaning to the right
 * type: 'rEmote',
 * image: 'name of image in twitchEmote folder, including filetype',
 * 
 * LEmote
 * Used to show a twitch emote slightly leaning to the left
 * type: 'lEmote',
 * image: 'name of image in twitchEmote folder, including filetype',
 * 
 * Comment
 * Used to display a text comment
 * type: 'comment',
 * text: 'text comment',
 */

const schedule = [
    {
        time: "2024-04-08T16:00:00.000+01:00",
        layout: [
            { 
                type: 'title',
                text: 'Gurumin: A Monsterous Adventure',
            },
            {
                type: 'rEmote',
                image: 'nepuLove.png',
            },
            {
                type: 'comment',
                text: 'POCOOO',
            }
        ]
    },
    {
        time: "2024-04-09T18:00:00.000+01:00",
        layout: [
            { 
                type: 'rEmote',
                image: 'nepuScared.png',
            },
            {
                type: 'comment',
                text: '+ heartrate monitor !',
            },
            {
                type: 'title',
                text: 'Buckshot Roulette',
            }
        ]
    },
    {
        time: "2024-04-10T16:00:00.000+01:00",
        layout: [
            { 
                type: 'title',
                text: 'Halo 2: Anniversary',
            },
            {
                type: 'comment',
                text: 'kill',
            },
            {
                type: 'lEmote',
                image: 'nepuMurder.png',
            }
        ]
    },
    {
        time: "2024-04-12T16:00:00.000+01:00",
        layout: [
            { 
                type: 'comment',
                text: 'FINAL!!',
            },
            {
                type: 'lEmote',
                image: 'nepuPray.png',
            },
            {
                type: 'title',
                text: 'Final Fantasy VII: Rebirth',
            }
        ]
    },
    {
        time: "2024-04-12T20:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'Watchalong: Godzilla Movies!',
            }
        ]
    },
    {
        time: "2024-04-13T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: '(the remake)',
            },
            {
                type: 'lEmote',
                image: 'nepuBlanky.png',
            },
            {
                type: 'title',
                text: 'The Legend of Zelda: Link\'s Awakening',
            }
        ]
    },
    {
        time: "2024-04-14T18:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'Needy Streamer Overload',
            },
            {
                type: 'comment',
                text: 'ill fix her!',
            },
            {
                type: 'rEmote',
                image: 'nepuSweat.png',
            }
        ]
    },
    {
        time: "2024-04-23T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'DLC!',
            },
            {
                type: 'rEmote',
                image: 'nepuMurder.png',
            },
            {
                type: 'titleLogo',
                image: 'ds2.png',
            },
        ]
    },
    {
        time: "2024-04-24T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'oldschoolrs.png',
            },
            {
                type: 'comment',
                text: 'play with me? :D',
            },
        ]
    },
    {
        time: "2024-04-25T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuPog.png',
            },
            {
                type: 'comment',
                text: 'finale!',
            },
            {
                type: 'titleLogo',
                image: 'linksawakening.png',
            },
        ]
    },
    {
        time: "2024-04-26T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogoText',
                image: 'warhammer40k.png',
                text: 'handcam',
            },
            {
                type: 'rEmote',
                image: 'nepuBlanky.png',
            },
        ]
    },
    {
        time: "2024-04-26T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong monty python (the holy grail & life of brian)',
            },
        ]
    },
    {
        time: "2024-04-27T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'civilizationvi.png',
            },
            {
                type: 'comment',
                text: 'long!!!',
            },
        ]
    },
    {
        time: "2024-04-28T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuCool.png',
            },
            {
                type: 'comment',
                text: 'women amirite',
            },
            {
                type: 'titleLogo',
                image: 'grandia2.png',
            },
        ]
    },
].sort((streamA, streamB) => {
    if (streamA[0] === streamB[0]) {
        return 0;
    } else {
        return (streamA[0] < streamB[0]) ? -1 : 1;
    }
});
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
 * More than 2 streams a day is currently NOT supported.
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
    {
        time: "2024-04-29T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ds2.png',
            },
            {
                type: 'rEmote',
                image: 'nepuF.png',
            },
            {
                type: 'comment',
                text: 'DLC',
            },
        ]
    },
    {
        time: "2024-04-30T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuScared.png',
            },
            {
                type: 'comment',
                text: '(AKA fatal frame)',
            },
            {
                type: 'titleLogo',
                image: 'projectzero.png',
            },
        ]
    },
    {
        time: "2024-05-01T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'hollowknight.png',
            },
            {
                type: 'comment',
                text: 'extra stuff!',
            },
            {
                type: 'lEmote',
                image: 'nepuPeek.png',
            },
        ]
    },
    {
        time: "2024-05-02T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'onwards!',
            },
            {
                type: 'rEmote',
                image: 'nepuYay.png',
            },
            {
                type: 'titleLogo',
                image: 'grandia2.png',
            },
        ]
    },
    {
        time: "2024-05-03T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuMurder.png',
            },
            {
                type: 'titleLogo',
                image: 'doom2.png',
            },
        ]
    },
    {
        time: "2024-05-03T21:00:00.000+01:00",
        discord: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'projectzomboid.png',
            },
        ]
    },
    {
        time: "2024-05-04T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mhworld.png',
            },
            {
                type: 'rEmote',
                image: 'nepuBlanky.png'
            },
        ]
    },
    {
        time: "2024-05-04T22:00:00.000+01:00",
        discord: true,
        layout: [
            {
                type: 'title',
                text: 'sus tier list',
            },
        ]
    },
    {
        time: "2024-05-05T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogoText',
                image: 'duolingo.svg',
                text: 'nihongo!',
            },
            {
                type: 'lEmote',
                image: 'nepuSweat.png',
            },
            {
                type: 'rEmote',
                image: 'duolingobird.png',
            }
        ]
    },
    {
        time: "2024-05-06T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'hollowknight.png',
            },
            {
                type: 'comment',
                text: 'path of pain...',
            },
            {
                type: 'rEmote',
                image: 'nepuNotlikethis.png',
            }
        ]
    },
    {
        time: "2024-05-07T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuYay.png',
            },
            {
                type: 'comment',
                text: 'arson is cool!',
            },
            {
                type: 'titleLogo',
                image: 'grandia2.png',
            }
        ]
    },
    {
        time: "2024-05-08T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'doom2.png',
            },
            {
                type: 'rEmote',
                image: 'nepuConfused.png',
            },
            {
                type: 'comment',
                text: 'try not get lost :D',
            }
        ]
    },
    {
        time: "2024-05-09T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'need maid',
            },
            {
                type: 'titleLogo',
                image: 'nobeta.png',
            },
            {
                type: 'lEmote',
                image: 'nepuCry.png',
            }
        ]
    },
    {
        time: "2024-05-10T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogoText',
                image: 'warhammer40k.png',
                text: 'handcam!',
            },
        ]
    },
    {
        time: "2024-05-10T21:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuSalute.png',
            },
            {
                type: 'titleLogo',
                image: 'mhworld.png',
            },
        ]
    },
    {
        time: "2024-05-11T21:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuBlanky.png',
            },
            {
                type: 'title',
                text: 'watchalong: Godzilla (1954) and Shin Godzilla (2016)',
            },
        ]
    },
    {
        time: "2024-05-12T18:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuStraight.png',
            },
            {
                type: 'title',
                text: 'straightface hunger games!',
            },
            {
                type: 'rEmote',
                image: 'nepuMurder.png',
            },
        ]
    },
    {
        time: "2024-05-13T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'neppieshoppityhop.png',
            },
            {
                type: 'comment',
                text: 'mum im on tv!!!',
            },
            {
                type: 'lEmote',
                image: 'nepuPog.png',
            },
        ]
    },
    {
        time: "2024-05-14T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'cute girl death',
            },
            {
                type: 'rEmote',
                image: 'nepuBlush.png',
            },
            {
                type: 'titleLogo',
                image: 'nobeta.png',
            },
        ]
    },
    {
        time: "2024-05-15T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuMurder.png',
            },
            {
                type: 'titleLogo',
                image: 'grandia2.png',
            },
            {
                type: 'comment',
                text: 'da darknes...',
            },
        ]
    },
    {
        time: "2024-05-16T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'loli hollow knight?',
            },
            {
                type: 'titleLogo',
                image: 'enderlilies.png',
            },
            {
                type: 'rEmote',
                image: 'nepuPeek.png',
            },
        ]
    },
    {
        time: "2024-05-17T17:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'new hairstyle reveal + karaoke!',
            },
        ]
    },
    {
        time: "2024-05-17T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong: Shin Godzilla',
            },
        ]
    },
    {
        time: "2024-05-18T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'projectzero.png',
            },
            {
                type: 'lEmote',
                image: 'nepuScared.png',
            },
            {
                type: 'comment',
                text: 'punishment stream!!! nii nii..',
            },
        ]
    },
    {
        time: "2024-05-19T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: 'nepuHmm.png',
            },
            {
                type: 'comment',
                text: 'akiramenai!',
            },
            {
                type: 'titleLogo',
                image: 'shashingo.png',
            },
        ]
    },
    {
        time: "2024-05-21T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'pokemonmysterydungeonresuceteamdx.png',
            },
            {
                type: 'comment',
                text: 'first time!!',
            },
            {
                type: 'rEmote',
                image: 'nepuHmm.png',
            },
        ]
    },
    {
        time: "2024-05-22T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'fr...!',
            },
            {
                type: 'rEmote',
                image: 'nepuCool.png',
            },
            {
                type: 'titleLogo',
                image: 'grandia2.png',
            },
        ]
    },
    {
        time: "2024-05-23T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuBlush.png',
            },
            {
                type: 'titleLogo',
                image: 'nobeta.png',
            },
            {
                type: 'comment',
                text: 'boobie lady',
            },
        ]
    },
    {
        time: "2024-05-24T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'enderlilies.png',
            },
        ]
    },
    {
        time: "2024-05-24T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong: moshi monsters the movie (2013) & my little pony the movie (2017)',
            },
        ]
    },
    {
        time: "2024-05-25T17:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'small announcement + file inspection!!',
            },
        ]
    },
    {
        time: "2024-05-25T21:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mhworld.png',
            },
        ]
    },
    {
        time: "2024-05-26T18:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'eledees.png',
            },
            {
                type: 'comment',
                text: 'bunch of silly guys',
            },
            {
                type: 'lEmote',
                image: 'nepuPog.png',
            },
        ]
    },
    {
        time: "2024-05-28T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'grandia2.png',
            },
            {
                type: 'rEmote',
                image: 'nepuYay.png',
            },
            {
                type: 'comment',
                text: 'fire!!!!!!!!!',
            },
        ]
    },
    {
        time: "2024-05-29T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuMurder.png',
            },
            {
                type: 'comment',
                text: 'gameing',
            },
            {
                type: 'titleLogo',
                image: 'enderlilies.png',
            },
        ]
    },
    {
        time: "2024-05-30T18:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'punishment math test',
            },
            {
                type: 'rEmote',
                image: 'nepuSalute.png',
            },
        ]
    },
    {
        time: "2024-05-31T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'nobeta.png',
            },
        ]
    },
    {
        time: "2024-05-31T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong: kizumonogatari (all 3 movies)',
            },
        ]
    },
    {
        time: "2024-06-01T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newoutfitreveal.png',
            },
            {
                type: 'lEmote',
                image: 'nepuPog.png',
            },
        ]
    },
    {
        time: "2024-06-01T21:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.png',
            },
        ]
    },
    {
        time: "2024-06-02T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuLove.png',
            },
            {
                type: 'titleLogo',
                image: 'pokemonmysterydungeonresuceteamdx.png',
            },
            {
                type: 'comment',
                text: 'bulbasaur love',
            },
        ]
    },
    {
        time: "2024-06-10T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuLove.png',
            },
            {
                type: 'titleLogo',
                image: 'pokemonmysterydungeonresuceteamdx.png',
            },
            {
                type: 'comment',
                text: 'bulbasaur love',
            },
        ]
    },
    {
        time: "2024-06-11T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'grandia2.png',
            },
            {
                type: 'rEmote',
                image: 'nepuYay.png',
            },
            {
                type: 'comment',
                text: 'fire!!!!!!!!!',
            },
        ]
    },
    {
        time: "2024-06-12T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuMurder.png',
            },
            {
                type: 'comment',
                text: 'gameing',
            },
            {
                type: 'titleLogo',
                image: 'enderlilies.png',
            },
        ]
    },
    {
        time: "2024-06-13T18:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'punishment math test',
            },
            {
                type: 'rEmote',
                image: 'nepuSalute.png',
            },
        ]
    },
    {
        time: "2024-06-14T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'nobeta.png',
            },
        ]
    },
    {
        time: "2024-06-14T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong: kizumonogatari (all 3 movies)',
            },
        ]
    },
    {
        time: "2024-06-15T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newoutfitreveal.png',
            },
            {
                type: 'lEmote',
                image: 'nepuPog.png',
            },
        ]
    },
    {
        time: "2024-06-15T21:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.png',
            },
        ]
    },
    {
        time: "2024-06-17T18:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.png',
            },
            {
                type: 'rEmote',
                image: 'nepuCheer.png',
            },
            {
                type: 'comment',
                text: 'for real this time!!',
            },
        ]
    },
    {
        time: "2024-06-19T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'grand!',
            },
            {
                type: 'titleLogo',
                image: 'grandia2.png',
            },
            {
                type: 'lEmote',
                image: 'nepuPray.png',
            },
        ]
    },
    {
        time: "2024-06-20T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: 'nepuMurder.png',
            },
            {
                type: 'comment',
                text: 'we end',
            },
            {
                type: 'titleLogo',
                image: 'enderlilies.png',
            },
        ]
    },
    {
        time: "2024-06-21T17:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'christmas karaoke',
            },
            {
                type: 'lEmote',
                image: 'nepuCheer.png',
            },
        ]
    },
    {
        time: "2024-06-21T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'godzilla watchalong (minus one + final wars)',
            },
        ]
    },
    {
        time: "2024-06-22T18:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuScared.png',
            },
            {
                type: 'titleLogo',
                image: 'dontscream.png',
            },
        ]
    },
    {
        time: "2024-06-22T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'ART!!!',
            },
        ]
    },
    {
        time: "2024-06-23T18:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'yay',
            },
            {
                type: 'titleLogo',
                image: 'littlefriendsdogsandcats.png',
            },
            {
                type: 'rEmote',
                image: 'nepuLove.png',
            },
        ]
    },
    {
        time: "2024-06-24T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.png',
            },
            {
                type: 'lEmote',
                image: 'nepuCool.png',
            },
            {
                type: 'comment',
                text: 'yeaaaaaaaa',
            },
        ]
    },
    {
        time: "2024-06-25T18:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuStare.png',
            },
            {
                type: 'title',
                text: 'i peel an orange',
            },
        ]
    },
    {
        time: "2024-06-26T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: ':DD',
            },
            {
                type: 'titleLogo',
                image: 'bloodborne.png',
            },
            {
                type: 'lEmote',
                image: 'nepuMurder.png',
            },
        ]
    },
    {
        time: "2024-06-27T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'our server!',
            },
            {
                type: 'rEmote',
                image: 'nepuBlanky.png',
            },
            {
                type: 'titleLogo',
                image: 'minecraft.png',
            },
        ]
    },
    {
        time: "2024-06-28T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'grandia2.png',
            },
        ]
    },
    {
        time: "2024-06-28T24:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'ASMR(?) reading WH40K wiki',
            },
        ]
    },
    {
        time: "2024-06-29T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'enderlilies.png',
            },
        ]
    },
    {
        time: "2024-06-29T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'Watchalong: Alien (1979) & The Lighthouse (2019)',
            },
        ]
    },
    {
        time: "2024-06-30T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.png',
            },
            {
                type: 'comment',
                text: 'until i finish',
            }, 
        ]
    },
    {
        time: "2024-07-01T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.png',
            },
            {
                type: 'comment',
                text: 'until i finish',
            }, 
        ]
    },
    {
        time: "2024-07-02T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.png',
            },
            {
                type: 'comment',
                text: 'until i finish',
            }, 
        ]
    },
    {
        time: "2024-07-03T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.png',
            },
            {
                type: 'comment',
                text: 'until i finish',
            }, 
        ]
    },
    {
        time: "2024-07-04T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.png',
            },
            {
                type: 'comment',
                text: 'until i finish',
            }, 
        ]
    },
    {
        time: "2024-07-05T16:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: 'nepuCheer.png',
            }, 
            {
                type: 'title',
                text: '2nd anniversary stream!!!!',
            },
            {
                type: 'lEmote',
                image: 'nepuYay.png',
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
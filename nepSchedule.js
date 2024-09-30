/*
 * There are six different types of layout copmonents:
 * title, titleLogo, titleLogoText, lEmote, rEmote and comment, 
 * These can be used to fill the schedule.
 * Rules:
 * A schedule layout HAS to include ONLY ONE of the "title" types
 * A schedule layout HAS to be accompanied with the scheduled time (Format example: 2024-04-08T16:00:00.000+01:00)
 * The components gets put on the schedule in the order specified
 * A schedule can also have different settings set to true for additional display effects
 * However, only one setting can be used at a time.
 * 
 * These are the settings:
 * discord, glitter, canceled
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
 * wide: true, (optional, will make the emote wide if space allows it) 
 * 
 * LEmote
 * Used to show a twitch emote slightly leaning to the left
 * type: 'lEmote',
 * image: 'name of image in twitchEmote folder, including filetype',
 * wide: true, (optional, will make the emote wide if space allows it) 
 * 
 * Comment
 * Used to display a text comment
 * type: 'comment',
 * text: 'text comment',
 *
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
    {
        time: "2024-07-15T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'im back!!',
            },
            {
                type: 'lEmote',
                image: 'nepuYay.png',
            },
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.png',
            },
        ]
    },
    {
        time: "2024-07-17T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.png',
            },
            {
                type: 'comment',
                text: 'more...',
            },
            {
                type: 'lEmote',
                image: 'nepuPeek.png',
            },
        ]
    },
    {
        time: "2024-07-18T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'more!!!',
            },
            {
                type: 'rEmote',
                image: 'nepuBlanky.png',
            },
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.png',
            },
        ]
    },
    {
        time: "2024-07-19T16:00:00.000+01:00",
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
                text: 'finale!!',
            },
        ]
    },
    {
        time: "2024-07-20T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'enderlilies.png',
            },
        ]
    },
    {
        time: "2024-07-20T24:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'ASMR(?) reading WH40K wiki',
            },
        ]
    },
    {
        time: "2024-07-22T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.png',
            },
            {
                type: 'comment',
                text: 'going back to new vegas!!',
            },
            {
                type: 'rEmote',
                image: 'nepuCool.png',
            },
        ]
    },
    {
        time: "2024-07-23T18:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: 'nepuLove.png',
            },
            {
                type: 'comment',
                text: 'WAN WAN',
            },
            {
                type: 'titleLogo',
                image: 'pupperazzi.png',
            },
        ]
    },
    {
        time: "2024-07-24T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'thebouncer.png',
            },
            {
                type: 'comment',
                text: 'PS2',
            },
            {
                type: 'lEmote',
                image: 'nepuPeek.png',
            },
            {
                type: 'comment',
                text: 'pyon pyon',
            },
        ]
    },
    {
        time: "2024-07-25T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: 'nepuMurder.png',
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
        time: "2024-07-26T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mario64.png',
            },
        ]
    },
    {
        time: "2024-07-26T22:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong: nisemonogatari ep 1-5',
            },
        ]
    },
    {
        time: "2024-07-27T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'loong',
            },
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.png',
            },
            {
                type: 'rEmote',
                image: 'nepuBlanky.png',
            },
        ]
    },
    {
        time: "2024-07-29T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.png',
            },
            {
                type: 'rEmote',
                image: 'nepuCool.png',
            },
            {
                type: 'comment',
                text: 'howdy!!!',
            },
        ]
    },
    {
        time: "2024-07-30T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: 'nepuMurder.png',
            },
            {
                type: 'comment',
                text: 'we win!!!',
            },
            {
                type: 'titleLogo',
                image: 'bloodborne.png',
            },
        ]
    },
    {
        time: "2024-08-01T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: 'nepuHmm.png',
            },
            {
                type: 'title',
                text: '???',
            },
            {
                type: 'comment',
                text: '+ summertime karaoke',
            },
            {
                type: 'lEmote',
                image: 'nepuCheer.png',
            },
        ]
    },
    {
        time: "2024-08-02T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mario64.png',
            },
        ]
    },
    {
        time: "2024-08-02T22:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong: nisemonogatari ep 6-11',
            },
        ]
    },
    {
        time: "2024-08-03T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'looong',
            },
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.png',
            },
            {
                type: 'lEmote',
                image: 'nepuPog.png',
            },
        ]
    },
    {
        time: "2024-08-04T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'pegglenights.png',
            },
            {
                type: 'lEmote',
                image: 'nepuBlanky.png',
            },
            {
                type: 'comment',
                text: 'neppie edition?!?!',
            },
        ]
    },
    {
        time: "2024-08-05T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'zeldaoracleofseasons.png',
            },
            {
                type: 'comment',
                text: 'oracle of seasons!',
            },
            {
                type: 'rEmote',
                image: 'nepuPog.png',
                wide: true,
            },
        ]
    },
    {
        time: "2024-08-06T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuPray.png',
            },
            {
                type: 'title',
                text: 'banana bread',
            },
            {
                type: 'comment',
                text: 'handcam!'
            }
        ]
    },
    {
        time: "2024-08-07T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'mmm stars',
            },
            {
                type: 'lEmote',
                image: 'nepuD.png',
            },
            {
                type: 'titleLogo',
                image: 'mario64.png',
            },
        ]
    },
    {
        time: "2024-08-08T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.png',
            },
            {
                type: 'comment',
                text: 'finale!',
            },
            {
                type: 'lEmote',
                image: 'nepuCry.png',
            },
        ]
    },
    {
        time: "2024-08-09T17:00:00.000+01:00",
        glitter: true,
        layout: [
            {
                type: 'title',
                text: 'new outfit!',
            },
        ]
    },
    {
        time: "2024-08-09T21:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mariokart8.png',
            },
        ]
    },
    {
        time: "2024-08-10T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuPeek.png',
                wide: true,
            },
            {
                type: 'titleLogo',
                image: 'ffx-2.png',
            },
            {
                type: 'comment',
                text: 'yuna!!!',
            },
        ]
    },
    {
        time: "2024-08-11T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'subnautica.png',
            },
            {
                type: 'comment',
                text: 'eeee',
            },
            {
                type: 'rEmote',
                image: 'nepuSweat.png',
            },
        ]
    },
    {
        time: "2024-08-12T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: 'nepuPeek.png',
            },
            {
                type: 'comment',
                text: 'oracle of seasons!',
            },
            {
                type: 'titleLogo',
                image: 'zeldaoracleofseasons.png',
            },
        ]
    },
    {
        time: "2024-08-13T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.png',
            },
            {
                type: 'comment',
                text: 'final!!',
            },
            {
                type: 'lEmote',
                image: 'nepuPog.png',
            },
        ]
    },
    {
        time: "2024-08-14T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: 'nepuBlush.png',
            },
            {
                type: 'title',
                text: 'drawing swimsuit neppie!!',
            },
        ]
    },
    {
        time: "2024-08-15T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: '70 stars..?',
            },
            {
                type: 'lEmote',
                image: 'nepuSalute.png',
            },
            {
                type: 'titleLogo',
                image: 'mario64.png',
            },
        ]
    },
    {
        time: "2024-08-16T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'puyopuyotetris2.png',
            },
        ]
    },
    {
        time: "2024-08-16T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'Watchalong: 4 Movies!',
            },
        ]
    },
    {
        time: "2024-08-17T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'YRP!!!',
            },
            {
                type: 'titleLogo',
                image: 'ffx-2.png',
            },
            {
                type: 'lEmote',
                image: 'nepuCheer.png',
            },
        ]
    },
    {
        time: "2024-08-18T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'animalcrossingnewhorizons.png',
            },
            {
                type: 'comment',
                text: 'fish!',
            },
            {
                type: 'rEmote',
                image: 'nepuBlanky.png',
            },
        ]
    },
    {
        time: "2024-08-18T24:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'ASMR YT upload',
            },
        ]
    },
    {
        time: "2024-08-19T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuConfused.png',
            },
            {
                type: 'comment',
                text: 'Oracle of Seasons!',
            },
            {
                type: 'titleLogo',
                image: 'zeldaoracleofseasons.png',
            },
        ]
    },
    {
        time: "2024-08-20T17:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'painting handcam!',
            },
            {
                type: 'rEmote',
                image: 'nepuBlanky.png',
            },
            {
                type: 'comment',
                text: 'with nep ross!!',
            },
        ]
    },
    {
        time: "2024-08-21T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'touhou10.png',
            },
            {
                type: 'comment',
                text: 'touhou 10!',
            },
            {
                type: 'lEmote',
                image: 'nepuRage.png',
            },
        ]
    },
    {
        time: "2024-08-22T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'yippeee',
            },
            {
                type: 'rEmote',
                image: 'nepuYay.png',
            },
            {
                type: 'titleLogo',
                image: 'mariosunshine.png',
            },
            {
                type: 'comment',
                text: 'sunshine!',
            },
        ]
    },
    {
        time: "2024-08-23T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'segasuperstarstennis.png',
            },
            {
                type: 'comment',
                text: 'wii!',
            },
        ]
    },
    {
        time: "2024-08-23T21:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mhworld.png',
            },
        ]
    },
    {
        time: "2024-08-24T17:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: '??? + chatting!',
            },
        ]
    },
    {
        time: "2024-08-24T21:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'planetarian.png',
            },
        ]
    },
    {
        time: "2024-08-25T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: 'nepuSalute.png',
            },
            {
                type: 'titleLogo',
                image: 'ffx-2.png',
            },
            {
                type: 'comment',
                text: 'sphere hunter neppie!!!',
            },
        ]
    },
    {
        time: "2024-08-26T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'zeldaoracleofseasons.png',
            },
            {
                type: 'rEmote',
                image: 'nepuConfused.png',
            },
            {
                type: 'comment',
                text: 'oracle of seasons!',
            },
        ]
    },
    {
        time: "2024-08-27T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'finishing!',
            },
            {
                type: 'titleLogo',
                image: 'planetarian.png',
            },
            {
                type: 'lEmote',
                image: 'nepuCry.png',
            },
        ]
    },
    {
        time: "2024-08-28T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: 'nepuPog.png',
            },
            {
                type: 'titleLogo',
                image: 'mariosunshine.png',
            },
            {
                type: 'comment',
                text: 'yahoooooo',
            },
        ]
    },
    {
        time: "2024-08-29T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'pew pew',
            },
            {
                type: 'titleLogo',
                image: 'ffx-2.png',
            },
            {
                type: 'lEmote',
                image: 'nepuCool.png',
            },
        ]
    },
    {
        time: "2024-08-30T17:00:00.000+01:00",
        canceled: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'touhou10.png',
            },
        ]
    },
    {
        time: "2024-08-30T21:00:00.000+01:00",
        canceled: true,
        layout: [
            {
                type: 'title',
                text: 'karaoke!',
            },
        ]
    },
    {
        time: "2024-08-31T17:00:00.000+01:00",
        canceled: true,
        layout: [
            {
                type: 'title',
                text: 'looking at ur outside pictures! + announcement!',
            },
        ]
    },
    {
        time: "2024-08-31T21:00:00.000+01:00",
        canceled: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'lethalcompany.png',
            },
        ]
    },
    {
        time: "2024-09-30T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.png',
            },
            {
                type: 'rEmote',
                image: 'nepuHug.png',
            },
            {
                type: 'comment',
                text: 'making friends!!',
            },
        ]
    },
    {
        time: "2024-10-02T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'zeldaoracleofseasons.png',
            },
            {
                type: 'comment',
                text: 'oracle of seasons!',
            },
            {
                type: 'lEmote',
                image: 'nepuHmm.png',
            },
        ]
    },
    {
        time: "2024-10-03T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'comment',
                text: 'ehe',
            },
            {
                type: 'rEmote',
                image: 'nepuMurder.png',
            },
            {
                type: 'titleLogo',
                image: 'newvegas.png',
            },
            {
                type: 'comment',
                text: 'probably crimes',
            },
        ]
    },
    {
        time: "2024-10-04T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'rEmote',
                image: 'nepuPog.png',
            },
            {
                type: 'title',
                text: 'Your Summer Pictures!',
            },
        ]
    },
    {
        time: "2024-10-04T21:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.png',
            },
        ]
    },
    {
        time: "2024-10-05T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'legologo.svg',
            },
            {
                type: 'comment',
                text: 'Handcam',
            },
        ]
    },
    {
        time: "2024-10-05T21:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'civilizationvi.png',
            },
            {
                type: 'comment',
                text: 'together!',
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

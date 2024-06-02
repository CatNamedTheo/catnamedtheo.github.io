"use strict";

const streams = [];
const weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const streamUrl = "https://twitch.tv/neppienep";
const twitchClientId = "kimne78kx3ncx6brgo4mv6wki5h1ko";
const twitchGqlUrl = "https://gql.twitch.tv/gql";
let lastLive = null;
let today = new Date().getDay();

class Stream {
    constructor(streamConfig) {
        const that = this;
        this.streamConfig = streamConfig;
        this.streamDate = new Date(streamConfig.time);
        this.weekDay = weekDays[this.streamDate.getDay()];
        this.live = false;
        if (this.streamDate >= getFirstDateOfWeek() && this.streamDate <= getLastDateOfWeek()) {
            this.interval = setInterval(() => {
                that.printTime(true)
            }, 1000);
            this.initElements();
            this.printTime(true);
        } else {
            this.standbyInterval = setInterval(() => {
                that.onStandby();
            }, 1000);
            this.onStandby();
        }
    }

    onStandby() {
        if (this.streamDate >= getFirstDateOfWeek() && this.streamDate <= getLastDateOfWeek()) {
            const that = this;
            this.interval = setInterval(() => {
                that.printTime()
            }, 1000);
            this.initElements();
            this.printTime();
            clearInterval(this.standbyInterval);
        }
    }

    initElements() {
        this.streamElement = document.createElement("div");
        this.streamElement.classList.add("nepClock-stream");
        if (this.streamConfig.discord) {
            this.streamElement.classList.add("nepClock-discordStream");
        }

        this.streamConfig.layout.forEach((layoutConfig) => {
            switch(layoutConfig.type) {
                case 'title':
                    this.titleElement = document.createElement("h4");
                    this.titleElement.classList.add("nepClock-streamTitle");
                    this.titleElement.innerHTML = layoutConfig.text;
                    this.streamElement.appendChild(this.titleElement);
                    break;
                case 'titleLogo':
                    this.titleElement = document.createElement("img");
                    this.titleElement.classList.add("nepClock-streamTitleImage");
                    this.titleElement.src = `./assets/images/titleimages/${layoutConfig.image}`;
                    this.streamElement.appendChild(this.titleElement);
                    break;
                case 'titleLogoText':
                    this.titleElement = document.createElement("div");
                    this.titleElement.classList.add("nepClock-streamTitleImageText");
                    let titleImage = document.createElement("img");
                    titleImage.classList.add("nepClock-streamTitleImageText-image");
                    titleImage.src = `./assets/images/titleimages/${layoutConfig.image}`;
                    this.titleElement.appendChild(titleImage);
                    let titleText = document.createElement("h4");
                    titleText.classList.add("nepClock-streamTitleImageText-text");
                    titleText.innerHTML = layoutConfig.text;
                    this.titleElement.appendChild(titleText);
                    this.streamElement.appendChild(this.titleElement);
                    break;
                case 'lEmote':
                    let lEmoteElement = document.createElement("img");
                    lEmoteElement.classList.add("nepClock-emote-left");
                    lEmoteElement.src = `./assets/images/twitchemotes/${layoutConfig.image}`;
                    this.streamElement.appendChild(lEmoteElement);
                    break;
                case 'rEmote':
                    let rEmoteElement = document.createElement("img");
                    rEmoteElement.classList.add("nepClock-emote-right");
                    rEmoteElement.src = `./assets/images/twitchemotes/${layoutConfig.image}`;
                    this.streamElement.appendChild(rEmoteElement);
                    break;
                case 'comment':
                    let comment = document.createElement('div');
                    comment.classList.add("nepClock-streamComment");
                    comment.innerHTML = layoutConfig.text;
                    this.streamElement.appendChild(comment);
                    break;
                default:
                    break;
            }
        });

        this.timeElement = document.createElement("div");
        this.timeElement.classList.add("nepClock-streamTime");
        this.streamElement.appendChild(this.timeElement);

        document.querySelector("#nepClock-" + this.weekDay + " > .nepClock-weekDaySchedule > .nepClock-scheduleContent").appendChild(this.streamElement);
    }

    printTime(updateTimer) {
        if (updateTimer) {
            this.updateTimer();
        }
        this.timeElement.innerHTML = this.timeStamp;
    }

    getHours(ms) {
        return Math.floor((ms % 86400000) / 3600000);
    }

    getMinutes(ms) {
        return Math.floor((ms % 3600000) / 60000);
    }

    getSeconds(ms) {
        return Math.floor((ms % 60000) / 1000);
    }

    formatClockNumber(number) {
        return number < 10 ? "0" + number.toString() : number;
    }

    getDigitalStreamStart() {
        return '<div class="nepClock-digitalTime">' + this.streamDate.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) + '</div>';
    }

    getAnalogStreamStart() {
        let time = '<div class="nepClock-analogTime">' + this.streamDate.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }) + '</div>';

        return time.replace(':00', '');
    }

    getCombinedStartTime() {
        return this.getDigitalStreamStart() + this.getAnalogStreamStart();
    }

    updateTimer() {
        const now = new Date();
        
        if (this.live) {
            const timeSince = now - lastLive;
            const h = this.formatClockNumber(this.getHours(timeSince));
            const m = this.formatClockNumber(this.getMinutes(timeSince));
            const s = this.formatClockNumber(this.getSeconds(timeSince));
        
            this.timeStamp = `<a href=${streamUrl}>[Started ${h}:${m}:${s} ago]</a>`;
        } else { 
            const timeLeft = this.streamDate - now;
            if (timeLeft < -1800000) {
                this.timeStamp = "<div class='nepClock-streamTime'>" + this.getCombinedStartTime() + "</div>";
            } else if (timeLeft < 0) {
                this.timeStamp = `<a href=${streamUrl}>[any minute now...]</a>` + "<div class='nepClock-realTime'>" + this.getCombinedStartTime() + "</div>";
            } else if (timeLeft < 86400000) {
                const h = this.formatClockNumber(this.getHours(timeLeft));
                const m = this.formatClockNumber(this.getMinutes(timeLeft));
                const s = this.formatClockNumber(this.getSeconds(timeLeft));

                this.timeStamp = "<div class='nepClock-countdown'>" + h + ":" + m + ":" + s + " </div><div class='nepClock-realTime'>" + this.getCombinedStartTime() + "</div>";

                if (timeLeft < 3600000) {
                    this.timeStamp += `<a href=${streamUrl}>[waiting room]</a>`;
                }
            } else {
                this.timeStamp = "<div class='nepClock-streamTime'>" + this.getCombinedStartTime() + "</div>";
            }
        }
    }
}

const updateToday = () => {
    const now = new Date();
    if (!document.querySelector(".nepClock-today")) {
        document.querySelector("#nepClock-" + weekDays[today]).classList.add("nepClock-today");
    }
    if (today !== now.getDay()) {
        document.querySelector(".nepClock-today").classList.remove("nepClock-today");
        document.querySelector("#nepClock-" + weekDays[now.getDay()]).classList.add("nepClock-today");
        today = now.getDay();
    }
};

const addWeekDates = () => {
    const now = new Date();

    let date = (new Date(now.setDate(now.getDate() - now.getDay() + (now.getDay() == 0 ? -6 : 1))));
    let monthStr = date.toLocaleString('en-US', { month: 'short' });
    monthStr = monthStr.slice(-1) === '.' ? monthStr.slice(0, -1) : monthStr; 
    document.querySelector("#nepClock-monday-date .nepClock-streamMonth").innerHTML = monthStr.toLowerCase();
    document.querySelector("#nepClock-monday-date .nepClock-streamDay").innerHTML = date.getDate();

    date = (new Date(now.setDate(now.getDate() - now.getDay() + 7)));
    monthStr = date.toLocaleString('en-US', { month: 'short' });
    monthStr = monthStr.slice(-1) === '.' ? monthStr.slice(0, -1) : monthStr; 
    document.querySelector("#nepClock-sunday-date .nepClock-streamMonth").innerHTML = monthStr.toLowerCase();
    document.querySelector("#nepClock-sunday-date .nepClock-streamDay").innerHTML = date.getDate();
};

const getFirstDateOfWeek = () => {
    const now = new Date();
    const firstDate = (new Date(now.setDate(now.getDate() - now.getDay() + (now.getDay() == 0 ? -6 : 1))));
    firstDate.setHours(0);
    firstDate.setMinutes(0);
    firstDate.setSeconds(0);
    return firstDate;
};

const getLastDateOfWeek = () => {
    const now = new Date();
    const lastDate = (new Date(now.setDate(now.getDate() - now.getDay() + (now.getDay() == 0 ? 0 : 7))));
    lastDate.setHours(23);
    lastDate.setMinutes(59);
    lastDate.setSeconds(59);
    return lastDate;
};

const appTick = () => {
    today = new Date().getDay();
    updateToday();
    addWeekDates();
};

const addFeaturedArt = () => {
    const featuredArt = featuredArtList[0];
    const aElements = document.querySelector("#nepClock-featuredArt").querySelectorAll("a");
    aElements[0].href = `./assets/images/featuredart/${featuredArt[0]}`;
    aElements[0].children[0].src = `./assets/images/featuredart/${featuredArt[0]}`;
    aElements[1].href = `${featuredArt[1]}`;
    aElements[1].innerHTML = `art: ${featuredArt[2]}`;
};

const setStreamLive = () => {
    const now = new Date();
    for(let i = streams.length - 1; i >= 0; i-=1) {
        if (now > streams[i].streamDate) {
            streams[i].live = true;
            streams[i].streamElement?.classList.add('nepClock-live');
            break;
        }
    }
}

const setAllStreamsOffline = () => {
    streams.forEach((stream) => {
        stream.live = false;
        stream.streamElement?.classList.remove('nepClock-live');
    });
};

const checkIfLive = async () => {
    const query = `query {
        user(login: "neppienep") {
            stream {
                createdAt
            }
        }
    }`;

    try {
        const response = await fetch(twitchGqlUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Client-Id": twitchClientId
            },
            body: JSON.stringify({ query })
        });

        const data = await response.json();
        if (data.data.user.stream?.createdAt && !lastLive) {
            lastLive = new Date(data.data.user.stream?.createdAt);

            setStreamLive();
        } else if (!data.data.user.stream?.createdAt) {
            lastLive = null;

            setAllStreamsOffline();
        }
    } catch (error) {
        console.error("Error checking stream status:", error);
    }
};

const startUp = () => {
    schedule.slice(0).forEach((stream) => {
        streams.push(new Stream(stream));
    });

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.querySelector("#nepClock-timeZone").innerHTML = timeZone;

    addWeekDates();
    addFeaturedArt();

    setInterval(appTick, 1000);
    setInterval(checkIfLive, 120000);
    appTick();
    checkIfLive();
};

startUp();
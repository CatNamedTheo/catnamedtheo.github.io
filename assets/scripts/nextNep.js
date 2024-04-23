"use strict";

const streams = [];
const weekDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const streamUrl = "https://twitch.tv/neppienep"
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

        if (this.streamConfig.lEmote) {
            let lEmoteElement = document.createElement("img");
            lEmoteElement.classList.add("nepClock-emote-left");
            lEmoteElement.src = `./assets/images/twitchemotes/${this.streamConfig.lEmote}`;
            this.streamElement.appendChild(lEmoteElement);
        }

        this.textBoxElement = document.createElement("div");
        this.textBoxElement.classList.add("nepClock-textBox");

        this.titleElement = document.createElement("h4");
        this.titleElement.classList.add("nepClock-streamTitle");
        this.titleElement.innerHTML = this.streamConfig.title;
        this.textBoxElement.appendChild(this.titleElement);

        this.timeElement = document.createElement("div");
        this.timeElement.classList.add("nepClock-streamTime");
        this.textBoxElement.appendChild(this.timeElement);

        this.streamElement.appendChild(this.textBoxElement);

        if (this.streamConfig.rEmote) {
            let lEmoteElement = document.createElement("img");
            lEmoteElement.classList.add("nepClock-emote-right");
            lEmoteElement.src = `./assets/images/twitchemotes/${this.streamConfig.rEmote}`;
            this.streamElement.appendChild(lEmoteElement);
        }

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

    getStreamStart() {
        return this.streamDate.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) + " / " + this.streamDate.toLocaleString('en-US', { hour: '2-digit', minute: 'numeric', hour12: true });
    }

    updateTimer() {
        const now = new Date();
        const timeLeft = this.streamDate - now;
        
        if (timeLeft < 0) {
            if (timeLeft > -86400000) {
                if (!this.live) {
                    this.live = true;
                    this.streamElement.classList.add('nepClock-live');
                }
                const timeSince = now - this.streamDate;
                const h = this.formatClockNumber(this.getHours(timeSince));
                const m = this.formatClockNumber(this.getMinutes(timeSince));
                const s = this.formatClockNumber(this.getSeconds(timeSince));
            
                this.timeStamp = `Started ${h}:${m}:${s} ago. <a href=${streamUrl}>Might still be live!</a>`;
            } else {
                this.forceOffline();
            }
        } else if (timeLeft < 86400000) {
            const h = this.formatClockNumber(this.getHours(timeLeft));
            const m = this.formatClockNumber(this.getMinutes(timeLeft));
            const s = this.formatClockNumber(this.getSeconds(timeLeft));

            this.timeStamp = "<div class='nepClock-countdown'>" + h + ":" + m + ":" + s + " </div><div class='nepClock-realTime'>(" + this.getStreamStart() + ")</div>";

            if (timeLeft < 3600000) {
                this.timeStamp += `<a href=${streamUrl}>Waiting room</a>`;
            }
        } else {
            this.timeStamp = this.getStreamStart();
        }
    }

    forceOffline() {
        clearInterval(this.interval);
        this.live = false;
        this.timeStamp = "<div class='nepClock-realTime'>" + this.getStreamStart() + "</div>"
        this.printTime(false);
        this.streamElement.classList.remove('nepClock-live');
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
}

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
}

const getFirstDateOfWeek = () => {
    const now = new Date();
    const firstDate = (new Date(now.setDate(now.getDate() - now.getDay() + (now.getDay() == 0 ? -6 : 1))));
    firstDate.setHours(0);
    firstDate.setMinutes(0);
    firstDate.setSeconds(0);
    return firstDate;
}

const getLastDateOfWeek = () => {
    const now = new Date();
    const lastDate = (new Date(now.setDate(now.getDate() - now.getDay() + (now.getDay() == 0 ? 0 : 7))));
    lastDate.setHours(23);
    lastDate.setMinutes(59);
    lastDate.setSeconds(59);
    return lastDate;
}

const forceOneLive = () => {
    let foundLive = false;
    for(let i = streams.length - 1; i >= 0; i-=1) {
        if (!foundLive && streams[i].live) {
            foundLive = true;
        } else if (foundLive && streams[i].live) {
            streams[i].forceOffline();
        }
    }
}

const appTick = () => {
    today = new Date().getDay();
    updateToday();
    forceOneLive();
    addWeekDates();
}

const addFeaturedArt = () => {
    const featuredArt = featuredArtList[0];
    const aElements = document.querySelector("#nepClock-featuredArt").querySelectorAll("a");
    aElements[0].href = `./assets/images/featuredart/${featuredArt[0]}`;
    aElements[0].children[0].src = `./assets/images/featuredart/${featuredArt[0]}`;
    aElements[1].href = `${featuredArt[1]}`;
    aElements[1].innerHTML = `art: ${featuredArt[2]}`;
}

const startUp = () => {
    schedule.slice(0).forEach((stream) => {
        streams.push(new Stream(stream));
    });

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.querySelector("#nepClock-timeZone").innerHTML = timeZone;

    addWeekDates();
    addFeaturedArt();

    setInterval(appTick, 1000);
    appTick();
}
startUp();
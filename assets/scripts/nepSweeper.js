"use strict";

let secretString = "numberoneminesweeper"; // Surely, you aren't looking at this, right? :)
let userSecret = "";

class NepSweeper {
    xLength = 30;
    yLength = 16;
    hiddenBoard = new Array(this.xLength * this.yLength);
    shownBoard = new Array(this.xLength * this.yLength);
    mines = 99;
    hiddenTiles = this.xLength * this.yLength;
    minesLeft = this.mines;
    firstClick = true;
    firstClickTime = undefined;
    timeInterval = undefined;
    secondsSinceStart = 1;
    mouseHoverTile = undefined;
    markedHitMine = false;
    gameLost = false;
    gameOver = false;
    leftPressed = false;
    rightPressed = false;
    ctrlPressed = false;
    active = false;
    masterButton = undefined;
    closeButton = undefined;
    secretContainer = undefined;
    currentDifficulty = 'expert';
    difficulties = [
        {'name': 'beginner', 'x': 9, 'y': 9, 'mines': 10},
        {'name': 'intermediate', 'x': 16, 'y': 16, 'mines': 40},
        {'name': 'expert', 'x': 30, 'y': 16, 'mines': 99}
    ];

    constructor() {
        window.addEventListener('keydown', (e) => {
            if (this.active) {
                if (e.key === " " && this.mouseHoverTile !== undefined) {
                    if (this.shownBoard[this.mouseHoverTile] === "H" || this.shownBoard[this.mouseHoverTile] === "F") {
                        this.flagTile(this.mouseHoverTile);
                    } else {
                        this.exploreTile(this.mouseHoverTile);
                    }
                } else if (e.key === "F2") {
                    this.resetBoard();
                } else if (e.key === "Control") {
                    this.ctrlPressed = true;
                }
            }
        });

        window.addEventListener('keyup', (e) => {
            if (this.active) {
                if (e.key === "Control") {
                    this.ctrlPressed = false;
                }
            }
        })

        window.addEventListener(`contextmenu`, (e) => { 
            if (this.active) {
                this.resetButtons();
            }
        });

        window.addEventListener('mouseup', (e) => {
            if (this.active) {
                if (e.button === 1) {
                    // middle click
                    this.leftPressed = false;
                    this.rightPressed = false;
                    this.resetMasterButton();
                } else if (e.button === 0) {
                    // left click
                    this.leftPressed = false;
                    this.resetMasterButton();

                    if (e.target === this.closeButton) {
                        this.shutDown();
                    }
                } else if (e.button === 2) {
                    // right click
                    this.rightPressed = false;
                }
            }
        });
    }

    start = () => {
        this.active = true;
        this.firstPrint();
        this.secretContainer = document.querySelector('.nepSweeper-secretContainer');
        this.masterButton = document.querySelector('.masterButton');
        this.closeButton = document.querySelector('.nepSweeper-secretContainerClose');
        this.resetBoard();
    }

    shutDown = () => {
        this.active = false;
        this.resetBoard();
        this.secretContainer.replaceChildren();
        this.secretContainer.remove();
        userSecret = "";
    }

    resetButtons = () => {
        this.resetMasterButton();
        this.leftPressed = false;
        this.rightPressed = false;
        this.ctrlPressed = false;
    }

    initBoardArrays = () => {
        for (let i = 0; i < this.hiddenBoard.length; i++) {
            this.hiddenBoard[i] = i < this.mines ? 'M' : 0;
            this.shownBoard[i] = 'H';
        };
    }

    createNewGameBoard = (clickedIndex) => {
        // shuffle the array
        for (let i = this.hiddenBoard.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.hiddenBoard[i];
            this.hiddenBoard[i] = this.hiddenBoard[j];
            this.hiddenBoard[j] = temp;
        }
        // increment numbers next to mines
        for (let i = 0; i < this.hiddenBoard.length; i++) {
            if (this.hiddenBoard[i] === 'M') {
                this.incrementSurroundingTiles(i, [], false);
            }
        }
        // replace any surrounded mines
        for (let i = 0; i < this.hiddenBoard.length; i++) {
            if (this.hiddenBoard[i] === 'M') {
                this.replaceStuckMine(i);
            }
        }
        // make sure that the initial tile is a 0
        if (this.hiddenBoard[clickedIndex] !== 0) {
            const surroundingIndices = this.getsurroundingIndices(clickedIndex);
            const skipIndices = [...surroundingIndices, clickedIndex];
            if (this.hiddenBoard[clickedIndex] === 'M') {
                this.replaceMine(clickedIndex, [clickedIndex]);
            }
            surroundingIndices.forEach((index) => {
                if (this.hiddenBoard[index] === 'M') {
                    this.replaceMine(index, skipIndices);
                }
            });
        }
        this.firstClick = false;
        this.firstClickTime = new Date();
        // Make sure the timer always starts on 1
        this.firstClickTime.setSeconds(this.firstClickTime.getSeconds() - 1);
        this.timeInterval = setInterval(this.printTime, 1000);
        this.printTime();
    };

    replaceStuckMine = (tileIndex) => {
        const surroundingIndices = this.getsurroundingIndices(tileIndex);
        for (var i = 0; i < surroundingIndices.length; i++) {
            if (this.hiddenBoard[i] !== 'M') {
                return;
            }
        }
        this.replaceMine(tileIndex, [...surroundingIndices, tileIndex]);
    }

    incrementSurroundingTiles = (tileIndex, skipIndices = new Array(), replace = true) => {
        const surroundingIndices = this.getsurroundingIndices(tileIndex);
        let surroundingMineCounter = 0;
        surroundingIndices.forEach((index) => {
            if (this.hiddenBoard[index] === 'M') {
                surroundingMineCounter++;
            } else {
                this.hiddenBoard[index]++;
            }
        });
        // prevent mines completely surrounded by other mines
        if (surroundingMineCounter === surroundingIndices.length && replace) {
            this.replaceMine(tileIndex, [...skipIndices, tileIndex]);
        }
    }

    replaceMine = (tileIndex, skipIndices = new Array()) => {
        let newMineIndex = this.getRandomEmptyIndex(skipIndices);
        if (newMineIndex !== null) {
            const surroundingIndices = this.getsurroundingIndices(tileIndex);
            let newTile = 0;
            surroundingIndices.forEach((index) => {
                if (this.hiddenBoard[index] !== 'M') {
                    this.hiddenBoard[index]--;
                } else {
                    newTile++;
                }
            });
            this.hiddenBoard[tileIndex] = newTile;
            this.hiddenBoard[newMineIndex] = 'M';
            this.incrementSurroundingTiles(newMineIndex, [...skipIndices]);
        }
    }

    getRandomEmptyIndex = (skipIndices = new Array()) => {
        let emptyIndices = this.hiddenBoard.reduce((indices, element, index) => {
            if (element !== 'M') {
                indices.push(index);
            }

            return indices;
        }, []);
        if (skipIndices.length) {
            emptyIndices = emptyIndices.filter(index => !skipIndices.includes(index));
        }
        if (emptyIndices.length > 0) {
            return emptyIndices[emptyIndices.length * Math.random() | 0];
        } else {
            return null;
        }
    }

    getsurroundingIndices = (index) => {
        const existingIndexes = [];
        if (index % this.xLength != 0) {
            if (index - this.xLength - 1 >= 0) {
                existingIndexes.push(index - this.xLength - 1);
            }
            if (index - 1 >= 0) {
                existingIndexes.push(index - 1);
            }
            if (index + this.xLength - 1 < this.hiddenBoard.length) {
                existingIndexes.push(index + this.xLength - 1);
            }
        }
        if (index % this.xLength != this.xLength - 1) {
            if (index - this.xLength + 1 >= 0) {
                existingIndexes.push(index - this.xLength + 1);
            }
            if (index + 1 >= 0) {
                existingIndexes.push(index + 1);
            }
            if (index + this.xLength + 1 < this.hiddenBoard.length) {
                existingIndexes.push(index + this.xLength + 1);
            }
        }
        if (index - this.xLength >= 0) {
            existingIndexes.push(index - this.xLength);
        }
        if (index + this.xLength < this.hiddenBoard.length) {
            existingIndexes.push(index + this.xLength);
        }
        return existingIndexes;
    }

    printHiddenBoard = () => {
        let row = '';
        this.hiddenBoard.forEach((element) => {
            row += String(element) + ' ';
            if (row.length === this.xLength * 2) {
                console.log(row);
                row = '';
            }
        });
    }

    clickTile = (clickedIndex) => {
        if (this.firstClick) {
            this.createNewGameBoard(clickedIndex);
        }
        this.revealTile(clickedIndex);
        this.checkGameState();
    }

    revealTile = (tileIndex) => {
        if (this.shownBoard[tileIndex] === 'H') {
            this.shownBoard[tileIndex] = this.hiddenBoard[tileIndex];
            const tileElement = document.querySelector(`[tile="${tileIndex}"]`);
            tileElement.classList.remove('hiddenTile');
            tileElement.classList.add(`tile${this.hiddenBoard[tileIndex]}`);
            if (this.hiddenBoard[tileIndex] === 0) {
                const surroundingIndices = this.getsurroundingIndices(tileIndex);
                surroundingIndices.forEach((index) => {
                    this.revealTile(index);
                });
            }
            if (this.hiddenBoard[tileIndex] === 'M') {
                this.gameLost = true;
                if (this.markedHitMine === false) {
                    this.markedHitMine = true;
                    tileElement.className += 'Wrong';
                } else {
                    tileElement.className += 'Cross';
                }
            }
            this.hiddenTiles--;
        }
    }

    revealRemainingMines = () => {
        this.hiddenBoard.forEach((tile, index) => {
            if (tile === 'M' && this.shownBoard[index] === 'H') {
                const tileElement = document.querySelector(`[tile="${index}"]`);
                tileElement.classList.remove('hiddenTile');
                if (!this.gameLost) {
                    tileElement.classList.add('tileF');
                } else {
                    tileElement.classList.add('tileM');
                }
            } else if (tile !== 'M' && this.shownBoard[index] === 'F') {
                const tileElement = document.querySelector(`[tile="${index}"]`);
                tileElement.classList.remove('tileF');
                tileElement.classList.add('tileMCross');
            }
        });
    }

    flagTile = (clickedIndex) => {
        if (!this.gameLost) {
            if (this.shownBoard[clickedIndex] === 'H') {
                const tileElement = document.querySelector(`[tile="${clickedIndex}"]`);
                tileElement.classList.remove('hiddenTile');
                tileElement.classList.add('tileF');
                this.shownBoard[clickedIndex] = 'F';
                this.minesLeft--;
                this.hiddenTiles--;
            } else if (this.shownBoard[clickedIndex] === 'F') {
                const tileElement = document.querySelector(`[tile="${clickedIndex}"]`);
                tileElement.classList.remove('tileF');
                tileElement.classList.add('hiddenTile');
                this.shownBoard[clickedIndex] = 'H';
                this.minesLeft++;
                this.hiddenTiles++;
            }
            this.printMinesLeft();
        }
    }

    exploreTile = (clickedIndex) => {
        if (!parseInt(this.shownBoard[clickedIndex]) > 0) {
            return;
        }
        const surroundingIndices = this.getsurroundingIndices(clickedIndex);
        let mineCount = 0;
        surroundingIndices.forEach((index) => {
            if (this.shownBoard[index] === 'F') {
                mineCount++;
            }
        });
        if (mineCount !== parseInt(this.shownBoard[clickedIndex])) {
            return;
        }
        surroundingIndices.forEach((index) => {
            this.revealTile(index);
        });
        this.checkGameState();
    }

    sanityCheck = () => {
        if (this.xLength < 8) {
            this.xLength = 8;
        }
        if (this.yLength < 1) {
            this.yLength = 1;
        }
        this.hiddenBoard = new Array(this.xLength * this.yLength);
        this.shownBoard = new Array(this.xLength * this.yLength);
        this.hiddenTiles = this.xLength * this.yLength;
        if (this.mines > this.hiddenTiles - 1) {
            this.mines = this.hiddenTiles - 1;
        }
    }

    firstPrint = () => {
        if (!document.getElementById('nepSweeperStyle')) {
            const nepSweeperStyle  = document.createElement('link');
            nepSweeperStyle.id   = 'nepSweeperStyle';
            nepSweeperStyle.rel  = 'stylesheet';
            nepSweeperStyle.href = './assets/styling/nepSweeperStyle.css?v=1.995';
            document.head.appendChild(nepSweeperStyle);
        }

        this.sanityCheck();
        // Game Options
        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('optionsContainer');

        const difficultySelect = document.createElement('select');
        difficultySelect.name = 'nepSweeper-difficultySelect';
        difficultySelect.id = 'nepSweeper-difficultySelect';
        this.difficulties.forEach((difficultySetting, index) => {
            const difficulty = document.createElement('option');
            difficulty.value = difficultySetting.name;
            difficulty.innerHTML = difficultySetting.name;
            difficultySelect.appendChild(difficulty);
            if (difficultySetting.name === this.currentDifficulty) {
                difficultySelect.selectedIndex = index;
            }
        });
        difficultySelect.addEventListener('change', (event) => {
            const newDifficulty = this.difficulties.find((diff) => diff.name === event.target.value);
            this.xLength = newDifficulty.x;
            this.yLength = newDifficulty.y;
            this.mines = newDifficulty.mines;
            this.currentDifficulty = newDifficulty.name;
            this.start();
        });
        optionsContainer.appendChild(difficultySelect);

        const gameWrapper = document.getElementsByClassName("nepSweeper-gameWrapper")[0];
        gameWrapper.replaceChildren(optionsContainer);

        const gameContainer = document.createElement('div');
        gameContainer.classList.add('gameContainer');
        gameContainer.style.height = (this.yLength * 16) + 62 + "px";
        gameContainer.style.width = (this.xLength * 16) + 20 + "px";
        gameWrapper.appendChild(gameContainer);

        // Top menu border
        gameContainer.appendChild(this.createGameSpriteElement('topLeftCornerBorder'));
        for (let i = 0; i < this.xLength; i++) {
            gameContainer.appendChild(this.createGameSpriteElement('horizontalBorder'));
        }
        gameContainer.appendChild(this.createGameSpriteElement('topRightCornerBorder'));
        // Menu
        gameContainer.appendChild(this.createGameSpriteElement('longVerticalBorder'));
        const mineContainer = document.createElement('div');
        mineContainer.classList.add('mineContainer');
        gameContainer.appendChild(mineContainer);
        for (let i = 3; i > 0; i--) {
            const mineNumber = this.createGameSpriteElement('counter0');
            mineContainer.appendChild(mineNumber);
        }
        const masterButton = this.createGameSpriteElement('masterButton');
        masterButton.addEventListener('mousedown', (e) => {
            this.masterButton.className = "gameSprite masterButtonPressed";
        });
        masterButton.addEventListener('mouseup', (e) => {
            this.resetBoard();
        });
        let horizontalMargin = (this.xLength - 8) * 8;
        horizontalMargin = horizontalMargin < 0 ? 0 : horizontalMargin;
        masterButton.style.margin = "3px " + horizontalMargin + "px";
        gameContainer.appendChild(masterButton);
        const timeContainer = document.createElement('div');
        timeContainer.classList.add('timeContainer');
        gameContainer.appendChild(timeContainer);
        for (let i = 3; i > 0; i--) {
            const timeNumber = this.createGameSpriteElement('counter0');
            timeContainer.appendChild(timeNumber);
        }
        gameContainer.appendChild(this.createGameSpriteElement('longVerticalBorder'));
        // Bottom menu border
        gameContainer.appendChild(this.createGameSpriteElement('rightConnectionBorder'));
        for (let i = 0; i < this.xLength; i++) {
            gameContainer.appendChild(this.createGameSpriteElement('horizontalBorder'));
        }
        gameContainer.appendChild(this.createGameSpriteElement('leftConnectionBorder'));
        // Game board
        for (let y = 0; y < this.yLength; y++) {
            gameContainer.appendChild(this.createGameSpriteElement('verticalBorder'));
            for (let x = 0; x < this.xLength; x++) {
                const tile = this.createGameSpriteElement('hiddenTile');
                gameContainer.appendChild(this.addFunctionalityToTile(tile, {x, y}));
            }
            gameContainer.appendChild(this.createGameSpriteElement('verticalBorder'));
        }
        // Bottom border
        gameContainer.appendChild(this.createGameSpriteElement('bottomLeftCornerBorder'));
        for (let i = 0; i < this.xLength; i++) {
            gameContainer.appendChild(this.createGameSpriteElement('horizontalBorder'));
        }
        gameContainer.appendChild(this.createGameSpriteElement('bottomRightCornerBorder'));
    }

    addFunctionalityToTile = (tile, cords) => {
        tile.setAttribute('tile', (cords.y * this.xLength) + cords.x);
        tile.addEventListener('mousedown', (e) => {
            e.preventDefault();
            if (!this.gameOver) {
                const tileIndex = parseInt(e.target.getAttribute('tile'));
                if (e.button === 1) {
                    this.leftPressed = true;
                    this.rightPressed = true;
                    this.masterButton.className += "gameSprite masterButtonO";
                    this.addPressedState(tileIndex);
                    return false; // prevents the middle click scroll
                } else if (e.button === 0) {
                    if (this.ctrlPressed) {
                        this.flagTile(tileIndex);
                    } else {
                        this.leftPressed = true;
                        this.masterButton.className += "gameSprite masterButtonO";
                        this.addPressedState(tileIndex);
                    }
                } else if (e.button === 2) {
                    if (!this.leftPressed) {
                        this.flagTile(tileIndex);
                    }
                    this.rightPressed = true;
                    this.addPressedState(tileIndex);
                }
            }
        })
        tile.addEventListener('mouseup', (e) => {
            if (!this.gameLost) {
                const tileIndex = parseInt(e.target.getAttribute('tile'));
                if (e.button === 1) {
                    // middle click
                    this.removePressedState(tileIndex);
                    if (this.leftPressed && this.rightPressed) {
                        this.exploreTile(tileIndex);
                    }
                    this.leftPressed = false;
                    this.rightPressed = false;
                    this.resetMasterButton();
                } else if (e.button === 0) {
                    // left click
                    this.removePressedState(tileIndex);  
                    if (this.leftPressed && this.rightPressed) {
                        this.exploreTile(tileIndex);
                        this.rightPressed = false;
                    } else if (this.leftPressed && !this.ctrlPressed) {
                        this.clickTile(tileIndex);
                    }
                    this.leftPressed = false;
                    this.resetMasterButton();
                } else if (e.button === 2) {
                    // right click
                    this.removePressedState(tileIndex);
                    if (this.leftPressed && this.rightPressed) {
                        this.exploreTile(tileIndex);
                        this.leftPressed = false;
                        this.resetMasterButton();
                    }
                    this.rightPressed = false;
                }
            }
        });
        tile.addEventListener('mouseout', (e) => {
            this.removePressedState(parseInt(e.target.getAttribute('tile')));
            this.mouseHoverTile = undefined;
        });
        tile.addEventListener('mouseover', (e) => {
            this.mouseHoverTile = parseInt(e.target.getAttribute('tile'));
            this.addPressedState(this.mouseHoverTile);
        });
        tile.addEventListener(`contextmenu`, (e) => { 
            e.preventDefault(); 
        });

        return tile;
    }

    resetMasterButton = () => {
        if (this.gameLost) {
            this.masterButton.className += "gameSprite masterButtonLose";
        } else if (this.gameOver) {
            this.masterButton.className += "gameSprite masterButtonWin";
        } else {
            this.masterButton.className += "gameSprite masterButton";
        }
    }

    addPressedState = (tileIndex) => {
        if (!this.gameLost) {
            if (this.leftPressed) {
                document.querySelector(`[tile="${tileIndex}"]`).classList.add('pressed')
            }
            if (this.leftPressed && this.rightPressed) {
                const surroundingIndices = this.getsurroundingIndices(this.mouseHoverTile);
                surroundingIndices.forEach((index) => {
                    document.querySelector(`[tile="${index}"]`).classList.add('pressed');
                });
            }
        }
    }

    removePressedState = (tileIndex) => {
        document.querySelector(`[tile="${tileIndex}"]`).classList.remove('pressed');
        const surroundingIndices = this.getsurroundingIndices(tileIndex);
        surroundingIndices.forEach((index) => {
            document.querySelector(`[tile="${index}"]`).classList.remove('pressed');
        });
    }

    createGameSpriteElement = (className) => {
        const spriteElement = document.createElement('div');
        spriteElement.classList.add('gameSprite', className);
        return spriteElement;
    }

    printTime = () => {
        const timeNumbers = document.querySelector(".timeContainer").children;
        if (this.firstClickTime) {
            const now = new Date();
            this.secondsSinceStart = Math.floor((now - this.firstClickTime) / 1000);
            if (this.secondsSinceStart < 999) {
                timeNumbers[0].className = timeNumbers[0].className.slice(0, -1) + Math.floor(((this.secondsSinceStart / 10) / 10) % 10);
                timeNumbers[1].className = timeNumbers[0].className.slice(0, -1) + Math.floor((this.secondsSinceStart / 10) % 10);
                timeNumbers[2].className = timeNumbers[0].className.slice(0, -1) + Math.floor(this.secondsSinceStart % 10);
            } else {
                timeNumbers[0].className = timeNumbers[0].className.slice(0, -1) + 9;
                timeNumbers[1].className = timeNumbers[0].className.slice(0, -1) + 9;
                timeNumbers[2].className = timeNumbers[0].className.slice(0, -1) + 9;
            }
        } else {
            timeNumbers[0].className = timeNumbers[0].className.slice(0, -1) + 0;
            timeNumbers[1].className = timeNumbers[0].className.slice(0, -1) + 0;
            timeNumbers[2].className = timeNumbers[0].className.slice(0, -1) + 0;
        }
    }

    printMinesLeft = () => {
        const mineNumbers = document.querySelector(".mineContainer").children;
        if (this.minesLeft >= 0) {
            mineNumbers[0].className = mineNumbers[0].className.slice(0, -1) + Math.floor(((this.minesLeft / 10) / 10) % 10);
            mineNumbers[1].className = mineNumbers[0].className.slice(0, -1) + Math.floor((this.minesLeft / 10) % 10);
            mineNumbers[2].className = mineNumbers[0].className.slice(0, -1) + Math.floor(this.minesLeft % 10);
        } else {
            mineNumbers[0].className = mineNumbers[0].className.slice(0, -1) + "-";
            const positiveMinesLeft = this.minesLeft * -1;
            mineNumbers[1].className = mineNumbers[0].className.slice(0, -1) + Math.floor((positiveMinesLeft / 10) % 10);
            mineNumbers[2].className = mineNumbers[0].className.slice(0, -1) + Math.floor(positiveMinesLeft % 10);
        }
    }

    checkGameState = () => {
        if (this.gameLost) {
            this.masterButton.className += "gameSprite masterButtonLose";
            this.gameEnd();
        } else if (this.minesLeft === this.hiddenTiles) {
            this.masterButton.className += "gameSprite masterButtonWin";
            this.minesLeft = 0;
            this.printMinesLeft();
            this.gameEnd();
        }
    }

    gameEnd = () => {
        this.gameOver = true;
        this.revealRemainingMines();
        this.printTime();
        clearInterval(this.timeInterval);
    }

    resetBoard = () => {
        this.initBoardArrays();
        document.querySelectorAll("[tile]").forEach((tile) => {
            tile.className = '';
            tile.classList.add('gameSprite', 'hiddenTile');
        });
        this.firstClick = true;
        this.firstClickTime = undefined;
        this.minesLeft = this.mines;
        this.gameLost = false;
        this.gameOver = false;
        this.markedHitMine = false;
        this.secondsSinceStart = 1;
        this.hiddenTiles = this.xLength * this.yLength;
        clearInterval(this.timeInterval);
        this.resetMasterButton();
        this.printTime();
        this.printMinesLeft();
        this.resetButtons();
    }
}

const nepSweeper = new NepSweeper();

window.addEventListener("keydown", (e) => {
    userSecret += e.key;
    if (userSecret !== secretString.slice(0, userSecret.length)) {
        userSecret = "";
    }
    if (userSecret === secretString && !document.getElementsByClassName("nepSweeper-secretContainer")[0]) {
        const secretElement = document.createElement("div");
        secretElement.classList.add("nepSweeper-secretContainer");
        document.body.appendChild(secretElement);
        const secretElementGameWrapper = document.createElement("div");
        secretElementGameWrapper.classList.add("nepSweeper-gameWrapper");
        secretElement.appendChild(secretElementGameWrapper);
        const secretElementClose = document.createElement("div");
        secretElementClose.classList.add("nepSweeper-secretContainerClose");
        secretElement.appendChild(secretElementClose);
        nepSweeper.start();
    }
});

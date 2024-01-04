const LS = localStorage;
const easytimer = window.easytimer;

class game {
    constructor(){
        this.Player = {}
        this.Player.name = generateName();
        this.Player.level = 1;
        this.Player.exp = 0;
        
        this.Player.money = 0;
        this.Player.credits = 0;

        this.Player.inventory = {};
        this.Player.inventory.stone = 0;
        this.Player.inventory.iron = 0;
        this.Player.inventory.silver = 0;
        this.Player.inventory.gold = 0;
        this.Player.inventory.titanium = 0;
        this.Player.inventory.oil = 0;
        this.Player.inventory.moon_cheese = 0;
        this.Player.inventory.moon_cheese_fuel = 0;

        this.Player.mining = false;
    }

    render = (game) => {
        const playerNameDOM = document.querySelector("#player-name");
        const playerLevelDOM = document.querySelector("#player-level");
        const playerExpNeededBarDOM = document.querySelector("#player-lvl-bar");
        const playerExpNeededDOM = document.querySelector("#player-lvl-txt");
        
        const playerMoneyDOM = document.querySelector("#player-dollars");
        const playerCreditsDOM = document.querySelector("#player-credits");

        const inventoryDOM = document.querySelector("#inventory");

        playerNameDOM.innerHTML = game.Player.name;
        playerLevelDOM.innerHTML = `Level: ${numberformat.format(game.Player.level, {sigfigs: 3})}`;
        playerExpNeededBarDOM.max = getLevelUp(game.Player);
        playerExpNeededBarDOM.value = game.Player.exp;
        playerExpNeededDOM.innerHTML = `${numberformat.format(game.Player.exp, {sigfigs: 3})} / ${numberformat.format(getLevelUp(game.Player), {sigfigs: 3})}`;

        playerMoneyDOM.innerHTML = `Money: ${symbols.money}${numberformat.format(game.Player.money)}`;
        if(game.Player.credits <= 0){
            playerCreditsDOM.style.display = "none";
        }else{
            playerCreditsDOM.style.display = "block";
            playerCreditsDOM.innerHTML = `Credits: ${symbols.credits}${numberformat.format(game.Player.credits)}`;
        }

        for (const child of inventoryDOM.children){
            if (child.nodeName == "SPAN"){
                var item = child.getAttribute("id").split("-").splice(1);
                var itemStr = "";
                for(var part in item){
                    itemStr += item[part];
                    if(parseInt(part) + 1 < item.length){
                        itemStr += "_";
                    }
                }
                var itemDOM = child;
                if (game.Player.inventory[itemStr] === 0){
                    itemDOM.style.display = "none";
                }else{
                    itemDOM.style.display = "block";
                    itemDOM.innerHTML = `${symbols[itemStr]} | ${names[itemStr]}: ${numberformat.format(game.Player.inventory[itemStr], {sigfigs: 3})}`;
                }
            }
        }


        return true;
    }

    update = (game) => {
        const expNeeded = getLevelUp(game.Player);

        return true;
    }
}


const Game = new game();

const mine = () => {
    if(!Game.Player.mining){
        Game.Player.mining = true;
        const mineOption = document.querySelector(".mine-select");
        const mineBar = document.querySelector("#mine-progress-bar");
        const mineTime = mineTimes[mineOption.value];

        var mineBarInterval = setInterval(() => {
            mineBar.value += 0.05;
        }, 50);

        var mineTimer = accurateTimer(() => {
            mineTimer.cancel();
            mineBar.value = 0;
            clearInterval(mineBarInterval);
            var resourceMined = 0;
            resourceMined = Math.ceil(Math.random() * 3);
            console.log(resourceMined);
            Game.Player.inventory[mineOption.value] += resourceMined;
            Game.Player.mining = false;
        }, mineTime * 1000)

        mineBar.max = mineTime;
    }
}




const renderLoop = setInterval(() => {
    Game.render(Game);
},200)
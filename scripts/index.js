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
        this.Player.inventory.technology = 0;

        this.Player.mining = false;

        this.Player.unlocks = [
            {"object" : "stone", "level" : 1, "unlocked" : true},
            {"object" : "iron", "level" : 2, "unlocked" : false},
            {"object" : "silver", "level" : 5, "unlocked" : false},
            {"object" : "gold", "level" : 10, "unlocked" : false},
            {"object" : "titanium", "level" : 15, "unlocked" : false},
            {"object" : "moon_cheese", "level" : 25, "unlocked" : false}
        ]
    }

    render = (game) => {
        const playerNameDOM = document.querySelector("#player-name");
        const playerLevelDOM = document.querySelector("#player-level");
        const playerExpNeededBarDOM = document.querySelector("#player-lvl-bar");
        const playerExpNeededDOM = document.querySelector("#player-lvl-txt");
        
        const playerMoneyDOM = document.querySelector("#player-dollars");
        const playerCreditsDOM = document.querySelector("#player-credits");

        const inventoryDOM = document.querySelector("#inventory");

        const mineSelectDOM = document.querySelector("#mine-select");

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


        for (const child of mineSelectDOM.children){
            for (var unlock in game.Player.unlocks){
                if(game.Player.unlocks[unlock].object === child.value){
                    if(game.Player.unlocks[unlock].unlocked === true || game.Player.level >= game.Player.unlocks[unlock].level){
                        game.Player.unlocks[unlock].unlocked = true;
                        child.style.display = "block";
                    }else{
                        child.style.display = "none";
                    }
                }
            }
        }

        return true;
    }

    update = (game) => {
        var expNeeded = getLevelUp(game.Player);

        if (game.Player.exp >= expNeeded) {
            game.Player.exp = 0;
            game.Player.level += 1;
            expNeeded = getLevelUp(game.Player);
        }

        this.render(game);

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
        const mineLabel = document.querySelector("#mine-progress-label");
        const mineAlert = document.querySelector(".mine-alert");

        const _mineOption = JSON.parse(JSON.stringify(mineOption.value));

        mineLabel.innerHTML = `${numberformat.format(mineTime, {sigfigs: 3})}s`;

        var mineBarInterval = setInterval(() => {
            mineBar.value += 0.05;
        }, 50);

        var mineTimer = accurateTimer(() => {
            mineTimer.cancel();
            mineBar.value = 0;
            clearInterval(mineBarInterval);
            var resourceMined = 0;
            resourceMined = Math.ceil(Math.random() * 3);
            Game.Player.inventory[_mineOption] += resourceMined;
            Game.Player.mining = false;
            Game.Player.exp += expValues[_mineOption];
            mineLabel.innerHTML = ``;
            mineAlert.innerHTML = `+${resourceMined} ${symbols[_mineOption]} | ${names[_mineOption]}`;
            mineAlert.style.opacity = 1;
        }, mineTime * 1000)

        mineBar.max = mineTime;
    }
}




const renderLoop = setInterval(() => {
    Game.update(Game);
},200)
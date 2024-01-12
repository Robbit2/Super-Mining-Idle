const adjectives = ["Malicious","Educational","Utopian","Similar","Pathetic","Lonely","Smiling","Unhappy","Tawdry","Delicate","Scandalous","Unlikely","Skinny","Protective","Chilly","Black","Filthy","Strange","Abhorrent","Ready","Tight","Fisted","Mellow","Abashed","Keen","Lowly","Slow","Same","Glorious","Needless","Deadpan","Complete","Rabid","Auspicious","Calm","Quizzical","Ashamed","Federal","General","Furry","Foamy","Present","Left","Consistent","Superficial","Powerful","Gratis","Wrathful","Cloudy","Broken","Lying"]
const animals = ["Badger","Dormouse","Chicken","Echidna","Aardwolf","Alpaca","Owl","Genet","Butterfly","Tayra","Lynx","Chameleon","Chimpanzee","Mandrill","Narwhal","Platypus","Pangolin","Robin","Capybara","Anteater","Mouse","Nautilus","Sawfish","Otter","Eel","Jellyfish","Salmon","Killdeer","Clam","Marlin","Megaladon","Starfish","Anemone","Shrimp","Aardvark","Gerbil","Antelope","Chipmunk","Peacock","Jackrabbit","Wallaby","Dog","Axolotl","Puffin","Koala","Emu","Monkey","Pig","Lemur!","Deer","Marmot"]

class randomClass {
    constructor(){
        return true;
    }

    randList(list){
        var length = list.length;
        var obj = list[Math.floor(Math.random() * length)];
        return obj;
    }
}

const Random = new randomClass();

const generateName = () => {
    var animal = Random.randList(animals);
    var adjective = Random.randList(adjectives);
    var name = adjective + " " + animal + " Mining Co.";
    return name;
};

const getLevelUp = (player) => {
    var lvl = player.level + 1;
    // exponential leveling curve
    var expEquation = (100 * (lvl ** 2)) - (100 * lvl);
    var expNeeded = expEquation;

    return expNeeded;
};

const capitalize = (string) => {
    const string2 = string.charAt(0).toUpperCase() + string.slice(1);
    return string2;
};

const accurateTimer = (fn, time = 1000) => {
    // nextAt is the value for the next time the timer should fire.
    // timeout holds the timeoutID so the timer can be stopped.
    let nextAt, timeout;
    // Initilzes nextAt as now + the time in milliseconds you pass
    // to accurateTimer.
    nextAt = new Date().getTime() + time;
   
    // This function schedules the next function call.
    const wrapper = () => {
      // The next function call is always calculated from when the
      // timer started.
      nextAt += time;
      // this is where the next setTimeout is adjusted to keep the
      //time accurate.
      timeout = setTimeout(wrapper, nextAt - new Date().getTime());
      // the function passed to accurateTimer is called.
      fn();
    };
   
    // this function stops the timer.
    const cancel = () => clearTimeout(timeout);
   
    // the first function call is scheduled.
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
   
    // the cancel function is returned so it can be called outside
    // accurateTimer.
    return { cancel };
};

const oreNameGenerator = () => {
    const endings = ["ite","ium"];
    const begin = ["Ha","Fola","Xi","Pho"];
    const middle = ["lt","rt","whyr"];

    let name = "";

    name += Random.randList(begin);
    name += Random.randList(middle);
    name += Random.randList(endings);

    return name;
};
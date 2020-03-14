
const util = require('./util');

function getRandomUserName() {

    const user_names = [
        "dillingerscarf", 
        "mumpscatapult", 
        "pruningfootwork", 
        "habitualredhead", 
        "synagoguestuck", 
        "needlessknead", 
        "supremacydial", 
        "donateddimly", 
        "texturestranquil", 
        "adjacentcandy", 
        "gadgetshape", 
        "crayfishunruffled", 
        "generousfilleting", 
        "maximumscience", 
        "charityhandgun", 
        "churlishhardcover", 
        "manorjuggling", 
        "foxyfiddling", 
        "massestriceps", 
        "meteoriteaudition", 
        "raggabrashconfusion", 
        "rorygutless", 
        "sedativeeskimo", 
        "tracksamantha", 
        "poultryquebec", 
        "discusfilth", 
        "outhaulunbiased", 
        "myriadillinois", 
        "henestrogen", 
        "continuerupert", 
        "curlersand", 
        "shovelemblematic", 
        "pilkinsscale", 
        "industryresend", 
        "unstirredchildhood", 
        "pandafluoride", 
        "fibulaofficer", 
        "yamjohn", 
        "tartarfreestyle", 
        "kyraresponsibility", 
        "pickleethanol", 
        "gentwanting", 
        "hungergrading", 
        "cappicinoregistrar", 
        "ceresmango", 
        "reactweekly", 
        "prolapsecow", 
        "standshootv", 
        "heliosheathtoy", 
        "subsidytint", 
        "nalaawed", 
        "decorouslifter", 
        "triangularsolo", 
        "stuffingsensors", 
        "meatsprang", 
        "beautifulamplifier", 
        "curdlecosecant", 
        "snowbirdcolorado", 
        "slushdakota", 
        "inspiringcopyright", 
        "snawleyvalve", 
        "depletecompound", 
        "minestronechyandour", 
        "wacketsplacard", 
        "glareglory", 
        "bogusnessamber", 
        "ditchcahoots", 
        "coconutabsence", 
        "cookiehubic", 
        "clotsonto", 
        "rubberwarrior", 
        "crosstreesportly", 
        "dribbblestaking", 
        "blackieupper", 
        "shortpremises", 
        "envelopesyllables", 
        "hawthornunholy", 
        "tirrytweezers", 
        "blurbcerebrum", 
        "tailorpymmes", 
        "chintoss", 
        "unhelpfulsubmerge", 
        "skewergame", 
        "peltconsumer", 
        "radiationsprout", 
        "queenhill", 
        "springswarland", 
        "overjoyedfidgeting", 
        "vealdash", 
        "deafnesswoof", 
        "fantsleprechaun", 
        "clampoval", 
        "clennamoutboard", 
        "greaterfuffing", 
        "crustbolt", 
        "glutinousaim", 
        "hardcoremono", 
        "destinythump", 
        "earinglandline", 
        "laurelleakest" 
    ];

    return user_names[util.getRandomArbitrary(0, user_names.length - 1)];
}

exports.getRandomUserName = getRandomUserName;

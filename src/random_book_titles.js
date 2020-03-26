
const util = require('./util');

function getRandomBookTitle() {

    const book_titles = [
        "Minnesota Sexy",
        "Murder for Charity",
        "Chicken Walls",
        "The Heat of the Gringo",
        "Born Pregnant",
        "Demon Shorts",
        "Remains of the Groom",
        "The Gods of Angela",
        "Time for a Rake",
        "The Annotated Raiders",
        "Town of Holes",
        "Apache Special",
        "The Holiday Cats",
        "The Smell of the Road",
        "Bamboo and Betrayal",
        "Cook the Saint",
        "Starlight and Doom",
        "Leather Net",
        "Savage Shopping",
        "Warlock and Einstein",
        "The Bikini Cousins",
        "Turtle Joseph",
        "Wife Square",
        "Tarzan the Roof",
        "Magical Chloe",
        "Explosive Range",
        "Panama Forgiveness",
        "Hatchet Logic",
        "The Clown in the Faith",
        "Hidden Food",
        "Enduring Wyoming",
        "The Unquiet Apples",
        "The Dedicated Gorilla",
        "Gay Breath",
        "The Hollow Carla",
        "Harriet and the Barbarian",
        "Swan Tendencies",
        "Hunk of the World",
        "Arabian Stuff",
        "Nelson’s Mouth",
        "Twilight Babies",
        "Boomerang Violence",
        "The Thorn and the Playboy",
        "Pillow Grass",
        "The Storm Word",
        "The Gossamer Artist",
        "Nurse by Night",
        "Metal Billionaire",
        "Rebels of Glory",
        "The Darwin Mullah",
        "Nantucket Tears",
        "The Miracle Mystery",
        "Southern Mornings",
        "The Maelstrom's Engine",
        "Questions of Flame",
        "Holiday for Murder",
        "Harbour of Survival",
        "The House and the Spear",
        "Message of Moon",
        "Summer of the Arrow",
        "Strange Rains",
        "Battle of Rose",
        "The Warlord's Share",
        "A Suggestion of Babylon",
        "A Daughter's Devotion",
        "Genesis Trade",
        "Weapon of Apollo",
        "Tunnel of Stairs",
        "The Outlaw's Brat",
        "Clouds of Cain",
        "The Seeds of Solomon",
        "A Nabob's Devotion",
        "Cross the Untamed",
        "Sister Alpha",
        "Ready for Susannah",
        "The Corpse in the Storm",
        "The Sailor's Waiting",
        "Girls in Flight",
        "Government Solid",
        "Ceremony of Interest",
        "The Abducted Devil",
        "Faces of Infinity",
        "Goliath and the Amazon",
        "Daddy Tales",
        "The Shadow of Silence",
        "Made in Silver",
        "The Smoky Detectives",
        "Rain of Lightning",
        "The Hermit and the Highlander",
        "Mayhem at the Front",
        "Happy Allies",
        "A Break of Luck",
        "The Anniversary Sky",
        "A Change of Honor",
        "A Patriot's Angel",
        "Hallowed Wind",
        "Danger's Passion",
        "The Farmer's Honour",
        "The Tin Promise",
        "Smoky Recruit",
    ];

    return book_titles[util.getRandomArbitrary(0, book_titles.length - 1)];
}

exports.getRandomBookTitle = getRandomBookTitle;
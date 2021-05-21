var colors = [
    "#F5DF4D",
    "#939597",
    "#0f4c81",
    "#ff6f61",
    "#5f4b8b",
    "#88b04b",
    "#f7caca",
    "#B3CEE5",
    "#B57170",
    "#AD5E99",
    "#009874",
    "#dd4124",
    "#d94f70",
    "#45b5aa"
];
var heading = [
    "2021: Illuminating (JOINT)",
    "2021: Ultimate Gray (JOINT)",
    "2020: Classic Blue",
    "2019: Living Coral",
    "2018: Ultra Violet",
    "2017: Greenery",
    "2016: Rose Quartz [JOINT]",
    "2016: Serenity [JOINT]",
    "2015: Marsala",
    "2014: Radiant Orchid",
    "2013: Emerald",
    "2012: Tangerine Tango",
    "2011: Honeysuckle",
    "2010: Turquoise"
];
var desc = [
    "Illuminating is a bright and cheerful yellow sparkling with vivacity; a warming yellow shade imbued with solar power.",
    "Ultimate Gray quietly assures, encouraging feelings of composure, steadiness and resilience.",
    "An expansive presence, Classic Blue is evocative of the vast and infinite evening sky opening a world of possibilities.",
    "An animating and life-affirming coral hue with a golden undertone that energises and enlivens with a softer edge.",
    "A dramatically provocative and thoughtful purple shade, Ultra Violet communicates originality, ingenuity, and visionary thinking that points us towards the future.",
    "A refreshing and revitalising shade, Greenery is symbolic of new beginnings.",
    "Rose Quartz is a persuasive yet gentle tone that conveys compassion and a sense of composure.",
    "Serenity is weightless and airy, like the expanse of the blue sky above us, bringing feelings of respite and relaxation even in turbulent times.",
    "A naturally robust and earthy wine red, Marsala enriches our minds, bodies and souls.",
    "An enchanting harmony of fuchsia, purple and pink undertones, Radiant Orchid inspires confidence and emanates great joy, love and health.",
    "A luminous, magnificent hue, Emerald is the colour of beauty, new life and prosperity.",
    "Reminiscent of the radiant shadings of a sunset, Tangerine Tango is a vivacious, magnetic hue that emanates heat and energy.",
    "A bright, sherberty pink shade, uplifting and optimistic, evoking nostalgic feelings of summertime.",
    "Combining the serene qualities of blue and the invigorating aspects of green, Turquoise inspires thoughts of soothing, tropical waters and a comforting escape from the everyday troubles of the world, while at the same time restoring our sense of wellbeing."
];

var i = -1;
document.querySelector(".content button").addEventListener("click",
    function() {
        i = i < (colors.length)-1 ? ++i : 0;
        document.querySelector("body").style.background = colors[i];
        document.querySelector(".content h1").innerHTML = heading[i];
        document.querySelector(".content p").innerHTML = desc[i];
    });
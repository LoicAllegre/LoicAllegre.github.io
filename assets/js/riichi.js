
/* Tile code : 
    m1 m2 m3 s1 s2 s3 p1 p2 p3
    mr sr pr
    to na sh pe
    ch hk ht


*/

var tilecodes = {
    "m1": "Man1",
    "m2": "Man2",
    "m3": "Man3",
    "m4": "Man4",
    "m5": "Man5",
    "m6": "Man6",
    "m7": "Man7",
    "m8": "Man8",
    "m9": "Man9",
    "s1": "Sou1",
    "s2": "Sou2",
    "s3": "Sou3",
    "s4": "Sou4",
    "s5": "Sou5",
    "s6": "Sou6",
    "s7": "Sou7",
    "s8": "Sou8",
    "s9": "Sou9",
    "p1": "Pin1",
    "p2": "Pin2",
    "p3": "Pin3",
    "p4": "Pin4",
    "p5": "Pin5",
    "p6": "Pin6",
    "p7": "Pin7",
    "p8": "Pin8",
    "p9": "Pin9",
    "ch": "Chun",
    "hk": "Haku",
    "ht": "Hatsu",
    "to": "Ton",
    "na": "Nan",
    "sh": "Shaa",
    "pe": "Pei",
    "mr": "Man5-Dora",
    "sr": "Sou5-Dora",
    "pr": "Pin5-Dora"
}

var trivia = {
    "pinfu" : 'The exact definition of Pinfu is a "valueless hand", without any <i>fu</i>. This is the reason it forbids triplets, pairs that give <i>fu</i>, and single-tile waits.',
    "tanyao" : 'EMA rules allow open Tanyao (<i>Kuitan Ari</i>), but some rulesets require a concealed hand to claim Tanyao (<i>Kuitan Nashi</i>)',
    "rinshan" : 'Rinshan Kaihou is written 嶺上開花, and can be literally translated as "The Blooming Flower Atop the Mountain".',
    "haitei" : 'Haitei Raoyue is written 海底撈月, meaning "Scooping up the Moon\'s reflection at the Bottom of the Sea". It is a Chinese/Japanese figurative expression for performing a futile task.',
    "houtei": 'Houtei Raoyui (河底撈魚), is a pun on Haitei Raoyue, meaning "Catching Fish at the Bottom of the River". The River in question is an allusion to the player\'s discard pile.'
}

function displayInfo(elementId, handCode){

    var element = document.getElementById(elementId);

    var infoHtml = "";

    if(handCode !== ""){
        infoHtml = infoHtml.concat(printHand(handCode));
    }
    if(elementId in trivia){
        infoHtml = infoHtml.concat(`\n\n<p>Notes :<ul><li>${trivia[elementId]}</li></ul></p>`);
    }

    element.innerHTML = infoHtml;
    
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }

}


function printHand(handCode){

    var handHtml = "";
    //const regexp = /\[(\w+)\]\(([\@a-z0-9]+)\)*(\+\w+)?/;
    const regexp = /^\[(?<closed>\w+)\]\[(\([a-z0-9@]+\))?(\([a-z0-9@]+\))?(\([a-z0-9@]+\))?(\([a-z0-9@]+\))?\](?<win>\+\w+)/;
    var matches = handCode.match(regexp);
    var closedPart = matches.groups.closed;
    var winTile = matches.groups.win;

    console.log(matches);

    for(let i = 0; i < closedPart.length; i = i+2){
        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[closedPart.substring(i,i+2)]}.png" width="6%" style="margin: 0 2px 20px 0;">`);
    }

    for(let i = 2; i < matches.length - 1; i++){
        if(typeof matches[i] !== 'undefined'){
            var meld = matches[i].substring(1, matches[i].length - 1);
            var called = 0;
            if(meld[0] == '@'){
                called = 1;
            }
            if(meld[2] == '@'){
                called = 2;
            }
            if(meld[4] == '@'){
                called = 3;
            }
            if(meld.length > 7){
                if(meld[6] == '@'){
                    called = 4;
                }
            }
            if(meld.length == 7){
                switch (called) {
                    case 1:
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(1,3)]}.png" width="6%" style="margin: 15px 10px 20px 20px;transform:rotate(90deg);">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(3,5)]}.png" width="6%" style="margin: 0 2px 20px 0;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(5,7)]}.png" width="6%" style="margin: 0 2px 20px 0;">`);
                        break;
                    
                    case 2:
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(0,2)]}.png" width="6%" style="margin: 0 2px 20px 20px;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(3,5)]}.png" width="6%" style="margin: 15px 10px 20px 10px;transform:rotate(90deg);">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(5,7)]}.png" width="6%" style="margin: 0 2px 20px 0;">`);
                        break;
                    
                    case 3:
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(0,2)]}.png" width="6%" style="margin: 0 2px 20px 20px;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(2,4)]}.png" width="6%" style="margin: 0 2px 20px 0;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(5,7)]}.png" width="6%" style="margin: 15px 2px 20px 10px;transform:rotate(90deg);">`);
                        break;

                    default:
                        break;
                }
            }
        }
    }
    

    handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[winTile.substring(1,3)]}.png" width="6%" style="margin: 0 2px 20px 20px;">`);

    return handHtml;
}
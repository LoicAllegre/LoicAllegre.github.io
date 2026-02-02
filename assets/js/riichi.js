
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
    "pr": "Pin5-Dora",
    "bk": "Back"
}

var trivia = {
    "pinfu" : ['The exact definition of Pinfu is a "valueless hand", without any <i>fu</i>. This is the reason it forbids triplets, pairs that give <i>fu</i>, and single-tile waits.'],
    "tanyao" : ['EMA rules allow open Tanyao (<i>Kuitan Ari</i>), but some rulesets require a concealed hand to claim Tanyao (<i>Kuitan Nashi</i>)'],
    "rinshan" : ['Rinshan Kaihou is written 嶺上開花, and can be literally translated as "The Blooming Flower Atop the Mountain".'],
    "haitei" : ['Haitei Raoyue is written 海底撈月, meaning "Scooping up the Moon\'s reflection at the Bottom of the Sea". It is a Chinese/Japanese figurative expression for performing a futile task.'],
    "houtei": ['Houtei Raoyui (河底撈魚), is a pun on Haitei Raoyue, meaning "Catching Fish at the Bottom of the River". The River in question is an allusion to the player\'s discard pile.'],
    "chankan" : ['Literally "Robbing a Kan". The Kan is not considered successful, thus no additional Dora indicator is revealed.','It is possible to claim Ron with Chankan when a concealed Kan is declared, but <i>only</i> in the case where the winning hand is Kokushi Musou.'],
    "sanankou" : ['If a triplet is completed by calling Ron, that triplet is counted as open, and thus cannot count towards San\'ankou, even though the hand is still considered concealed.','If the triplet is completed by Tsumo, however, it is considered concealed and does count for San\'ankou.'],
    "shousangen" : ['Shousangen is cumulative with Fanpai, so in practice it is always worth at least 4 Han : 2 from Shousangen and 2 from Fanpai\'s'],
    "honroutou" : ['Since Honroutou requires all tiles to be Terminals or Honours, it cannot contain sequences. As such, in practice Honroutou always occurs with either Toitoitsu or Chiitoitsu (each giving 2 Han), so the cumulated hand value is at least 4 Han.'],
    "ryanpeikou" : ['Ryanpeikou does not stack with Iipeikou, i.e. it does not give 3 + 2x1 Han, only 3.', 'It also does not stack with Chiitoitsu : even though a Ryanpeikou hand contains the same tiles as a Chiitoitsu one, it cannot be both (since in one case the tiles are arranged in sequences, and in pairs in the other case). The player must choose which Yaku to apply (usually Ryanpeikou gives higher hand value).'],
    "renhou" : ['Renhou is valid only in the first <i>uninterrupted turn</i>, meaning it cannot be claimed if calls (Pon, Chii,...) have been made.', 'The status of Renhou is a bit peculiar. In official EMA rules, it is worth 5 Han, and cannot be combined with any other Yaku or even Dora.','Depending on the ruleset, Renhou is sometimes counted as a Yakuman, sometimes more rarely as a flat Baiman. In other cases (such as most online platforms), it is not even counted and awards no points at all.', 'Renhou (人和) means "Blessing of Man"'],
    "chinitsu" : ['Chin\'itsu is not cumulative with Hon\'itsu.'],
    "sanshokudoukou" : ['Contrary to Sanshoku Doujun, Sanshoku Doukou does not lose value if the hand is open.'],
    "tenhou" : ['Tenhou (天和) means "Blessing of Heaven".', 'The probability of attaining Tenhou, i.e. that a randomly drawn set of 14 tiles forms a valid hand, is around 1 in 330.000 (~ 0.0003%).'],
    "chihou" : ['Chihou (地和) means "Bleassing of Earth".', 'As with Renhou, it must occur in the first uninterrupted turn, and thus cannot be claimed after other calls have been made.'],
    "kokushi" : ['Kokushi Musou (国士無双) can be literally translated as "Peerless Exemplary Citizen"'],
    "chuuren" : ['Chuurenpoutou (九蓮宝燈), sometimes called "Nine Gates" in english, is roughly translated as "Nine-Lotus Treasure Lamp".','Despite the very specific shape of this hand, it still follows the general pattern of four sets and one pair.','From the tiles 1112345678999, any additional tile in that family can slot in to form a valid hand, and thus Chuurenpoutou. This is known as "nine-wait" or "pure" Chuuren (純正九蓮宝燈, "junsei chuurenpoutou"), and in some rules counts as a double Yakuman.'],
    "suuankou" : ['If a triplet is completed by calling Ron, that triplet is counted as open, and thus cannot count towards Suuankou. See the note above on San\'ankou.'],
    "suukantsu" : ['Since Suukantsu requires 4 Kan calls, it can only be completed by a wait on the final pair.','In order to form a Kan (either open, closed or promoted), a player must self-draw at least 3 of the 4 tiles. Thus, any hand that scores Suukantsu could have been instead a Suuankou (a much easier Yakuman) if the player had chosen not to call the Kans. This is why there are usually no real benefits to go for Suukantsu, except as a challenge.', '<i>Sekinin Barai</i> (see note below) applies if a player deals into a fourth Kan call when three other (open or closed) have already been made.'],
    "ryuuiisou" : ['Ryuuiisou can be open.', 'Green Dragons are green.','Birds are not green.'],
    "daisangen" : ['<i>Sekinin Barai</i> (see note below) applies if a player deals into the third dragon call when the two others have already been made.'],
    "daisuushii" : ['<i>Sekinin Barai</i> (see note below) applies if a player deals into the fourth wind call when the three others have already been made.'],
    "junchan" : ['Junchan Taiyai cannot be cumulated with Chanta, as Chanta requires at least one Honour tile.'],
    "chanta" : ['Chanta requires at least one Honour tile to be present, otherwise the hand would be Junchan Taiyai, which cannot be cumulated with Chanta.'],
    "chiitoi": ['Chitoitsu always gives exactly 25 <i>fu</i>, and no other minipoints can be awarded.', 'The tiles are considered to be in pairs, and cannot be considered as sequences for other Yaku\'s purpose. For example, a Chiitoitsu hand with three consecutive pairs <i>does not</i> count as Iipeikou.']
}

function toggleAllNotes(){
    var notes = document.querySelectorAll("a.yakulink");
    
    notes.forEach(element => {
        element.click();
    });
}

function displayInfo(elementId, handCode){

    var element = document.getElementById(elementId);

    var infoHtml = "";

    if(handCode !== ""){
        infoHtml = infoHtml.concat(printHand(handCode));
    }
    if(elementId in trivia){
        infoHtml = infoHtml.concat('\n\n<p>Notes :<ul>');
        trivia[elementId].forEach(entry => {
            infoHtml = infoHtml.concat(`<li>${entry}</li>`)            
        });
        infoHtml = infoHtml.concat('</ul></p>');
    }

    element.innerHTML = infoHtml;
    
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }

}


function printHand(handCode){

    var tileCutoff = 14;
    var tileWidth = 6;
    var tileSideWidth = 8;

    if (window.matchMedia('screen and (max-width: 768px)').matches) {
        tileCutoff = 6;
        tileWidth = 12;
        tileSideWidth = 16;
    }

    var handHtml = "";
    //const regexp = /\[(\w+)\]\(([\@a-z0-9]+)\)*(\+\w+)?/;
    const regexp = /^\[(?<closed>\w+)\]\[(\([a-z0-9@]+\))?(\([a-z0-9@]+\))?(\([a-z0-9@]+\))?(\([a-z0-9@]+\))?\](?<win>\+\w+)/;
    var matches = handCode.match(regexp);
    var closedPart = matches.groups.closed;
    var winTile = matches.groups.win;

    console.log(matches);

    var tileCounter = 0;
    

    for(let i = 0; i < closedPart.length; i = i+2){
        var margin_right = 2;
        if(i == closedPart.length-2){
            margin_right = 20;
        }
        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[closedPart.substring(i,i+2)]}.png" width="${tileWidth}%" style="margin: 0 ${margin_right}px 20px 0;">`);
        tileCounter++;
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
                if(tileCounter+3 > tileCutoff && tileCounter <= tileCutoff){
                    handHtml = handHtml.concat("<br/>");
                }
                switch (called) {
                    case 1:
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White_Horizontal/${tilecodes[meld.substring(1,3)]}.png" width="${tileSideWidth}%" style="margin: 15px 2px 20px 0px;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(3,5)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(5,7)]}.png" width="${tileWidth}%" style="margin: 0 20px 20px 0;">`);
                        tileCounter = tileCounter + 3;
                        break;
                    
                    case 2:
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(0,2)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0px;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White_Horizontal/${tilecodes[meld.substring(3,5)]}.png" width="${tileSideWidth}%" style="margin: 15px 2px 20px 0px;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(5,7)]}.png" width="${tileWidth}%" style="margin: 0 20px 20px 0;">`);
                        tileCounter = tileCounter + 3;
                        break;
                    
                    case 3:
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(0,2)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0px;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(2,4)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White_Horizontal/${tilecodes[meld.substring(5,7)]}.png" width="${tileSideWidth}%" style="margin: 15px 20px 20px 0px;">`);
                        tileCounter = tileCounter + 3;
                        break;

                    default:
                        break;
                }
            }
            if(meld.length == 8){
                if(tileCounter+4 > tileCutoff && tileCounter <= tileCutoff){
                    handHtml = handHtml.concat("<br/>");
                }
                handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(0,2)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0px;">`);
                handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(2,4)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0px;">`);
                handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(4,6)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0px;">`);
                handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(6,8)]}.png" width="${tileWidth}%" style="margin: 0 20px 20px 0px;">`);
                tileCounter = tileCounter + 4;
            }
            if(meld.length == 9){
                if(tileCounter+4 > tileCutoff && tileCounter <= tileCutoff){
                    handHtml = handHtml.concat("<br/>");
                }
                switch (called) {
                    case 1:
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White_Horizontal/${tilecodes[meld.substring(1,3)]}.png" width="${tileSideWidth}%" style="margin: 15px 2px 20px 0px;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(3,5)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(5,7)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(7,9)]}.png" width="${tileWidth}%" style="margin: 0 20px 20px 0;">`);
                        tileCounter = tileCounter + 4;
                        break;
                    
                    case 2:
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(0,2)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0px;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White_Horizontal/${tilecodes[meld.substring(3,5)]}.png" width="${tileSideWidth}%" style="margin: 15px 2px 20px 0px;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(5,7)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0px;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(7,9)]}.png" width="${tileWidth}%" style="margin: 0 20px 20px 0;">`);
                        tileCounter = tileCounter + 4;
                        break;
                    
                    case 3:
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(0,2)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0px;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(2,4)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White_Horizontal/${tilecodes[meld.substring(5,7)]}.png" width="${tileSideWidth}%" style="margin: 15px 2px 20px 0px;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(7,9)]}.png" width="${tileWidth}%" style="margin: 0 20px 20px 0;">`);
                        tileCounter = tileCounter + 4;
                        break;

                    case 4:
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(0,2)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0px;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(2,4)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[meld.substring(4,6)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0;">`);
                        handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White_Horizontal/${tilecodes[meld.substring(7,9)]}.png" width="${tileSideWidth}%" style="margin: 15px 20px 20px 0px;">`);
                        tileCounter = tileCounter + 4;

                    default:
                        break;
                }
            }
        }
    }
    
    if(tileCounter+1 > tileCutoff && tileCounter <= tileCutoff){
        handHtml = handHtml.concat("<br/>");
        tileCounter = 0;
    }
    handHtml = handHtml.concat(`<img src="/assets/mahjong/Export/White/${tilecodes[winTile.substring(1,3)]}.png" width="${tileWidth}%" style="margin: 0 2px 20px 0px;">`);

    return handHtml;
}
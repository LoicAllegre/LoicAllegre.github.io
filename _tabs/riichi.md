---
# the default layout is 'page'
title: Riichi
icon: fas fa-file-lines
order: 5
---

<script type="text/javascript" src="/assets/js/riichi.js"></script>

Some useful Riichi Mahjong resources.

## Rules

- [Latest (-ish) official EMA Rulebook](/assets/mahjong/Riichi-rules-2025-EN.pdf)
- [Scoring table](/assets/mahjong/Riichi_Scoring.pdf)


## List of Yaku

Click on the Yaku names for example hands and/or additional info. <a href="#/" onclick="toggleAllNotes()">Show/Hide all.</a>

### 1-Han Yaku

- <a class="yakulink" href="#/">Riichi</a> : **Concealed only**. Winning with concealed hand, after being declared ready with 1000pt riichi bet.

- <a class="yakulink" href="#/">Ippatsu</a> : Winning (Tsumo or Ron) in the uninterrupted turn immediately following the Riichi declaration.

- <a class="yakulink" href="#/">Menzen Tsumo</a> : **Concealed only**. Win by self-draw on a fully concealed hand.

- <a class="yakulink" href="#/" onclick="displayInfo('pinfu', '[m1m2m3s1s1s5s6p2p3p4p7p8p9][]+s7')">Pinfu</a> : **Concealed only**. Concealed hand with four sequences and a valueless pair, and with the winning tile completing a two-sided wait. Valueless pairs are any pairs except pairs of dragons, round wind or seat wind.

<div id="pinfu" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('tanyao', '[m3m3m3s2s3s4s9s9p6p8][(p4@p4p4)]+p7')">Tanyao</a> : All ordinary tiles, i.e. no Terminals (1/9), no Honours (winds/dragons).

<div id="tanyao" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('fanpai', '[m3m4m5s9s9p1p1][(htht@ht)(p4p6@p5)]+s9')">Fanpai</a> : Triplet (three of the same tile) of dragons, turn wind or seat wind. Can have more than one (each triplet adds 1 han).

<div id="fanpai" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('iipeikou', '[s7s7m1m2m3p5p5p6p6p7p7m6m6][]+s7')">Iipeikou</a> : **Concealed only**. Two identical sequences (in the same family).

<div id="iipeikou" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('rinshan', '')">Rinshan Kaihou</a> : Winning on the replacement tile drawn after declaring a Kan.

<div id="rinshan" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('chankan', '')">Chankan</a> : Winning by claiming the tile used by another player to promote a Kan.

<div id="chankan" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('haitei', '')">Haitei Raoyue</a> : Win by Tsumo on the last tile of the wall.

<div id="haitei" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('houtei', '')">Houtei Raoyui</a> : Win by Ron on the last discarded tile of the round.

<div id="houtei" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>


### 2-Han Yaku

- <a class="yakulink" href="#/" onclick="displayInfo('daburu', '')">Double Riichi</a> : **Concealed only**. Riichi in the first (uninterrupted) turn. 

- <a class="yakulink" href="#/" onclick="displayInfo('chiitoi', '[m2m2m9m9s1s1s5s5p2p2p8p8pe][]+pe')">Chiitoitsu</a> : **Concealed only**. Hand consisting of seven distinct pairs. Must be concealed, cannot have two identical pairs (i.e. 4 of the same tile).

<div id="chiitoi" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('toitoi', '[m5m5m5s3s3s3hk][(@s8s8s8)(sh@shsh)]+hk')">Toitoitsu</a> : Hand comprised of four triplets and one pair.

<div id="toitoi" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('sanshokudoujun', '[m5m6m7s5s6s7p1p1p1p6p7nana][]+p5')">Sanshoku Doujun</a> : **-1 Han in open hands**. The same sequence in each of the three families.

<div id="sanshokudoujun" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('sanshokudoukou', '[m2m2m2s6s7p2p2p2p9p9][(s2s2@s2)]+s5')">Sanshoku Doukou</a> : The same triplet in each of the three families.

<div id="sanshokudoukou" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('ittsuu', '[m6m6p1p2p3p4p5p6toto][(p7@p8p9)]+m6')">Ittsuu</a> : **-1 Han in open hands**. The sequences 1-2-3, 4-5-6 and 7-8-9 in one family.

<div id="ittsuu" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('chanta', '[m1m1m7m8m9s1s2][(@hththt)(p7p9@p8)]+s3')">Chanta</a> : **-1 Han in open hands**. Each of the four three-tile sets and the pair composing the hand has at least one Terminal or Honour.

<div id="chanta" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('sanankou', '[m6m6m6s4s4s4p8pepepe][(@p3p2p4)]+p8')">San'ankou</a> : Three concealed triplets, that is triplets that were fully drawn.

<div id="sanankou" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('sankantsu', '[m7m8p4p4][(bkm3m3bk)(@s5s5s5s5)(na@nanana)]+m6')">Sankantsu</a> : Three Kans.

<div id="sankantsu" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('shousangen', '[s1s2s3p4p5p6chchhkhk][(htht@ht)]+ch')">Shousangen</a> : Two triplets and a pair of Dragons.

<div id="shousangen" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('honroutou', '[m1m1m1s9s9p1p1nana][(@hththt)]+na')">Honroutou</a> : Hand comprised of only Terminal and Honour tiles.

<div id="honroutou" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

### 3-Han Yaku

- <a class="yakulink" href="#/" onclick="displayInfo('ryanpeikou', '[m5m5s3s3s4s4s5s5p7p7p8p9p9][]+p8')">Ryanpeikou</a> : **Concealed only**. Two distinct pairs of the same identical sequence, i.e. having two distincts *Iipeikou*.

<div id="ryanpeikou" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('honitsu', '[m2m2m6m7m8hkhk][(@m4m5m6)(shsh@sh)]+m2')">Hon'itsu</a> : **-1 Han in open hands**. Hand comprised of Honours and tiles from exactly one family.

<div id="honitsu" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('junchan', '[m9m9s1s2s3p1p3p9p9p9][(s7s9@s8)]+p2')">Junchan Taiyai</a> : **-1 Han in open hands**. Each of the four three-tile sets and the pair composing the hand has at least one Terminal.

<div id="junchan" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

### 5-Han Yaku

- <a class="yakulink" href="#/" onclick="displayInfo('renhou', '')">Renhou</a> : Winning by Ron before your first tile draw.

<div id="renhou" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

### 6-Han Yaku

- <a class="yakulink" href="#/" onclick="displayInfo('chinitsu', '[s1s2s2s3s3s5s5s6s7s8][(@s9s9s9)]+s4')">Chin'itsu</a> : **-1 Han in open hands**. Hand containing tiles from exactly one family, and no Honours.

<div id="chinitsu" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

### Yakuman

- <a class="yakulink" href="#/" onclick="displayInfo('tenhou', '')">Tenhou</a> : East player winning with their starting hand (i.e. Tsumo on the very first tile drawn by East).

<div id="tenhou" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('chihou', '')">Chihou</a> : Win by Tsumo in the first turn (i.e. non-East Tsumo on their first drawn tile).

<div id="chihou" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('kokushi', '[m1m9s1s9p1p1p9chhkhtnashpe][]+to')">Kokushi Musou</a> : **Concealed only**. Exactly one tile of each Terminal and Honour, plus one extra duplicate Terminal or Honour tile.

<div id="kokushi" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('chuuren', '[m1m1m1m2m3m4m4m6m7m8m9m9m9][]+m5')">Chuurenpoutou</a> : **Concealed only**. 1112345678999 in the same family, plus one extra duplicate tile of that family.

<div id="chuuren" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('suuankou', '[m6m6m6s1s1s1s8s8s8p4p4shsh][]+sh')">Suuankou</a> : Four concealed triplets and a pair.

<div id="suuankou" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('suukantsu', '[p8][(bkp1p1bk)(bkhthtbk)(m3@m3m3m3)(s5s5s5@s5)]+p8')">Suukantsu</a> : Four Kans and a pair. The Kans may be open or closed.

<div id="suukantsu" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('ryuuiisou', '[s4s4s6s6s8s8s8][(@s2s3s4)(ht@htht)]+s6')">Ryuuiisou</a> : Hand comprised of only green bamboo tiles (2, 3, 4, 6, 8) and/or Green Dragons

<div id="ryuuiisou" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('chinroutou', '[m1m1m1m9m9s9s9p9p9p9][(@s1s1s1)]+m9')">Chinroutou</a> : Only Terminals.

<div id="chinroutou" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('tsuuiisou', '[tototohkhknana][(sh@shsh)(chch@ch)]+na')">Tsuuiisou</a> : Only Honours.

<div id="tsuuiisou" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('daisangen', '[chchchs7s7p2p3][(@hkhkhk)(htht@ht)]+p4')">Daisangen</a> : One triplet of each Dragon.

<div id="daisangen" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('shousuushi', '[m6m8nanashshsh][(toto@to)(pe@pepe)]+m7')">Shousuushii</a> : Three triplets of Wind tiles, plus a pair of Winds.

<div id="shousuushi" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a class="yakulink" href="#/" onclick="displayInfo('daisuushii', '[s6s6totonanana][(shsh@sh)(pe@pepe)]+to')">Daisuushii</a> : Four triplets of Winds

<div id="daisuushii" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>


### Notes on Yaku

Some remarks and rule particularities :

- The only hands that do not follow the usual structure (four sets of three and one pair) are [Chiitoitsu](#/) and [Kokushi Musou](#/).

- Calls (Pon, Chii, Kan) interrupt the turn, and thus prevent Yaku such as [Ippatsu](#/), [Double Riichi](#/), [Renhou](#/), [Chihou](#/).

- [Sekinin Barai](#/) (責任払い, "liability payment"), also called "Pao", is a rule imposing a payment on the player that discards a tile allowing another player to complete the last set to validate some Yakuman (if the other sets were visible). A player is liable for Sekinin Barai if they discard into :
    - The third dragon call when the two others have previously been made, in the case Daisangen is completed.
    - The fourth wind call when the three others have been completed, in the case of Daisuushii.
    - The fourth Kan call when the three others have been completed, in the case of Suukantsu.

    When a player is liable for Sekinin Barai, if the Yakuman-holder wins by Tsumo, the liable player pays the full value of the hand (as if Ron was called). If the Yakuman-holder wins by Ron on a third player, the liable player pays half the hand value, and the third player pays only the other half. In both case, the liable player also pays for all Honba if there were any.

### Common scoring variations

The above list is the official EMA tournament list (as of the time I wrote this). There are some common variations, either in past versions or alternate rulesets.

- Some rulesets allow Yakuman stacking in case multiple are present, e.g. the following hand is both [Tsuiisou](#/) and [Daisuushii](#/), and thus would count as a two-Yakuman hand :

<div id="daisuushitsuiisou" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>
<script type="text/javascript">
    displayInfo('daisuushitsuiisou', '[chchtotonanana][(shsh@sh)(pe@pepe)]+to');
</script>

- [Double Yakuman](#/) : In some rulesets, some Yakuman can be counted as two Yakuman depending on an additional condition. Those are :
    - Thirteen-wait Kokushi Musou.
    - Nine-wait ("pure") Chuurenpoutou.
    - Single-wait Suuankou (i.e. pair wait).

- [Daisuushii](#/) is sometimes considered as a double Yakuman.

- [Kazoe Yakuman](#/) : In some ruleset, if the cumulated value of a non-Yakuman hand is 13 Han or more, it is awarded the same point value as a Yakuman. This is not the case in official EMA rules, where non-Yakuman hands with 13 or more Han have the same point value as Sanbaiman.

- EMA Rules do not count Double Yakuman, and also do not allow multiple Yakuman in one hand (e.g. Daisuushi with Tsuuiisou) to be cumulative. This means the maximal possible value of a single hand is 48,000 for an East Yakuman (not counting possible Riichi bets and Honba counters).


## Glossary

[Riichi.wiki](https://riichi.wiki) has a very comprehensive documentation on Riichi Mahjong, including a [List of terminology](https://riichi.wiki/List_of_terminology_by_alphabetical_order) that is commonly used in games and strategy books.


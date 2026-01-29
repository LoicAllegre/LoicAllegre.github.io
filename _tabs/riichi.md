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

Click on the Yaku names for example hands and/or additional info.

### 1-Han Yaku

- <a href="#/">Riichi</a> : **Concealed only**. Winning with concealed hand, after being declared ready with 1000pt riichi bet.

- <a href="#/">Ippatsu</a> : Winning (Tsumo or Ron) in the uninterrupted turn immediately following the Riichi declaration.

- <a href="#/">Menzen Tsumo</a> : **Concealed only**. Win by self-draw on a fully concealed hand.

- <a href="#/" onclick="displayInfo('pinfu', '[m1m2m3s5s6p2p3p4p7p8p9][]+s7')">Pinfu</a> : **Concealed only**. Concealed hand with four sequences and a valueless pair, and with the winning tile completing a two-sided wait. Valueless pairs are any pairs except pairs of dragons, round wind or seat wind.

<div id="pinfu" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a href="#/" onclick="displayInfo('tanyao', '[m3m3m3s2s3s4p6p8][(p4@p4p4)]+p7')">Tanyao</a> : All ordinary tiles, i.e. no Terminals (1/9), no Honours (winds/dragons).

<div id="tanyao" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a href="#/" onclick="displayInfo('fanpai', '[m3m4m5s9s9p1p1][(htht@ht)(p4p6@p5)]+s9')">Fanpai</a> : Triplet (three of the same tile) of dragons, turn wind or seat wind. Can have more than one (each triplet adds 1 han).

<div id="fanpai" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>

- <a href="#/" onclick="displayInfo('Iipeikou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Iipeikou</a> : **Concealed only**. Two identical sequences (in the same family).

- <a href="#/" onclick="displayInfo('Rinshan Kaihou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Rinshan Kaihou</a> : Winning on the replacement tile drawn after declaring a Kan.

- <a href="#/" onclick="displayInfo('Chankan', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Chankan</a> : Winning by claiming the tile used by another player to promote a Kan.

- <a href="#/" onclick="displayInfo('haitei', '')">Haitei Raoyue</a> : Win by Tsumo on the last tile of the wall.

<div id="haitei" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>


- <a href="#/" onclick="displayInfo('houtei', '')">Houtei Raoyui</a> : Win by Ron on the last discarded tile of the round.

<div id="houtei" style="padding-left: 50px; margin-bottom: 40px; display: none"></div>


### 2-Han Yaku

- <a href="#/" onclick="displayInfo('Double Riichi', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Double Riichi</a> : **Concealed only**. Riichi in the first (uninterrupted) turn. 

- <a href="#/" onclick="displayInfo('Chiitoitsu', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Chiitoitsu</a> : **Concealed only**. Hand consisting of seven distinct pairs. Must be concealed, cannot have two identical pairs (i.e. 4 of the same tile).

- <a href="#/" onclick="displayInfo('Toitoitsu', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Toitoitsu</a> : Hand comprised of four triplets and one pair.

- <a href="#/" onclick="displayInfo('Sanshoku Doujun', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Sanshoku Doujun</a> : The same sequence in each of the three families.

- <a href="#/" onclick="displayInfo('Sanshoku Doukou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Sanshoku Doukou</a> : The same triplet in each of the three families.

- <a href="#/" onclick="displayInfo('Ittsuu', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Ittsuu</a> : The sequences 1-2-3, 4-5-6 and 7-8-9 in one family.

- <a href="#/" onclick="displayInfo('Chanta', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Chanta</a> : Each of the four three-tile sets and the pair composing the hand has at least one Terminal or Honour.

- <a href="#/" onclick="displayInfo('San`'ankou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">San'ankou</a> : Three concealed triplets, that is triplets that were fully drawn (N.B : if a triplet is completed by calling Ron, it is counted as open, and thus the hand does not count as San'ankou, even though the hand is concealed).

- <a href="#/" onclick="displayInfo('Sankantsu', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Sankantsu</a> : Three Kans.

- <a href="#/" onclick="displayInfo('Shousangen', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Shousangen</a> : Two triplets and a pair of Dragons.

- <a href="#/" onclick="displayInfo('Honroutou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Honroutou</a> : Hand comprised of only Terminal and Honour tiles.

### 3-Han Yaku

- <a href="#/" onclick="displayInfo('Ryanpeikou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Ryanpeikou</a> : **Concealed only**. Two distinct pairs of the same identical sequence, i.e. having two distincts *IIpeikou*.

- <a href="#/" onclick="displayInfo('Hon\'itsu', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Hon'itsu</a> : Hand comprised of Honours and tiles from exactly one family.

- <a href="#/" onclick="displayInfo('Junchan Taiyai', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Junchan Taiyai</a> : Each of the four three-tile sets and the pair composing the hand has at least one Terminal.

### 5-Han Yaku

- <a href="#/" onclick="displayInfo('Renhou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Renhou</a> : Winning by Ron in the first uninterrupted turn.

### 6-Han Yaku

- <a href="#/" onclick="displayInfo('Chin\'itsu', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Chin'itsu</a> : Hand containing tiles from exactly one family, and no Honours.

### Yakuman

- <a href="#/" onclick="displayInfo('Tenhou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Tenhou</a> : East player winning with their starting hand (i.e. Tsumo on the very first tile drawn by East).

- <a href="#/" onclick="displayInfo('Chihou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Chihou</a> : Win by Tsumo in the first turn (i.e. non-East Tsumo on their first drawn tile).

- <a href="#/" onclick="displayInfo('Kokushi Musou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Kokushi Musou</a> : **Concealed only**. Exactly one tile of each Terminal and Honour, plus one extra duplicate Terminal or Honour tile.

- <a href="#/" onclick="displayInfo('Chuurenpoutou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Chuurenpoutou</a> : **Concealed only**. 1112345678999 in the same family, plus one extra duplicate tile of that family.

- <a href="#/" onclick="displayInfo('Suu'ankou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Suu'ankou</a> : Four concealed triplets and a pair. A triplet completed by calling Ron is not considered open, see the note above on San'ankou.

- <a href="#/" onclick="displayInfo('Suukantsu', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Suukantsu</a> : Four Kans and a pair. The Kans may be open or closed.

- <a href="#/" onclick="displayInfo('Ryuuiisou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Ryuuiisou</a> : Hand comprised of only green bamboo tiles (2, 3, 4, 6, 8) and/or Green Dragons

- <a href="#/" onclick="displayInfo('Chinroutou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Chinroutou</a> : Only Terminals.

- <a href="#/" onclick="displayInfo('Tsuuiisou', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Tsuuiisou</a> : Only Honours.

- <a href="#/" onclick="displayInfo('Daisangen', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Daisangen</a> : One triplet of each Dragon.

- <a href="#/" onclick="displayInfo('Shousuushii', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Shousuushii</a> : Three triplets of Wind tiles, plus a pair of Winds.

- <a href="#/" onclick="displayInfo('Daisuushii', '[m1m2m3s5s6p2p3p4p7p8p9]+s7')">Daisuushii</a> : Four triplets of Winds


### Notes on Yaku

Some remarks and rule particularities :

- The only hands that do not follow the usual structure (four sets of three and one pair) are [Chiitoitsu](#/) and [Kokushi Musou](#/).

- [Ryanpeikou](#/) does not stack with [Iipeikou](#/) (i.e. it does not give 3 + 2x1 Han, only 3). It also does not stack with [Chiitoitsu](#/).

- [Chin'itsu](#/) does not also count as [Hon'itsu](#/).

- [Honroutou](#/) can in practice only happen alongside [Toitoitsu](#/), and both are counted, so the cumulated value is effectively 4 Han.

- [Shousangen](#/) stacks with [Fanpai](#/), so in practice it is always at least 4-Han (2 from Shousangen and 2x1 from Fanpai's).

- Calls (Pon, Chii, Kan) interrupt the turn, and thus prevent Yaku such as [Ippatsu](#/), [Double Riichi](#/), [Renhou](#/), [Chihou](#/).


### Common scoring variations

The above list is the official EMA tournament list (as of the time I wrote this). There are some common variations, either in past versions or alternate rulesets.

- Some rules allow Yakuman stacking in case multiple are present, e.g. the following hand is both [Tsuiisou](#/) and [Daisuushii](#/), and thus would count as a two-Yakuman hand.

- [Double Yakuman](#/) : In some rulesets, some Yakuman can be counted as two Yakuman depending on an addidional condition. Those are :
    - Thirteen-wait Kokushi Musou.
    - Nine-wait Chuurenpoutou.
    - Single-wait Suuankou (i.e. pair wait).

- [Daisuushii](#/) is sometimes considered as a double Yakuman.

- [Kazoe Yakuman](#/) : In some ruleset, if the cumulated value of a non-Yakuman hand is 13 Han or more, it is awarded the same point value as a Yakuman. This is not the case in official EMA rules, where non-Yakuman hands with 13 or more Han have the same point value as Sanbaiman.


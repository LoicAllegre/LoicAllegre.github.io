

function randomPoem(onlySelf=true){
    var poems;
    if (onlySelf) {
        poems = personal_poems;
    }
    else{
        poems = personal_poems.concat(other_poems);
    }
    var size = poems.length;
    index = Math.floor(Math.random() * (size));
    var poem = poems[index];
    document.getElementById('poemtext').innerText = poem.text;
    document.getElementById('poemauthor').innerText = "-- " + poem.author;
}

var personal_poems = [
    {
        "author": "",
        "text": "風立ちぬ\n迷う思いに\n海の墓"
    },
    {
        "author": "",
        "text": "Clara estrella,\n¿Sobre cual mar lejano\nSu luz vigila?"
    },
    {
        "author": "",
        "text": "古紙の\n床しい香り\n無数の世"
    },
    {
        "author": "",
        "text": "In spring I rode to Lissadell\nTo see those who are, oh so old !\nAnd in your stead bid her farewell,\nUnder Ben Bulben, oh so cold !\n\nI sailed to Rome in the winter\nWith others forlorn all the same.\nA young poet is buried there\nWith no friend to recall his name.\n\nSummer found me on the white sands\nOf Isla Negra, the last home\nWhere we joined our trembling hands\nInto the twilights yet to come.\n\nAlongside you in somber fall\nWhat could I sing that they sang not?\nWords that, before I heed time's call,\nIn me will not all be forgot."
    }
]


var other_poems = [
    {
        "author": "William B. Yeats",
        "text": "I bring you with reverent hands\nThe books of my numberless dreams,\nWhite woman that passion has worn\nAs the tide wears the dove-grey sands,\nAnd with heart more old than the horn\nThat is brimmed from the pale fire of time:\nWhite woman with numberless dreams,\nI bring you my passionate rhyme."
    },
    {
        "author": "Pablo Neruda",
        "text": "Yo aquí me despido, vuelvo\na mi casa, en mis sueños,\nvuelvo a la Patagonia en donde\nel viento golpea los establos\ny salpica hielo el Océano.\nSoy nada más que un poeta: os amo a todos,\nando errante por el mundo que amo:\nen mi patria encarcelan mineros\ny los soldados mandan a los jueces.\nPero yo amo hasta las raíces\nde mi pequeño país frío.\nSi tuviera que morir mil veces\nallí quiero morir:\nsi tuviera que nacer mil veces\nallí quiero nacer,\ncerca de la araucaria salvaje,\ndel vendaval del viento sur,\nde las campanas recién compradas.\nQue nadie piense en mí.\nPensemos en toda la tierra,\ngolpeando con amor en la mesa.\nNo quiero que vuelva la sangre\na empapar el pan, los frijoles,\nla música: quiero que venga\nconmigo el minero, la niña,\nel abogado, el marinero,\nel fabricante de muñecas,\nque entremos al cine y salgamos\na beber el vino más rojo.\n\nYo no vengo a resolver nada.\n\nYo vine aquí para cantar\ny para que cantes conmigo."
    }
]
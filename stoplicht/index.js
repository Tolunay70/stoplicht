var rijden;
var werken;
var buitenwerking;
var stoplicht = document.getElementById('stoplicht');
var stoplichtnummer2 = document.getElementById('stoplichtnummer2');
var stoplichtnummer3 = document.getElementById('stoplichtnummer3');
var stoplichtnummer4 = document.getElementById('stoplichtnummer4');
var auto = document.getElementById('auto');
var auto2 = document.getElementById('auto2');
var auto3 = document.getElementById('auto3');
var auto4 = document.getElementById('auto4');
var knip;
var aan;
var slir_v = false;
var slir_h = false;

auto.style.right = '34.4%';
auto.style.top = '605px';
auto.style.position = 'absolute';

auto2.style.right = '42%';
auto2.style.top = '195px';
auto2.style.position = 'absolute';

auto3.style.right = '355px';
auto3.style.bottom = '39%';
auto3.style.position = 'absolute';

auto4.style.left = '540px';
auto4.style.bottom = '25.5%';
auto4.style.position = 'absolute';


function aanzetten() {
    clearTimeout(buitenwerking);
    console.log("aanzetten!");
    werken1 = setTimeout(maakRood, 0);
    werken2 = setTimeout(maakGroen, 6000);
    werken3 = setTimeout(maakGeel, 10000);
    werken4 = setTimeout(aanzetten, 12000);
    werken5 = setTimeout(maakRood2, 6000);
    werken6 = setTimeout(maakGroen2,0);
    werken7 = setTimeout(maakGeel2, 4000);
    werken8 = setTimeout(aanzetten, 12000);
    aan = true;
    if (knip === true) {
        clearTimeout(buitenwerking1);
        clearTimeout(buitenwerking2);
        clearTimeout(buitenwerking3);
        clearTimeout(buitenwerking4);
    }
}
function knipperen() {
    buitenwerking1 = setTimeout(zetuit, 0);
    buitenwerking2 = setTimeout(maakGeel, 500);
    buitenwerking3 = setTimeout(knipperen, 1000);
    buitenwerking4 = setTimeout(maakGeel2, 500);
    knip = true;
    if (knip === true) {
        clearTimeout(werken1);
        clearTimeout(werken2);
        clearTimeout(werken3);
        clearTimeout(werken4);
        clearTimeout(werken5);
        clearTimeout(werken6);
        clearTimeout(werken7);
        clearTimeout(werken8);
    }
}
function uitzetten() {
    if (aan === true){
    clearTimeout(werken1);
    clearTimeout(werken2);
    clearTimeout(werken3);
    clearTimeout(werken4);
    clearTimeout(werken5);
    clearTimeout(werken6);
    clearTimeout(werken7);
    clearTimeout(werken8);
    console.log('test');

    }
    if (knip === true){
        clearTimeout(buitenwerking1);
        clearTimeout(buitenwerking2);
        clearTimeout(buitenwerking3);
        clearTimeout(buitenwerking4);
    }
    stoplicht.src = 'stoplichtuit.png';
    zetuit()
}
function maakRood() {
    stoplicht.src = 'stoplichtrood.png';
    stoplichtnummer2.src = 'stoplichtrood.png';
    slir_v = true;
}
function maakGroen() {
    stoplicht.src = 'stoplichtgroen.png';
    stoplichtnummer2.src = 'stoplichtgroen.png';
    slir_v = false;
}
function maakGeel() {
    stoplicht.src = 'stoplichtgeel.png';
    stoplichtnummer2.src = 'stoplichtgeel.png';
    slir_v = false;
}
function maakRood2() {
    stoplichtnummer3.src = 'stoplichtrood.png';
    stoplichtnummer4.src = 'stoplichtrood.png';
    slir_h = true;
}
function maakGroen2() {
    stoplichtnummer3.src = 'stoplichtgroen.png';
    stoplichtnummer4.src = 'stoplichtgroen.png';
    slir_h = false;
}
function maakGeel2() {
    stoplichtnummer3.src = 'stoplichtgeel.png';
    stoplichtnummer4.src = 'stoplichtgeel.png';
    slir_h = false;
}
function zetuit() {
    stoplicht.src = 'stoplichtuit.png';
    stoplichtnummer2.src = 'stoplichtuit.png';
    stoplichtnummer3.src = 'stoplichtuit.png';
    stoplichtnummer4.src = 'stoplichtuit.png';
}

function starten() {
    if (slir_v === true && parseInt(auto.style.top) === 605)
    {auto.style.top = parseInt(auto.style.top) + 'px';}
    else
    {auto.style.top = parseInt(auto.style.top) - 5 + 'px';}

    if (slir_v === true && parseInt(auto2.style.top) === 195)
    {auto2.style.top = parseInt(auto2.style.top) + 'px';}
    else
    {auto2.style.top = parseInt(auto2.style.top) + 5 + 'px';}

    if (slir_h === true && parseInt(auto3.style.right) === 355)
    {auto3.style.right = parseInt(auto3.style.right) + 'px';}
    else
    {auto3.style.right = parseInt(auto3.style.right) + 5 + 'px';}

    if (slir_h === true && parseInt(auto4.style.left) === 540)
    {auto4.style.left = parseInt(auto4.style.left) + 'px';}
    else
    {auto4.style.left = parseInt(auto4.style.left) + 5 + 'px';}


    rijden = setTimeout(starten,10);


    if(parseInt(auto.style.top)< -120)
    {
        auto.style.top = '930px';
    }
    if(parseInt(auto2.style.top)> 850)
    {
        auto2.style.top = '-220px';
    }
    if(parseInt(auto3.style.right)> 1600)
    {
        auto3.style.right = '-220px';
    }
    if(parseInt(auto4.style.left)> 1600)
    {
        auto4.style.left = '-220px';
    }
}
function stop() {
    clearTimeout(rijden)

}
function opnieuw() {
    auto.style.top = '605px';
    auto2.style.top = '195px';
    auto3.style.right = '355px';
    auto4.style.left = '540px';
}

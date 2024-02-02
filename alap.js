var viccek=[
    {
        "szoveg":`– Hogy hívják az internetes kísértetet?<br>
        – ??? <br>
        – Pont huuúú`,
        "kep":"1.jpg"
    },
    {
        "szoveg":`– Hogyan avatják fel a pezsgő gyárat?<br>

        – Hozzá vágnak egy hajót`,
        "kep":"2.jpg"
    },
    {
        "szoveg":`– Szomszéd, használhatnám a fűnyíróját?<br>
        – Persze, csak ne vigye ki a kertemből…`,
        "kep":"3.jpg"
    },
    {
        "szoveg":`– Hallod?! Ti hogyan szoktátok kezelni a konfliktusokat?<br>
        – Pofon egyszerűen. `,
        "kep":"4.jpg"
    },
    {
        "szoveg":`– Mi a falusi abortusz?<br>

        – Lelövik a gólyát.`,
        "kep":"5.jpg"
    },
    
]



console.log(viccek)
var veletlen=-1;
sorsolas()
console.log("Globális változó:"+veletlen)

function sorsolas(){
    document.getElementById("kesleltetes").innerHTML=""

    do{

        var  ujveletlen= Math.floor(Math.random() * viccek.length);
        console.log("újból kisorsolta:"+ujveletlen)

    }
    while (veletlen==ujveletlen)
    veletlen=ujveletlen
    console.log(veletlen)
    document.getElementById("szoveghely").innerHTML=viccek[veletlen].szoveg
    document.getElementById("kephely").innerHTML=`<img src="kepek/${viccek[veletlen].kep}" alt="" title="" >`
        

}
function kattintas(){
    document.getElementById("szoveghely").innerHTML=""
    document.getElementById("kephely").innerHTML=""    
    document.getElementById("kesleltetes").innerHTML='<img src="kepek/mozgogif.gif" alt="">'
    setTimeout(sorsolas, 2000);
}





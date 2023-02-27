// Menu Lateral
var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu(){
    if(menu_visible==false){ // Si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Oculto el menu una vez seleccionada una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x < links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Creamos una barra identificada por su respectiva ID
function crearBarra(id_barra){
    for(i = 0; i <= 16 ; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Selecciono  todas las barras grales para manejarlo
let html = document.getElementById("html");
crearBarra(html);

let coreldraw = document.getElementById("coreldraw");
crearBarra(coreldraw);

let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);

let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);

let php = document.getElementById("php");
crearBarra(php);

let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

/** Completar las barras segun el valor, 
     usamos un array, cada posicion le corresponde un elemento
     Comenzamos en -1 por no tener ninguno lleno al inicializarse
*/
let contadores = [-1,-1,-1,-1,-1,-1];

let entra = false; // Variable bandera que confirma si se ejecuto animacion

// Funcion que genera una animacion
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;

    if(distancia_skills >= 300 && entra == false){
        entra = true;
        
        const intervalHtml = setInterval(function(){
            pintarBarra(html,11,0,intervalHtml);
        },100);

        const intervalCoreldraw = setInterval(function(){
            pintarBarra(coreldraw,16,1,intervalCoreldraw);
        },100);

        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress,13,2,intervalWordpress);
        },100);

        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop,16,3,intervalPhotoshop);
        },100);

        const intervalPhp = setInterval(function(){
            pintarBarra(php,8,4,intervalPhp);
        },100);

        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator,16,5,intervalIlustrator);
        },100);

    }
}

// LLeno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];

    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval);
    }
}

// Detectar el scrolleo del mouse para aplicar animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
}


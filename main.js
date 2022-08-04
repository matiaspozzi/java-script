class Serv{
    constructor(Servicio, precio){
        this.Servicio = Servicio.toLowerCase();
        this.precio = (precio);
    }
}

const Servicios=[]


let ingreso= prompt  ("ingrese los servicios que quiera adquirir en su sitio web: Banners animados, Diseño y maquetacion de sitio HTML5 y CSS3, Diseño y maquetacion de sitio responsivo, galeria de imagenes, formulario web, SEO").toLowerCase();

let precio=0;

function calcular(){

 while (ingreso != "f") {
    
    
    
    switch(ingreso) {
    case "banners animados":
    Servicios.push  (new Serv ("banners animados",20000));
    precio = precio + 20000;
    break;
    
    case "diseño y maquetacion de sitio html5 y css3":
    Servicios.push  (new Serv ("diseño y maquetacion de sitio html5 y css3",70000));
    precio= precio + 70000;
    break;
    
    case "diseño y maquetacion de sitio responsivo":
    Servicios.push  (new Serv ("diseño y maquetacion de sitio responsivo",50000));
    precio = precio + 50000;
    break;
    
    case "galeria de imagenes":
    Servicios.push  (new Serv ("galeria de imagenes",7000));
    precio= precio + 7000;
    break;
    
    case "formulario web":
    Servicios.push  (new Serv ("formulario web",5000));
    precio = precio + 5000;
    break;
    
    case "seo":
    Servicios.push  (new Serv ("seo",15000));
    precio = precio + 15000;
    break;
    



}




if (precio == 0){
    console.log("usted no selecciono nada")
}

console.table(Servicios);

ingreso = prompt  ("ingrese los servicios que quiera adquirir en su sitio web: Banners animados, Diseño y maquetacion de sitio HTML5 y CSS3, Diseño y maquetacion de sitio responsivo, galeria de imagenes, formulario web, SEO").toLowerCase();
      
}

let filt = Servicios.filter ((ser) => ser.precio >= 5000 && ser.precio < 10000)
console.log(filt);
let filt2 = Servicios.filter ((ser) => ser.precio >= 11000 && ser.precio < 30000)
console.log(filt2);
let filt3 = Servicios.filter ((ser) => ser.precio >= 30000 && ser.precio < 50000)
console.log(filt3);
let filt4 = Servicios.filter ((ser) => ser.precio >= 50000 && ser.precio < 80000)
console.log(filt4);
ivaIncluido=precio*1.21;

console.log("precio final"+" $"+ ivaIncluido + (" (iva incluido)"));







}
calcular();
   
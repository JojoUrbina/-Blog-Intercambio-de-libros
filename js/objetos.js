let totalLibro=0;
const carrito1=[{}]

class libro{
    constructor(id,nombre,escritor,precio,estado,vendido,stock,srcImg){
        this.id=parseInt(id)
        this.nombre=nombre.toUpperCase();
        this.escritor=escritor.toUpperCase();
        this.precio=parseInt(precio);
        this.estado=estado.toLowerCase();
        this.vendido=vendido;
        this.stock=Number(stock)
        this.srcImg=srcImg
    }
    vender(cantidad){
        if(this.stock>cantidad){
            this.stock-=cantidad
        }else{
            console.log("no tenemos stock");
            this.vendido=true
            
        }
    }
    agregar(cantidad){
        this.stock+=cantidad;
    }
    mostraPrecioConDescuento(){
        let precioDescuento=this.precio*0.80
        console.log(precioDescuento);
        console.log(this.precio)
    }
}

const libro1= new libro(0,"el principito","MILAN KUNDERA",350,"usado",false,10,"../img/elprincipito.jpg");
const libro2= new libro(1,"el principe","Nicolás Maquiavelo",1300,"nuevo",false,20,"../img/elprincipe.jpg");
const libro3= new libro(2,"la insoportable levedad del ser","Milan Kundera",2300,"nuevo",false,10,"../img/insoportableLevedad.jpg");
const libro4= new libro(3,"la culpa la tiene la vaca","jaime lopera",600,"usado",false,10,"../img/culpaVaca1.jpg")
const misLibros=[libro1,libro2,libro3,libro4]
//let eleccion = prompt("elija un autor");
const nuevalista=misLibros.filter(libros=>libros.escritor=="MILAN KUNDERA");
const nuevaLista=misLibros.find(libros=>libros.escritor=="MILAN KUNDERA");

let $iniciaSimulador=document.getElementById("Calcular")
let $contenedor1=document.getElementById("contenedor1")
let uno=0;
$iniciaSimulador.onclick=function(){
   let prueba=(prueba=>prueba+=1);
   

    alert(prueba(uno))
}

function crearCarta(){
    for(elemento of misLibros){
        $contenedor1.innerHTML+=
        `<div class="card col-sm-12 col-md-6 col-lg-3" style="width: 16rem;">
        <img src="${elemento.srcImg}" class="card-img-top " alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color:black">${elemento.nombre}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Escritor: ${elemento.escritor}</li>
          <li class="list-group-item">Precio: ${elemento.precio}</li>
          <li class="list-group-item">Estado: ${elemento.estado}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      `
      
    }
}
crearCarta()

// lo ideal es no automatizar tanto y crear funciones para opecariones
console.log($contenedor1)
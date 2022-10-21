const carrito=[]

class Libro{
    constructor(id,nombre,escritor,descripcion,precio,estado,vendido,stock,srcImg){
        this.id=parseInt(id)
        this.nombre=nombre.toUpperCase();
        this.escritor=escritor.toUpperCase();
        this.precio=parseInt(precio);
        this.estado=estado.toLowerCase();
        this.vendido=vendido;
        this.stock=Number(stock)
        this.srcImg=srcImg
        this.descripcion=descripcion
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
const libro1= new Libro(0,"el principito","MILAN KUNDERA","El principito es una narración corta del escritor francés Antoine de Saint-Exupéry, que trata de la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.",350,"usado",false,10,"../img/elprincipito.jpg");
const libro2= new Libro(1,"el principe","Nicolás Maquiavelo","El príncipe es un tratado político del siglo xvi del diplomático y teórico político italiano Nicolás Maquiavelo,Aunque es relativamente corto, el tratado es el más recordado de las obras de Maquiavelo y el responsable de poner la palabra «maquiavélico» en uso como un término peyorativo",1300,"nuevo",false,20,"../img/elprincipe.jpg");
const libro3= new Libro(2,"la insoportable levedad del ser","Milan Kundera","La insoportable levedad del ser trata de un hombre y sus dudas existenciales en torno a la vida en pareja, convertidas en conflictos sexuales y afectivos. La novela relata escenas de la vida cotidiana trazadas con un profundo sentido trascendental: la inutilidad de la existencia y la necesidad del eterno retorno de Nietzsche.",2300,"nuevo",false,10,"../img/insoportableLevedad.jpg");
const libro4= new Libro(3,"la culpa la tiene la vaca","jaime lopera","La culpa es de la vaca reúne anécdotas, fábulas y parábolas de diversa procedencia que giran en torno a un punto común: la necesidad del cambio. El mundo se ha transformado ante nuestros ojos, y debemos adaptarnos a las nuevas circunstancias con inteligencia, tolerancia, creatividad y respeto",600,"usado",false,10,"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320495407l/5456213.jpg")
const misLibros=[libro1,libro2,libro3,libro4]
//let eleccion = prompt("elija un autor");
let $contenedor1=document.getElementById("contenedor1")
function crearCarta(){
    for(elemento of misLibros){
        $contenedor1.innerHTML+=
        `<div class="card col-sm-12 col-md-6 col-lg-3" style="width: 16rem;">
        <img src="${elemento.srcImg}" class="card-img-top mt-2" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color:black">${elemento.nombre}</h5>
          <p class="card-text">${elemento.descripcion}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${elemento.id}</li>
          <li class="list-group-item">Escritor: ${elemento.escritor}</li>
          <li class="list-group-item">Precio: ${elemento.precio}</li>
          <li class="list-group-item">Estado: ${elemento.estado}</li>
        </ul>
        <div class="card-body">
        <div class="d-grid gap-2 col-6 mx-auto my-2 ">
        <button id="btn.${elemento.id}" class="btn btn-primary bg-blue" type="button">Comprar</button>
      </div>
        </div>
      </div>
      `
      
    }
    misLibros.forEach((libro)=>{
        document.getElementById(`btn.${libro.id}`).addEventListener("click",()=>{
            agregarACarrito(libro);
            
        })
        })
        console.log(carrito)
    }


crearCarta()

function agregarACarrito(productoComprado){
    carrito.push(productoComprado)
    console.table(carrito)
    alert(`producto ${productoComprado.nombre} agregado al carrito `)

}


function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito);
    alert("Producto "+productoAComprar.nombre+" agregado al carro!");
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoAComprar.id}</td>
            <td>${productoAComprar.nombre}</td>
            <td>${productoAComprar.precio}</td>
        </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
    document.getElementById("total").innerText = "Total a pagar $: "+totalCarrito;
}
console.log(carrito)




//const nuevalista=misLibros.filter(libros=>libros.escritor=="MILAN KUNDERA");
//const nuevaLista=misLibros.find(libros=>libros.escritor=="MILAN KUNDERA");
// lo ideal es no automatizar tanto y crear funciones para opecariones

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
console.log(nuevalista)
console.log(nuevaLista)

// lo ideal es no automatizar tanto y crear funciones para opecariones

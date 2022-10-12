/*function libros(nombre,precio,estado){
    this.nombre=nombre;
    this.precio=precio;
    this.estado=estado;
}
const lPrincipito = new libros("el principito",350,"usado");
const lprincipe = new libros("el principe",1000,"nuevo")
console.log(lPrincipito)
console.log(lprincipe)
*/
class libro{
    constructor(nombre,precio,estado,vendido,stock){
        this.nombre=nombre.toUpperCase();
        this.precio=parseInt(precio);
        this.estado=estado.toLowerCase();
        this.vendido=vendido;
        this.stock=Number(stock)

    }
    vender(cantidad){
        if(this.stock>cantidad){
            this.stock-=cantidad
            console.log("quedan restantes "+this.stock)
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

let libro1= new libro("el principito",350,"usado",false,10);
let libro2= new libro("el principe",1300,"nuevo",false,20);
let libro3= new libro("la insoportable levedad del ser",2300,"nuevo",false,10);
let libro4= new libro("la culpa la tiene la vaca",600,"usado",false,10)
console.log(libro1)

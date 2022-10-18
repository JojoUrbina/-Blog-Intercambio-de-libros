function comprar(libro,cantidadCompra){
    if(libro.stock>cantidadCompra){
            totalLibro+=libro.precio*cantidadCompra;
            libro.stock-=cantidadCompra
            carrito1.push={libro,cantidadCompra}
            return totalLibro
    }else{
            console.log("no tenemos stock");
    }
}
class Producto{
    static contadorProducto = 0;
    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `idproducto : ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}
class Orden{
    static contadorOrden = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._productos = [];
    //    this._contadorProductosAgregados = 0;
    }
    get idOrden (){
        return this._idOrden;
    }
    agregarProductos(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto; 
        }
        else{
            console.log("No se pueden agregar mas productos");
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for (let producto of this._productos){
            totalVenta += producto.precio;
        } 
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n ' + producto.toString() + ' ';
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden} `);
    }
}

let producto1 = new Producto('Camisa',1200);
let producto2 = new Producto('Pantalon',1500);
let producto3 = new Producto('Zapatillas',3000)
let orden1 = new Orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);
orden1.agregarProductos(producto3);

orden1.mostrarOrden();


let orden2 = new Orden();
orden2.agregarProductos(producto1);
orden2.agregarProductos(producto2);
orden2.mostrarOrden();
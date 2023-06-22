

let productos = [
    { nombre: "Manzana", id: 1, categoria: "verduleria", precio: 1200 },
    { nombre: "Banana", id: 2, categoria: "verduleria", precio: 800 },
    { nombre: "Chorizo", id: 3, categoria: "carniceria", precio: 2000 },
    { nombre: "Asado", id: 4, categoria: "carniceria", precio: 3000 },
    { nombre: "Pan", id: 5, categoria: "panaderia", precio: 1200 },
    { nombre: "Factura", id: 6, categoria: "panaderia", precio: 150 },
    { nombre: "Jamon cocido", id: 7, categoria: "fiambreria", precio: 3500 },
    { nombre: "Queso cremoso", id: 8, categoria: "fiambreria", precio: 2700 }
]

const carrito = []

function mostrarProductos() {
    let mensaje = 'Productos disponibles:\n\n'
    productos.forEach(item => {
        mensaje += `-ID: ${item.id} (${item.nombre}) - Precio: $${item.precio}\n`
    })
    alert(mensaje)
}

function agregarAlCarrito() {
    const seleccion = parseInt(prompt("Ingrese el ID del producto que desea comprar:"))
    const producto = productos.find(item => item.id === seleccion)
    if (producto) {
        carrito.push(producto)
        alert(`¡"${producto.nombre}"  ha sido agregado al carrito!`)
    } else {
        alert("El producto no existe.")
    }
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("NO se registran articulos")
    } else {
        let mensaje = "Usted seleccionó:\n\n"
        carrito.forEach(item => {
            mensaje += `- ${item.nombre} - Precio: $${item.precio}\n`
        })
        alert(mensaje)
    }
}

function calcularTotal() {
    const total = carrito.reduce((suma, item) => suma + item.precio, 0)
    return total
}

function finalizarCompra() {
    const total = calcularTotal()
    alert( "Su compra es de $" + total)
}

function opcion() {
    let ingreseOpcion = prompt("Que desea hacer?: \n1_Consultar precios\n2_Realizar pedido\n3_Dejar un comentario\n4_Salir")

    if (ingreseOpcion == "1") {
        mostrarProductos()

    } else if (ingreseOpcion == "2") {
        mostrarProductos()

        while (true) {
            const opcion = prompt("Seleccione una opción:\n0. Mostrar lista de productos\n1. Agregar producto al carrito\n2. Mostrar carrito\n3. Finalizar compra\n4. Salir")

            if (opcion === "0") {
                mostrarProductos()
            } else if (opcion === "1") {
                agregarAlCarrito()
            } else if (opcion === "2") {
                mostrarCarrito()
            } else if (opcion === "3") {
                if (carrito.length === 0) {
                    alert("El carrito está vacío.")
                } else {
                    finalizarCompra()
                    break
                }
            } else if (opcion === "4") {
                break
            } else {
                alert("Opción inválida.")
            }
        }


    } else if (ingreseOpcion == "3") {
        let texto = prompt("Ingrese mensaje")
        let mail = prompt("Ingrese su mail")
        alert("El mensaje fue enviado con exito")
    } else if (ingreseOpcion == "4"){
        alert("Gracias por su visita")

    } else {
                alert('Opción inválida.')
            }

}

alert("Bienvenido a Super Chapa")
opcion()


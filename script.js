let productos = [
    { nombre: "manzana", id: 1, categoria: "verduleria", precio: 1200, rutaImagen: "manzana.png" },
    { nombre: "banana", id: 2, categoria: "verduleria", precio: 800, rutaImagen: "banana.png" },
    { nombre: "chorizo", id: 3, categoria: "carniceria", precio: 2000, rutaImagen: "chorizo.png" },
    { nombre: "asado", id: 4, categoria: "carniceria", precio: 3000, rutaImagen: "asado.png" },
    { nombre: "pan", id: 5, categoria: "panaderia", precio: 1200, rutaImagen: "pan.png" },
    { nombre: "factura", id: 6, categoria: "panaderia", precio: 150, rutaImagen: "factura.png" },
    { nombre: "jamon cocido", id: 7, categoria: "fiambreria", precio: 3500, rutaImagen: "jamon.png" },
    { nombre: "queso cremoso", id: 8, categoria: "fiambreria", precio: 2700, rutaImagen: "queso.png" }
]

let carrito = []
let carritoJSON = JSON.parse(localStorage.getItem("carrito"))

if (carritoJSON) {
    carrito = carritoJSON
}

let contenedor = document.getElementById("productos")
crearTarjetas(productos, contenedor)
crearTarjetasCarrito(carritoJSON)

function crearTarjetas(array) {
    contenedor.innerHTML = ""

    array.forEach(elemento => {
        let producto = document.createElement("div")
        producto.className = "tarjetaProducto"
        producto.innerHTML = `
        <h4>${elemento.nombre}</h4>
        <img class="imagen" src="./img/${elemento.rutaImagen}">
        <h4>$${elemento.precio}</h4>
        <button id=${elemento.id}>Agregar al carrito</button>
    `
        contenedor.appendChild(producto)
        let botonAgregarAlCarrito = document.getElementById(elemento.id)
        botonAgregarAlCarrito.addEventListener("click", agregarAlCarrito)
    })
}

function agregarAlCarrito(e) {
    let productoBuscado = productos.find(elemento => elemento.id === Number(e.target.id))
    carrito.push({
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precio: productoBuscado.precio
    })
    console.log(carrito)
    crearTarjetasCarrito(carritoJSON)

    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function crearTarjetasCarrito(carritoJSON) {
    let carritoFisico = document.getElementById("carrito")

    carrito.forEach(elemento => {
        carritoFisico.innerHTML += `<p>${elemento.nombre} ${elemento.precio}</p>`
    })
}

let buscador = document.getElementById("buscador")
buscador.addEventListener("input", filtrar)

function filtrar() {
    let arrayFiltrado = productos.filter(producto => producto.nombre.includes(buscador.value) || producto.categoria.includes(buscador.value))
    crearTarjetas(arrayFiltrado)
}

let botonesFiltros = document.getElementsByClassName("filtro")
for (const botonFiltro of botonesFiltros) {
    botonFiltro.addEventListener("click", filtarPorCategoria)
}

function filtarPorCategoria(e) {
    let elementosFiltrados = productos.filter(producto => producto.categoria === e.target.id)
    crearTarjetas(elementosFiltrados)
}

let botonCarrito = document.getElementById("botonCarrito")
botonCarrito.addEventListener("click", mostrarOcultar)

function mostrarOcultar() {
    let padreProducto = document.getElementById("contenedorProductos")
    let carrito = document.getElementById("carrito")
    padreProducto.classList.toggle("oculto")
    carrito.classList.toggle("oculto")
}

/*         -----ESTA PARTE HACIA ABAJO LA DEJO POR LAS DUDAS ES DE LOS ANTERIORES TP----


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
opcion()*/



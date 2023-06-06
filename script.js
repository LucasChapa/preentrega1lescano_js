function saludar() {
    alert("Bienvenido a Super Chapa")
}

function calcularCosto(cantidad, precio) {
    return cantidad * precio
}

saludar()

function opcion() {
    let ingreseOpcion = prompt("Que desea hacer?: \n1_Consultar precios\n2_Realizar pedido\n3_Dejar un comentario")

    if (ingreseOpcion == "1") {
        let producto = prompt("Ingrese producto:\nArroz\nPan\nCarne\nAcelga").toLowerCase()

        if (producto == "arroz") {
            alert("El kilo de arroz cuesta $500")
        } else if (producto == "pan") {
            alert("El kilo de pan cuesta $360")
        } else if (producto == "carne") {
            alert("El kilo de carne cuesta $2400")
        } else {
            alert("El kilo de acelga cuesta $160")
        }


    } else if (ingreseOpcion == "2") {
        let = ""
        let total = 0
        let mensaje = "Productos:\n1_ Arroz\n2_ Pan\n3_ Carne\n4_ Acelga\n5_ Finalizar compra\n0_ Salir"
        let opcion

        do {
            opcion = Number(prompt(mensaje))
            if (opcion === 1) {
                alert("Arroz agregado al carrito")
                total = total + 500
            } else if (opcion === 2) {
                alert("Pan agregado al carrito")
                total = total + 360
            } else if (opcion === 3) {
                alert("Carne agregado al carrito")
                total = total + 2400
            } else if (opcion === 4) {
                alert("Acelga agregado al carrito")
                total = total + 160
            } else if (opcion === 5) {
                alert("El total a pagar es:" + total)
                total = 0
            }
        } while (opcion !== 0)
        alert("Muchas gracias por su visita")

    } else if (ingreseOpcion == "3") {
        let texto = prompt("Ingrese mensaje")
        let mail = prompt("Ingrese su mail")
        alert("El mensaje fue enviado con exito")
    }
    opcion()
}
opcion()



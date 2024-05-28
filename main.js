let carro = [];

function agregarAlCarro(nombreProducto, precio) {
    carro.push({ nombre: nombreProducto, precio: precio });
    renderizarCarro();
}

function renderizarCarro() {
    const elementosCarro = document.getElementById('elementos-carro');
    elementosCarro.innerHTML = '';
    let total = 0;
    carro.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre}: $${producto.precio.toFixed(2)}`;
        elementosCarro.appendChild(li);
        total += producto.precio;
    });

    let descuento = 0;
    if (total > 50000) {
        // Aplicar un descuento del 15% si el total supera los $50,000
        descuento = total * 0.15;
    }

    let costoEnvio = 0;
    if (total > 10000) {
        // Envío gratis si el total supera los $10,000
        costoEnvio = 0;
    } else {
        // Costo de envío estándar
        costoEnvio = 500;
    }

    // Mostrar el total con descuento y costo de envío
    total -= descuento;
    total += costoEnvio;

    const totalElemento = document.getElementById('total');
    totalElemento.textContent = `$${total.toFixed(2)}`;
}
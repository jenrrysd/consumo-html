function calcularConsumo() {
    const kilovatio = parseFloat(document.getElementById('kilovatio').value);
    const consumo = parseFloat(document.getElementById('consumo').value);
    const adicional = parseFloat(document.getElementById('adicional').value);

    if (isNaN(consumo) || isNaN(adicional)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    // const kilowat = 0.64;
    const kilowat = kilovatio;
    const costoElectricidad = consumo * kilowat;
    const costoElectricidadAdicional = costoElectricidad + adicional;
    const igv = costoElectricidadAdicional * 0.18;
    const total = costoElectricidadAdicional + igv;

    const parteEntera = Math.floor(total);
    const parteDecimal = total - parteEntera;

    let redondeo, mensajeRedondeo;
    if (parteDecimal >= 0.5) {
        redondeo = parteEntera + 1;
        mensajeRedondeo = `El resultado es mayor a 5, 
    SI aplica el redondeo.`;
    } else {
        redondeo = parteEntera;
        mensajeRedondeo = `El resultado es menor a 5,
    NO aplica redondeo.`;
    }
    const resultado = `
    Kilovatio-hora:       ${kilowat.toFixed(2)}
    Consumo mas kilowat:  ${costoElectricidad.toFixed(2)}
    Costo mas adicional:  ${costoElectricidadAdicional.toFixed(2)}
    Mas el IGV (18%):     ${igv.toFixed(2)}
    Monto a pagar:        ${total.toFixed(2)}

    ${mensajeRedondeo}
`;
    document.getElementById('resultado').textContent = resultado;
    // document.getElementById('resultado').style.width = '300';
    // document.getElementById('resultado').style.height = '150px';
    document.getElementById('total').textContent = `Total a pagar: S/.${redondeo} soles`;
}

function limpiar() {
    document.getElementById('consumo').value = '';
    document.getElementById('adicional').value = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('total').textContent = '';
    document.getElementById('consumo').focus();
}

// function salir() {
//     window.close();
// }

function abrirUrl() {
    window.open("https://dextre.xyz", "_blank");
}


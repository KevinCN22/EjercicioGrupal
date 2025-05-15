"use strict";
// Enum de tarifas solo para el transporte marítimo
var Tarifas;
(function (Tarifas) {
    Tarifas[Tarifas["KmMaritimo"] = 1] = "KmMaritimo";
    Tarifas[Tarifas["KgMarino"] = 0.2] = "KgMarino";
})(Tarifas || (Tarifas = {}));
// Clase abstracta base
class Transporte {
    constructor(distancia, peso) {
        this.distancia = distancia;
        this.peso = peso;
    }
}
// Clase específica para transporte marítimo
class Maritimo extends Transporte {
    constructor(distancia, peso) {
        super(distancia, peso);
    }
    calcularPrecio() {
        const precio = this.distancia * Tarifas.KmMaritimo + this.peso * Tarifas.KgMarino;
        console.log(`Precio del transporte marítimo: €${precio.toFixed(2)}`);
        return precio;
    }
}
// Función principal que pide datos al usuario
function main() {
    const distancia = Number(prompt("Introduce la distancia (km):"));
    const peso = Number(prompt(" Introduce el peso (kg):"));
    const viaje = new Maritimo(distancia, peso);
    viaje.calcularPrecio();
}
// Ejecuta el programa
main();

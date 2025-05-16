"use strict";
(() => {
    class Transporte {
        constructor(distancia, peso) {
            this.distancia = distancia;
            this.peso = peso;
        }
    }
    class Maritimo extends Transporte {
        calcularPrecio() {
            const precio = this.distancia * 1 + this.peso * 0.2;
            console.log(`Precio del transporte marítimo: ${precio.toFixed(2)} €`);
            return precio;
        }
    }
    class Terrestre extends Transporte {
        constructor() {
            super(...arguments);
            this.maxPeso = 5000;
        }
        calcularPrecio() {
            if (this.peso > this.maxPeso) {
                throw new Error("Peso excede el máximo para transporte terrestre (5000 kg).");
            }
            const precio = this.distancia * 2 + this.peso * 0.5;
            console.log(`Precio del transporte terrestre: ${precio.toFixed(2)} €`);
            return precio;
        }
    }
    class Mixto extends Transporte {
        constructor(kmTerrestres, kmMaritimos, peso) {
            super(kmTerrestres + kmMaritimos, peso);
            this.maxPeso = 5000;
            this.kmTerrestres = kmTerrestres;
            this.kmMaritimos = kmMaritimos;
        }
        calcularPrecio() {
            if (this.peso > this.maxPeso) {
                throw new Error("Peso excede el máximo permitido para la parte terrestre (5000 kg).");
            }
            const precioTerrestre = this.kmTerrestres * 2 + this.peso * 0.5;
            const precioMaritimo = this.kmMaritimos * 1 + this.peso * 0.2;
            const total = precioTerrestre + precioMaritimo;
            console.log("Transporte Mixto:");
            console.log(`${this.kmTerrestres} km por tierra`);
            console.log(`${this.kmMaritimos} km por mar`);
            console.log(`Peso: ${this.peso} kg`);
            console.log(`Precio total: ${total.toFixed(2)} €`);
            return total;
        }
    }
    function main() {
        var _a;
        const tipo = (_a = prompt("Tipo de transporte (maritimo, terrestre, mixto):")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        try {
            switch (tipo) {
                case "maritimo":
                    const distanciaMar = Number(prompt("Distancia en km:"));
                    const pesoMar = Number(prompt("Peso en kg:"));
                    new Maritimo(distanciaMar, pesoMar).calcularPrecio();
                    break;
                case "terrestre":
                    const distanciaTerr = Number(prompt("Distancia en km:"));
                    const pesoTerr = Number(prompt("Peso en kg:"));
                    new Terrestre(distanciaTerr, pesoTerr).calcularPrecio();
                    break;
                case "mixto":
                    const kmTierra = Number(prompt("¿Cuántos km por tierra?"));
                    const kmMar = Number(prompt("¿Cuántos km por mar?"));
                    const pesoMixto = Number(prompt("Peso total en kg:"));
                    new Mixto(kmTierra, kmMar, pesoMixto).calcularPrecio();
                    break;
                default:
                    console.log("Tipo no válido.");
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Error:", error.message);
            }
        }
    }
    main();
})();

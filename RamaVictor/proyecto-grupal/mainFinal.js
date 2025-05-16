"use strict";
(() => {
    //enum para las tarifas
    let Tarifas;
    (function (Tarifas) {
        Tarifas[Tarifas["KmTerrestre"] = 2] = "KmTerrestre";
        Tarifas[Tarifas["KmMaritimo"] = 1] = "KmMaritimo";
        Tarifas[Tarifas["Kgterrestre"] = 0.5] = "Kgterrestre";
        Tarifas[Tarifas["KgMarino"] = 0.2] = "KgMarino";
        Tarifas[Tarifas["MaxPeso"] = 5000] = "MaxPeso";
    })(Tarifas || (Tarifas = {}));
    //Creamos la clase abstract para usar de base
    class Transporte {
        //constructor
        constructor(distancia, peso) {
            this.distancia = distancia;
            this.peso = peso;
        }
    }
    // Clase maritimo
    class Maritimo extends Transporte {
        //constructor
        constructor(distancia, peso) {
            super(distancia, peso);
        }
        //Método calcular precio  
        calcularPrecio() {
            //Calculamos el precio
            const precio = this.distancia * Tarifas.KmMaritimo + this.peso * Tarifas.KgMarino;
            console.log(`El precio por el transporte marítimo será: ${precio.toFixed(2)} €`); //redondeamos a 2 decimales con el metodo toFixed
            return precio;
        }
    }
    class Terrestre extends Transporte {
        //constructor
        constructor(distancia, peso) {
            super(distancia, peso);
        }
        //Método calcular precio
        calcularPrecio() {
            //comprobamos que no exceda el peso maximo
            if (this.peso > Tarifas.MaxPeso) {
                //lanzamos un throw new Error para que detenga el programa tras el error y no siga
                throw new Error("El peso supera el máximo permitido para terrestre. Elija otro tipo de transporte.");
            }
            //Calculamos el precio
            const precio = this.distancia * Tarifas.Kgterrestre + this.peso * Tarifas.Kgterrestre;
            console.log(`El precio por el transporte terrestre será: ${precio.toFixed(2)} €`);
            return precio;
        }
    }
    class Mixto extends Transporte {
        constructor(kmTerrestres, kmMaritimos, peso) {
            //sumamos los kmTerrestres y maritimos para que en el constructor padre se pase la distancia total, que es lo que recibe.
            super(kmTerrestres + kmMaritimos, peso);
            this.kmTerrestres = kmTerrestres;
            this.kmMaritimos = kmMaritimos;
        }
        calcularPrecio() {
            //comprobamos que no exceda el peso maximo
            if (this.peso > Tarifas.MaxPeso) {
                throw new Error("Peso excede el máximo permitido para la parte terrestre. Elija la opción marítima");
            }
            //Calculamos el precio
            const precioTerrestre = this.kmTerrestres * Tarifas.KmTerrestre + this.peso * Tarifas.Kgterrestre;
            const precioMaritimo = this.kmMaritimos * Tarifas.KmMaritimo + this.peso * Tarifas.KgMarino;
            const total = precioTerrestre + precioMaritimo;
            console.log("Transporte Mixto:");
            console.log(`${this.kmTerrestres} km por tierra`);
            console.log(`${this.kmMaritimos} km por mar`);
            console.log(`Peso: ${this.peso} kg`);
            console.log(`Precio total: ${total.toFixed(2)} €`);
            return total;
        }
    }
    //Función para pedir los promt y hacer el switch de las opciones
    function main() {
        var _a;
        //pedimos tipo de transporte con un prompt. usamos el operador ? para evitar que se produzca un null y falle cuando llama al método toLowerCase. devolvera undefined
        const tipo = (_a = prompt("Tipo de transporte (maritimo, terrestre, mixto):")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        //switch para elegir el tipo de transporte
        switch (tipo) {
            case "maritimo":
                //pedimos distancia y peso con mediante prompt
                const distanciaMar = Number(prompt("Distancia en km:"));
                const pesoMar = Number(prompt("Peso en kg:"));
                //instanciamos un objeto maritimo de la clase Maritimo y llamamos al método para calcular el precio
                const maritimo = new Maritimo(distanciaMar, pesoMar);
                maritimo.calcularPrecio();
                break;
            case "terrestre":
                const distanciaTerr = Number(prompt("Distancia en km:"));
                const pesoTerr = Number(prompt("Peso en kg:"));
                const terrestre = new Terrestre(distanciaTerr, pesoTerr);
                terrestre.calcularPrecio();
                break;
            case "mixto":
                const kmTierra = Number(prompt("¿Cuántos km por tierra?"));
                const kmMar = Number(prompt("¿Cuántos km por mar?"));
                const pesoMixto = Number(prompt("Peso total en kg:"));
                const mixto = new Mixto(kmTierra, kmMar, pesoMixto);
                mixto.calcularPrecio();
                break;
            default:
                console.log("Tipo de transporte no válido.");
        }
    }
    //ejecutamos main para iniciar el programa
    main();
})();

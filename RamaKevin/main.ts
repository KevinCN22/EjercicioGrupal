(() => {

  //enum para saber que tipo de tarifas hay con los pesos y los km
  enum Tarifas {
    KmTerrestre = 2,
    Kgterrestre = 0.5,
    MaxPeso = 5000
  }

    // Se hace una clase abstracta para los transportes que hay
    abstract class Transporte {
    distancia: number;
    peso: number;

  //Constructor que recibe distancia y peso
  constructor(distancia: number, peso: number) {
      this.distancia = distancia;
      this.peso = peso;
    }

    // Método abstracto para calcular el precio
    abstract calcularPrecio(): number;
  }

  // Clase Terrestre
  class Terrestre extends Transporte {
    constructor(distancia: number, peso: number) {
      // Llamamos al constructor de la clase padre para asignar distancia y peso
      super(distancia, peso);
    }

      //Método para calcular el precio y saber si nos pasamos del peso
      calcularPrecio(): number {
      if (this.peso > Tarifas.MaxPeso) {
        throw new Error("El peso supera el máximo permitido para terrestre.");
      }

      //Calculamos el precio añadiendo el peso y los km
      const precio = this.distancia * Tarifas.KmTerrestre + this.peso * Tarifas.Kgterrestre;
      console.log(`El precio por el transporte terrestre será: ${precio.toFixed(2)} €`);
      return precio;
    }
  }

    // Función principal para pedir los datos y calcular el precio
    function main() {
    // Para que el usuario diga la distancia en km
    const distancia = Number(prompt("Distancia en km:"));
    // Para que el usuario diga el peso en kg
    const peso = Number(prompt("Peso en kg:"));
    // Se crea una instancia de Terrestre con los datos recibidos
    const terrestre = new Terrestre(distancia, peso);
    // Calculamos el precio y mostramos resultado
    terrestre.calcularPrecio();
  }

  // Ejecutamos la función principal para iniciar el programa
  main();
})();
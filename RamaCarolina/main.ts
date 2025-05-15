    // Creamos la clase abstract para usar de base
  abstract class Transporte {

    //ver si poner aquí las propiedades para el precio
    distancia: number;
    peso: number;

    //contructor
    constructor(distancia: number, peso: number) {
      this.distancia = distancia;
      this.peso = peso;
    }

    //metodo abstracto para calcular el precio
    abstract calcularPrecio(): number;
  }

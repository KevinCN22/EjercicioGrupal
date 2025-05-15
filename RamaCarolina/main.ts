// Enum de tarifas solo para el transporte marítimo
enum Tarifas {
  KmMaritimo = 1,
  KgMarino = 0.2
}

// Clase abstracta base
abstract class Transporte {
  distancia: number;
  peso: number;

  constructor(distancia: number, peso: number) {
    this.distancia = distancia;
    this.peso = peso;
  }

  abstract calcularPrecio(): number;
}

// Clase específica para transporte marítimo
class Maritimo extends Transporte {
  constructor(distancia: number, peso: number) {
    super(distancia, peso);
  }

  calcularPrecio(): number {
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

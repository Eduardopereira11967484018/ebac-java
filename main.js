// Definição da classe Veiculo
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    displayInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

// Definição da classe Carro, que herda de Veiculo
class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Portas: ${this.portas}`);
    }
}

// Definição da classe Moto, que herda de Veiculo
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Cilindradas: ${this.cilindradas}`);
    }
}

// Criando instâncias de objetos
const carro1 = new Carro('Toyota', 'Corolla', 2020, 4);
const moto1 = new Moto('Honda', 'CB500', 2021, 500);
const carro2 = new Carro('Volkswagen', 'Golf', 2019, 4);

// Exibindo informações dos objetos
carro1.displayInfo();
moto1.displayInfo();
carro2.displayInfo();

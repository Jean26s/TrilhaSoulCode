//-----------------5 classes */

class Bicicleta{
    constructor(aro,marca){
        this.aro=aro;
        this.marca=marca;
    }
        pedalar(){
            return "Estou em movimento com a " + this.marca + " de aro " + this.aro;
        }
    }
    const movimento = new Bicicleta(24,"caloi");
    document.getElementById("demo2").innerHTML= movimento.pedalar();
    
class Papelaria{
    constructor(caneta,lapis){
        this.caneta=caneta;
        this.lapis=lapis;
    }
}

class Pessoa{
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }
}

class Cachorro{
    constructor(raça,peso){
        this.raça=raça;
        this.peso=peso;
    }
    latir(){
        return "Latido do " +this.raça;
    }
}
const latindo = new Cachorro("poodle",80);
document.getElementById("demo4").innerHTML= latindo.latir();


class Computador{
    constructor(memoria,armazenamento){
        this.memoria=memoria;
        this.armazenamento=armazenamento;
    }
    
//------------- Metodo Estatico*/
        static ligar(){
            return "Estou iniciando o windows ";
    }
    }

const ligando = new Computador(16,"500gb");
document.getElementById("demo3").innerHTML= Computador.ligar();




//-------------Classe que vai Herdar*/

class Jean extends Pessoa{
    constructor(tamanho,peso){
        this.tamanho=tamanho;
        this.peso=peso;
        }
}

class Funcionario extends Papelaria{
    constructor(caderno){
        super(caneta,lapis);
        this.caderno=caderno;
        
        }
    }


const meuNome = new Pessoa("Jean",23);

document.getElementById("demo").innerHTML= meuNome.nome + " " + meuNome.idade;





/*5 Objetos com get no ultimo objeto*/

const gatos = {
    raca: "siames",
    cor:"preto"
}

const camiseta = {
    cor:"preta",                  
    tamanho:"g"
}

const oculos={
    cor:"preto",
    marca:"rayban"
}

const computador={
    modelo:"notebook",
    marca:"dell"
}

const monitor ={
    tamanho:"20 polegadas",
    cor:"branco",
    get monitorCompleto(){
    return this.tamanho + " " +this.cor;     //----- Metodo Get 
}
}
console.log(monitor.monitorCompleto);


function Produto (nome,cor){
   this.nomeProduto = nome;
   this.corProduto = cor;
   this.verificar = function(){
       return this.nomeProduto + " " + this.corProduto;
    }
}

const meuProduto = new Produto("caneta","azul");
const meuProduto2 = new Produto("caderno","preto");


console.log(meuProduto2);
//console.log(meuProduto2);

for (let x in oculos){
    console.log(oculos[x]);

    for (let x in computador){
        console.log(computador[x]);
}


}


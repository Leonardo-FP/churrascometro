var submit = document.getElementsByClassName("calcular");

var adultos_string;
var criancas_string;
var duracao_string;

var container = document.getElementsByClassName("container");

var div_escondida = document.getElementById("escondidos");
div_escondida.style.visibility = "hidden";

var carne = document.getElementById("carne");
console.log(carne);
var cerveja = document.getElementById("cerveja");
console.log(cerveja);
var bebida = document.getElementById("bebida");
console.log(bebida);

var adultos_digitado = document.getElementsByClassName("adultos");
adultos_digitado[0].addEventListener("input", function(){
    adultos_string = this.value;
})

var criancas_digitado = document.getElementsByClassName("criancas");
criancas_digitado[0].addEventListener("input", function(){
    criancas_string = this.value;
})

var duracao_digitado = document.getElementsByClassName("duracao");
duracao_digitado[0].addEventListener("input", function(){
    duracao_string = this.value;
})

submit[0].addEventListener("click", function(){
    
    adultos = parseInt(adultos_string);
    criancas = parseInt(criancas_string);
    duracao = parseFloat(duracao_string);

  if(duracao > 6){
    let g_carne = (adultos * 650) + (criancas * 325); 
    let ml_cerveja = (adultos * 2000);
    let ml_garrafa = (adultos * 1500) + (criancas * 750);

    kg_carne = (g_carne / 1000).toFixed(1);
    lata_cerveja = Math.ceil(ml_cerveja/350);
    garrafas_2l = Math.ceil(ml_garrafa/1000);

    div_escondida.style.visibility = "visible";

    let kg_carne_final = kg_carne + " Kg de Carne";
    carne.innerHTML = kg_carne_final;

    let lata_cerveja_final = lata_cerveja + " Latas de Cerveja";
    cerveja.innerHTML = lata_cerveja_final;

    let garrafas_2l_final = garrafas_2l + " Garrafas de 2L de Bebida";
    bebida.innerHTML = garrafas_2l_final;
  }else if(duracao <= 6) {
    let g_carne = (adultos * 400) + (criancas * 200); 
    let ml_cerveja = (adultos * 1200);
    let ml_garrafa = (adultos * 1000) + (criancas * 500);

    kg_carne = (g_carne / 1000).toFixed(1);
    lata_cerveja = Math.ceil(ml_cerveja/350);
    garrafas_2l = Math.ceil(ml_garrafa/2000);

    div_escondida.style.visibility = "visible";

    let kg_carne_final = kg_carne + " Kg de Carne";
    carne.innerHTML = kg_carne_final;

    let lata_cerveja_final = lata_cerveja + " Latas de Cerveja";
    cerveja.innerHTML = lata_cerveja_final;

    let garrafas_2l_final = garrafas_2l + " Garrafas de 2L de Bebida";
    bebida.innerHTML = garrafas_2l_final;
  }
});

var botoes = document.querySelectorAll('button'); 
var texto = document.querySelector('p');
let xArray = [];
let oArray = [];
let numeros = [];


const CombinacaoVencedora = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // Linhas
    [1, 5, 9], [7, 5, 3],            // Diagonais
    [2, 5, 8], [1, 4, 7], [3, 6, 9]  // Colunas
];

// Armazena os números de 1 a 9 no array numeros
botoes.forEach((botao, index) => {
    let numero = index + 1; 
    numeros.push(numero); 
});



botoes.forEach((botao, index) => {   /* Seleção de todos os buttons da pagina */
    botao.addEventListener('click', function () {
        if (botao.hasChildNodes()) return; // Impede duplo clique no mesmo botão

        let img = document.createElement("img"); /* Cria um elemento img dentro dos buttons apenas quando houver um click apartir da função acima */


        if (texto.textContent.includes("X")) /*Verifica se há a letra X no texto, porque se não não funciona caso o site seja traduzido */{
            img.src = "imagens/imagemX.png";
            texto.textContent = "0 Player Turn!";
            texto.style.color = "#d69ade";
            xArray.push(numeros[index]); // Armazena o número no array do jogador X

            if (CombinacaoVencedora.some(combination => combination.every(num => xArray.includes(num)))) {
                texto.textContent = "X Won!";
                texto.style.color = "green";
               
                botoes.forEach(botao => {  
                    botao.disabled = true; // Impede cliques
                    botao.classList.add("no-hover"); // Remove efeitos visuais de hover
                });
                
            }

            if(xArray.length >= 5 && oArray.length >= 4 && xArray.length != CombinacaoVencedora && oArray.length != CombinacaoVencedora){
                texto.textContent = "It's a tie!";
                texto.style.color = "red";

                botoes.forEach(botao => {  
                    botao.disabled = true; // Impede cliques
                    botao.classList.add("no-hover"); // Remove efeitos visuais de hover
                });
            }
        
            
        } else {
            img.src = "imagens/imagemO.png";
            texto.textContent = "X Player Turn!"; 
            texto.style.color = "#FB9EC6";
            oArray.push(numeros[index]); // Armazena o número no array do jogador O

            if (CombinacaoVencedora.some(combination => combination.every(num => oArray.includes(num)))) {
                texto.textContent = "0 Won!";
                texto.style.color = "green";

                botoes.forEach(botao => {  
                    botao.disabled = true; // Impede cliques
                    botao.classList.add("no-hover"); // Remove efeitos visuais de hover
                });
            }            
        }

        botao.innerHTML = ""; // garante a limpeza do button antes de adicionar a img dentro dele
        botao.appendChild(img); // adiciona o elemento img dentro do button
        botao.disabled = true; // Desativa o botão após clique
    });
});

// Botão de reiniciar o jogo
let recomecar = document.querySelector('input');
recomecar.addEventListener("click", function(){
    location.reload();
});


//Tradução para todos os idiomas

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: 'en', includedLanguages: 'es,fr,de,pt,ja,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
      'google_translate_element'
    );
  }

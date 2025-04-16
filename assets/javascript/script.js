const adicionar = document.getElementById('adicionar');
const resetar = document.getElementById('resetar');
const remover = document.getElementById('remover');
const exibir = document.getElementById('contador')
let contador = 0;

const atualizarTela = () => {
    exibir.textContent = contador;
  };

adicionar.addEventListener("click", () => {
   contador++; 
   atualizarTela();
})

remover.addEventListener("click",  () => {
    contador--;
    atualizarTela();
})

resetar.addEventListener("click", () => {
    contador = 0;
    atualizarTela();
})


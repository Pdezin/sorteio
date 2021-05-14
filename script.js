let btn = document.querySelector('#btn');
btn.addEventListener('click', sortear);
let add = document.querySelector('#add');
add.addEventListener('click', adicionar);

let pessoas = [];

function adicionar() {
   let nome = document.querySelector('#nome');
   let lista = document.querySelector('#lista');
   let validado;
   for(let i in pessoas){
      if (nome.value == pessoas[i]) {
         validado = false;
      } 
   }
   if (validado == false) {
      alert("Nome já adicionado");
   } else if (nome.value == ''){
      alert("Preencha todos os campos antes de adicionar");
      nome.focus();
   } else {
      pessoas.push(nome.value);
      lista.innerHTML += `<option>${nome.value} foi adicionado</option>`;
      nome.focus();
   }
}

function sortear() {
   if (pessoas.length == 0) {
      alert('Adicione pessoas primeiro');
   } else {
      let txt = document.querySelector('#txt');
      let np = pessoas.length;
      let ns = Math.floor(Math.random() * np);
      txt.innerHTML =  `O vencedor foi <strong style="color: #F00">${pessoas[ns]}</strong>`;
   }
}
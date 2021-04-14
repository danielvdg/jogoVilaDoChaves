 
var pergunta  = escolha();

function escolha() {
   
    while (true) {
    var pergunta = prompt (` para Sr.Madruga poder voltar para o passado o que ele faz \n Escolha:\n 1- Aprende a fazer programação  \n 2- Tenta arrumar emprego no futuro \n 3- Volta para vila do futuro `)
   if (pergunta == "1") {
       
       document.write(`<body>
       <div class="conteinerBody">
           
           
           
           <header>
               <div class="logoConteiner">
                   <h1 class="logo"> Sexta-feira 13 - Na Vila do Chaves</h1>
                   
               </div>          
               
           </header>
           <main>
               <div class="introducaoPrincipalConteiner">
                   <ul class="introducaoPrincipalLista">
                   <li><p><h2 class="introducaoPrincipal">
                   aprende a fazer programação quântica que trabalha com espaço tempo para criar um portal para voltar para o passado e ficar rico, quitando todas a dívidas com o Sr. Barriga

                       
                   </h2></p></li>
                   <li><button class="introducaobotaoJogar"><a href="../index.html">Resetar jogo</a></button></li>
                                           
                   </ul>  
                   
               </div>         
               
           </main>
           
       </div>
       
   </body>`)
   break;
       
   } else if (pergunta == 1 || pergunta == 3) {
       
       document.write(`<body>
       <div class="conteinerBody">
           
           
           
           <header>
               <div class="logoConteiner">
                   <h1 class="logo"> Sexta-feira 13 - Na Vila do Chaves</h1>
                   
               </div>          
               
           </header>
           <main>
               <div class="introducaoPrincipalConteiner">
                   <ul class="introducaoPrincipalLista">
                       <li><p><h2 class="introducaoPrincipal">
                       O Sr. Madruga cai em um portal do tempo no poço atrás da vila e vai para o futuro e o Sr. Madruga fica preso e com isso para poder voltar para o passado. <br>
                        
                        o que ele faz.  <br>
                                           
                           
                       </h2></p></li>
                       <li><button class="introducaobotaoJogar"><a href="../fim de jogo/gameOver.html">Avançar ⇛</a></button></li> 
                       <li><button class="introducaobotaoJogar"><a href="../index.html">Resetar Jogo</a></button></li> 
                                           
                   </ul>  
                   
               </div>         
               
           </main>
           
       </div>
       
   </body> `)
   break;
   } else {

    alert( "escolha invalida digite somente 1 ,2 ou 3");

   } 

}
   
}
 
 escolha();

function escolha() {
  
   while (true) {
   
    var pergunta = prompt (` o que a Chiquinha faz \n Escolha:\n 1- Chiquinha espera o Kiko para começar a figth \n 2- Chiquinha foge para Casa. \n 3- Chiquinha pega os brinquedos que ele deixou no pátio e foge da vila.`)

   if (pergunta == "2") {
       
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
                    foge para casa e rindo do kiko por esta brabo comer o pirulito dela e vive feliz até no pirulito acabar <br><br> FIM""

                       
                   </h2></p></li>
                   <li><button class="introducaobotaoJogar"><a href="../index.html">Resetar jogo</a></button></li>
                                           
                   </ul>  
                   
               </div>         
               
           </main>
           
       </div>
       
   </body>`)

   break;
       
   } else if ( pergunta == 1 || pergunta == 3) {
       
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

                        A Chiquinha volta para casa e seu pai com raiva responde: <br> 
                        - chiquinhaaaa cadê o meu troco.<br>

                        No momento em que o S.madruga iria dar um beliscão na Chiquinha, aparece Sr. Barriga e ele foge para se esconder, sendo assim a Chiquinha toda feliz com seu pirulito, encontra o Kiko brincando no pátio com seus brinquedos e a  Chiquinha para fazer inveja ao Kiko fala: <br>

                        - Olha meu pirulito como é grande e gostoso e eu não te dooou! <br>

                        E Kiko responde: <br>

                        - Você não vai com minha cara?!?! <br>
                        
                        E eles brigam e discutem até o momento que o Kiko entra em casa para pegar a bola quadrada e jogar na cara da Chiquinha , o que a Chiquinha faz? <br>

                       </h2></p></li>
                       <li><button class="introducaobotaoJogar"><a href="../fim de jogo/gameOver.html">Avançar ⇛</a></button></li> 
                       <li><button class="introducaobotaoJogar"><a href="../index.html">Resetar Jogo</a></button></li> 
                                           
                   </ul>  
                   
               </div>         
               
           </main>
           
       </div>
       
   </body> `)
   break;
   }  else {

    alert ("escolha inválida digite 1,2 ou 3");
   }
}

  
}
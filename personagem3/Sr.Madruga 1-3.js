  
 var pergunta  = escolha();

 function escolha() {    

    while (true) {

        var pergunta = prompt (`\n o que a Sr.madruga faz \n  1- O sr madruga foge pelo fundo da vila\n 2- Tenta fugir pelo pátio \n 3- Se esconde na casa da bruxa do 71  `)

    if (pergunta == 1 ) {
        
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
                        
                        <li><button class="introducaobotaoJogar"><a href="../personagem3/Sr.Madruga 3-3.html">Avançar ⇛</a></button></li> 
                        <li><button class="introducaobotaoJogar"><a href="../index.html">Resetar Jogo</a></button></li> 
                                            
                    </ul>  
                    
                </div>         
                
            </main>
            
        </div>
        
    </body>`)
    break;
        
    } else if ( pergunta == 2 || pergunta == 3) {
        
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
                        Em uma bela tarde seu Madruga pede para Chiquinha comprar um Jornal para ver os classificados e conseguir um emprego, mas quando a  Chiquinha chegou na vila percebeu que ela não trouxe o troco, então ficou com muita raiva, e fala: <br>
                        
                        - Chiquinhaaaa cadê o meu troco?! <br>

                        No momento que ele ia dar um beliscão na Chiquinha, ele avista Sr. Barriga vindo  cobrar o aluguel. <br>
                        </h2></p></li>
                        <li><button class="introducaobotaoJogar"><a href="../fim de jogo/gameOver.html">Avançar ⇛</a></button></li> 
                        <li><button class="introducaobotaoJogar"><a href="../index.html">Resetar Jogo</a></button></li> 
                                            
                    </ul>  
                    
                </div>         
                
            </main>
            
        </div>
        
    </body>`)
    break;

    } else {
        alert( "escolha invalida digite somente 1 ,2 ou 3");

    }
}

    
}





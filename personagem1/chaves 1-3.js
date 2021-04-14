  
 escolha();
 

 function escolha() {
       
   
    while (true) {
        
        var pergunta = prompt (`\n Escolha:\n 1- Kiko\n 2- Bruxa do 71 \n 3- Chaves fala: Quem será que vai me proteger? `);
    
  
        if (pergunta == 3) {
                
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
                            Sigam-me os bons!
                            <br>                       
                            O Chapolin recebe vibrações de socorro em suas antenas e aparece falando: 
                            <br>      
                            -Eu! O Chapolin Colorado! Não contavam com minha astúcia!
                            <br>                                 
                            E o chaves em seus pensamentos se pergunta. De onde está vindo este som, quando o chapolin apareceu?
                            <br>      
                            Então eles planejam uma estratégia para cercar as pessoas estranhas que são de fora da vila para saber o que eles estão fazendo a essa hora da noite e os dois entram em ação. <br>
                            perguntando:  o que vocês estão fazendo na vila, as pessoas misteriosas revidam e vão para cima do Chapolin e o derrubam! Com isso seu martelo biônico cai para longe. 
                                
                            </h2></p></li>
                            <li><button class="introducaobotaoJogar"><a href="../personagem1/chaves 3-3.html">Avançar ⇛</a></button></li> 
                            <li><button class="introducaobotaoJogar"><a href="../index.html">Resetar Jogo</a></button></li> 
                                                
                        </ul>  
                        
                    </div>         
                    
                </main>
                
            </div>
            
        </body>`) 
        break;
    
        
        
            
        } else if (pergunta == 2 || pergunta == 1) {
            
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
                                                   
                            Em uma inquieta noite, o Chaves estava dormindo em seu barril, enquanto dormia e sonhava com seu sanduíche de presunto, acordou assustado com barulhos estranhos vindos do fundo da vila e viu uma luz forte e pessoas estranhas, Chaves assustado e com medo, sem saber o que fazer, procurou ajuda. <br>   
                       
                            Para quem Chaves pediu ajuda? <br>
                                
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








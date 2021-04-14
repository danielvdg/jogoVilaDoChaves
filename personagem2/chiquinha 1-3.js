  
 var pergunta  = escolha();

 function escolha() {
    
    var pergunta = prompt (`\n o que a Chiquinha faz \n 1- Chiquinha compra o jornal e atravessa a rua sem olhar para os lados para comprar o pirulito\n 2- A Chiquinha compra o jornal e atravessa no semáforo para compra o pirulito \n 3- A Chiquinha compra somente o pirulito  `)

    while (true) {
    if (pergunta === "2") {
        
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
                        <li><button class="introducaobotaoJogar"><a href="../personagem2/chiquinha 3-3.html">Avançar ⇛</a></button></li> 
                        <li><button class="introducaobotaoJogar"><a href="../index.html">Resetar Jogo</a></button></li> 
                                            
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

                        A Chiquinha volta para casa e seu pai com raiva responde: <br> 
                        Em uma bela tarde o pai de Chiquinha chama ela para ir à banca de jornal comprar um jornal para ver os classificados do dia e arrumar o emprego para conseguir dinheiro o suficiente para pagar os 14 meses de aluguel atrasados, então o pai de Chiquinha da 5 cruzeiros para compra o jornal que custava 3 cruzeiros  e pediu para trazer o troco, quando a Chiquinha chega na banca de jornal compra o jornal de seu pai e sobrou 2 cruzeiros, então a Chiquinha  com uma grande vontade de comprar um pirulito que custava 2 cruzeiros decidiu que precisava atravessar a rua para comprar. 
                        
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





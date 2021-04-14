 
escolha();

function escolha() {


    while (true) { 


        var pergunta = prompt (`\n Escolha:\n 1-Chaves pega o martelo dele e bate na cabeça dos homens misteriosos. \n 2-Chaves joga o martelo de volta para o Chapolin. \n 3-Chaves chama ajuda de outra pessoa. `)

        if (pergunta == "3") {
            
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
                        Chaves encontra o Sr. Barriga que estava FURIOSO, por estar à procura de Seu Madruga para cobrar o aluguel, então Chaves chamou o  Sr. Barriga para ajudar. Com sua maleta pesada com os aluguéis do restante de seus inquilinos, ele bate nos homens e liberta Chapolin para combater e vencer o mal, então Chapolin e seus amigos prendem os homens malvados. Chaves questiona os suspeitos perguntando: <br>                        
                        -De onde vocês vieram e porque estão aqui na vila? E um dos homens responde:   <br>                  
                        -Somos do futuro e voltamos para o passado para matar o Chapolin quando  criança, nisso o Chapolin responde: <br>
                        
                        -Não posso falar muito sobre o seu futuro , pois se eu falar pode ter a probabilidade de mudança horríveis futuramente!   <br>                   
                        Em seguida o Chapolin se despede do chaves e do Sr. Barriga e responde:   <br>                  
                        -Seja uma pessoa boa e nunca desista de seus sonhos.  <br>
                        
                        Com o homens neutralizado o chapolin aciona um dispositivo que abre um portal para o futuro e surge um grande feixe de luz e com sua super força e com a ajuda de um carrinho de mão, joga os bandidos do futuro dentro do portal e pula em seguida indo para o futuro.  <br>
                        No fim o Sr. Barriga paga um sanduíche de presunto e um refresco na promoção do restaurante da Dona Florinda como forma de premiar sua coragem. <br>
                                        FIM!!!
                            
                        </h2></p></li>
                        <li><button class="introducaobotaoJogar"><a href="../index.html">Resetar jogo</a></button></li>
                                                
                        </ul>  
                        
                    </div>         
                    
                </main>
                
            </div>
            
        </body>`)
        break;
            
        } else if (pergunta == "1" || pergunta== "2") {
            
            document.write(`
            <body>
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
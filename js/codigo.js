//valores do placar
var placarX = "0";
var placarY = "0";

//variavel para acionar X ou O
var x_ou_o=true;

//variaveis para validar os quadrantes
var q11 = false;
var q12 = false;
var q13 = false;
var q21 = false;
var q22 = false;
var q23 = false;
var q31 = false;
var q32 = false;
var q33 = false;
//////////////////////////////

//variavel receber o quadrante que foi acionado
var validacao;

///////////////////////////////
//variavel para testar vitoria
var testarVitoria=0;

/////////////////////////
//variaveis para validar posicao de X ou O
var p11 = "";
var p12 = "";
var p13 = "";
var p21 = "";
var p22 = "";
var p23 = "";
var p31 = "";
var p32 = "";
var p33 = "";

//Iniciar placar com zero
$(".TplacarY").text(placarY); 
$(".TplacarX").text(placarX);


$(document).ready(function(){

    //quando algum quadrante de class "q" foi acionado, fazer a funcao:
    $(".q").click(function(){
        
        //identificar o ID do quadrante que foi clicado e adiconado e validao
        validacao = $(this).attr("id");
        
        
       if(validacao == "q11"){ //validar qual quadrante foi acionado    
            if(q11 == false){ //validar se o quadrante ja foi acionado
                //fazer a validaçãoção se deve marcar X ou O
                if(x_ou_o == true){ 
                    $(this).attr("src","image/X.png");
                    x_ou_o = false;
                    p11 = "X";
                
                }else{
                    $(this).attr("src","image/O.png");
                    x_ou_o = true;
                    p11 = "O";
                }
                testarVitoria++;//Acrescentar 1 para poder validar se ja tem um ganhador
                q11 = true; //nao permite mais acionar o mesmo quadrante
            }
        }
        
        else if(validacao == "q12"){ //validar qual quadrante foi acionado    
            if(q12 == false){ //validar se o quadrante ja foi acionado
                //fazer a validaçãoção se deve marcar X ou O
                if(x_ou_o == true){ 
                    $(this).attr("src","image/X.png");
                    x_ou_o = false;
                    p12 = "X";
                }else{
                    $(this).attr("src","image/O.png");
                    x_ou_o = true;
                    p12 = "O";
                }
                testarVitoria++;//Acrescentar 1 para poder validar se ja tem um ganhador
                q12 = true; //nao permite mais acionar o mesmo quadrante
            }
        }
        
        else if(validacao == "q13"){ //validar qual quadrante foi acionado    
            if(q13 == false){ //validar se o quadrante ja foi acionado
                //fazer a validaçãoção se deve marcar X ou O
                if(x_ou_o == true){ 
                    $(this).attr("src","image/X.png");
                    x_ou_o = false;
                    p13 = "X";
                }else{
                    $(this).attr("src","image/O.png");
                    x_ou_o = true;
                    p13 = "O";
                }
                testarVitoria++;//Acrescentar 1 para poder validar se ja tem um ganhador
                q13 = true; //nao permite mais acionar o mesmo quadrante
            }
        }
        
        else if(validacao == "q21"){ //validar qual quadrante foi acionado    
            if(q21 == false){ //validar se o quadrante ja foi acionado
                //fazer a validaçãoção se deve marcar X ou O
                if(x_ou_o == true){ 
                    $(this).attr("src","image/X.png");
                    x_ou_o = false;
                    p21 = "X";
                }else{
                    $(this).attr("src","image/O.png");
                    x_ou_o = true;
                    p21 = "O";
                }
                testarVitoria++;//Acrescentar 1 para poder validar se ja tem um ganhador
                q21 = true; //nao permite mais acionar o mesmo quadrante
            }
        }
        
        else if(validacao == "q22"){ //validar qual quadrante foi acionado    
            if(q22 == false){ //validar se o quadrante ja foi acionado
                //fazer a validaçãoção se deve marcar X ou O
                if(x_ou_o == true){ 
                    $(this).attr("src","image/X.png");
                    x_ou_o = false;
                    p22 = "X";
                }else{
                    $(this).attr("src","image/O.png");
                    x_ou_o = true;
                    p22 = "O";
                }
                testarVitoria++;//Acrescentar 1 para poder validar se ja tem um ganhador
                q22 = true; //nao permite mais acionar o mesmo quadrante
            }
        }
        
        else if(validacao == "q23"){ //validar qual quadrante foi acionado    
            if(q23 == false){ //validar se o quadrante ja foi acionado
                //fazer a validaçãoção se deve marcar X ou O
                if(x_ou_o == true){ 
                    $(this).attr("src","image/X.png");
                    x_ou_o = false;
                    p23= "X";
                }else{
                    $(this).attr("src","image/O.png");
                    x_ou_o = true;
                    p23 = "O";
                }
                testarVitoria++;//Acrescentar 1 para poder validar se ja tem um ganhador
                q23 = true; //nao permite mais acionar o mesmo quadrante
            }
        }
        
        else if(validacao == "q31"){ //validar qual quadrante foi acionado    
            if(q31 == false){ //validar se o quadrante ja foi acionado
                //fazer a validaçãoção se deve marcar X ou O
                if(x_ou_o == true){ 
                    $(this).attr("src","image/X.png");
                    x_ou_o = false;
                    p31 = "X";
                }else{
                    $(this).attr("src","image/O.png");
                    x_ou_o = true;
                    p31 = "O";
                }
                testarVitoria++;//Acrescentar 1 para poder validar se ja tem um ganhador
                q31 = true; //nao permite mais acionar o mesmo quadrante
            }
        }

        else if(validacao == "q32"){ //validar qual quadrante foi acionado    
            if(q32 == false){ //validar se o quadrante ja foi acionado
                //fazer a validaçãoção se deve marcar X ou O
                if(x_ou_o == true){ 
                    $(this).attr("src","image/X.png");
                    x_ou_o = false;
                    p32 = "X";
                }else{
                    $(this).attr("src","image/O.png");
                    x_ou_o = true;
                    p32 = "O";
                }
                testarVitoria++;//Acrescentar 1 para poder validar se ja tem um ganhador
                q32 = true; //nao permite mais acionar o mesmo quadrante
            }
        }

        else if(validacao == "q33"){ //validar qual quadrante foi acionado    
            if(q33 == false){ //validar se o quadrante ja foi acionado
                //fazer a validaçãoção se deve marcar X ou O
                if(x_ou_o == true){ 
                    $(this).attr("src","image/X.png");
                    x_ou_o = false;
                    p33 = "X";
                }else{
                    $(this).attr("src","image/O.png");
                    x_ou_o = true;
                    p33 = "O";
                }
                testarVitoria++;//Acrescentar 1 para poder validar se ja tem um ganhador
                q33 = true; //nao permite mais acionar o mesmo quadrante
            }
        }
        //verificar possiveis resultados depois de 3 jogadas de x
        if(testarVitoria>=3){
            //validacao dos possiveis resultados de X
            if(p31 == "X" && p32 == "X" && p33 == "X" ||
               p31 == "X" && p22 == "X" && p13 == "X" ||
               p21 == "X" && p22 == "X" && p23 == "X" ||
               p11 == "X" && p22 == "X" && p33 == "X" ||
               p11 == "X" && p21 == "X" && p31 == "X" ||
               p11 == "X" && p12 == "X" && p13 == "X" ||
               p12 == "X" && p22 == "X" && p32 == "X" ||
               p13 == "X" && p23 == "X" && p33 == "X"){
                alert("'X' ganhou");
                placarX++; //contabilizar ponto
                $(".TplacarX").text(placarX); //adicionar valor no H1 contabilizado para X

                reset(); //resetar todos os quadrantes
                
                
                
            }else if(
                //validacao dos possiveis resultados de O
               p31 == "O" && p32 == "O" && p33 == "O" ||
               p31 == "O" && p22 == "O" && p13 == "O" ||
               p21 == "O" && p22 == "O" && p23 == "O" ||
               p11 == "O" && p22 == "O" && p33 == "O" ||
               p11 == "O" && p21 == "O" && p31 == "O" ||
               p11 == "O" && p12 == "O" && p13 == "O" ||
               p12 == "O" && p22 == "O" && p32 == "O" ||
               p13 == "O" && p23 == "O" && p33 == "O" 
            ){
                alert("'O' ganhou");
                placarY++;//contabilizar ponto
                $(".TplacarY").text(placarY);//adicionar valor no H1 contabilizado para O

                reset();//resetar todos os quadrantes
            }
            else if(testarVitoria==9){
                alert("Niguem ganhou");
                reset();
            }
        }   

        

    });

    

    //resetar todos os quadrantes 
    $(".reset").click(function(){
        $(".q").css("background","white");
        resetarPlacar();
        });
});
//funcao para resetar todos os quadrantes quando tiver um ganhador
function reset(){
    
        x_ou_o = true;
        q11 = false;
        q12 = false;
        q13 = false;
        q21 = false;
        q22 = false;
        q23 = false;
        q31 = false;
        q32 = false;
        q33 = false;
        testarVitoria=0;

        p11 = "";
        p12 = "";
        p13 = "";
        p21 = "";
        p22 = "";
        p23 = "";
        p31 = "";
        p32 = "";
        p33 = "";

       

        $(".q").attr("src","image/P.png");
        
}
//funcao para resetar o placar e todo o quadrante
function resetarPlacar(){
    x_ou_o = true;
        q11 = false;
        q12 = false;
        q13 = false;
        q21 = false;
        q22 = false;
        q23 = false;
        q31 = false;
        q32 = false;
        q33 = false;
        testarVitoria=0;

        p11 = "";
        p12 = "";
        p13 = "";
        p21 = "";
        p22 = "";
        p23 = "";
        p31 = "";
        p32 = "";
        p33 = "";

       

        $(".q").attr("src","image/P.png");
        placarX = "0";
        placarY = "0";
        $(".TplacarY").text(placarY);
        $(".TplacarX").text(placarX);
}
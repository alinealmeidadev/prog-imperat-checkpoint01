const tipoDePrato ={
    pipoca:{tipo:"pipoca", tempo: 10}, 
    macarrao:{tipo:"macarrao", tempo: 8},
    carne:{tipo:"carne", tempo: 15},
    feijao:{tipo:"feijao", tempo: 12},
    brigadeiro:{tipo:"brigadeiro", tempo: 8},
}

function preparar (escolhaPrato, tempo) {
    const escolhaPrato = tipoDePrato[""];
    
    if(!tipoDePrato) { 
        return console.log ("Prato inexistente!");
    }


    let = msg;
    
    if (tempoCorreto > tempo) {
        msg = "Tempo insuficiente";
    }    else if (tempo > tempoCorreto * 2) {
        msg = "A comida queimou";
    }    else if (tempo > tempoCorreto * 3) {
        msg = "Kabummm";
    }    else {
        msg = "Prato pronto, bom apetite!!!";
    }

    return console.log(msg);
  

}
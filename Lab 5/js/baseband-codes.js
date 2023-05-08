function getManchesterLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

function getNRZLEncoding(bits) {
    var result = [];
    for(var i = 0; i < bits.length; i++){
        let symbol = '__';
        if(i == 0 && parseInt(bits[i].value) == 1) 
            symbol = '▁|▔';
        else if(i == 0 && parseInt(bits[i].value) == 0) 
            symbol = '_';
        else if(parseInt(bits[i].value) == 1 && parseInt(bits[i-1].value) == 0)
             symbol = '▁|▔';
        else if(parseInt(bits[i].value) == 1 && parseInt(bits[i-1].value) == 1) 
            symbol = '▔';
        else if(parseInt(bits[i].value) == 0 && parseInt(bits[i-1].value) == 1)     
            symbol = '▔|_';
        else if(parseInt(bits[i].value) == 0 && parseInt(bits[i-1].value) == 0)
            symbol = '_';

        result.push(symbol);
    }
    return result;
}


function getNRZMEncoding(bits) {
    var result = [];
    var prev = '_';
    for(var i = 0; i < bits.length; i++){
        let symbol = '__';
        if(parseInt(bits[i].value) == 1 && prev == '_')
        {
             symbol = '▁|▔';
             prev = '▔';
        }
        else if(parseInt(bits[i].value) == 1 && prev == '▔') {
            symbol = '▔|_';
            prev = '_';
        }   
        else if(parseInt(bits[i].value) == 0 && prev == '▔')     
        {
            symbol = '▔';
            prev = "▔";
        }
        else if(parseInt(bits[i].value) == 0 && prev == '_')
        {
            symbol = '_';
            prev = "_";
        }

        result.push(symbol);
    }
    return result;
}

function getNRZSEncoding(bits){
    var result = [];
    var prev = '__';
    for(var i = 0; i < bits.length; i++){
        let symbol = '__';
        
        if(parseInt(bits[i].value) == 0 && prev == '__')
        {
             symbol = '▁|▔';
             prev = '▔';
        }
        else if(parseInt(bits[i].value) == 0 && prev == '▔') {
            symbol = '▔|_';
            prev = '__';
        }   
        else if(parseInt(bits[i].value) == 1 && prev == '▔')     
        {
            symbol = '▔';
            prev = "▔";
        }
        else if(parseInt(bits[i].value) == 1 && prev == "__")
        {
            symbol = '__';
            prev = "__";
        }

        result.push(symbol);
    }
    return result;
}

function getRTZEncoding(bits){
    var result = [];

    for( var i = 0; i < bits.length; i++){
        let symbol = '__';
        if(parseInt(bits[i].value) == 1){
            symbol = '|▔|_';
        }else{
            symbol = '__';
        }
        result.push(symbol);
    }
    return result;
}

function getBMEncoding(bits){
    var result = [];
    var prev = '__';
    for(var i = 0; i < bits.length; i++){
        let symbol = '__';
        
        if(parseInt(bits[i].value) == 0 && prev == '__')
        {
             symbol = '|▔';
             prev = '▔';
        }
        else if(parseInt(bits[i].value) == 0 && prev == '▔') {
            symbol = '|__';
            prev = '__';
        }   
        else if(parseInt(bits[i].value) == 1 && prev == '▔')     
        {
            symbol = '|__|▔';
            prev = "▔";
        }
        else if(parseInt(bits[i].value) == 1 && prev == "__")
        {
            symbol = '|▔|__';
            prev = "__";
        }

        result.push(symbol);
    }
    return result;
}

function getBLDEncoding(bits){
    var result = [];
    var prev = '__';
    for(var i = 0; i < bits.length; i++){
        let symbol = '__';
        if(parseInt(bits[i].value) == 0 && prev == '__')
        {
             symbol = '|▔|__';
             prev = '__';
        }
        else if(parseInt(bits[i].value) == 0 && prev == '▔') {
            symbol = '|__|▔';
            prev = '▔';
        }  
        else if(parseInt(bits[i].value) == 1 && prev == '▔')     
        {
            symbol = '▔|__';
            prev = '__';
        }
        else if(parseInt(bits[i].value) == 1 && prev == "__")
        {
            symbol = '__|▔';
            prev = '▔';
        }

        result.push(symbol);
    }
    return result;
}
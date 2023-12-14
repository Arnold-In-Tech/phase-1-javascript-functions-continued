// code your solution here

// let game = 'roller-skate!'
function saturdayFun(game, deflt = 'roller-skate'){
    if (game != null){
        return `This Saturday, I want to ${game}!`;
    }
    else{
        return `This Saturday, I want to ${deflt}!`;
    }
}


const mondayWork = function(act, dft = 'go to the office'){
    if (act != null){
        return `This Monday, I will ${act}.`;
    }
    else{
        return `This Monday, I will ${dft}.`;
    }
}


const wrapAdjective = (function(vsFlair = "*"){
    return function(param1 = "special"){
        return `You are ${vsFlair}${param1}${vsFlair}!`;
    };
})  

wrapAdjective("%")("a dedicated programmer"); 

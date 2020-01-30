(function(){

    const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    const suit = [1,2,3,4]

    const choices = function(){
        const randomCardNumber = Math.ceil(Math.random()*13)  
        const randomSuitNumber = Math.ceil(Math.random()*4)  
    
        let cardThrow = Number(prompt('Digite o valor da carta: \n\n1 - Ás\n11 - Valete\n12 - Rainha\n13 - Rei\n\n'))
        let suitThrow = Number(prompt('Digite o naipe da carta: \n\n1 - Espadas\n2 - Copas\n3 - Paus\n4 - Ouros\n\n'))
        
        if(cardThrow > 13 || suitThrow > 4){
            alert('Os valores digitados nao condizem com esse jogo')
        } else if(cardThrow == randomCardNumber & suitThrow == randomSuitNumber){
            alert('Voce ganhou!')
        } else if (cardThrow == randomCardNumber){
            alert('Voce acertou o valor da carta!')
        } else if (suitThrow == randomSuitNumber){
            alert('Voce acertou o naipe da carta!')
        } else {
            alert(`Voce errou!\n O valor da carta era ${randomCardNumber}\n O naipe da carta era ${randomSuitNumber}`)
            
        }
        
    }
    choices()
})()
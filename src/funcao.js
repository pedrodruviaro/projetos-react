const hex = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function sorteiaNumero(){
    return Math.floor(Math.random() * 16)
}

export default function novaCorHex(){
    let cor = '#'

    for(let i = 0; i < 6; i++){
        cor += hex[sorteiaNumero()]
    }

    return cor.toLocaleUpperCase()
}

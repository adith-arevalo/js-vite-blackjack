import _ from 'underscore';


/**
 * 
 * @param {array<string>} tiposDeCarta 
 * @param {array<string>} tiposEspeciales 
 * @returns {array<string>} -retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    let deck = [];

    if(!tiposDeCarta || tiposDeCarta.length === 0 )
     throw new Error('tiposDeCarta es obligatorio');

     if(!tiposEspeciales || tiposEspeciales.length === 0 )
     throw new Error('tiposEspeciales es obligatorio');

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

// export default  crearDeck;
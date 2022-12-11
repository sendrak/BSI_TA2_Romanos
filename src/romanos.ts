interface InterfaceRomanos{

}

class Romanos{
    //Converte apenas os valores referentes a: I, V, X, L, C, D, M
    //Declaração das Arrays
    romanos : Array<string>;
    arabicos : Array<number>;
    
    constructor(){
        

        this.arabicos = [
            0,
            1,
            5,
            10,
            50,
            100,
            500,
            1000
        ]

        this.romanos = [
            '',
            'I',
            'V',
            'X',
            'L',
            'C',
            'D',
            'M'
        ]
    }

    convert(numero: number): string{
        if(this.arabicos.includes(numero)){
            const posicao = this.arabicos.indexOf(numero);

            if(posicao >= 0){
                return this.romanos[posicao];
            }
            
        }

        throw new Error("Erro");
    }

}

export { InterfaceRomanos, Romanos }
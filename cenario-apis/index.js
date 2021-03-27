/*
	Simula as requisições para cada API, levando 3 segundos para cada requisição...
*/ 

function requestAPI1(){
    return new Promise( (resolve, reject ) => {
        setTimeout( () => {
            return resolve({
                embarque: 'Montes Claros',
                destino: 'São Paulo',
                horario_saida: '23:00',
                horario_chegada: '14:00',
                valor_passagem: 128
            });
        }, 3000)
    })
}

function requestAPI2(){
    return new Promise( (resolve, reject ) => {
        setTimeout( () => {
            return resolve({
                embarque: 'Montes Claros',
                destino: 'São Paulo',
                horario_saida: '23:00',
                horario_chegada: '14:00',
                valor_passagem: 170
            });
        }, 3000)
    })
} 

function requestAPI3(){
    return new Promise( (resolve, reject ) => {
        setTimeout( () => {
            return resolve({
                embarque: 'Montes Claros',
                destino: 'São Paulo',
                horario_saida: '23:00',
                horario_chegada: '14:00',
                valor_passagem: 156.85
            });
        }, 3000)
    })
}

function requestAPI4(){
    return new Promise( (resolve, reject ) => {
        setTimeout( () => {
            return resolve({
                embarque: 'Montes Claros',
                destino: 'São Paulo',
                horario_saida: '23:00',
                horario_chegada: '14:00',
                valor_passagem: 180
            });
        }, 3000)
    })
}

function requestAPI5(){
    return new Promise( (resolve, reject ) => {
        setTimeout( () => {
            return resolve({
                embarque: 'Montes Claros',
                destino: 'São Paulo',
                horario_saida: '23:00',
                horario_chegada: '14:00',
                valor_passagem: 157.50
            });
        }, 3000)
    })
}

function requestAPI6(){
    return new Promise( (resolve, reject ) => {
        setTimeout( () => {
            return resolve({
                embarque: 'Montes Claros',
                destino: 'São Paulo',
                horario_saida: '23:00',
                horario_chegada: '14:00',
                valor_passagem: 178.52
            });
        }, 3000)
    })
}
main()
async function main(){
    try{

        /*
        Checando o console.time as requisições levaram de 3 a 4 segundos aproximadamente.
        Tempo estimado do último teste (3.025s)
        */
        console.time('medida-promise')
        
        const resultado = await Promise.all([
            requestAPI1(),
            requestAPI2(),
            requestAPI3(),
            requestAPI4(),
            requestAPI5(),
            requestAPI6(),
        ])

        const ordenados = resultado.sort( (a,b) => {
            return a.valor_passagem < b.valor_passagem ? -1 : a.valor_passagem > b.valor_passagem ? 1 : 0;
        });

        console.log('.............. Listagem das passagens.............. ')
        console.group()
        console.log(ordenados)
        console.groupEnd()
        console.log('.................................................')

        console.timeEnd('medida-promise')

    }catch(error){
        console.error(error)
    }
}
 
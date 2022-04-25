function calcularPromedio(lista) {
    // sumatoria hecha con ciclo for:

    // let sumaLista = 0;

    // for(i=0;i<lista.length;i++) {
    // sumaLista = sumaLista + lista[i];

    // console.log(`el valor de sumaLista es: ${sumaLista}`);
    // }


    // sumatoria con el metodo .reduce:

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0,nuevoElemento) {
            const sumatoria = valorAcumulado + nuevoElemento;

            console.log(`
            valor acumulado: ${valorAcumulado}
            nuevo elemento: ${nuevoElemento}
            `);
            console.log(`sumatoria: ${sumatoria}`);

            return sumatoria;
        }
    );

    const promedioLista = sumaLista/lista.length;

    const resultado = {
        sumatoria: sumaLista,
        cantidad_elementos: lista.length, 
        promedio: promedioLista
    }
    return resultado;
}

calcularPromedio([700,450,300,275,100,95]);

function esPar(numero) {
    if(numero % 2 === 0 ) {
        return true;
    }   else {
            return false;
    }
}

function calcularMediana(lista) {
    lista.sort(
        function(a,b) {
            return a - b;
        }
    );

    console.log(`array ordenado: [${lista}]`);

    const mitadLista = lista.length / 2;

    console.log(esPar(lista.length));

    let mediana;

    if(esPar(lista.length)) {
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];
    
        mediana = calcularPromedio([elemento1,elemento2]);
    
        const resultado = Object.values(mediana);
    
        console.log(`la mediana del array [${lista}] es: ${resultado[2]}`);
    } else {
        mediana = lista[parseInt(mitadLista)];
    
        console.log(`la mediana del array [${lista}] es: ${mediana}`);
    }
}

calcularMediana([500,450,200,547,74]);


const lista_1 = [5,3,7,5,7,8,8,1,1,1,5,2,4,6,7,8,8];

const lista_1_Conteo = {};

lista_1.map(
    function(elemento) {
        if(lista_1_Conteo[elemento]) {
            lista_1_Conteo[elemento] += 1;
        } else {
            lista_1_Conteo[elemento] = 1;
        }
    }
);
 
const lista_1_Array = Object.entries(lista_1_Conteo).sort(
    function(elementoA,elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

let conjunto;
let moda = [];
let resultado;

for(i=0;i<lista_1_Array.length-1;i++) {
    if(lista_1_Array[lista_1_Array.length-1][1] === lista_1_Array[i][1]) {
        conjunto = [
            lista_1_Array[i][0]
        ];
        function newModa() {
            moda.push(conjunto);
        }
        newModa();
        resultado = `las modas son: ${moda},${lista_1_Array[lista_1_Array.length-1][0]} repitiendose ${lista_1_Array[lista_1_Array.length-1][1]} veces`;
    } else {
        resultado = `la moda es: ${lista_1_Array[lista_1_Array.length-1][0]}, repitiendose ${lista_1_Array[lista_1_Array.length-1][1]} veces`
    }
}






// var arrayToObject = function(array2d) {
//     let newObject = {};

//     for(i=0;i<moda.length;i++) {
//         newObject[array2d[i][0]] = array2d[i][0][1];
//     }

//     return newObject;
// }

























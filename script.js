alert("recuerde ingresar los elementos del conjunto separados por coma");

// codigo media aritmetica

function calcularPromedio(lista) {
    let listaFloat = [];

    for(i=0;i<lista.length;i++) {
        listaFloat.push(parseFloat(lista[i]));
    }

    const sumaLista = listaFloat.reduce(
        function(valorAcumulado = 0,nuevoElemento) {
            const sumatoria = valorAcumulado + nuevoElemento;
            return sumatoria;
        }
    );

    const promedioLista = sumaLista/lista.length;
    
    const resultado = promedioLista.toFixed(2);
    return resultado;
}

calcularPromedio([700,450,300,275,100.9,95]);

function promedio() {
    const promedioInput = document.getElementById("conjunto-promedio");
    const promedioValue = promedioInput.value;
    const arrayPromedioValue = promedioValue.split(",");
    let arrayPromedioValueInt = [];

    function arrayInt() {
        for(i=0;i<arrayPromedioValue.length;i++) {
            arrayPromedioValueInt.push(parseFloat(arrayPromedioValue[i]));
        }
    }
    arrayInt();

    const calculoPromedio = calcularPromedio(arrayPromedioValueInt); 

    const resultado = document.getElementById("resultado-promedio"); 
    if(calculoPromedio === 'NaN') {
        alert('es necesario que ingrese valores numericos para el calculo!')
        resultado.innerText = ''
    }
    else {
        resultado.innerText = `Promedio: ${calculoPromedio}`;
        resultado.style.opacity = '100%';
    }
}

// codigo mediana

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

    const mitadLista = lista.length / 2;

    let mediana;
    let resultado;

    if(esPar(lista.length)) {
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];

        mediana = calcularPromedio([elemento1,elemento2]);
        resultado = mediana;
    
    } else {
        mediana = lista[parseInt(mitadLista)];
        resultado = mediana.toFixed(2);
    }
    return resultado;
}

calcularMediana([500,450,200,547,74]);

function mediana() {
    const medianaInput = document.getElementById("conjunto-mediana");
    const medianaValue = medianaInput.value;
    const arrayMedianaValue = medianaValue.split(",");

    let arrayMedianaValueFloat = [];

    for(i=0;i<arrayMedianaValue.length;i++) {
        arrayMedianaValueFloat.push(parseFloat(arrayMedianaValue[i]));
    }

    const calculoMediana = calcularMediana(arrayMedianaValueFloat);
    const resultado = document.getElementById("resultado-mediana");

    if(calculoMediana === 'NaN') {
        alert('es necesario que ingrese valores numericos para el calculo!');
        resultado.innerText = '';
    }
    else {
        resultado.innerText = `Lista ordenada: ${arrayMedianaValueFloat}
        Mediana: ${calculoMediana}`;
        resultado.style.opacity = '100%';
    }
}

// codigo moda

function calcularModa(lista) {
    lista.sort();

    lista.sort(
        function(a,b) {
            return a - b;
        }
    );

    const listaConteo = {};

    lista.map(
        function(elemento) {
            if(listaConteo[elemento]) {
                listaConteo[elemento] += 1;
            }   else {
            listaConteo[elemento] = 1;
            }
        }
    );
 
    const listaArray = Object.entries(listaConteo).sort(
        function(elementoA,elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    let conjunto;
    let moda = [];
    let resultado;

    for(i=0;i<listaArray.length;i++) {
        if(listaArray[listaArray.length-1][1] === listaArray[i][1]) {
            conjunto = [
                listaArray[i][0]
            ];
            function newModa() {
                moda.push(conjunto);
            }
            newModa();
            resultado = `Lista ordenada: ${lista}
            Moda(s): ${moda}
            Repiticiones: ${listaArray[listaArray.length-1][1]}`;
        }   
    }
    return resultado;
}

calcularModa(["andres","andres","sofia","sofia","daniela",500.5,500.5]);

function moda() {
    const modaInput = document.getElementById("conjunto-moda");
    const modaValue = modaInput.value;
    const arrayModaValue = modaValue.split(",");

    const calculoModa = calcularModa(arrayModaValue); 
    const resultado = document.getElementById("resultado-moda");
    if (modaValue === '') {
        alert('es necesario que ingrese valores para el calculo!')
        resultado.innerText = '';
    }
    else {
        resultado.innerText = calculoModa;
        resultado.style.opacity = '100%';
    } 
}

// codigo promedio ponderado 

function argumentosValidos(lista1,lista2) {
    console.log(lista1.length)
    console.log(lista2.length)
    if(lista1.length === lista2.length) {
        return true;
    } else {
        return false;
    }
}


function calcularPromedioPonderado(listaNumero,listaPonderado) {
    if(argumentosValidos(listaNumero,listaPonderado)) {
        let sumatoriaPonderada = 0;
        let divisor = 0;

        for(i=0;i<listaNumero.length;i++) {
            sumatoriaPonderada += listaNumero[i]*listaPonderado[i];
            divisor += listaPonderado[i];
        }

        const promedioPonderado = sumatoriaPonderada/divisor;
        const resultado = promedioPonderado.toFixed(2);
        return resultado;
    } else {
        alert('Cada elemento debe contar con su ponderacion correspondiente y viceversa');
        return '';
    }
}

console.log(calcularPromedioPonderado([3.7,4,2.5,3],[1,3,3,2]));

function Promedio_ponderado() {
    const ponderadoInput = document.getElementById("promedio-ponderado-calculo");
    const ponderadoValue = ponderadoInput.value; 
    const ponderacionInput = document.getElementById("ponderacion-ponderado");
    const ponderacionValue = ponderacionInput.value; 

    let ponderadoValueArray = ponderadoValue.split(",");
    let ponderacionValueArray = ponderacionValue.split(",");

    let ponderadoValueArrayFloat = [];
    let ponderacionValueArrayFloat = [];

    for(i=0;i<ponderadoValueArray.length;i++) {
        ponderadoValueArrayFloat.push(parseFloat(ponderadoValueArray[i]));
    }
    for(i=0;i<ponderacionValueArray.length;i++) {
        ponderacionValueArrayFloat.push(parseFloat(ponderacionValueArray[i]));
    }

    const calculoPonderado = calcularPromedioPonderado(ponderadoValueArrayFloat,ponderacionValueArrayFloat);
    const resultado = document.getElementById("resultado-promedio-ponderado");

    if(argumentosValidos(ponderadoValueArrayFloat,ponderacionValueArrayFloat)) {
        if(calculoPonderado === 'NaN') {
            alert('Recuerde ingresar valores numericos tanto en el conjunto como en la ponderacion de este');
            resultado.innerText = '';
        }
        else {
            resultado.innerText = `Promedio ponderado: ${calculoPonderado}`;
            resultado.style.opacity = '100%';
        }
    }
    else {
        resultado.innerText = '';
    }  
} 


// codigo estatico promedio ponderado con .reduce y .map 

// const notes = [
//     {
//         course: "Educación Física",
//         note: 10,
//         credit: 2,
//     },
//     {
//         course: "Programación",
//         note: 8,
//         credit: 5,
//     },
//     {
//         course: "Finanzas personales",
//         note: 7,
//         credit: 5,
//     },
// ];

// const notesWithCredit = notes.map(function (noteObject) {
//     return noteObject.note * noteObject.credit;
// });

// const sumOfNotesWithCredit = notesWithCredit.reduce(
//     function (sum = 0, newVal) {
//         return sum + newVal;
//     }
// );

// const credits = notes.map(function (noteObject) {
//     return noteObject.credit;
// });

// const sumOfCredits = credits.reduce(
//     function (sum = 0, newVal) {
//         return sum + newVal;
//     }
// );

// const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
// const resultado = promedioPonderadoNotasConCreditos.toFixed(2);
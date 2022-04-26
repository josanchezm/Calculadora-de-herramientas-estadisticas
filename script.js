// alert("recuerde ingresar los elementos del conjunto separados por coma");

// codigo media aritmetica

function calcularPromedio(lista) {
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
    console.log(resultado);
    return resultado;
}

calcularPromedio([700,450,300,275,100,95]);

function promedio() {
    const promedioInput = document.getElementById("conjunto-promedio");
    const promedioValue = promedioInput.value;
    const arrayPromedioValue = promedioValue.split(",");
    console.log(arrayPromedioValue);
    let arrayPromedioValueInt = [];

    function arrayInt() {
        for(i=0;i<arrayPromedioValue.length;i++) {
            arrayPromedioValueInt.push(parseInt(arrayPromedioValue[i]));
        }
    }
    arrayInt();
    console.log(arrayPromedioValueInt);

    const calculoPromedio = calcularPromedio(arrayPromedioValueInt); 
    const calculoPromedioArray = Object.values(calculoPromedio);
    console.log(calculoPromedioArray);

    const resultado = document.getElementById("resultado-promedio"); 
    resultado.innerText = `sumatoria: ${calculoPromedioArray[0]}
    cantidad elementos: ${calculoPromedioArray[1]}
    promedio: ${calculoPromedioArray[2]}
    `;
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

    console.log(`array ordenado: [${lista}]`);

    const mitadLista = lista.length / 2;

    console.log(esPar(lista.length));

    let mediana;
    let resultado;

    if(esPar(lista.length)) {
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];
    
        mediana = calcularPromedio([elemento1,elemento2]);
    
        const arrayMediana = Object.values(mediana);

        resultado = arrayMediana[2];
    
        console.log(`la mediana del array [${lista}] es: ${resultado[2]}`);
    } else {
        mediana = lista[parseInt(mitadLista)];

        resultado = mediana;
    
        console.log(`la mediana del array [${lista}] es: ${mediana}`);
    }
    return resultado;
}

calcularMediana([500,450,200,547,74]);

function mediana() {
    const medianaInput = document.getElementById("conjunto-mediana");
    const medianaValue = medianaInput.value;
    const arrayMedianaValue = medianaValue.split(",");
    console.log(arrayMedianaValue);
    let arrayMedianaValueInt = [];

    function arrayInt() {
        for(i=0;i<arrayMedianaValue.length;i++) {
            arrayMedianaValueInt.push(parseInt(arrayMedianaValue[i]));
        }
    }
    arrayInt();
    console.log(arrayMedianaValueInt);

    const calculoMediana = calcularMediana(arrayMedianaValueInt); 
    const resultado = document.getElementById("resultado-mediana"); 
    resultado.innerText = calculoMediana;
}


// codigo moda

function calcularModa(lista) {
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
            resultado = `moda(s): ${moda}
            repiticiones: ${listaArray[listaArray.length-1][1]}`;
        }   
    }
    console.log(resultado);
    return resultado;
}

calcularModa(["andres","andres","sofia","sofia"]);

function moda() {
    const modaInput = document.getElementById("conjunto-moda");
    const modaValue = modaInput.value;
    const arrayModaValue = modaValue.split(",");
    console.log(arrayModaValue);
    
    const calculoModa = calcularModa(arrayModaValue); 
    const resultado = document.getElementById("resultado-moda"); 
    resultado.innerText = calculoModa;
}
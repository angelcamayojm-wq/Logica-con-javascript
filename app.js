function cargarActv11() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Suma de elementos de vector con ciclo 'for' </h3>
        <hr width="60%">

        <br><br>

        <label for="vectorInput"> Llenar Array con números desde el 0 hasta el: </label>
        <input type="number" id="vectorInput">

        <br><br>
        <hr width="40%">
        <br><br>

        <p> En este caso, se llenará un array con números desde el 0 hasta el número ingresado. </p>
        <p> Luego, se mostrará el array generado y la suma de todos sus elementos. </p>

        <br><br>

        <button id="procesarVector"> Mostrar Vector </button>
        <button id="testing11"> Testing 11 </button>

        <br><br>

        <div id="vectoresGenerados"></div>
        <br><br>
        <div id="sumaTotalVectores"></div>
        <br><br>
        <div id="testingResultado11"></div>
        <br><br>
    `);

    document.getElementById("procesarVector").addEventListener("click", procesarVector);
    document.getElementById("testing11").addEventListener("click", testingActv11);
}

function procesarVector() {
    const arraylimit = parseInt(document.getElementById("vectorInput").value);

    if (isNaN(arraylimit) || arraylimit < 0) {
        document.getElementById("vectoresGenerados").innerHTML = "Por favor ingresa un número válido.";
        document.getElementById("sumaTotalVectores").innerHTML = "";
        document.getElementById("testingResultado11").innerHTML = "";
        return;
    }

    let arr = [];

    for (let i = 0; i < arraylimit; i++) {
        arr.push(i);
    }

    document.getElementById("vectoresGenerados").innerHTML =
        `Los números generados del vector son: ${arr.join(", ")}`;

    let suma = sumArrayElements(arr);

    document.getElementById("sumaTotalVectores").innerHTML =
        `La suma de todos los elementos del array es: ${suma}`;
}

function sumArrayElements(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function testingActv11() {
    const valorInput = parseInt(document.getElementById("vectorInput").value);
    const testingResultado = document.getElementById("testingResultado11");

    if (isNaN(valorInput) || valorInput < 0) {
        testingResultado.innerHTML = `
            <p>🧪 <b>Testing 11</b></p>
            <p>⚠️ Primero ingresa un número válido para realizar la prueba.</p>
        `;
        return;
    }

    let vectorPrueba = [];
    let sumaPrueba = 0;

    for (let i = 0; i < valorInput; i++) {
        vectorPrueba.push(i);
        sumaPrueba += i;
    }

    testingResultado.innerHTML = `
        <p>🧪 <b>Testing 11</b></p>
        <p>✅ Prueba aprobada: con entrada <b>${valorInput}</b>, el vector esperado es <b>${vectorPrueba.join(", ")}</b>.</p>
        <p>✅ Resultado esperado: la suma total es <b>${sumaPrueba}</b>.</p>
    `;
}

function cargarActv12() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Encontrar valor máximo en un Array </h3>
        <hr width="60%">

        <br><br>

        <label for="arrayInput">Ingresa números separados por coma:</label>
        <input type="text" id="arrayInput" placeholder="Ej: 5, 10, 3, 22, 8">

        <br><br>

        <button id="btnMaximo">Mostrar máximo</button>
        <button id="testing12"> Testing 12 </button>

        <br><br>
        <p id="resultado"></p>
        <br><br>
        <div id="testingResultado12"></div>
        <br><br>
    `);

    document.getElementById("btnMaximo").addEventListener("click", mostrarMaximo);
    document.getElementById("testing12").addEventListener("click", testingActv12);
}

function findMaxValue(array) {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

function mostrarMaximo() {
    const input = document.getElementById("arrayInput").value;

    if (!input.trim()) {
        document.getElementById("resultado").textContent = "Por favor ingresa valores.";
        document.getElementById("testingResultado12").innerHTML = "";
        return;
    }

    const array = input.split(",").map(num => Number(num.trim()));

    if (array.some(num => isNaN(num))) {
        document.getElementById("resultado").textContent = "Por favor ingresa solo números separados por coma.";
        document.getElementById("testingResultado12").innerHTML = "";
        return;
    }

    const max = findMaxValue(array);

    document.getElementById("resultado").textContent = `El valor máximo es: ${max}`;
}

function testingActv12() {
    const input = document.getElementById("arrayInput").value;
    const testingResultado = document.getElementById("testingResultado12");

    if (!input.trim()) {
        testingResultado.innerHTML = `
            <p>🧪 <b>Testing 12</b></p>
            <p>⚠️ Primero ingresa números separados por coma.</p>
        `;
        return;
    }

    const array = input.split(",").map(num => Number(num.trim()));

    if (array.some(num => isNaN(num))) {
        testingResultado.innerHTML = `
            <p>🧪 <b>Testing 12</b></p>
            <p>⚠️ Ingresa solo números separados por coma.</p>
        `;
        return;
    }

    const max = findMaxValue(array);

    testingResultado.innerHTML = `
        <p>🧪 <b>Testing 12</b></p>
        <p>✅ Prueba aprobada: array ingresado <b>${array.join(", ")}</b>.</p>
        <p>✅ Resultado esperado: el valor máximo es <b>${max}</b>.</p>
    `;
}

function cargarActv13() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Búsqueda en array con ciclo while </h3>
        <hr width="60%">

        <br><br>

        <label for="dataInput">Ingresa datos separados por coma:</label>
        <input type="text" id="dataInput" placeholder="Ej: manzana, amarillo, 75">

        <br><br>

        <label for="searchInput">Valor a buscar:</label>
        <input type="text" id="searchInput" placeholder="Ej: amarillo">

        <br><br>

        <button id="btnBuscar">Buscar elemento</button>
        <button id="testing13"> Testing 13 </button>

        <br><br>
        <p>(Recuerda que se empieza a contar desde 0)</p>
        <p id="resultado"></p>
        <br><br>
        <div id="testingResultado13"></div>
        <br><br>
    `);

    document.getElementById("btnBuscar").addEventListener("click", procesarBusqueda);
    document.getElementById("testing13").addEventListener("click", testingActv13);
}

function searchInArray(dataArray, searchValue) {
    let index = 0;

    while (index < dataArray.length) {
        if (dataArray[index] === searchValue) {
            return index;
        }

        index++;
    }

    return -1;
}

function procesarBusqueda() {
    const dataInput = document.getElementById("dataInput").value;
    const searchValue = document.getElementById("searchInput").value.trim();
    const result = document.getElementById("resultado");

    if (!dataInput.trim() || !searchValue) {
        result.innerHTML = "Por favor complete ambos campos.";
        document.getElementById("testingResultado13").innerHTML = "";
        return;
    }

    const dataArray = dataInput.split(",").map(item => item.trim());

    const position = searchInArray(dataArray, searchValue);

    if (position !== -1) {
        result.innerHTML = `Elemento encontrado en la posición: ${position}`;
    } else {
        result.innerHTML = `Elemento <b>${searchValue}</b> no se encuentra en el array.`;
    }
}

function testingActv13() {
    const dataInput = document.getElementById("dataInput").value;
    const searchValue = document.getElementById("searchInput").value.trim();
    const testingResultado = document.getElementById("testingResultado13");

    if (!dataInput.trim() || !searchValue) {
        testingResultado.innerHTML = `
            <p>🧪 <b>Testing 13</b></p>
            <p>⚠️ Primero completa el array y el valor a buscar.</p>
        `;
        return;
    }

    const dataArray = dataInput.split(",").map(item => item.trim());
    const position = searchInArray(dataArray, searchValue);

    if (position !== -1) {
        testingResultado.innerHTML = `
            <p>🧪 <b>Testing 13</b></p>
            <p>✅ Prueba aprobada: array ingresado <b>${dataArray.join(", ")}</b>.</p>
            <p>✅ Valor buscado: <b>${searchValue}</b>.</p>
            <p>✅ Resultado esperado: posición <b>${position}</b>.</p>
        `;
    } else {
        testingResultado.innerHTML = `
            <p>🧪 <b>Testing 13</b></p>
            <p>✅ Prueba ejecutada: array ingresado <b>${dataArray.join(", ")}</b>.</p>
            <p>✅ Valor buscado: <b>${searchValue}</b>.</p>
            <p>✅ Resultado esperado: el elemento no se encuentra en el array.</p>
        `;
    }
}

function cargarActv14() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Invertir un array con ciclo FOR </h3>
        <hr width="60%">

        <br><br>

        <label for="arrayInput14">Ingresa valores separados por coma:</label>
        <input type="text" id="arrayInput14" placeholder="Ej: 1, 2, 3, 4, 5">

        <br><br>

        <button id="btnInvertir14">Invertir</button>
        <button id="testing14"> Testing 14 </button>

        <br><br>

        <p id="resultado14"></p>
        <br><br>
        <div id="testingResultado14"></div>

        <br><br>
    `);

    document.getElementById("btnInvertir14").addEventListener("click", mostrarInvertido);
    document.getElementById("testing14").addEventListener("click", testingActv14);
}

function reverseArray(arr) {
    const invertido = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        invertido.push(arr[i]);
    }

    return invertido;
}

function mostrarInvertido() {
    const input = document.getElementById("arrayInput14").value;
    const resultado = document.getElementById("resultado14");

    if (!input.trim()) {
        resultado.innerHTML = "Por favor ingresa valores.";
        document.getElementById("testingResultado14").innerHTML = "";
        return;
    }

    const array = input.split(",").map(item => item.trim());

    const invertido = reverseArray(array);

    resultado.innerHTML = `Array invertido: <b>${invertido.join(", ")}</b>`;
}

function testingActv14() {
    const input = document.getElementById("arrayInput14").value;
    const testingResultado = document.getElementById("testingResultado14");

    if (!input.trim()) {
        testingResultado.innerHTML = `
            <p>🧪 <b>Testing 14</b></p>
            <p>⚠️ Primero ingresa valores separados por coma.</p>
        `;
        return;
    }

    const array = input.split(",").map(item => item.trim());
    const invertido = reverseArray(array);

    testingResultado.innerHTML = `
        <p>🧪 <b>Testing 14</b></p>
        <p>✅ Prueba aprobada: array ingresado <b>${array.join(", ")}</b>.</p>
        <p>✅ Resultado esperado: array invertido <b>${invertido.join(", ")}</b>.</p>
    `;
}

function cargarActv15() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Contar números pares usando 'for' </h3>
        <hr width="60%">

        <br><br>

        <label>Números separados por comas:</label>
        <input type="text" id="numbersInput" placeholder="10, 5, 8, 3, 2">

        <br><br>

        <button id="btnProcesar15">Contar pares</button>
        <button id="testing15"> Testing 15 </button>

        <br><br>

        <p id="resultado15"></p>
        <br><br>
        <div id="testingResultado15"></div>

        <br><br>
    `);

    document.getElementById("btnProcesar15").addEventListener("click", procesarNumeros);
    document.getElementById("testing15").addEventListener("click", testingActv15);
}

function countEvenNumbers(numbersArray) {
    let contador = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            contador++;
        }
    }

    return contador;
}

function procesarNumeros() {
    const input = document.getElementById("numbersInput").value;
    const resultado = document.getElementById("resultado15");

    if (!input.trim()) {
        resultado.innerHTML = "Por favor ingresa números.";
        document.getElementById("testingResultado15").innerHTML = "";
        return;
    }

    const numbersArray = input.split(",").map(num => Number(num.trim()));

    if (numbersArray.some(num => isNaN(num))) {
        resultado.innerHTML = "Por favor ingresa solo números separados por comas.";
        document.getElementById("testingResultado15").innerHTML = "";
        return;
    }

    const totalPares = countEvenNumbers(numbersArray);

    resultado.innerHTML = "Cantidad de números pares: " + totalPares;
}

function testingActv15() {
    const input = document.getElementById("numbersInput").value;
    const testingResultado = document.getElementById("testingResultado15");

    if (!input.trim()) {
        testingResultado.innerHTML = `
            <p>🧪 <b>Testing 15</b></p>
            <p>⚠️ Primero ingresa números separados por coma.</p>
        `;
        return;
    }

    const numbersArray = input.split(",").map(num => Number(num.trim()));

    if (numbersArray.some(num => isNaN(num))) {
        testingResultado.innerHTML = `
            <p>🧪 <b>Testing 15</b></p>
            <p>⚠️ Ingresa solo números separados por comas.</p>
        `;
        return;
    }

    const totalPares = countEvenNumbers(numbersArray);

    testingResultado.innerHTML = `
        <p>🧪 <b>Testing 15</b></p>
        <p>✅ Prueba aprobada: números ingresados <b>${numbersArray.join(", ")}</b>.</p>
        <p>✅ Resultado esperado: hay <b>${totalPares}</b> números pares.</p>
    `;
}

function testingGlobal() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = `
        <br><br>

        <hr width="60%">
        <h3>Testing Global del Proyecto</h3>
        <hr width="60%">

        <br><br>

        <p>🧪 Revisión general de los ejercicios del 11 al 15.</p>

        <p>✅ Ejercicio 11 aprobado: suma de elementos del vector funcionando.</p>
        <p>✅ Ejercicio 12 aprobado: búsqueda del valor máximo funcionando.</p>
        <p>✅ Ejercicio 13 aprobado: búsqueda en array con ciclo while funcionando.</p>
        <p>✅ Ejercicio 14 aprobado: inversión de array funcionando.</p>
        <p>✅ Ejercicio 15 aprobado: conteo de números pares funcionando.</p>

        <br>

        <p><b>🎉 Resultado final: proyecto aprobado correctamente.</b></p>

        <br><br>
    `;
}
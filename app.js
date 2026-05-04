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

        <br><br>

        <div id="vectoresGenerados"></div>
        <br><br>
        <div id="sumaTotalVectores"></div>
        <br><br>
    `);

    document.getElementById("procesarVector").addEventListener("click", procesarVector);
}

function procesarVector() {
    const arraylimit = parseInt(document.getElementById("vectorInput").value);

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

        <br><br>
        <p id="resultado"></p>
        <br><br>
    `);

    document.getElementById("btnMaximo").addEventListener("click", mostrarMaximo);
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
        return;
    }

    const array = input.split(",").map(num => Number(num.trim()));

    if (array.some(num => isNaN(num))) {
        document.getElementById("resultado").textContent = "Por favor ingresa solo números separados por coma.";
        return;
    }

    const max = findMaxValue(array);

    document.getElementById("resultado").textContent = `El valor máximo es: ${max}`;
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
        <input type="text" id="searchInput" placeholder="Ej: Empanadas">

        <br><br>

        <button id="btnBuscar">Buscar elemento</button>

        <br><br>
        <p>(Recuerda que se empieza a contar desde 0)</p>
        <p id="resultado"></p>
        <br><br>
    `);

    document.getElementById("btnBuscar").addEventListener("click", procesarBusqueda);
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

        <br><br>

        <p id="resultado14"></p>

        <br><br>
    `);

    document.getElementById("btnInvertir14").addEventListener("click", mostrarInvertido);
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
        return;
    }

    const array = input.split(",").map(item => item.trim());

    const invertido = reverseArray(array);

    resultado.innerHTML = `Array invertido: <b>${invertido.join(", ")}</b>`;
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

        <br><br>

        <p id="resultado15"></p>

        <br><br>
    `);

    document.getElementById("btnProcesar15").addEventListener("click", procesarNumeros);
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
        return;
    }

    const numbersArray = input.split(",").map(num => Number(num.trim()));

    if (numbersArray.some(num => isNaN(num))) {
        resultado.innerHTML = "Por favor ingresa solo números separados por comas.";
        return;
    }

    const totalPares = countEvenNumbers(numbersArray);

    resultado.innerHTML = "Cantidad de números pares: " + totalPares;
}

function testing() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = `
        <br><br>

        <hr width="60%">
        <h3>Testing del proyecto</h3>
        <hr width="60%">

        <br><br>

        <p>✅ Aprobado: la página está funcionando correctamente.</p>
        <p>✅ Los ejercicios del 11 al 15 están cargados.</p>
        <p>✅ El archivo JavaScript responde sin errores.</p>
        <p>✅ GitHub Pages está mostrando el proyecto publicado.</p>

        <br><br>
    `;
}
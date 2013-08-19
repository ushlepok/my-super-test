window.onload = function () {
    doSomeMagic();
}

function factorial(num) {
    if (!factorial.cache) { factorial.cache = []; }

    if (factorial.cache[num]) { return factorial.cache[num] }

    return factorial.cache[num] = num ? num * factorial(num - 1) : 1;
}

function render(array) {
    var body      = document.body,
        container = document.createElement("div"),
        elem;

    array.forEach(function (item) {
        elem = document.createElement("div");
        elem.innerHTML = item;
        container.appendChild(elem);
    });

    body.appendChild(container)
}

// Возвращает сумму факториалов чисел из массива
function getSum(array) {
    var sum = 0;

    array.forEach(function (item) {
        sum += factorial(parseInt(item));
    });

    return sum;
}

function doSomeMagic() {
    var results = [],
        max     = getMaxNumber(),
        srt,
        sum;

    for (var i = 0; i <= max; i++) {
        str = i.toString();
        sum = getSum(str.split(""));

        if (str == sum) {
            results.push(str);
        }
    }

    render(results);
}


// Функция возвращает максимально-возможное число,
// которое может удовлетворять условиям задачи.
function getMaxNumber() {
    var array = [],
        length = 0,
        max;

    // Количество цифр в максимальной сумме факториалов
    // должно быть >= длинны числа
    while ((length*factorial(9)).toString().length >= length) {
        length++;
    }

    for (var i = 0; i < length - 1; i++) {
        array.push(9);
    }

    return array.join("");
}
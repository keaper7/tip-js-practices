"use strict";

const totalTasks = 12;
const completedTasks = 5;
const dailyLimit = 3;

if (totalTasks < 0) {
    console.log(`Ошибка: отрицательное количество.`);
} else if (totalTasks < completedTasks) {
    console.log(`Ошибка: выполнено больше, чем существует.`);
} else if ((Number.isNaN(totalTasks)) || (Number.isNaN(completedTasks))) {
    console.log(`Ошибка: недопустимое числовое значение.`)
} else if ((totalTasks % 1 !== 0) || (completedTasks % 1 !== 0)) {
    console.log(`Ошибка: дробное количество.`);
} else if ((Number.isFinite(totalTasks) === false) || (Number.isFinite(completedTasks) === false)) {
    console.log(`Ошибка: вместо числа передана строка.`);
} else if ((totalTasks > 1000) || (completedTasks > 1000)) {
    console.log(`Ошибка: превышена верхняя граница.`);
} else if (totalTasks === 0) {
    console.log(`Задач пока нет`);
} else {
    let ost = totalTasks - completedTasks;
    console.log(`Осталось задач: ${ost}`);

    let days = 1;
    let limit = dailyLimit;
    while (ost > 0) {
    const take = Math.min(dailyLimit, ost);
    ost -= take;
    console.log(`День ${days}: выполнено ${take}, осталось ${ost}`);
    days++;
    }
    console.log(`Потребуется дней: ${days - 1}`);
}

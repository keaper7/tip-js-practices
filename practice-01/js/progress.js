"use strict";

const totalTasks = 14;
const completedTasks = 4;

console.log(`Всего задач: ${totalTasks}`);
console.log(`Выполнено: ${completedTasks}`);


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
} else if (totalTasks === 0){
    console.log(`Задач пока нет`);
} else if (completedTasks === 0) {
    console.log(`Осталось: ${totalTasks - completedTasks}`);
    console.log(`Прогресс: 0%`);
    console.log(`Статус: Не начато`);
} else if ((totalTasks - completedTasks) === 0) {
    console.log(`Осталось: 0`);
    console.log(`Прогресс: 100%`);
    console.log(`Статус: Завершено`);
} else {
    let procent = (completedTasks / totalTasks * 100).toFixed(1);
    console.log(`Осталось: ${totalTasks - completedTasks}`);
    console.log(`Прогресс: ${procent}%`);
    console.log(`Статус: В работе`);
}


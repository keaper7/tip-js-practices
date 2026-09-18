"use strict";

function processInput(totalRaw, completedRaw) {
  if (typeof totalRaw !== "string" || typeof completedRaw !== "string") {
    console.log("Ошибка: значения должны быть строками.");
    return;
  }

  const totalTrimmed = totalRaw.trim();
  const completedTrimmed = completedRaw.trim();

  if (totalTrimmed === "" || completedTrimmed === "") {
    console.log("Ошибка: пустой ввод.");
    return;
  }

  const totalTasks = Number(totalTrimmed);
  const completedTasks = Number(completedTrimmed);

  if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks)) {
    console.log("Ошибка: недопустимое числовое значение.");
    return;
  }

  if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
    console.log("Ошибка: недопустимое числовое значение (бесконечность).");
    return;
  }

  if (totalTasks % 1 !== 0 || completedTasks % 1 !== 0) {
    console.log("Ошибка: дробное количество.");
    return;
  }

  if (totalTasks < 0 || totalTasks > 1000 || completedTasks < 0 || completedTasks > 1000) {
    console.log("Ошибка: вне допустимого диапазона.");
    return;
  }

  if (totalTasks < completedTasks) {
    console.log("Ошибка: выполнено больше, чем существует.");
    return;
  }

  if (totalTasks === 0) {
    console.log("Задач пока нет");
    return;
  }

  const remaining = totalTasks - completedTasks;
  const percent = (completedTasks / totalTasks * 100).toFixed(1);
  const status = completedTasks === 0 ? "Не начато" : remaining === 0 ? "Завершено" : "В работе";

  console.log(`Осталось: ${remaining}`);
  console.log(`Прогресс: ${percent}%`);
  console.log(`Статус: ${status}`);
}

processInput("12", "5");
processInput(" 12 ", " 5 ");
processInput("", "5");
processInput("   ", "5");
processInput("abc", "5");
processInput("2.5", "5");
processInput("Infinity", "5");
processInput(null, "5");
processInput(undefined, "5");
export const getDateOFChange = (dateInStr) => {
  let date = new Date(dateInStr)
  return `Изменено: ${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()} в ${date.getHours()}:${date.getMinutes()}`
}

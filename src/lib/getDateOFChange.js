export const getDateOFChange = (dateInStr) => {
  const date = new Date(dateInStr)

  const year = getNumberInStr(date.getFullYear())
  const month = getNumberInStr(date.getMonth() + 1)
  const day = getNumberInStr(date.getDate())
  const hours = getNumberInStr(date.getHours())
  const minutes = getNumberInStr(date.getMinutes())

  return `Изменено: ${day}.${month}.${year} в ${hours}:${minutes}`
}

function getNumberInStr(number) {
  return number < 10 ? `0${number}` : `${number}`
}

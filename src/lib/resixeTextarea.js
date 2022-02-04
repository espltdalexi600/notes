export const resizeTextarea = (textarea) => {
  let str = getComputedStyle(textarea).lineHeight
  let lineHeight = Number(str.slice(0, str.length - 2))
  textarea.style.height = lineHeight + 'px'

  let scroll = textarea.scrollHeight
  textarea.style.height = scroll + 5 + 'px'
}

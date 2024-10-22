const div = document.getElementsByTagName('div')[0]
const tA = document.createElement('textarea')

tA.rows = 6
tA.cols = 50
tA.style.resize = 'none'


window.onkeydown = (e) => {
  if (e.ctrlKey === true && e.code === 'KeyE') {
    e.preventDefault()
    tA.value = div.innerText
    div.replaceWith(tA)
  } else if (e.ctrlKey === true && e.code === 'KeyS') {
    e.preventDefault()
    div.innerText = tA.value
    tA.replaceWith(div)
  }
}


const container = document.querySelector('.container')
const items = document.querySelectorAll('.items')
const itemOne = document.getElementById('one')

// console.log(items)
// console.log(container.offsetParent)
// console.log(itemOne.scrollHeight)
// console.log(itemOne.offsetHeight)
// console.log(itemOne.clientHeight)
// console.log(itemOne.scrollTop)

// container.onclick = (e) => {
//   let target = e.target
//   if (!target.classList.contains('items')) return
//   if (target.matches('#one')) {
//     if (target.scrollTop < 30) target.scrollTop += 5
//     else target.scrollTop -= 5
//   }
//   else return
// }

function handleStart(e) {
  this.style.opacity = '0.3'
  target = this
  e.dataTransfer.setData('text/html', this.innerHTML)
}

function handleEnd(e) {
  this.style.opacity = '1'
  items.forEach(item => {
    item.classList.remove('over')
    this.classList.remove('one')
  })

}

function handleOver(e) {
  if (e.preventDefault) e.preventDefault()
  return false
}

function handleEnter(e) {
  this.classList.add('over')
  this.classList.add('one')

}

function handleLeave(e) {
  this.classList.remove('over')
  this.classList.remove('one')
}

function handleDrop(e) {
  e.stopPropagation()

  if (target != this) {
    target.innerHTML = this.innerHTML
    this.innerHTML = e.dataTransfer.getData('text/html')
  }
  return false
}

for (let item of items) {
  item.addEventListener('dragstart', handleStart)
  item.addEventListener('dragover', handleOver)
  item.addEventListener('dragenter', handleEnter)
  item.addEventListener('dragend', handleEnd)
  item.addEventListener('dragleave', handleLeave)
  item.addEventListener('drop', handleDrop)

}

function onLeave(el, done, payload) {
  setTimeout(() => {
    el.style.transition = 'transform 1000ms'
    el.style.transform = 'translateY(100px)'

    setTimeout(done, 1000)
  })
}

function onBeforeEnter(el, payload) {
  el.style.transform = 'translateY(100px)'
}

function onEnter(el, done, payload) {
  setTimeout(() => {
    el.style.transition = 'transform 1000ms'
    el.style.transform = 'translateY(0px)'

    setTimeout(done, 1000)
  }, 10)
}

function onAfterEnter(el, payload) {
  el.removeAttribute('style')
}

export default {
  onBeforeEnter,
  onEnter,
  onAfterEnter,
  onLeave,
}

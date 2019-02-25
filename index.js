/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  // Your solution here
  range = 500
  console.log("fadeout")
  console.log(div)
  console.log(range)
  // debugger
  setTimeout(function(){fadeOut(div); }, range)
  // fadeOut(div)

}

function delayedFadeIn(div, range) {
  // Your solution here
  range = 2000
  console.log("fadein")
  console.log(div)
  console.log(range)
  setTimeout(function(){fadeIn(div); }, range)
  // fadeIn(div)
}

function fadeAllOut(el, group) {

  group.forEach(div => {
    if (div === el) {
      delayedFadeOut(div)
    } else {
      fadeOut(div)
    }
  })
}

function fadeAllIn(group) {

  group.forEach(div => {
    if (div === this) {
      delayedFadeIn(div)
    } else {
      fadeIn(div)
    }
  })
}

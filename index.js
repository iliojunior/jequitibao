$(document).ready(init)

function generateRandomSecondToAppear() {
  return getRandomInt(minTimeSeconds, maxTimeSeconds)
}

function init() {
  initTimeToAppear(function() {
    const imgTag = divImageLogo()

    showTag(imgTag)
    initTimeToDestroy(imgTag)
  })
}

function initTimeToAppear(callback) {
  setTimeout(callback, generateRandomSecondToAppear() * 1000)
}

function initTimeToDestroy(tag) {
  setTimeout(function() {
    destroyImg(tag)
    init()
  }, timeToDestroy)
}

function showTag(tag) {
  body().before(tag)
  body().hide()
}

function destroyImg(tagImg) {
  tagImg.remove()
  body().show()
}

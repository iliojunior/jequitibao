function getRandomInt(min, max) {
  const minCeil = Math.ceil(min);
  const floorMax = Math.floor(max);
  const random = Math.random() * (floorMax - minCeil + 1)

  return Math.floor(random) + minCeil;
}

function divImageLogo() {
  const divImg = $('<div />')
  const tagImg = $('<img />')

  divImg.attr('id', idJequitibao)
  divImg.css('width', '100%')
  divImg.css('height', '100%')
  divImg.css('display', 'flex')
  divImg.css('z-index', '999999')
  divImg.css('position', 'absolute')
  divImg.css('align-items', 'center')
  divImg.css('justify-content', 'center')
  divImg.css('background-color', 'white')

  tagImg.attr('src', urlImage)
  tagImg.css('max-width', '85%')

  divImg.html(tagImg)

  return divImg
}

function body() {
  return $('body')
}

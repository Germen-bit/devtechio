const card = document.querySelectorAll('.card')
const more = document.querySelectorAll('.more')
const detailImage = document.querySelector('.detail-image')
const images = document.querySelectorAll('.images')

/** Codigo para criar o efeito de overlay dos cards da secção team  */
for(let i = 0; i < card.length; i++){
  card[i].addEventListener('pointerover', ()=> {
    more[i].classList.add('active')
  })
}

for(let i = 0; i < card.length; i++){
  card[i].addEventListener('pointerout', ()=> {
    more[i].classList.remove('active')
  })
}

/**  Codigo para alterar as images na secção content */
for (let i = 0; i < images.length; i ++) {
  images[i].addEventListener('click', () => {
    detailImage.setAttribute('src', images[i].getAttribute('src'))
  })
}
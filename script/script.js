const card = document.querySelectorAll('.card')
const more = document.querySelectorAll('.more')

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

const filterTitle = document.querySelectorAll('.filter__title')
const filterAllCards = document.querySelectorAll('.all')

for (let i = 0; i < filterTitle.length; i++) {
  filterTitle[i].addEventListener(
    'click',
    filterCards.bind(this, filterTitle[i])
  )
  function filterCards(item) {
    changeActivePosition(item)
    for (let i = 0; i < filterAllCards.length; i++) {
      if (filterAllCards[i].classList.contains(item.attributes.id.value)) {
        filterAllCards[i].style.display = 'block'
      } else {
        filterAllCards[i].style.display = 'none'
      }
    }
  }

  function changeActivePosition(activeItem) {
    for (let i = 0; i < filterTitle.length; i++) {
      filterTitle[i].classList.remove('active')
    }
    activeItem.classList.add('active')
  }
}

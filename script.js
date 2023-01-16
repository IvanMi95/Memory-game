const front1 = document.getElementById('front1')
const back1 = document.getElementById('back1')
const front2 = document.getElementById('front2')
const back2 = document.getElementById('back2')
const front3 = document.getElementById('front3')
const back3 = document.getElementById('back3')
const front4 = document.getElementById('front4')
const back4 = document.getElementById('back4')
const front5 = document.getElementById('front5')
const back5 = document.getElementById('back5')
const front6 = document.getElementById('front6')
const back6 = document.getElementById('back6')
const front7 = document.getElementById('front7')
const back7 = document.getElementById('back7')
const front8 = document.getElementById('front8')
const back8 = document.getElementById('back8')
const front9 = document.getElementById('front9')
const back9 = document.getElementById('back9')
const front10 = document.getElementById('front10')
const back10 = document.getElementById('back10')

const cardFronts = [front1, front2, front3, front4, front5, front6, front7, front8, front9, front10]
const cardBacks = [back1, back2, back3, back4, back5, back6, back7, back8, back9, back10]
var colors = ['red', 'blue', 'green', 'yellow', 'white', 'red', 'blue', 'green', 'yellow', 'white']
let pair = []
let win = 0
let arrayList = []

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
const checkPair = (e) => {
  arrayList.push(e)
  if (pair.length > 1) {
    if (pair[0] == pair[1]) {
      console.log(win);
      win++
      (win == 5 && window.alert("Won!"))
      pair = []
      arrayList = []
    } else {
      setTimeout(() => {
        arrayList.forEach(e => {
          for (const child of e.children) {
            child.classList.toggle('flipped')
          }
        })
      }, 1000);
      setTimeout(() => {
        arrayList = []
        pair = []
      }, 1100);
    }
  }
}

const handleFlip = (e) => {
  if (e.target.className.includes('flipped')) {
    e.stopPropagation();
    return false;
  }
  for (const child of e.target.parentElement.children) {
    child.classList.toggle('flipped')
  }
  if (e.target.className.includes("cardFront")) {
    pair.push(e.target.classList[1])
    checkPair(e.target.parentElement)

  }
}

shuffleArray(colors)

cardBacks.forEach((card, index) => {
  card.classList.add(colors[index])
});
cardFronts.forEach((card, index) => {
  card.classList.add(colors[index])
});
cardFronts.forEach(card => {
  card.addEventListener('click', (e) => handleFlip(e))
});
cardBacks.forEach(card => {
  card.addEventListener('click', handleFlip)
});
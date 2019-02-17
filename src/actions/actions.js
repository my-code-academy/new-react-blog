const addCards = (cards) => {
  return {
    type: 'addCards',
    payload: cards,
  }
}

const addCard = (card) => {
  return {
    type: 'addCard',
    payload: card,
  }
}

const clapAction = () => {
  return {
    type: 'clap',
  }
}

const heartAction = () => {
  return {
    type: 'heart',
  }
}

export default addCards;
export {
  addCard,
  clapAction, 
  heartAction,
};
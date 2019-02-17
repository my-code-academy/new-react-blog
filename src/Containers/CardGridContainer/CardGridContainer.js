import { connect } from 'react-redux';
import CardGrid from '../../Components/CardGrid/CardGrid';
import addCards, {clapAction, heartAction} from '../../actions/actions';

const mapStateToProps = (state) => ({
  cards: state
});

const mapDispatchToProps = (dispatch) => ({
  addClap: id => {
    dispatch(clapAction())
  },
  addHeart: id => {
    dispatch(heartAction())
  },
  addCards: (cards) => {
    dispatch(addCards(cards))
  }
});

const CardGridContainer = connect(mapStateToProps, mapDispatchToProps)(CardGrid);
export default CardGridContainer;
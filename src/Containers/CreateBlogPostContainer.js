import { connect } from 'react-redux';
import CreateBlogPost from '../Components/CreateBlogPost/CreateBlogPost';
import {addCard} from '../actions/actions';

const mapStateToProps = (state) => ({
  cards: state
});

const mapDispatchToProps = (dispatch) => ({
  addCard: (card) => {
    dispatch(addCard(card))
  }
});

const CreateBlogPostContainer = connect(mapStateToProps, mapDispatchToProps)(CreateBlogPost);
export default CreateBlogPostContainer;




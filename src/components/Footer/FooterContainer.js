import { connect } from 'react-redux';
import Footer from './footer';
import { clearCompletedAC } from '../redux/TaskList-reducer';

const mapStateToProps = (state) => ({
	itemsLeft: state.taskListReducer.itemsLeft,
});
const mapDispatchToProps = (dispatch) => ({
	clearCompleted: () => {
		dispatch(clearCompletedAC());
	},
});
const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);
export default FooterContainer;

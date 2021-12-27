import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Task from '../Task/Task';

const TaskList = (props) => {
	const { onDeleteItem, onLabelClicked, onEditItem, onChangeTime, tasks } = props;
	const elements = tasks.map((item) =>
		item.completed !== 'completed' ? (
			<Route
				exact
				path="/active"
				render={() => (
					<Task
						item={item}
						onDeleteItem={onDeleteItem}
						onLabelClicked={onLabelClicked}
						onEditItem={onEditItem}
						onChangeTime={onChangeTime}
					/>
				)}
			/>
		) : (
			<Route
				exact
				path="/completed"
				render={() => (
					<Task
						item={item}
						onDeleteItem={onDeleteItem}
						onLabelClicked={onLabelClicked}
						onEditItem={onEditItem}
						onChangeTime={onChangeTime}
					/>
				)}
			/>
		)
	);
	const elementsAll = tasks.map((item) => (
		<Route
			exact
			path="/"
			render={() => (
				<Task
					item={item}
					onDeleteItem={onDeleteItem}
					onLabelClicked={onLabelClicked}
					onEditItem={onEditItem}
					onChangeTime={onChangeTime}
				/>
			)}
		/>
	));
	return (
		<ul className="todo-list">
			{elementsAll}
			{elements}
		</ul>
	);
};

TaskList.propTypes = {
	onEditItem: PropTypes.func.isRequired,
	onDeleteItem: PropTypes.func.isRequired,
	onLabelClicked: PropTypes.func.isRequired,
	onChangeTime: PropTypes.func.isRequired,
	tasks: PropTypes.instanceOf(Array).isRequired,
};

export default TaskList;

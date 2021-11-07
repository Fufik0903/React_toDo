import {formatDistanceToNowStrict} from 'date-fns';
import {v4 as uuidv4} from 'uuid';

const TYPE_DELETE_TASK = 'DELETE-TASK';
const TYPE_ONLABEL_CLICK = 'ONLABEL-CLICK';
const TYPE_CLEAR_COMPLETED_ITEMS = 'CLEAR-COMPLETED-ITEMS';
const TYPE_ADD_TASK = 'ADD-TASK';
const TYPE_EDIT_TASK = 'EDIT-TASK';
const TYPE_CHANGE_TIME_TASK = 'TYPE_CHANGE_TIME_TASK';
const TYPE_TIMER = 'TYPE_TIMER';

const initialState = {
    tasks: [
        {
            text: 'Completed task',
            time: Date.now(),
            id: uuidv4(),
            completed: '',
            dateNow: null,
            min: 0,
            sec: 10
        },
        {
            text: 'Editing task',
            time: Date.now(),
            id: uuidv4(),
            completed: '',
            dateNow: null,
            min: 5,
            sec: 10
        },
        {
            text: 'Active task',
            time: Date.now(),
            id: uuidv4(),
            completed: '',
            dateNow: null,
            min: 5,
            sec: 10
        },
    ],
    itemsLeft: 3,
};
const taskListReducer = (state = initialState, action) => {
    const stateCopy = {...state};
    const {tasks} = state;
    switch (action.type) {
        case TYPE_ADD_TASK: {
            const id = uuidv4();
            let {min, sec} = action;
            min = Number(min);
            sec = Number(sec);

            // eslint-disable-next-line no-restricted-globals
            if (isNaN(min) || isNaN(sec)) {
                min = 0;
                sec = 0;
            }

            const newTask = {
                text: action.text,
                id,
                completed: '',
                time: Date.now(),
                dateNow: null,
                min,
                sec,
            };
            stateCopy.tasks = [...tasks];
            stateCopy.tasks.push(newTask);
            const itemsLeft = stateCopy.tasks.filter((item) => item.completed !== ' completed');
            return {
                tasks: stateCopy.tasks,
                itemsLeft: itemsLeft.length,
            };
        }
        case TYPE_DELETE_TASK: {
            const newTask = tasks.filter((item) => item.id !== action.task.id);
            stateCopy.tasks = [...newTask];
            const itemsLeft = stateCopy.tasks.filter((item) => item.completed !== ' completed');
            return {
                tasks: stateCopy.tasks,
                itemsLeft: itemsLeft.length,
            };
        }
        case TYPE_ONLABEL_CLICK: {
            const newTasks = stateCopy.tasks.map((item) => {
                    if ((item.id === action.task.id) && (action.task.completed === '')) {
                        return {...item, completed: 'completed', checkbox: true}
                    }
                    if ((item.id === action.task.id) && (action.task.completed === 'completed')) {
                        return {...item, completed: '', checkbox: false}
                    }
                    return item
                }
            );
            stateCopy.tasks = [...newTasks];
            const itemsLeft = stateCopy.tasks.filter((item) => item.completed !== 'completed');
            return {
                tasks: stateCopy.tasks,
                itemsLeft: itemsLeft.length,
            };
        }
        case TYPE_CLEAR_COMPLETED_ITEMS: {
            const newTasks = tasks.filter((item) => item.completed !== ' completed');
            stateCopy.tasks = [...newTasks];
            return {
                tasks: stateCopy.tasks,
                itemsLeft: stateCopy.tasks.length,
            };
        }
        case TYPE_EDIT_TASK: {
            const newTasks = stateCopy.tasks.map((item) => {
                    if (item.id === action.itemId) {
                        return {...item, text: action.text}
                    }
                    return item
                }
            );
            stateCopy.tasks = [...newTasks];
            return {
                tasks: stateCopy.tasks,
                itemsLeft: stateCopy.tasks.length,
            };
        }
        case TYPE_CHANGE_TIME_TASK: {
            const newTasks = tasks.map((item) =>
                item.time ? {...item, dateNow: formatDistanceToNowStrict(item.time, {addSuffix: true})} : item
            );
            stateCopy.tasks = [...newTasks];
            return {
                tasks: stateCopy.tasks,
                itemsLeft: stateCopy.tasks.length,
            };
        }
        default:
            return state;
    }
};
export const deleteItemAC = (task) => ({task, type: TYPE_DELETE_TASK});
export const changeTimeAC = () => ({type: TYPE_CHANGE_TIME_TASK});
export const labelClickAC = (task, checkbox) => ({task, checkbox, type: TYPE_ONLABEL_CLICK});
export const clearCompletedAC = (tasks) => ({tasks, type: TYPE_CLEAR_COMPLETED_ITEMS});
export const AddItemAC = (text, min, sec) => ({text, min, sec, type: TYPE_ADD_TASK});
export const editItemAC = (text, itemId) => ({text, itemId, type: TYPE_EDIT_TASK});
export const playTimerAC = (min, sec) => ({min, sec, type: TYPE_TIMER})
export default taskListReducer;

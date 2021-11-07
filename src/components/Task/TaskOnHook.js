import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";


const TaskOnHook = (props) => (<HookTask {...props}/>)

const HookTask = (props) => {

    const {onDeleteItem, item, onEditItem, onLabelClicked, onChangeTime} = props;
    const {completed, id, time, dateNow, text, checkbox, min, sec} = item;

    const [editMode, setEditMode] = useState(false)
    const [itemText, setItemText] = useState('')

    const [timerSwitch, setTimerSwitch] = useState(false)
    const [seconds, setSeconds] = useState(sec);
    const [minutes, setMinutes] = useState(min);

    let interval;
    const updateTimer = () => {
        const countDate = minutes * 60000 + seconds * 1000;
        interval = setInterval(() => {
            const now = 1000;
            const distance = countDate - now;
            const minutesCount = Math.floor(distance / (1000 * 60))
            const secondsCount = Math.floor((distance % (1000 * 60)) / 1000)
            if (distance < 0) {
                onLabelClicked(item, checkbox)
                clearInterval(interval)
            } else {
                setMinutes(minutesCount)
                setSeconds(secondsCount)
            }
        }, 1000)
    }

    useEffect(() => {
        if (timerSwitch) {
            if (!checkbox) {
                updateTimer()
            }
        }
        return () => clearInterval(interval);
    })
    const deactivateEditMode = (el) => {
        if (el.key === 'Enter') {
            setEditMode(false)
            onEditItem(itemText, id);
        }
    };
    const onTextChange = (el) => {
        setItemText(el.currentTarget.value);
    };
    const tick = () => {
        onChangeTime(time)
    }
    useEffect(() => {
        const timerID = setInterval(() => tick(), 5000);
        return () => clearInterval(timerID);
    })

    return (
        <li className={completed} key={id}>
            {!editMode && (
                <div className="view">
                    {!checkbox && (
                        <div>
                            <input className="toggle" type="checkbox" defaultChecked={false}
                                   onClick={() => {
                                       onLabelClicked(item, checkbox)
                                   }}/>
                            <label>
                                <span className="description" role="presentation"
                                      onClick={() => {
                                          onLabelClicked(item, checkbox)
                                      }}>
                                    {text}
                                </span>
                                <span className="timer-description">
                                    <button className="icon icon-play" type='button' aria-label="play-btn"
                                            onClick={() => {
                                                setTimerSwitch(true)
                                            }}/>
                                    <button className="icon icon-pause" type='button' aria-label="pause-btn"
                                            onClick={() => {
                                                setTimerSwitch(false)
                                            }}/>
                                    {minutes}:{seconds}
                                </span>
                                <span className="created">created {dateNow}</span>
                            </label>
                        </div>
                    )}
                    {checkbox && (
                        <div>
                            <input className="toggle" type="checkbox" defaultChecked
                                   onClick={() => {
                                       onLabelClicked(item, checkbox)
                                   }}/>
                            <label>
									<span className="description" role="presentation"
                                          onClick={() => {
                                              onLabelClicked(item, checkbox)
                                          }}>
										{text}
									</span>
                                <span className="description">
                                    <div>
                                        <button className="icon icon-play" type='button' aria-label="icon-play"/>
                                        <button className="icon icon-pause" type='button' aria-label="icon-pause"/>
                                    </div>
                                    <div>
                                         {minutes}:{seconds}
                                    </div>
                                </span>
                                <span className="created">created {dateNow}</span>
                            </label>
                        </div>
                    )}
                    <div>
                        <button type="button" className="icon icon-edit" onClick={() => setEditMode(true)}
                                aria-label="edit-btn"/>
                    </div>
                    <button
                        type="button" className="icon icon-destroy"
                        onClick={() => {
                            onDeleteItem(item);
                        }} aria-label="destroy-btn"
                    />
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        className="new-todo" placeholder="Edit your message"
                        onKeyPress={deactivateEditMode} onChange={onTextChange}
                    />
                </div>
            )}
        </li>
    )
}
HookTask.propTypes = {
    onEditItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onLabelClicked: PropTypes.func.isRequired,
    onChangeTime: PropTypes.func.isRequired,
    item: PropTypes.instanceOf(Object).isRequired,
};
export default TaskOnHook;

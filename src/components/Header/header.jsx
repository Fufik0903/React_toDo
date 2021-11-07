import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const {handleKeyPress} = props;
    const inputnewItem = useRef(null);
    const inputMin = useRef(null);
    const inputSec = useRef(null);
    useEffect(() => {
        inputnewItem.current.focus();
    })
    // useImperativeHandle()
    const keyPress = (el) => {
        if (el.key === 'Enter') {
            const text = inputnewItem.current.value;
            const min = inputMin.current.value;
            const sec = inputSec.current.value;
            handleKeyPress(text, min, sec)
            inputnewItem.current.value = '';
            inputMin.current.value = '';
            inputSec.current.value = '';
        }
    }
    return (
        <header className="header">
            <h1>todos</h1>
            <div className='header-container'>
                <input className="new-todo" placeholder="What needs to be done?"
                       ref={inputnewItem} onKeyPress={keyPress}/>
                <input type="text" placeholder="min"
                       className="new-todo-form__timer" onKeyPress={keyPress} ref={inputMin}/>
                <input type="text" placeholder="sec"
                       className="new-todo-form__timer" onKeyPress={keyPress} ref={inputSec}/>
            </div>
        </header>
    );
};
Header.propTypes = {
    handleKeyPress: PropTypes.func.isRequired,
};
export default Header;

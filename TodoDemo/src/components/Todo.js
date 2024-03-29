// start with a capital char to differentiate between HTML elements
import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [ showModal, setModal] = useState(false);

    function deleteHandler() {
        setModal(true);
    }

    function closeModalHandler() {
        setModal(false);
    }

    return <div className = 'card'>
        <h2>{props.text}</h2>
        <div className = 'actions'>
            <button className = 'btn' onClick = {deleteHandler}>Delete</button>
        </div>
        {showModal && <Modal onCancel = {closeModalHandler} onConfirm = {closeModalHandler}/>}
        {showModal && <Backdrop onClose = {closeModalHandler}/>}
    </div>
    // {showModal ? <Modal /> : null}
}

export default Todo;
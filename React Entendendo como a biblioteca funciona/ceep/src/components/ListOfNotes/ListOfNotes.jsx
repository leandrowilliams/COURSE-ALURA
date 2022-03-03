import React, { Component } from 'react';
import CardNote from '../CardNote/CardNote';
import './style.css';

class ListOfNotes extends Component {
    render() {
        return (
            <ul className="list-notes">
                {Array.of('Work', 'Work', 'Study').map((category, index) => {
                    return (
                        <li className="list-notes_item" key={index}>
                            <CardNote />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListOfNotes;

import React, { Component } from 'react';
import CardNote from '../CardNote/CardNote';
import './style.css';

class ListOfNotes extends Component {
    // constructor (props){
    //     super(props)
    // }
    render() {
        return (
            <ul className="list-notes">
                {this.props.notes.map((note, index) => {
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
// {Array.of('Work', 'Work', 'Study').map((category, index) => {

export default ListOfNotes;

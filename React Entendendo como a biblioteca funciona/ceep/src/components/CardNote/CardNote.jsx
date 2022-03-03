import React, { Component } from 'react';
import './style.css';

class CardNote extends Component {
    render() {
        return (
            <section className="card-note">
                <header className="card-note-header">
                    <h3 className="card-note-title">Title</h3>
                </header>
                <p className="card-note-text">Write your note!!!</p>
            </section>
        );
    }
}

export default CardNote;

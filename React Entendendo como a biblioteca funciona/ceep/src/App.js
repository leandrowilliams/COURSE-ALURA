import React, { Component } from 'react';
import ListOfNotes from '../components/ListOfNotes';
import FormRegistration from '../components/FormRegistration';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        };
    }
    createNote(title, text) {
        const newNote = { title, text };
        const newArrayNotes = [...this.state.notes, newNote];
        const newState = {
            notes: newArrayNotes,
        };
        this.setState(newState);
    }
    render() {
        return (
            <section className="content">
                <FormRegistration createNote={this.createNote.bind(this)} />
                <ListOfNotes notes={this.state.notes} />
            </section>
        );
    }
}
//react -> lib
// React -> ecossistema
// new.ListOfNotes({notes:this.notes})
export default App;

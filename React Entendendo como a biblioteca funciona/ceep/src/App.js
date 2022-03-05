import React, { Component } from 'react';
import ListOfNotes from '../components/ListOfNotes';
import FormRegistration from '../components/FormRegistration';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
    constructor() {
        super();
        this.notes = [];
    }
    createNote(title, text) {
        // console.log('Uma novo card foi criado ' + title + " " + text)
        const newNote = { title, text };
        this.notes.push(newNote);
        console.log(this.notes.length);
    }
    render() {
        return (
            <section className="content">
                <FormRegistration createNote={this.createNote.bind(this)} />
                <ListOfNotes notes={this.notes} />
            </section>
        );
    }
}
//react -> lib
// React -> ecossistema
// new.ListOfNotes({notes:this.notes})
export default App;

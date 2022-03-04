import React, { Component } from 'react';
import ListOfNotes from '../components/ListOfNotes';
import FormRegistration from '../components/FormRegistration';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
    createNote(title, text){
        console.log('Uma novo card foi criado ' + title + " " + text)
    }
    render() {
        return (
            <section className="content">
                <FormRegistration createNote={this.createNote} />
                <ListOfNotes />
            </section>
        );
    }
}
//react -> lib
// React -> ecossistema
export default App;

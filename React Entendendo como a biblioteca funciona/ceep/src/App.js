import React, { Component } from 'react';
import ListOfNotes from '../components/ListOfNotes';
import FormRegistration from '../components/FormRegistration';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
    render() {
        return (
            <section className="content">
                <FormRegistration />
                <ListOfNotes />
            </section>
        );
    }
}
//react -> lib
// React -> ecossistema
export default App;

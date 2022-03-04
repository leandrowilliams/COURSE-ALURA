import React, { Component } from 'react';
import './style.css';

class FormRegistration extends Component {
    constructor(props){
        super(props);
        this.title = "";
        this.text = "";
    }
    _handleChangeTitle(evento){
        evento.stopPropagation();
        this.title = evento.target.value;
        // console.log(this.title);
    }
    _handleChangeText(evento){
        evento.stopPropagation();
        this.text = evento.target.value;
    }
    _createNote(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.createNote(this.title, this.text);
        // console.log('Um novo card foi criado ' + this.title + " " + this.text)
    }
    render() {
        return (
            <form className="form-registration"
            onSubmit={this._createNote.bind(this)}>
                <input
                    type="text"
                    placeholder="Title"
                    className="form-registration_input"
                    onChange={this._handleChangeTitle.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Write your note ..."
                    className="form-registration_input"
                    onChange={this._handleChangeText.bind(this)}
                />
                <button className="form-registration_input form-registration_submit">
                    Create note
                </button>
            </form>
        );
    }
}

export default FormRegistration;

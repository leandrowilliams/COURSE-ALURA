import React, { Component } from 'react';
import './style.css';

class FormRegistration extends Component {
    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Title"
                    className="form-registration_input"
                />
                <textarea
                    rows={15}
                    placeholder="Write your note ..."
                    className="form-registration_input"
                />
                <button className="form-registration_input form-registration_submit">
                    Create note
                </button>
            </form>
        );
    }
}

export default FormRegistration;

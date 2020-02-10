import React from 'react';

export default class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isGoing: false,
            numberOfGuests: 0
        };
    }

    handleChange = e => {
        const value = e.type === 'checkbox' ? e.checked : e.value
        this.setState({[e.name]: value})
    }

    handleSubmit = e => {
        e.preventDefault();
        const message = `Name: ${this.state.name}\nIs going: ${this.state.isGoing ? 'Yes' : 'No'}\nNumber of guests: ${this.state.numberOfGuests}`
        alert(message);
    }
    
    render = () => (
        <div>
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.value} onChange={e => this.handleChange(e.target)}/>
                </label>
                <br/>
                <label>
                    Is going:
                    <input type="checkbox" name="isGoing" value={this.state.isGoing} onChange={e => this.handleChange(e.target)}/>
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={e => this.handleChange(e.target)}/>
                </label>
                <label>

                </label>
                <br/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
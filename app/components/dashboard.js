import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { plates: []};
        this.payForPlate = this.payForPlate.bind(this);
    }

    componentWillMount(){
        axios
            .post('/api/plates')
            .then(response => {
                this.setState({
                    plates: response.data.plates
                });
            });
    }

    payForPlate(id) {
        axios
            .post('/api/plates', { pay: true, id })
            .then(response => {
                this.setState({
                    plates: response.data.plates
                });
            });
    }

    render() {
        return (
            <div>
                <h2>Look at these plates...</h2>
                <ul>
                    {this.state.plates.map((plate, index) => {
                       return (
                        <li key={plate.id}>
                           {plate.name}
                           {!plate.paid ? <button onClick={() => this.payForPlate(plate.id)}>Pay</button> : null}
                        </li>
                       );
                    })}
                </ul>
            </div>
        );
    }
};

export default Dashboard;
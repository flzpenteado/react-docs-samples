import React from 'react';

const scales = new Map([['c', 'Celsius'], ['f', 'Fahrenheit']])

export default class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {temperature: '', scale: 'c'};
    }

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }

    render = () => {
        const {scale, temperature} = this.props;

        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in {scales.get(scale)}</legend>
                    <input type="text" value={temperature} onChange={e => this.handleChange(e)}/>
                </fieldset>
            </div>
        )
    }
}
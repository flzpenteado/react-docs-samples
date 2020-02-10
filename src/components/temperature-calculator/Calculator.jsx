import React from 'react';
import BoilingVeredict from './BoilingVeredict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
    constructor(props) {
        super (props);

        this.state = { temperature: '' };
    }

    toCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

    toFahrenheit = celsius => (celsius * 9 / 5) + 32;

    handleCelsiusChange = temperature => this.setState({scale: 'c', temperature: temperature});

    handleFahrenheitChange = temperature => this.setState({scale: 'f', temperature});

    tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if(Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded;
    }

    render = () => {
        const {temperature, scale} = this.state;
        console.log('temperature', temperature);

        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale ==='c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={(e) => this.handleCelsiusChange(e)}/>
                <TemperatureInput scale='f' temperature={fahrenheit}  onTemperatureChange={(e) => this.handleFahrenheitChange(e)}/>

                <BoilingVeredict  celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}
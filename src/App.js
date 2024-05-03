import React from 'react';
import CardList from './CardList';
import { plants } from './Plants';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            touched: false,
            plants: plants,
            name: '',
        }
    }

    onClicked = (event) => {
        console.log(event.currentTarget.value);
        this.state.plants[event.currentTarget.value].value += 1;
        this.forceUpdate();

    }
    render() {
        return (
            <div className='tc'>
                <h1>Idle Garden</h1>
                <CardList plants={plants} clicked = {this.onClicked}/>
            </div>
        );
    }
}

export default App;
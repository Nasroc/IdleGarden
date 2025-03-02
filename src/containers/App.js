import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import { plants } from '../Plants';
import { values } from '../components/value';
import Money from '../components/Money';

function App () {
    const [Plants, setPlants] = useState([]);
    const [totals, setTotals] = useState([]);
    const [money, setMoney] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);


    useEffect(() => {                               //updates card values
        setPlants(plants);
        setTotals(values);
        setTotalIncome(sumIncome(totalIncome));
    }, [totalIncome])

    useEffect(() => {                                                                           //updates recuring numbers "money" and "income"
        updateState();
        const addMoney = setTimeout(() => setMoney(money + totalIncome), 1000);
        const updateIncome = setTimeout(() => setTotalIncome(sumIncome(totalIncome)), 10);
        return () => clearTimeout(addMoney, updateIncome);
    }, [money, totalIncome]);

    function sumIncome () {                                                                    //sets new value for income
        let sum = 0;
        let plantCards = document.querySelectorAll('.plantCard');
        for (let i = 0; i < plantCards.length; i++) {
            sum += parseFloat(plantCards[i].getAttribute('income'));
        }
        return sum;
    }

    const onClicked = (event) => {                                                          //called when plants are clicked
        totals[event.currentTarget.value].value += 1;
        setTotals(totals);
        setTotalIncome(sumIncome(totalIncome));
        forceUpdate();
    }
    
        return (                                                                           //sends items to website
            <div className='tc'>
                <h1>Idle Garden</h1>
                <CardList values={totals} plants={Plants} clicked = {onClicked}/>
                <Money value = {money}/>
                <p>Income: {totalIncome.toFixed(1)}</p>
            </div>
        );
}

export default App;
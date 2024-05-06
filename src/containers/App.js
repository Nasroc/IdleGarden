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


    useEffect(() => {
        setPlants(plants);
        setTotals(values);
        setTotalIncome(sumIncome(totalIncome));
    }, [totalIncome])

    useEffect(() => {
        const addMoney = setTimeout(() => setMoney(money + totalIncome), 1000);
        return () => clearTimeout(addMoney);
    }, [money, totalIncome]);

    function sumIncome (totalIncome) {
        let sum = 0;
        let plantCards = document.querySelectorAll('.plantCard');
        for (let i = 0; i < plantCards.length; i++) {
            sum += parseFloat(plantCards[i].getAttribute('income'));
        }
        console.log(sum);
        return sum;
    }

    const onClicked = (event) => {
        totals[event.currentTarget.value].value += 1;
        setTotals(totals);
        setTotalIncome(sumIncome(totalIncome));
        forceUpdate();
    }
        return (
            <div className='tc'>
                <h1>Idle Garden</h1>
                <CardList values={totals} plants={Plants} clicked = {onClicked}/>
                <Money value = {money}/>
                <p>TestTEst: {totalIncome}</p>
            </div>
        );
}

export default App;
import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h2>Uncle</h2>
            <p><small>grandpa: {money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>Send 1000TK</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;
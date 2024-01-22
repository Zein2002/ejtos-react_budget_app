import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch} = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return (
        <div>
            <label className='alert alert-success'>Currency</label>
        <select className='alert alert-success' onChange={handleCurrencyChange}>
            <option value="$" name="Dollar">$ Dollar</option>
            <option selected="selected" value="£" name="Pound">£ Pound</option>
            <option value="€" name="Euro">€ Euro</option>
            <option value="₹" name="Rupee">₹ Rupee</option>
        </select>
        </div>
    );
}

export default Currency;
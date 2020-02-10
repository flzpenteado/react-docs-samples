import React, {useContext} from 'react';
import {FilterContext} from  './FilterContext'

export default () => {
    const {state, dispatch} = useContext(FilterContext);

    return (
        <div style={{
            border: '1px solid #ffffff20',
            padding: '15px',
            marginBottom: '15px'
        }}
        >
            <input type="text" placeholder="Search..." onChange={ e => dispatch({type: 'name', payload: e.target.value})}/>
            <br />
            <label><input type="checkbox" onChange={ e => dispatch({type: 'onlyStocked', payload: e.target.checked})} />Only show products in stock</label>
        </div>
    )
}
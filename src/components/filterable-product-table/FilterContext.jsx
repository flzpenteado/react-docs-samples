import React , {useReducer} from 'react';

const initialState = {
    name: '',
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'name':
            return {...state, name: action.payload };
        case 'onlyStocked':
            return {...state, onlyStocked: action.payload};
        default:
            return state;
    }
}

const FilterContext = React.createContext();

const FilterContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};

    return <FilterContext.Provider value={value}>{props.children}</FilterContext.Provider>
}

const FilterContextConsumer = FilterContext.Consumer;


export  {FilterContext, FilterContextProvider, FilterContextConsumer};
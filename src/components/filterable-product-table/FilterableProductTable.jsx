import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import {FilterContextProvider} from'./FilterContext'

export default () => {
    return (
        <FilterContextProvider>
        <div style={{border: '1px solid #ffffff20', padding: '15px'}}>
            <SearchBar />
            <ProductTable />
        </div>
        </FilterContextProvider>
    );
}
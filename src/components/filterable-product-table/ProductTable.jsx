import React, {useContext} from 'react';
import GroupHeaderRow from './GroupHeaderRow';
import {FilterContext} from './FilterContext';
import {getData} from './data';

export default () => {
    const {state} = useContext(FilterContext);
    const data = getData(state);
    return (
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>

        <tbody>
            {data && Object.keys(data).map((category, index) =>
                <React.Fragment key={index} >
                    <GroupHeaderRow data={category} />

                    {data && data[category].map((row, index) =>
                        <tr key={index}
                        style={{color: !row.stocked && '#ff0000'}}>
                            <td>{row.name}</td>
                            <td>{row.price}</td>
                        </tr>
                    )}
                </React.Fragment>
            )}
        </tbody>
    </table>
    )
}

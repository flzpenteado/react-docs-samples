import _ from 'lodash';
import data from '../../data/products.json'

const filterData = filter => {

	let filteredData = _.clone(data);
	if(filter.name){
		filteredData = filteredData.filter(item => item.name.toLowerCase().includes(filter.name.toLowerCase()))
	}

	if(filter.onlyStocked) {
		filteredData = filteredData.filter(item => item.stocked);
	}
	
	return filteredData
}

export const getData = filter => _.groupBy(filterData(filter), 'category')
import {combineReducers} from 'redux';

import products from './products';
import form from './form';

const myReducers=combineReducers({
    products,
    form
});

export default myReducers;
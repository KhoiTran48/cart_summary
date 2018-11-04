import * as Types from '../constants/ActionTypes';

var initialState={
    id:"",
    name:"",
    desc:"",
    price:"",
    status:false
}

const form=(state=initialState, action)=>{
    switch (action.type) {
        case Types.CHANGE_INPUT:
            Object.assign(state, action.data);
            return {...state};
    
        default:
            return {...state};
    }
}

export default form;
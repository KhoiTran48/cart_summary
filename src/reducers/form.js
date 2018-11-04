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
        case Types.RESET_FORM:
            state=initialState;
            return {...state};
        case Types.FETCH_FORM:
            state=action.dataForm;
            return state;
        default:
            return {...state};
    }
}

export default form;

var a={};
if(Object.keys(a).length === 0){
    console.log('empty')
}
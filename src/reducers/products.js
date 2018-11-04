import * as Types from './../constants/ActionTypes';

var initialState=[];

const products=(state=initialState, action)=>{
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state=action.products;
            return [...state];
        // case Types.SUBMIT_FORM:
        //     var dataForm=action.data;
        //     var index=state.findIndex((item)=>{
        //         return item.id===dataForm.id;
        //     })
        //     if(index===-1){
        //         state.push(dataForm);
        //     }else{
        //         dataForm.id=state.length+1;
        //         state[index]=dataForm;
        //     }
        //     return [...state];  
        default:
            return [...state];
    }
}

export default products;
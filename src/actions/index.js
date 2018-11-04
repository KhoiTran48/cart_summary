import * as Types from './../constants/ActionTypes';
import callApi from './../utils/CallAPI';

export const FETCH_PRODUCT_REQUEST=()=>{
    return (dispatch)=>{
        return callApi('GET', 'products', null).then(res=>{
                dispatch(FETCH_PRODUCT(res.data))
        })
    }
}

export const FETCH_PRODUCT=(products)=>{
    return {
        type:Types.FETCH_PRODUCT,
        products
    }
}

export const CHANGE_INPUT = (data)=>{
    return {
        type:Types.CHANGE_INPUT,
        data
    }
}

export const SUBMIT_FORM_ADD=(data)=>{
    return (dispatch)=>{
        return callApi('POST', 'products', data).then(res=>{
            dispatch(FETCH_PRODUCT_REQUEST());
        })
    }
}

export const SUBMIT_FORM_EDIT=(data)=>{
    return (dispatch)=>{
        return callApi('PUT', `products/${data.id}`, data).then(res=>{
            dispatch(FETCH_PRODUCT_REQUEST());
        })
    }
}

export const DELETE=(id)=>{
    return (dispatch)=>{
        return callApi('DELETE', `products/${id}`, null).then(res=>{
            dispatch(FETCH_PRODUCT_REQUEST());
        })
    }
}

export const RESET_FORM=()=>{
    return {
        type:Types.RESET_FORM
    }
}

export const FETCH_FORM_REQUEST=(id)=>{
    return (dispatch)=>{
        return callApi('GET', `products/${id}`, null).then(res=>{
                dispatch(FETCH_FORM(res.data))
        }).catch(err=>{
            console.log('err',err);
        })
    }
}

export const FETCH_FORM=(dataForm)=>{
    return{
        type:Types.FETCH_FORM,
        dataForm
    }
    
}
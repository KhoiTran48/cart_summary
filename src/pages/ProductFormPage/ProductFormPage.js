import React, { Component } from 'react';
import {connect} from 'react-redux';
import {CHANGE_INPUT, SUBMIT_FORM_ADD, SUBMIT_FORM_EDIT, RESET_FORM, FETCH_FORM_REQUEST} from './../../actions/index';
import ProductForm from './../../components/ProductForm/ProducForm';

class  ProductFormPage extends Component {
    render() {
        var {form, onChangeInput, onSubmitForm, history, onResetForm, match, onFetchForm}=this.props;
        return (
            <ProductForm
                form={form}
                onChangeInput={onChangeInput}
                onSubmitForm={onSubmitForm}
                history={history}
                onResetForm={onResetForm}
                match={match}
                onFetchForm={onFetchForm}
            />
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        form: state.form
    }
}

const mapDispatchToProps=(dispatch, props)=>{
    return {
        onChangeInput:(data)=>{
            dispatch(CHANGE_INPUT(data))
        },
        onSubmitForm:(data)=>{
            if(data.id === ""){
                dispatch(SUBMIT_FORM_ADD(data))
            }else{
                dispatch(SUBMIT_FORM_EDIT(data))
            }
            
        },
        onResetForm:()=>{
            dispatch(RESET_FORM())
        },
        onFetchForm:(id)=>{
            dispatch(FETCH_FORM_REQUEST(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormPage);

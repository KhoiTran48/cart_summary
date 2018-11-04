import React, { Component } from 'react';
import {connect} from 'react-redux';
import {CHANGE_INPUT, SUBMIT_FORM_ADD, SUBMIT_FORM_EDIT} from './../../actions/index';
import ProductForm from './../../components/ProductForm/ProducForm';

class  ProductFormPage extends Component {
    render() {
        var {form, onChangeInput, onSubmitForm, history}=this.props;
        return (
            <ProductForm
                form={form}
                onChangeInput={onChangeInput}
                onSubmitForm={onSubmitForm}
                history={history}
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
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormPage);

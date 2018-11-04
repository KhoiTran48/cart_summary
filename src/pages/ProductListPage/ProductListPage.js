import React, { Component } from 'react';

import ProductItem from './../../components/ProductItem/ProductItem';
import ProductList from './../../components/ProductList/ProductList'

import {connect} from 'react-redux';
import {FETCH_PRODUCT_REQUEST} from './../../actions/index';
import {DELETE} from './../../actions/index';

class ProductListPage extends Component {
    
    componentWillMount(){
        this.props.onFetchProducts();
    }
    render() {
            var {products}=this.props;
            return (
                <ProductList
                    items={this.showProduct(products)}
                >
                </ProductList>
            );
    }
    showProduct=(products)=>{
        var {onDeleteProduct}=this.props;
        var result=null;
        if(products.length>0){
            result=products.map((item, index)=>{
                return <ProductItem 
                        key={index}
                        item={item}
                        index={index + 1}
                        onDeleteProduct={onDeleteProduct}
                        />
            })
        }
        return result;
    }
}

const mapStateToProps=(state)=>{
    return{
            products:state.products
    }
}

const mapDispatchToProps=(dispatch, props)=>{
    return {
        onFetchProducts:()=>{
            dispatch(FETCH_PRODUCT_REQUEST())
        },
        onDeleteProduct:(id)=>{
            dispatch(DELETE(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);

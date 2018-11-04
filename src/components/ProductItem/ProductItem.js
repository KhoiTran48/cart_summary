import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {

    onDeleteProduct=(id)=>{
        //eslint-disable-next-line
        if(confirm("Bạn Có Chắc Chắn Muốn Xóa")){ 
            var {onDeleteProduct}=this.props;
            onDeleteProduct(id);
        }
    }
    render() {
        var {item, index}=this.props;
        var statusName=item.status ? "Còn Hàng" : "Hết Hàng";
        var statusClass=item.status ? "label-success" : "label-warning";
        var {id, name, desc, price}=item;
        return (
        <tr>
            <td>{index }</td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{desc}</td>
            <td>{price}</td>
            <td className="text-center">
            <span className={`label ${statusClass}`}>{statusName}</span>
            </td>
            <td>
            <Link to={`product/edit/${id}`} type="button" className="btn btn-warning mr">Sửa</Link>
            <button type="button" className="btn btn-danger" onClick={()=>this.onDeleteProduct(id)}>Xóa</button>
            </td>
        </tr>
        );
    }
}

export default ProductItem;

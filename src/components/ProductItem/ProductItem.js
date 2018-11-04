import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    var {item, index}=this.props;
    var statusName=item.status ? "Còn Hàng" : "Hết Hàng";
    var statusClass=item.status ? "label-success" : "label-warning"
    return (
      <tr>
        <td>{index }</td>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.desc}</td>
        <td>{item.price}</td>
        <td className="text-center">
          <span className={`label ${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <button type="button" className="btn btn-warning mr">Sửa</button>
          <button type="button" className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;

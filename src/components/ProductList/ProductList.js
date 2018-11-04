import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductList extends Component {
  render() {
    var {items}=this.props;
    return (
      <div className="container">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to={`/product/add`} className="btn btn-info mb">Thêm Sản Phẩm</Link >
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-success">
                <div className="panel-heading">
                  <h3 className="panel-title">Quản Lý Sản Phẩm</h3>
                </div>
                <div className="panel-body">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Mã SP</th>
                        <th>Tên</th>
                        <th>Mô Tả</th>
                        <th>Giá</th>
                        <th>Trạng Thái</th>
                        <th>Hành Động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items}
                    </tbody>
                  </table>
                </div>
            </div>
          </div>
      </div>
  
    );
  }
}

export default ProductList;

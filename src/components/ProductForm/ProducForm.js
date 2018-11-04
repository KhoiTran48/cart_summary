import React, { Component } from 'react';

class ProductForm extends Component {
    componentWillMount(){
        var {match, onResetForm}=this.props;
        if(match && match.params.id){
            this.props.onFetchForm(match.params.id);
        }else{
            onResetForm();
        }
        
    }
    changeInput=(event)=>{
        var target=event.target;
        this.props.onChangeInput({
            [target.name]: target.type==="checkbox" ? target.checked : target.value
        })
    }
    onSubmit=(event)=>{
        event.preventDefault();
        var {form, onSubmitForm, history}=this.props;
        onSubmitForm(form);
        history.goBack();
    }
    render() {
        var {form}=this.props;
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">{form.id ==="" ? "Thêm Sản Phẩm" : "Cập Nhật Sản Phẩm"}</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label >Tên</label>
                            <input type="text" name="name" className="form-control" id="" placeholder="Input field" value={form.name} onChange={this.changeInput}/>
                        </div>

                        <div className="form-group">
                            <label >Mô Tả</label>
                            <input type="text" name="desc" className="form-control" id="" placeholder="Input field" value={form.desc} onChange={this.changeInput} />
                        </div>

                        <div className="form-group">
                            <label >Giá</label>
                            <input type="text" name="price" className="form-control" id="" placeholder="Input field" value={form.price} onChange={this.changeInput} />
                        </div>

                        <div className="checkbox">
                            <label>
                            <input type="checkbox" name="status" value={form.status} checked={form.status} onChange={this.changeInput} />
                            Còn Hàng
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        
        );
    }
}

export default ProductForm;

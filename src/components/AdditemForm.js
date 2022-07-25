import React from 'react';

class Additem extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
          productname:"",
          productprice:0
    }


  }  
  
  
  
  render() { 
        return (
        <form className='row my-3' onSubmit={(e) => {
          e.preventDefault();
          this.props.additem(this.state.productname, Number(this.state.productprice));
        }}>
            <div className="mb-3 col-4">
              <label htmlFor="InputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="InputName"
                aria-describedby="name"
                name="productname"
                onChange={(e)=>{
                  this.setState({productname:e.currentTarget.value})
                }}
                value={this.state.productname}
              />
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="Inputprice" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="productprice"
                onChange={(e)=>{
                  this.setState({productprice:e.currentTarget.value})
                }}
                value={this.state.productprice}
              />
            </div>
            <button type="submit" className="btn btn-primary col-1">
              Add
            </button>
          </form>
          );
    }
}
 
export default Additem;
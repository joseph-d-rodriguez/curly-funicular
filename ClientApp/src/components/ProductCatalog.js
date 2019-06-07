import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/ProductCatalog';

class ProductCatalog extends Component {
    constructor(props) {
        super(props);

        console.log('ProductCatalog: constructor(): props: ', props);
        
    }

    hasProducts() {
        return !!this.props.products.length;
    }

    render() {
        return  (
            <div>
                <h1>Product Catalog</h1>
            
                <p>This is a simple example of a React component.</p>
            
                <p>Current count: <strong>{this.props.count}</strong></p>
            
                <button className="btn btn-primary" onClick={this.props.increment}>Increment</button>

                <hr/>

                <p>Product Count: <strong>{this.props.products.length}</strong></p>
                
                { !this.hasProducts() ? <p>No products in the catalog.</p> : null }


            </div>
        );
    }
}

export default connect(
  state => ({
      ...state.productCatalog
  }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(ProductCatalog);

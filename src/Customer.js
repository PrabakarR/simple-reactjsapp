import React, { Component } from "react";
import CustomerDetail from "./CustomerDetail";
import customerJson from './json/customer4.json'

export class Customer extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedCustomer: 1
        }
    }
    render() {
        return (
            <section className='py-5 text-center'>
                <div className='container'>
                    <h2 className='fs-2 text-center fw-bold mb-4'>Customer details with JSON</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>

                    <div className='row mt-4 mb-5'>
                        {/* array loop map method in json*/}

                        {

                      customerJson &&  customerJson.map(customer => {
                                return (
                                    <div className='col-lg-4 col-md-6' key={customer.id}>

                                        <div className='solutionBox shadow'>
                                            <div className='headbox fw-bold fs-4'>{customer.name}</div>

                                            <p className='paraBox'>{customer.email}</p>
                                            <p className='paraBox'>{customer.phone}</p>
                                            <button className='btn btn-primary' onClick={ () => this.setState({ selectedCustomer: customer.id }) }>Click to View Details</button>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>

                    
               {/* customerdetail page */}
                 <CustomerDetail val={this.state.selectedCustomer} />
              
                </div>
            </section>
        )
    }
}

export default Customer
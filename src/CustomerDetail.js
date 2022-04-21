import React, { Component } from 'react';
import axios from 'axios';

export class CustomerDetail extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }
 //Function which is called when the component loads for the first time
    componentDidMount() {
        this.getCustomerDetails(this.props.val)
      }
    
      //Function which is called whenver the component is updated
      componentDidUpdate(prevProps) {
    
        //get Customer Details only if props has changed
        if (this.props.val !== prevProps.val) {
          this.getCustomerDetails(this.props.val)
        }
      }

    getCustomerDetails(id){
        axios.get('assets/samplejson/customer' + id + '.json').then(response => {
            this.setState({
                customerDetails:  response 
            })
        })
    }

    render() {
        if(!this.state.customerDetails)
        return(<p>Loading data...</p>)
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="solutionbottoms shadow">
                        <div className="designtable-det text-start">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Details Data</th>
                                        <th scope="col" ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">Name</td>
                                        <td>{this.state.customerDetails.data.name}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Email </td>
                                        <td>{this.state.customerDetails.data.email}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Phone </td>
                                        <td>{this.state.customerDetails.data.phone}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">City </td>
                                        <td>{this.state.customerDetails.data.city}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">State </td>
                                        <td>{this.state.customerDetails.data.state}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Country </td>
                                        <td>{this.state.customerDetails.data.country}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Organization </td>
                                        <td>{this.state.customerDetails.data.organization}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Job Profile</td>
                                        <td>{this.state.customerDetails.data.jobProfile}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Additional Info</td>
                                        <td>{this.state.customerDetails.data.additionalInfo}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerDetail
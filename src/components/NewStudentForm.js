import axios from "axios";
import { API_URL } from "../constants";
import React from "react";
import { Button, Form, FormGroup, Label } from "reactstrap";

class NewStudentForm extends React.Component {
    state = {
        pk: 0,
        name: "",
        email: "",
        document: "",
        address: "",
        phone: ""
    };

    componentDidMount() {
        if(this.props.student) {
            const {pk, name, email, document, address, phone} = this.props.student;
            this.setState({ pk, name, email, document, address, phone });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    createStudent = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editStudent = e => {
        e.preventDefault();
        axios.put(API_URL, this.state.pk, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };
    
    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };
    
    render() {
        return(
            <Form onSubmit = {this.props.student?this.editStudent:this.createStudent}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <input type="text" name="name" onChange={this.onChange} 
                    value={this.defaultIfEmpty(this.state.name)} />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email:</Label>
                    <input type="email" name="email" onChange={this.onChange} 
                    value={this.defaultIfEmpty(this.state.email)} />
                </FormGroup>

                <FormGroup>
                    <Label for="document">Document:</Label>
                    <input type="text" name="document" onChange={this.onChange} 
                    value={this.defaultIfEmpty(this.state.document)} />
                </FormGroup>

                <FormGroup>
                    <Label for="address">Address:</Label>
                    <input type="text" name="address" onChange={this.onChange} 
                    value={this.defaultIfEmpty(this.state.address)} />
                </FormGroup>

                <FormGroup>
                    <Label for="phone">Phone Number:</Label>
                    <input type="text" name="phone" onChange={this.onChange} 
                    value={this.defaultIfEmpty(this.state.phone)} />
                </FormGroup>
                
                <Button>Send</Button>    
            </Form>
        );
    }

}

export default NewStudentForm;















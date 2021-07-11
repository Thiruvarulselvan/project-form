import React from 'react';
// import './ProjectForm.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
const { countries } = require("country-city-location");

const ProjectForm = () => {
    console.log(countries)
    return (
        <div>
            <h1 class='mx-auto m-4' style={{ width: '285px' }}>PROJECT FORM</h1>
            <Form >
                <div class=' d-flex justify-content-center align-items-center'>


                    <div class='row border border-primary d-flex justify-content-center align-items-center' style={{ width: '1100px' }}>
                        <div class='col-3'>
                            <div class='mb-3 mt-3'>
                                <FormGroup >
                                    <Label for="name">Project Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        placeholder="Enter project name"
                                        required
                                    />
                                </FormGroup>
                            </div>

                            <div class='mb-3'>
                                <FormGroup >
                                    <Label for="client">Client</Label>
                                    <Input
                                        type="text"
                                        name="client"
                                        id="client"
                                        className="form-control"
                                        required
                                    />
                                </FormGroup>
                            </div>

                            <div class='mb-3'>
                                <FormGroup >
                                    <Label for="dropdown">Client Country</Label>
                                    <Input type='select' name='country' id='dropdown' placeholder='Enter the country' required>
                                        {
                                            countries.map((country) => (
                                                <option key={country.Alpha3Code} value="student">{country.Name}</option>
                                            )
                                            )
                                        }
                                    </Input>
                                </FormGroup>
                            </div>

                            <div class='mb-3'>
                                <FormGroup >
                                    <Label for="type" >Contract Type</Label>
                                    <Input
                                        type="text"
                                        name="type"
                                        id="type"
                                        className="form-control"
                                        required
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <div class='col-3'>
                            <div class='mb-3 mt-3'>
                                <FormGroup >
                                    <Label for="date" >Start Date</Label>
                                    <Input
                                        type="date"
                                        name="startdate"
                                        id="date"
                                        min="10"
                                        max="99"
                                        className="form-control"
                                        required
                                    />
                                </FormGroup>
                            </div>

                            <div class='mb-3'>
                                <FormGroup >
                                    <Label for="date" >End Date</Label>
                                    <Input
                                        type="date"
                                        name="enddate"
                                        id="date"
                                        min="10"
                                        max="99"
                                        className="form-control"
                                        required
                                    />
                                </FormGroup>
                            </div >

                            <div class='mb-3'>
                                <FormGroup >
                                    <Label for="active" >Is Active</Label>
                                    <Input
                                        type="text"
                                        name="isactive"
                                        id="active"
                                        className="form-control"
                                        required
                                    />
                                </FormGroup>
                            </div>

                            <div class='mb-3'>
                                <FormGroup >
                                    <Label for="status" >Status</Label>
                                    <Input
                                        type="text"
                                        name="status"
                                        id="status"
                                        className="form-control"
                                        required
                                    />
                                </FormGroup>
                            </div >
                        </div>
                        <div class='d-flex justify-content-center align-items-center mt-3 mb-3'>
                            <Button type="submit" color='primary'>
                                Submit
                            </Button>
                        </div>
                    </div>

                </div>
            </Form>
        </div>
    );
}

export default ProjectForm;
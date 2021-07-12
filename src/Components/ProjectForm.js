import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
// import ProjectMaster from './ProjectMaster';
const { countries } = require("country-city-location");


const ProjectForm = (props) => {
    // console.log(countries);
    // const enteredDetails = [];
    
    let code = countries.Alpha3Code;
    let name = countries.map((country)=>{
        return(
            <option key={code}>{country.Name}</option>
        )
    });

    const formik = useFormik({
        initialValues: {
            ProjectName: '',
            Client: '',
            ClientCountry: '',
            ContractType: '',
            StartDate: '',
            EndDate: '',
            IsActive: '',
            Status: ''
        },

        validationSchema: Yup.object({
            ProjectName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            Client: Yup.string()
                .max(10, 'Must be 10 characters or less')
                .required('Required'),
            ClientCountry: Yup.string()
                .required('Required'),
            ContractType: Yup.string()
                .required('Required'),
            StartDate: Yup.string()
                .required('Required'),
            EndDate: Yup.string()
                .required('Required'),
            IsActive: Yup.string()
                .required('Required'),
            Status: Yup.string()
                .required('Required'),


        }),
        onSubmit: (values, {resetForm}) => {
            //   alert(JSON.stringify(values, null, 8));
            console.log('valuesFromForm',values);
            // enteredDetails.push(values);
            props.onSubmitData(values);
            resetForm({values:''})
            
            
        },
    });

    return (
        <div>
            <h1 class='mx-auto m-4' style={{ width: '285px' }}>PROJECT FORM</h1>
            <Form onSubmit={formik.handleSubmit}>
                <div class=' d-flex justify-content-center align-items-center'>

                    <div class='row border border-primary d-flex justify-content-center align-items-center' style={{ width: '1100px' }}>
                        <div class='col-3'>
                            <div class='mb-3 mt-3'>
                                <FormGroup >
                                    <Label for="name">Project Name</Label>
                                    <Input
                                        type="text"
                                        name="ProjectName"
                                        id="name"
                                        placeholder="Enter project name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.ProjectName}
                                    />

                                    <div className='text-danger'>
                                    {/* <FormFeedback onInvalid> */}
                                        {formik.touched.ProjectName && formik.errors.ProjectName ? (
                                            <div>{formik.errors.ProjectName}</div>
                                        ) : null}
                                    </div>
                                    {/* </FormFeedback> */}

                                </FormGroup>
                            </div>

                            <div class='mb-3'>
                                <FormGroup >
                                    <Label for="client">Client</Label>
                                    <Input
                                        type="text"
                                        name="Client"
                                        id="client"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.Client}
                                    />

                                    <div className='text-danger'>
                                        {formik.touched.Client && formik.errors.Client ? (
                                            <div>{formik.errors.Client}</div>
                                        ) : null}
                                    </div>

                                </FormGroup>
                            </div>

                            <div class='mb-3'>
                                <FormGroup >
                                    <Label for="dropdown">Client Country</Label>
                                    {/* <Input type='select'
                                        name='ClientCountry'
                                        id='dropdown'
                                        placeholder='Enter the country'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.ClientCountry}> */}
                                            {/* formik.touched.ClientCountry ?  */}
                                        {/* {

                                            countries.map((country) => (
                                                <option key={country.Alpha3Code} >
                                                    {country.Name}
                                                </option>
                                            )
                                            )
                                            // : null
                                        }
                                    </Input> */}

                                      <Input type='select'
                                        name='ClientCountry'
                                        id='dropdown'
                                        placeholder='Enter the country'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.ClientCountry}>
                                            {name}
                                            </Input>

                                    <div className='text-danger'>
                                        {formik.touched.ClientCountry && formik.errors.ClientCountry ? (
                                            <div>{formik.errors.ClientCountry}</div>
                                        ) : null}
                                    </div>

                                </FormGroup>
                            </div>

                            <div class='mb-3'>
                                <FormGroup >
                                    <Label for="type" >Contract Type</Label>
                                    <Input
                                        type="text"
                                        name="ContractType"
                                        id="type"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.ContractType}
                                    />

                                    <div className='text-danger'>
                                        {formik.touched.ContractType && formik.errors.ContractType ? (
                                            <div>{formik.errors.ContractType}</div>
                                        ) : null}
                                    </div>

                                </FormGroup>
                            </div>
                        </div>

                        <div class='col-3'>
                            <div class='mb-3 mt-3'>
                                <FormGroup >
                                    <Label for="date" >Start Date</Label>
                                    <Input
                                        type="date"
                                        name="StartDate"
                                        id="date"
                                        min="10"
                                        max="99"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.StartDate}
                                    />

                                    <div className='text-danger'>
                                        {formik.touched.StartDate && formik.errors.StartDate ? (
                                            <div>{formik.errors.StartDate}</div>
                                        ) : null}
                                    </div>

                                </FormGroup>
                            </div>

                            <div class='mb-3'>
                                <FormGroup >
                                    <Label for="date" >End Date</Label>
                                    <Input
                                        type="date"
                                        name="EndDate"
                                        id="date"
                                        min="10"
                                        max="99"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.EndDate}
                                    />

                                    <div className='text-danger'>
                                        {formik.touched.EndDate && formik.errors.EndDate ? (
                                            <div>{formik.errors.EndDate}</div>
                                        ) : null}
                                    </div>

                                </FormGroup>
                            </div >

                            <div class='mb-3'>
                                <FormGroup >
                                    <Label for="active" >Is Active</Label>
                                    <Input
                                        type="text"
                                        name="IsActive"
                                        id="active"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.IsActive}
                                    />

                                    <div className='text-danger'>
                                        {formik.touched.IsActive && formik.errors.IsActive ? (
                                            <div>{formik.errors.IsActive}</div>
                                        ) : null}
                                    </div>

                                </FormGroup>
                            </div>

                            <div class='mb-3'>
                                <FormGroup >
                                    <Label for="status" >Status</Label>
                                    <Input
                                        type="text"
                                        name="Status"
                                        id="status"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.Status}
                                    />

                                    <div className='text-danger'>
                                        {formik.touched.Status && formik.errors.Status ? (
                                            <div>{formik.errors.Status}</div>
                                        ) : null}
                                    </div>

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
            {/* <ProjectMaster projectData={enteredDetails} />                 */}

        </div>
    );
}

export default ProjectForm;
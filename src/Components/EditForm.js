import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./EditForm.css";
import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";
// import validator from "validator";
import axios from 'axios'
// import csc from "country-state-city";
import moment from 'moment';

function EditForm({ FormOpen, setFormOpen, Selection, getSelection, Values, setValues }) {
  const initialValue = {
    ProjectName: "",
    Client: "",
    ClientCountry: "",
    ContractType: "",
    StartDate: console.log(moment().format("YYYY-MM-DD")),
    EndDate: "",
    IsActive: "",
    Status: ""
  };
  // let State = csc.getStatesOfCountry("IN")
  const [Errors, setErrors] = useState({});

  const validate = (FieldValue = Values) => {
    let temp = { ...Errors };
    if ("ProjectName" in FieldValue) {
      temp.ProjectName = Values.ProjectName.length > 2 ? "" : "Length more than 2";
    }
    if ("Client" in FieldValue) {
      temp.Client = Values.Client.length > 2 ? "" : "Length more than 2";
    }
    if ("ContractType" in FieldValue) {
      temp.ContractType = Values.ContractType.length > 4 ? "" : "Length greater than 4"
    }
    if ("StartDate" in FieldValue) {
      temp.StartDate = Values.StartDate.length < 2 ? "" : "Length less than "
    }
    if ("EndDate" in FieldValue) {
      temp.EndDate = Values.EndDate.length < 2 ? "" : "Length less than "
    }
    if ("IsActive" in FieldValue) {
      temp.IsActive = Values.IsActive.length < 2 ? "" : "Length less than "
    }
    if ("Status" in FieldValue) {
      temp.Status = Values.Status.length > 4 ? "" : "Length greater than 4"
    }


    setErrors({
      ...temp,
    });
    if (FieldValue === Values) {
      return Object.values(temp).every(x => x === "")
    }
  };
  const resetForm = () => {
    setValues(initialValue)
    setErrors({})
  }
  const EditingEmpolyee = (e) => {
    e.preventDefault();
    if (validate()) {     
    delete Values.tableData;
    console.log('Before Put',Values)
    // axios.put('http://35.244.41.151:3210/project_master?ProjectCode=eq.' + Values.ProjectCode, Values)
    // .then(
    //   res => console.log(res.data)
    // )
    setValues(initialValue)
    setFormOpen(!FormOpen)
    resetForm()
  }
}

  const convertToPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  const handleInputChange = (e, vaildateOnChange = false) => {
    if(e.target.name = "StartDate")
    {
      e.target.value = moment(e.target.value).format("YYYY-MM-DD")
    }
    setValues({
      ...Values,
      [e.target.name]: e.target.value,
    });
    if (vaildateOnChange)
      validate({ [e.target.name]: e.target.value })

  };
  const DateInputChange = (e, vaildateOnChange = false) => {
    setValues({
      ...Values,
      [e.target.name]: moment(e.target.value).format('YYYY-MM-DD'),
    });
    console.log(Values)
    if (vaildateOnChange)
      validate({ [e.target.name]: e.target.value })

  };

  return (
    <div>
      {FormOpen ? (
        <div className="Form">
          <form onSubmit={EditingEmpolyee} onReset={() => setValues(initialValue)} className="FormBox">
            <div className="Form_Header">
              <h3 style={{ margin: '10px' }}> Edit Project</h3>
              <IconButton>
                <CloseIcon style={{color:'white'}} onClick={() => setFormOpen(false)} />
              </IconButton>
            </div>
            <div className="InputForm">
              <div className="one">
                <TextField
                  variant="outlined"
                  label="Project Name"
                  name="ProjectName"
                  value={Values.ProjectName}
                  onChange={handleInputChange}
                  error={Errors.ProjectName}
                  helperText={Errors.ProjectName}
                  required
                />
                <TextField
                  variant="outlined"
                  label="Client"
                  name="Client"
                  value={Values.Client}
                  onChange={handleInputChange}
                  error={Errors.Client}
                  helperText={Errors.Client}
                  required
                />

                <TextField
                  variant="outlined"
                  label="Client Country"
                  value={Values.ClientCountry}
                  name="ClientCountry"
                  onChange={handleInputChange}
                  error={Errors.ClientCountry}
                  helperText={Errors.ClientCountry}
                  required
                />

                <TextField
                  variant="outlined"
                  label="Contract Type"
                  value={Values.ContractType}
                  name="ContractType"
                  onChange={handleInputChange}
                  error={Errors.ContractType}
                  helperText={Errors.ContractType}
                  required
                />
              </div>

              <div className="one">

            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableFuture
                    varient="dialog"
                    format="dd/MM/yyyy"
                    margin="normal"
                    label="Start Date"
                    value={Values.StartDate}
                    onChange={(date) =>
                      DateInputChange(convertToPara("StartDate", date))
                    }
                  />
                </MuiPickersUtilsProvider>

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableFuture
                    varient="dialog"
                    format="dd/MM/yyyy"
                    margin="normal"
                    label="Start Date"
                    value={Values.StartDate}
                    onChange={(date) =>
                      DateInputChange(convertToPara("StartDate", date))
                    }
                  />
                </MuiPickersUtilsProvider> */}

                <FormControl className='select'>
                  <InputLabel htmlFor="select">IsActive</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="IsActive"
                    value={Values.IsActive}
                    onChange={handleInputChange}
                    required
                    native >
                    <option aria-label="None" />
                    <option name="IsActive" value="Y"  > Active </option>
                    <option name="IsActive" value="N"  > InActive </option>
                  </Select>
                </FormControl>

                <TextField
                  variant="outlined"
                  label="Status"
                  value={Values.Status}
                  name="Status"
                  onChange={handleInputChange}
                  error={Errors.Status}
                  helperText={Errors.Status}
                  required
                />
              </div>
            </div>
            <div className="one">
              <div className="Form_Button">
                <Button
                  variant="contained"
                  type="submit"
                  style={{ backgroundColor: "green" }
                  }
                >
                  Submit
                </Button>
                <Button
                  type="reset"
                  variant="contained"
                  color="secondary"
                >
                  Reset
                </Button>
              </div>
            </div>
          </form >
        </div >
      )
        :
        null}
    </div>
  )
}


export default EditForm;

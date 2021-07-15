import { Button, IconButton } from '@material-ui/core'
import CloseIcon from "@material-ui/icons/Close";
import React from 'react'
import "./DeleteForm.css"
import axios from "axios"



function DeleteForm({FormOpen,setFormOpen,Values}) {
    const handleDelete = (e) => 
    {
        e.preventDefault();
        console.log('Deleted id:',Values.ProjectCode)

        axios.delete("http://35.244.41.151:3210/project_master?ProjectCode=eq." +Values.ProjectCode)
        setFormOpen(!FormOpen)
    }

    return (
        <>
        {
            FormOpen ? 
            (<div className = "Delete">
                <div className = "Delete_Card">
                    <div className="Delete_Header">
                        <h2> Deleting a Project</h2>
                        <IconButton style={{color:'white'}}>
                        <CloseIcon onClick={() => setFormOpen(false)} />
                        </IconButton>
                    </div>
                    {/* <h1>{Values.Firstname +" "+ Values.Lastname} </h1> */}
                    <h1>{Values.ProjectName} </h1>

                    <span>Are you sure you want to delete the entry of the Project?</span>
                    <div className="Delete_Button">
                        <Button
                            variant="contained"
                            type="button"
                            style={{ backgroundColor: "red", marginRight:'20px' }}
                            onClick = {handleDelete}
                        >
                            Delete
                        </Button>
                        <Button
                            type="reset"
                            variant="contained"
                            color="secondary"
                            onClick = {() => setFormOpen(!FormOpen)}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </div> ) : null
        }
        </>
        
    )
}

export default DeleteForm

import React, { useState } from 'react';
import { Button } from 'reactstrap';
import ProjectForm from './ProjectForm';


const NewProject = () => {

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div >
              <div className='d-flex justify-content-center align-items-center m-5'>
                        <Button color='warning' >
                            Project Allocation
                        </Button>
                    </div>
            {
                !isEditing && (
                    <div className='d-flex justify-content-center align-items-center m-5'>
                        <Button color='primary' onClick={startEditingHandler}>
                            Add New Project
                        </Button>
                    </div>
                )}
               
            {
                isEditing && (
                    <ProjectForm onCancel={stopEditingHandler} />
                )
            }

        </div>
    )
}

export default NewProject;

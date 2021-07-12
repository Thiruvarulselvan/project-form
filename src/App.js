import React, { useState, useEffect } from 'react';
import ProjectMaster from './Components/ProjectMaster';
import ProjectForm from './Components/ProjectForm';
import axios from 'axios'

// import SignupForm from './Components/Test'

function App() {

  const [project, setProject] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://35.244.41.151:3210/project_master");
      console.log(response)
      setProject(response.data)
    }
    fetchData();
  }, []);

  const submitHandler = (enteredData) => {
    setProject((prevProject) => {
      return [enteredData, ...prevProject];
    })
  }

  return (
    <div >
      {/* <SignupForm/> */}
      <ProjectForm onSubmitData={submitHandler} />
      <ProjectMaster projects={project} />

    </div>
  );
}

export default App;

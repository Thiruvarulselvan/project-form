import axios from 'axios'
import React, { useState, useEffect } from 'react';
// import ProjectForm from './Components/ProjectForm';
import ProjectMaster from './Components/ProjectMaster';
// import ProjectTable from './Components/ProjectTable'
import NewProject from './Components/NewProject';


// import ProjectDetails from './Components/ProjectDetails'
// import SignupForm from './Components/Test'

function App() {

  const [project, setProject] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://35.244.41.151:3210/project_master");
      console.log('Response', response)
      setProject(response.data)
    }
    fetchData();
  }, []);

  // const submitHandler = (enteredData) => {
  //   setProject((prevProject) => {
  //     return [enteredData, ...prevProject];
  //   })
  // }

  

  return (
    <div >
      <NewProject />
      <ProjectMaster projects={project} />
      {/* <ProjectForm onSubmitData={submitHandler} /> */}

      {/* <SignupForm/> */}
      {/* <ProjectTable projects={project}/> */}
      {/* <ProjectDetails/> */}
    </div>
  );
}

export default App;

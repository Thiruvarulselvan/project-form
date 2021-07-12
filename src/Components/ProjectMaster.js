import React, { useEffect, useState } from 'react';
import './ProjectMaster.css'
import { Table } from 'reactstrap';

const ProjectMaster = (props) => {

    const projectData = props.projects;
    console.log('received', projectData)

    // const [projects, setProjects] = useState([]);
    // console.log('props', props.projectData)

    // const received = props.projectData;
    // console.log('received', received)

    // useEffect(() => {
    //     setProjects(received);
    // }
    // )

    // console.log('projects', projects)


    return (
        <div class='p-1'>
            <h1 class='mx-auto p-3' style={{ width: '360px' }}> PROJECT MASTER</h1>
            <div class='p-3'>
                <Table hover bordered>
                    < thead >
                        <tr>
                            <th class='d-flex justify-content-center align-items-center'>ProjectName </th>
                            <th>Client</th>
                            <th>ClientCountry</th>
                            <th>ContractType</th>
                            <th>StartDate</th>
                            <th>EndDate</th>
                            <th>IsActive</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    {
                      projectData === []
                            ?
                            null
                            :
                            projectData.map((item, index) =>
                            (
                                <tbody>
                                    <tr key={item.index}>
                                        <td class='d-flex justify-content-center align-items-center'> {item.ProjectName}</td>
                                        <td > {item.Client}</td>
                                        <td > {item.ClientCountry}</td>
                                        <td > {item.ContractType}</td>
                                        <td > {item.StartDate}</td>
                                        <td > {item.EndDate}</td>
                                        <td > {item.IsActive}</td>
                                        <td > {item.Status}</td>
                                    </tr>
                                </tbody>
                            )
                            )
                    }
                </Table>
            </div>
        </div >

    );
}

export default ProjectMaster;

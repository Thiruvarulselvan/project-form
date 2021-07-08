import React, { useEffect, useState } from 'react';
import './ProjectMaster.css'
import { Table } from 'reactstrap';
import axios from 'axios'

const ProjectMaster = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://35.244.41.151:3210/project_master");
            console.log(response)
            setProjects(response.data)
        }
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 > PROJECT MASTER</h1>

            <Table bordered >
                < thead >
                    <tr>
                        <th>ProjectName </th>
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
                    projects === []
                        ?
                        null
                        :
                        projects.map((item) => {
                            return (
                                <tbody>
                                    <tr key={item.ProjectCode}>
                                        <td > {item.ProjectName}</td>
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
                        })
                }
            </Table>
        </div >

    );
}

export default ProjectMaster;

import React, { useState } from 'react';
import MaterialTable from "material-table";
import moment from 'moment';
import EditForm from "./EditForm"
import DeleteForm from "./DeleteForm";



const ProjectMaster = (props) => {

    const [selectedRow, setSelectedRow] = useState(null);
    const [Editing, setEditing] = useState(false)
    const [Delete, setDelete] = useState(false)
    const [Values, setValues] = useState({});

    // const [page, setPage] = useState({})


    const projectData = props.projects;
    const temp = projectData.map((e) => {
        return ({ ...e, StartDate: moment(e.StartDate).format("DD-MM-YYYY"), EndDate: moment(e.EndDate).format("DD-MM-YYYY") })
    })

    console.log(temp);

    const handleSelection = (Olddata, index) => {
        setValues(Olddata);
        //   Olddata
        (index === "Editor") ? handleEditing() : handleDelete()
    }
    const handleEditing = () => {
        setEditing(!Editing)
    }
    const handleDelete = () => {
        setDelete(!Delete)
    }

    const Columns = [
        { title: "Project Name", field: "ProjectName" },
        { title: "Client", field: "Client" },
        { title: "Client Country", field: "ClientCountry" },
        { title: "Contract Type", field: "ContractType" },
        { title: "Start Date", field: "StartDate" },
        { title: "End Date", field: "EndDate" },
        { title: "Is Active ", field: "IsActive" },
        { title: "Status", field: "Status" }
    ]

    return (
        <div class='p-1'>
            <div class='p-3'>
                <MaterialTable
                    title={"Project Details"}
                    columns={Columns.map((e) => e)}
                    data={temp === "" ? "" : temp.map((e) => e)}
                    options={{
                        actionsColumnIndex: 0,
                        exportAllData: true,
                        exportButton: true,
                        columnResizable: true,
                        filtering: false,
                        paging: true,
                        pageSizeOptions: [5, 10, 15, 20],

                        rowStyle: rowData => ({
                            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                        }),
                        headerStyle: {
                            backgroundColor: '#01579b',
                            color: 'white',
                            textAlign: "center",
                            fontSize: "18px",
                            padding: "10px"
                        },
                        cellStyle: {
                            textAlign: "center",
                            fontSize: "16px",
                            padding: "10px",
                        }

                    }}
                    onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                    actions={[
                        {
                            icon: 'edit',
                            tooltip: 'Editing',
                            onClick: (event, rowData) => handleSelection(rowData, "Editor")
                        },
                        {
                            icon: 'delete',
                            tooltip: 'Deleting',
                            onClick: (event, rowData) => handleSelection(rowData, "Delete")
                        }
                    ]}

                />

                <EditForm FormOpen={Editing} setFormOpen={setEditing} setValues={setValues} Values={Values} />
                <DeleteForm FormOpen={Delete} setFormOpen={setDelete} Values={Values} />


            </div>
        </div >

    );
}

export default ProjectMaster;

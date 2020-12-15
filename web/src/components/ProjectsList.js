import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import AddProjectModal from "./AddProjectModal"


export default function ProjectsList() {
    const [projects, updateProjects] = useState([])
    const [show, setShow] = useState(false)
    const openModal = () => setShow(true)
    const closeModal = () => setShow(false)

    useEffect(() => {
        async function fetchProjects() {
            const response = await fetch("/api/v1/projects")
            const json = await response.json()
            updateProjects(json.data)
        }
        fetchProjects()
    }, [])
    return (
        <div>
            <TableTitle>
                <h3>Projects</h3>
                <button onClick={openModal}>Add A Project</button>
            </TableTitle>
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th># of Tickets</th>

                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr>
                            <td>{project.title}</td>
                            <td>{project.description}</td>
                            <td>{project.tickets.length}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
            {show && <AddProjectModal closeModal={closeModal} show={show} />}

        </div>
    )
}


const Table = styled.table`
grid-area: projectarea;
background: white;
border-collapse: collapse;
width: calc(100vw - 220px);

thead th {
    padding: 1rem;
    text-align: left;
    border-bottom: solid 1px #F8F8F8;
    background: #E0E5E9;
}
td{
  padding: 1rem;
  text-align: left;
  border-bottom: solid 1px #EEE;
}
tr{
    height: 2rem;
}

`

const TableTitle = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
border-bottom: solid 1px #ccc;
h3 {
    padding-top: .25rem; 
}
button {
      padding: .5rem;
}
`
import React, { useState } from 'react'
import ReactDOM from "react-dom"
import styled from "styled-components"


export default function CreateTicketModal(props) {
    // inputs needed
    // title 
    // description 
    // drop down ticket type
    // drop down ticket status
    // drop down ticket priority
    // user name
    const [state, setState] = useState({
        title: "",
        description: "",
        ticketType: "",
        ticketPriority: "",
        user: ""
    })
    function handleChange(event) {
        console.log(event.target)
        // console.log(event.target.value)
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
        // event.preventDefault()
    }

    function handleSubmit() {
        console.log()
    }

    const { closeModal } = props
    const modal = (
        <>
            <Overlay />
            <ModalWrapper >
                <button className="closeBtn" onClick={closeModal}>X</button>
                <h1>Create A Ticket</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        name="title"
                        type="text"
                        value={state.title}
                        onChange={handleChange}
                        placeholder="Title"
                    />

                    <input
                        name="description"
                        type="text"
                        value={state.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                    <label>
                        Ticket Priority
                        <select
                            name="ticketPriority"
                            value={state.ticketPriority}
                            onChange={handleChange}>
                            <option value="">-</option>
                            <option value="lowest">Lowest</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="highest">Highest</option>
                        </select>
                    </label>
                    <label>
                        Ticket Type
                        <select
                            name="ticketType"
                            value={state.ticketType}
                            onChange={handleChange}>
                            <option value="">-</option>
                            <option value="bug">Bug</option>
                            <option value="new feature">New Feature</option>
                            <option value="improvement">Improvement</option>
                            <option value="task">Task</option>
                            <option value="testing">Testing</option>
                        </select>
                    </label>
                    <button onClick={handleSubmit} className="submitBtn">Submit</button>
                </form>


            </ModalWrapper>
        </>
    )
    return ReactDOM.createPortal(modal, document.getElementById("portal"))
}

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, .6);
-webkit-backdrop-filter: blur(2px);
backdrop-filter: blur(2px);
 
`
const ModalWrapper = styled.div` 
position: absolute;
top: 10%;
left: 25%;
width: 30rem;
height: 20rem;
background:#128DEB;
border-radius: 10px;

form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    text-align: center;
    padding:  .5rem 0;
    margin-top: .5rem;
    color: white;
}
label{
    color: white;
}

input[type=text]{
    width: 50%;
    padding: .5rem;
    margin: .25rem;
}

select{
    padding: .5rem;
    margin: .25rem;
}

.submitBtn{
    width: 8rem;
    padding: .5rem;
    margin: .5rem;
}
.closeBtn{
    position: absolute;
    top: 10px;
    right: 15px;
    background:#128DEB;
    color: white;
}
`
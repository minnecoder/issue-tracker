import React from 'react'
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




    const { closeModal } = props
    const modal = (
        <>
            <Overlay />
            <ModalWrapper >
                <button onClick={closeModal}>X</button>
                <h1>Create A Ticket</h1>
                <input type="text" name="" id="" placeholder="Title" />


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
width: 50rem;
height: 30rem;
background:#128DEB;
border-radius: 10px;
`
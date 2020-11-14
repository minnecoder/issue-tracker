import React from 'react'
import TicketInfo from './TicketInfo'
import TicketNotes from "./TicketNotes"
import styled from "styled-components"

export default function TicketDetail() {
    return (
        <Main>
            <TicketInfo />
            <TicketNotes />
            <TicketComment>
                <textarea name="" id="" cols="30" rows="10" />
                <button type="submit">Submit</button>
            </TicketComment>
        </Main>
    )
}


const Main = styled.div`
background: white;
width: 100%;
grid-area: ticketarea;

`


const TicketComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin: 0 auto ;

input[type=text] {
  
  height: 5rem;
  border: solid 1px black;
}

textarea {
  border: solid 1px black;
}

button {
margin-top: .5rem;
padding: .5rem;
width: 6rem;

}
`;
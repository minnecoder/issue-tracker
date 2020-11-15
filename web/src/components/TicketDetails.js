import React from 'react'
// import TicketInfo from './TicketInfo'
import TicketNotes from "./TicketNotes"
import styled from "styled-components"

export default function TicketDetail() {
  return (
    <Main>
      <TicketInfo>
        <h2>{ticket.title}</h2>
        <Info>
          <div>
            <InfoItem>
              <p>Project</p>
              <p>{ticket.project}</p>
            </InfoItem>
            <InfoItem>
              <p>Assigned Dev</p>
              <p>{ticket.assignedDev}</p>
            </InfoItem>
            <InfoItem>
              <p>Created By</p>
              <p>{ticket.submitter}</p>
            </InfoItem>

          </div>
          <div>
            <InfoItem>
              <p>Type</p>
              <p>{ticket.ticketType}</p>
            </InfoItem>
            <InfoItem>
              <p>Status</p>
              <p>{ticket.ticketStatus}</p>
            </InfoItem>
            <InfoItem>
              <p>Priority</p>
              <p>{ticket.ticketPriority}</p>
            </InfoItem>
          </div>
        </Info>
        <Description>{ticket.description}</Description>
      </TicketInfo>
      <TicketNotes />
      <TicketComment>
        <textarea name="" id="" cols="30" rows="10" />
        <button type="submit">Submit</button>
      </TicketComment>
    </Main>
  )
}

const TicketInfo = styled.div` 
margin: .5rem;
h2{
padding: 0.5rem 0;
}
`;

const Description = styled.p` 
padding-top: .5rem;
`;

const Info = styled.div`
display: flex;
justify-content: space-between;
border-bottom: solid 1px #ddd;
`;

const InfoItem = styled.section`
margin: .5rem 0;
 p:nth-child(1) {
   text-transform: uppercase;
   color: #ABB1B6;
   font-weight: 500;
   padding-bottom: .25rem;
 }
`;


const Main = styled.div`
background: white;

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
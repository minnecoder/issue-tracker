import React from 'react'
import TicketNotes from "./TicketNotes"
import styled from "styled-components"
import { FaEdit } from 'react-icons/fa';

export default function TicketDetails({ data, index }) {

  return (
    <Main>
      <TicketInfo key={index}>
        <h2>{data.title}</h2>
        <FaEdit />
        <Info>
          <div>
            <InfoItem>
              <p>Assigned Dev</p>
              <p>{data.assignedDev}</p>
            </InfoItem>
            <InfoItem>
              <p>Created By</p>
              <p>{data.submitter}</p>
            </InfoItem>

          </div>
          <div>
            <InfoItem>
              <p>Type</p>
              <p>{data.ticketType}</p>
            </InfoItem>
            <InfoItem>
              <p>Status</p>
              <p>{data.ticketStatus}</p>
            </InfoItem>
            <InfoItem>
              <p>Priority</p>
              <p>{data.ticketPriority}</p>
            </InfoItem>
          </div>
        </Info>
        <Description>{data.description}</Description>
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
margin: 0 1rem;
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
border-left: 1px solid #ccc;
`


const TicketComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin: 0 1rem ;

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
background: #EB7012;
color: white;
border-radius: 5px;
}
`;
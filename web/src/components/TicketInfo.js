import React from 'react';
import styled from 'styled-components';

export default function TicketInfo() {
  const ticket = {
    project: 'Sample Project 1',
    title: 'Test ticket #1',
    description: 'This is just a test ticket',
    assignedDev: 'John Doe',
    submitter: 'John Smith',
    ticketPriority: 'Medium',
    ticketStatus: 'Open',
    ticketType: 'Bug',
  };
  return (
    <Main>
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
    </Main>
  );
}

const Main = styled.div` 
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

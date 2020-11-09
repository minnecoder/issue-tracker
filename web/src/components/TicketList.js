import React from 'react';
import styled from 'styled-components';

export default function TicketList() {
  const tickets = [{
    project: 'Sample Project 1',
    title: 'Test ticket #1',
    description: 'This is just a test ticket',
    assignedDev: 'John Doe',
    submitter: 'John Smith',
    ticketPriority: 'Medium',
    ticketStatus: 'Open',
    ticketType: 'Bug',
  },
  {
    project: 'Sample Project 2',
    title: 'Test ticket #2',
    description: 'This is just a test ticket',
    assignedDev: 'John Doe',
    submitter: 'John Smith',
    ticketPriority: 'Medium',
    ticketStatus: 'Open',
    ticketType: 'Bug',
  },
  {
    project: 'Sample Project 2',
    title: 'Test ticket #3',
    description: 'This is just a test ticket',
    assignedDev: 'John Doe',
    submitter: 'John Smith',
    ticketPriority: 'Medium',
    ticketStatus: 'Open',
    ticketType: 'Bug',
  },
  ];
  return (
    <div>
      {tickets.map((ticket) => (
        <ListInfo>
          <Left>
            <p>{ticket.project}</p>
            <p>{ticket.title}</p>
            <p>{ticket.description}</p>
          </Left>
          <Right>
            <p>{ticket.ticketType}</p>
            <p>{ticket.ticketStatus}</p>
            <p>{ticket.ticketPriority}</p>
          </Right>
        </ListInfo>
      ))}
    </div>
  );
}

const ListInfo = styled.div` 
display: flex;
justify-content: space-between;
width: 100%;
padding: .5rem .75rem;
border-bottom: solid 1px #ccc;
`;

const Left = styled.div`
display: flex;
flex: 2;
flex-direction: column;
${'' /* width: 50%; */}


p {
    padding: .25rem;
}
`;

const Right = styled.div`
display: flex;
flex: 1;
flex-direction: column;
align-items: end;
${'' /* width: 50%; */}
width: 500px;

p {
    padding: .25rem;
}
`;

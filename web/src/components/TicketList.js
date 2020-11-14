import React from 'react';
import styled from 'styled-components';
import TicketDetail from "./TicketDetail"

export default function TicketList() {
  const tickets = [{
    id: 1,
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
    id: 2,
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
    id: 3,
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
    <Wrapper>
      < div >
        <TableTitle>
          <h3>Tickets</h3>
          <button type="submit">Create A Ticket</button>
        </TableTitle>
        {
          tickets.map((ticket) => (
            <ListInfo key={ticket.id} onClick={() => console.log(ticket.id)}>
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
          ))
        }
      </div>
      <TicketDetail />
    </Wrapper>
  );
}

const Wrapper = styled.div` 
display: flex;
background: white;
grid-area: ticketarea;
height: calc(100vh - 4.25rem);
`

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

p {
padding: .25rem;
}
`;

const Right = styled.div`
display: flex;
flex: 1;
flex-direction: column;
align-items: end;
width: 500px;

p {
padding: .25rem;
}
`;

const TableTitle = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 1rem;
border-bottom: solid 1px #ccc;

button {
      padding: .5rem;
}
`;
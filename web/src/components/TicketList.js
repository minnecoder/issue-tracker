import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TicketDetail from "./TicketDetail"

export default function TicketList() {
  const [tickets, updateTickets] = useState([])
  const [detailTicket, updateDetailTicket] = useState("0")
  useEffect(() => {
    async function fetchTickets() {
      const response = await fetch("/api/v1/ticket")
      const json = await response.json()
      // console.log(json.data)
      updateTickets(json.data)
    }
    fetchTickets()
  }, [])

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
              {console.log(detailTicket)}
              <Left>
                <p>{ticket.project.title}</p>
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
      {console.log(tickets)}
      <TicketDetail key={tickets.id} data={tickets[0]} />
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
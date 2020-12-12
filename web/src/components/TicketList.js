import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TicketDetails from "./TicketDetails"

export default function TicketList() {
    const [tickets, updateTickets] = useState([])
    const [ticketIndex, updateticketIndex] = useState("0")
    useEffect(() => {
        async function fetchTickets() {
            const response = await fetch("/api/v1/tickets")
            const json = await response.json()
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
                    tickets.map((ticket, index) => (
                        <ListInfo key={ticket._id} onClick={() => updateticketIndex(index)}>
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
            { !!tickets.length && <TicketDetails key={tickets._id} data={tickets[ticketIndex]} />}

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
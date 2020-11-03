import React from 'react'
import styled from "styled-components"

export default function TicketDetails() {

    const TicketItems = [
        {
            user: "Jane Smith",
            propertyChanged: "Ticket Status",
            oldValue: "Open",
            newValue: "Resolved",
            createdAt: "10/2/2020"
        },
        {
            commenter: "John Doe",
            comment: "This one thing would be a great idea",
            createdAt: "10/1/2020"
        },
        
    ]
    return (
        <div>
            {TicketItems.map((ticketItem) => {
                if("comment" in ticketItem) {
                    return (
                         <TicketComment>
                         <h4>
                         {ticketItem.commenter} 
                         </h4>
                         <div>
                         Added on {ticketItem.createdAt}
                         </div> 
                         <p> 
                         {ticketItem.comment}
                         </p>
                         </TicketComment>
                        )
                }
                if("oldValue" in ticketItem) {
                    return (
                <TicketChange>
                    <div> 
                    <span>{ticketItem.user}</span>  changed <span> {ticketItem.propertyChanged}</span> from <span> {ticketItem.oldValue}</span> to <span> {ticketItem.newValue}</span>
                    </div>
                    <div>
                    {ticketItem.createdAt}
                    </div> 
                </TicketChange>
                    )
                }
            })}
        </div>
    )
}

const TicketChange = styled.div`
display: flex;
justify-content: space-between;
border-top: solid 1px #ccc;
border-bottom: solid 1px #ccc;
padding: .5rem;

span {
    font-weight: bold;
}
`

const TicketComment = styled.div`
display: flex;
flex-direction: column;
padding: .5rem;

div {
    padding-top: .25rem;
    font-size: 12px;
    color: gray;
}
p {
    padding-top: .75rem;
}
`
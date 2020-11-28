import React from 'react'
import styled from "styled-components"

export default function TicketDetail({ key, data }) {
  // const ticket = {
  //   project: 'Sample Project 1',
  //   title: 'Test ticket #1',
  //   description: 'This is just a test ticket',
  //   assignedDev: 'John Doe',
  //   submitter: 'John Smith',
  //   ticketPriority: 'Medium',
  //   ticketStatus: 'Open',
  //   ticketType: 'Bug',
  // };

  // const TicketItems = [
  //   {
  //     user: 'Jane Smith',
  //     propertyChanged: 'Ticket Status',
  //     oldValue: 'Open',
  //     newValue: 'Resolved',
  //     createdAt: '11/2/2020',
  //   },
  //   {
  //     commenter: 'John Doe',
  //     comment: 'This one thing would be a great idea',
  //     createdAt: '4/1/2020',
  //   },

  // ];
  console.log(data)
  function DateDiff(oldDate) {
    const date1 = new Date(oldDate).getTime();
    const date2 = new Date();
    const results = Math.floor((date2 - date1) / (60000 * 60));
    // 2 or more years
    if (results > 17520) {
      return `${Math.floor(results / 8759)} years ago`;
    }
    // 1 year
    if (results > 8759 && results < 17519) {
      return `${Math.floor(results / 8759)} year ago`;
    }
    // 2 to 11 months
    if (results > 1440) {
      return `${Math.floor(results / 696)} months ago`;
    }
    // 1 month
    if (results > 719 && results < 1439) {
      return `${Math.floor(results / 696)} month ago`;
    }
    // 2 to 30 days
    if (results > 48) {
      return `${Math.floor(results / 24)} days ago`;
    }
    // 1 day
    if (results > 24 && results < 47) {
      return `${Math.floor(results / 24)} day ago`;
    }
    // Less than a day
    return results;
  }
  return (
    <Main>
      <TicketInfo>
        {/* <h2>{tickets.title}</h2> */}
        <Info>
          <div>
            <InfoItem>
              <p>Project</p>
              {/* <p>{tickets.data.project.title}</p> */}
            </InfoItem>
            <InfoItem>
              <p>Assigned Dev</p>
              {/* <p>{tickets.assignedDev}</p> */}
            </InfoItem>
            <InfoItem>
              <p>Created By</p>
              {/* <p>{tickets.submitter}</p> */}
            </InfoItem>

          </div>
          <div>
            <InfoItem>
              <p>Type</p>
              {/* <p>{tickets.ticketType}</p> */}
            </InfoItem>
            <InfoItem>
              <p>Status</p>
              {/* <p>{tickets.ticketStatus}</p> */}
            </InfoItem>
            <InfoItem>
              <p>Priority</p>
              {/* <p>{tickets.ticketPriority}</p> */}
            </InfoItem>
          </div>
        </Info>
        {/* <Description>{tickets.description}</Description> */}
      </TicketInfo>
      <div>
        {/* {tickets
          .map((ticket) => {
            if ('comment' in ticketItem) {
              return (
                <TicketComment>
                  <div>
                    {ticket.commenter}
                    {' '}
                  commented
                  {' '}
                    <span>

                      {DateDiff(
                        ticket.createdAt,
                      )}
                    </span>
                  </div>
                  <p>
                    {ticketItem.comment}
                  </p>
                </TicketComment>
              );
            }
            if ('oldValue' in ticketItem) {
              return (
                <TicketChange>
                  <p>
                    {ticketItem.user}
                    {' '}
                  changed
                  {' '}
                    {ticketItem.propertyChanged}
                    {' '}
                  from
                  {' '}
                    {ticketItem.oldValue}
                    {' '}
                  to
                  {' '}
                    {ticketItem.newValue}
                    <span>
                      {DateDiff(
                        ticketItem.createdAt,
                      )}
                    </span>
                  </p>

                </TicketChange>
              );
            }
            return null;
          })} */}
      </div>
      <TicketCommentBox>
        <textarea name="" id="" cols="30" rows="10" />
        <button type="submit">Submit</button>
      </TicketCommentBox>
    </Main>
  )
}


const Main = styled.div`
background: white;
width: 100%;
grid-area: ticketarea;

`
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


const TicketCommentBox = styled.div`
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

const TicketChange = styled.div`
display: flex;
justify-content: space-between;
background: #EFF3F6;
margin: .5rem;
padding: .5rem;

span {
  padding-top: .25rem;
  padding-left: .25rem;
    font-size: 12px;
    color: #B2B9BE; 
}
`;

const TicketComment = styled.div`
display: flex;
flex-direction: column;
padding: .5rem;

div {

    padding: .5rem;
    background: #EFF3F6;
}
span {
  padding-top: .25rem;
    font-size: 12px;
    color: #B2B9BE; 
}
p {
    margin-top: .25rem;
    padding: .75rem;
    border-left: solid 1px #ccc;
}
`;
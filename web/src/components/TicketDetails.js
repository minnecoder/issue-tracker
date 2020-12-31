import React from 'react'
import TicketNotes from "./TicketNotes"
import styled from "styled-components"
import { FaEdit } from 'react-icons/fa';

export default function TicketDetails({ data, index }) {

  return (
    <Wrapper>
      <div className="ticketInfo" key={index}>
        <div className="ticketTitle">
          <h2>{data.title}</h2>
          <span>
            <FaEdit style={{ marginTop: ".25rem" }} />
          Edit
          </span>
        </div>
        <div className="info">
          <div>
            <section className="infoItem">
              <p>Assigned To</p>
              <p>{data.assignedDev}</p>
            </section>
            <section className="infoItem">
              <p>Created By</p>
              <p>{data.submitter}</p>
            </section>

          </div>
          <div>
            <section className="infoItem">
              <p>Type</p>
              <p>{data.ticketType}</p>
            </section>
            <section className="infoItem">
              <p>Status</p>
              <p>{data.ticketStatus}</p>
            </section>
            <section className="infoItem">
              <p>Priority</p>
              <p>{data.ticketPriority}</p>
            </section>
          </div>
        </div>
        <p className="description">{data.description}</p>
      </div>
      <TicketNotes />
      <div className="ticketComment">
        <textarea name="" id="" cols="30" rows="10" />
        <button type="submit">Submit</button>
      </div>
    </Wrapper>)
}



const Wrapper = styled.div`
background: white;
border-left: 1px solid #ccc;

.ticketTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2{
    margin-left: .25rem;
  }
  span{
    
    margin-right: 2rem; 
    padding: .5rem;
    color: white;
    background: #EB7012;
    border-radius: 5px;
  }
}

.description{
  padding-top: .5rem;
}
.infoItem{
  margin: .5rem 0;
 p:nth-child(1) {
   text-transform: uppercase;
   color: #ABB1B6;
   font-weight: 500;
   padding-bottom: .25rem;
 }
}
.info{
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #ddd;
  margin: 0 1rem;
}
.ticketInfo{
  margin: .5rem;
  h2{
  padding: 0.5rem 0;
  }
}

.ticketComment {
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
}
`
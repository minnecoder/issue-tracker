import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export default function Topbar() {
  return (
    <Main>
      <Nav>
        <Left>
          <h3>Issue Tracker</h3>
          <SearchBar>
            <FaSearch />
            <input type="search" name="search" id="search" placeholder="Search..." />
          </SearchBar>
        </Left>
        <Right>
          <li>Search</li>
          <li>Notifications</li>
          <li>User</li>
        </Right>
      </Nav>
    </Main>
  );
}

const Main = styled.div`
width: 100%;
height: 4rem;

`;

const Nav = styled.div`
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
display: flex;
align-items: center;

h3{
    padding: 0 2rem; 
}
`;

const Right = styled.ul`
display: flex;
align-items: center;
margin-right: 2rem;

li {
    list-style-type: none;
    padding: 0 1rem;
}
`;

const SearchBar = styled.div`
margin-left: 2rem;
display: inline-flex;
background: white;
overflow: hidden;
input {
    ${'' /* padding-left: 2rem; */}
   border-top-style: hidden;
   border-left-style: hidden;
   border-right-style: hidden;
   border-bottom-style: hidden;
   width: 15rem;
}
input:focus {
    outline: none;
}
`;

import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <Main>
      <Nav>
        <Left>
          <h3>Issue Tracker</h3>
          <SearchBar>
            <FaSearch style={{ paddingRight: '.25rem' }} />
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
grid-area: header;
height: 4rem;
border-bottom: solid 1px #ddd;
background: white;
`;

const Nav = styled.div`
display: flex;
justify-content: space-between;
padding-top: 1.5rem;
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
  padding: 0 1rem;
}
`;

const SearchBar = styled.div`
margin-left: 2rem;
display: inline-flex;
background: white;
overflow: hidden;
input {
  border-top-style: hidden;
  border-left-style: hidden;
  border-right-style: hidden;
  border-bottom-style: hidden;
  width: 15rem;
}
input: focus {
  outline: none;
}
`;

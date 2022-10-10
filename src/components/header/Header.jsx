import React from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { Routes, Route, NavLink } from 'react-router-dom';
import css from './header.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  font-size: 20px;
  font-weight: 700;
  margin: 5px;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;

const headerConfig = [
  { name: 'Home', url: '/' },
  { name: 'Movies', url: 'movies' },
];

export default function Header() {
  return (
    <nav>
      <ul className={css.navigation}>
        {headerConfig.map(({ name, url }) => (
          <li key={name}>
            <StyledLink to={url} end>
              {name}
            </StyledLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

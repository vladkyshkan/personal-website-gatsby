import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { theme } from './theme';

const StyledLink = styled(props => <Link {...props} />)`
  &,
  &:hover,
  &:active,
  &:visited,
  &:focus {
    text-decoration: none;
    color: ${theme.accent};
  }
`;

export default StyledLink;

import * as React from 'react';
import styled from 'styled-components';
import Constrainer from '../Constrainer';

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <StyledHeader>
        <Constrainer>
          Header
        </Constrainer>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.header`
  background-color: #fefefe;
  color: #333;
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;
import * as React from 'react';
import styled from 'styled-components';

interface ContentProps {
  children?: {};
}

const Content = ({children}: ContentProps) => {
  return (
    <StyledContent>
      {children}
    </StyledContent>
  );
};

const StyledContent = styled.div`
  
`;

export default Content;
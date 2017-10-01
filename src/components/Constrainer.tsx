import * as React from 'react';
import styled from 'styled-components';
import { rem, baseWidth } from '../styleConstants';

interface ConstrainerProps {
  children?: {};
}

const Constrainer = (props: ConstrainerProps) => {
  return (
    <StyledConstrainer>
      {props.children}
    </StyledConstrainer>
  );
};

const StyledConstrainer = styled.div`
  max-width: ${rem(baseWidth)};
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
`;

export default Constrainer;
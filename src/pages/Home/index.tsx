import * as React from 'react';
import styled from 'styled-components';
import Content from '../Content';
import Constrainer from '../../components/Constrainer';
import BookingForm from '../../components/BookingForm';

export class Home extends React.Component<{}, {}> {
  render() {
    return (
      <StyledContent>
        <Constrainer>
          <BookingForm />
        </Constrainer>
      </StyledContent>
    );
  }
}

const StyledContent = styled(Content)`
  padding: 2rem;
`;
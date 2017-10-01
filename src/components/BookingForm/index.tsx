import * as React from 'react';
import styled from 'styled-components';
import Form from '../Form';

class BookingForm extends React.Component<{}, {}> {
  render() {
    return (
      <StyledBookingForm>
        <Form>
          <header>
            <h1>Reservér rom</h1>
          </header>
        </Form>
      </StyledBookingForm>
    );
  }
}

const StyledBookingForm = styled.div`
  
`;

export default BookingForm;
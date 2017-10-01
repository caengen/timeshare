import * as React from 'react';
import styled from 'styled-components';

interface FormProps {
  children?: {};
}

const Form = ({children}: FormProps) => {
  return (
    <StyledForm>
      {children}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 30rem;
  border: 1px solid #eee;
`;

export default Form;
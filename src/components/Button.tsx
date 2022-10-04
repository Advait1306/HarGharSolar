/* Node modules */
import React from 'react'
import styled from 'styled-components'

/* Constants */
import {BRAND, secondary} from "../constants/colors";

interface Props {
    text: string,
    onClick?: Function
}

const ButtonContainer = styled.div`
  background: ${BRAND.black};
  color: ${secondary};
  width: 200px;
  height: 50px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.02em;
`

const Button: React.FC<Props> = ({text}) => {
    return <ButtonContainer>
        {text}
    </ButtonContainer>
}

export default Button
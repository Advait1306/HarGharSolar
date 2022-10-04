/* Node modules */
import React from 'react'
import styled from 'styled-components'

/* Constants */
import {secondary} from "../constants/colors";

const CardContainer = styled.div`
  width: 250px;
  height: 300px;
  background: ${secondary};
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
  border: 1px solid #000000;
  border-radius: 24px;
  justify-content: space-between;
`

const Title = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: -0.04em;
  width: 50%;
`

const Description = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.04em;
  color: #494949;
`

interface Props {
    title: string,
    description: string,
    icon?: any
}

const Card: React.FC<Props> = ({title, description}) => {
    return <CardContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
    </CardContainer>
}

export default Card
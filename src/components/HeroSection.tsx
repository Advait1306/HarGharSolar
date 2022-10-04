/* Node modules */
import React from 'react'
import Link from "next/link";
import styled from 'styled-components'

/* Constants */
import {BRAND} from "../constants/colors"

/* Components */
import Button from '../components/Button'


const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 100px;
`

const HeroTitle = styled.span`
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 78px;
  letter-spacing: -0.04em;
  
`

const GreenHighlight = styled.span`
  color: ${BRAND.green};
  text-decoration-line: underline;
`

const YellowSun = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  background: #EBF573;
  filter: blur(20px);
`

const LeftContainer = styled.div`
  width: 60%;
  gap: 60px;
  display: flex;
  flex-direction: column;
`

const HeroSection: React.FC = () => {
    return <HeroContainer>
        <LeftContainer>
            <HeroTitle>Your own personalized <GreenHighlight>solar savings</GreenHighlight> estimator</HeroTitle>
            <Link href={'#calculator'}>
                <Button text={'calculate now'}/>
            </Link>
        </LeftContainer>
        <YellowSun/>
    </HeroContainer>
}

export default HeroSection

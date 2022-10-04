/* Node modules */
import styled from 'styled-components'

/* Types */
import type {NextPage} from 'next'

/* Constants */
import {background, BRAND} from "../src/constants/colors";
import {Creators, HowToUse} from "../src/constants/strings";

/* Components */
import TabBar from "../src/components/TabBar";
import {Space} from '../src/components/SharedComponents';
import HeroSection from "../src/components/HeroSection";
import Card from "../src/components/Card";

const Background = styled.div`
  background: ${background};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BodyContainer = styled.div`
  max-width: 1500px;
`

const Heading3 = styled.span`
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 45px;
  letter-spacing: -0.04em;
  color: #555555;
`

const ListContainer = styled.div`
  display: flex;
  gap: 16px;

`

const TitleListContainer = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const MapContainer = styled.div`
  margin: 0 100px;
  background: ${BRAND.gray};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
`

const Home: NextPage = () => {
    return (
        <Background>
            <BodyContainer>
                <TabBar/>
                <Space height={100}/>
                <HeroSection/>
                <Space height={100}/>
                <TitleListContainer>
                    <Heading3>How does it work?</Heading3>
                    <ListContainer>
                        {
                            HowToUse.map((howTo) => <Card title={howTo.title} description={howTo.description}/>)
                        }
                    </ListContainer>
                </TitleListContainer>
                <Space height={100}/>
                <MapContainer id={'calculator'}>
                    <iframe width="800" height="400" frameBorder="0"
                            src="https://www.bing.com/maps/embed?h=400&w=800&cp=19.045311194849788~72.88880168362527&lvl=18.71462685988622&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                            scrolling="no">
                    </iframe>
                </MapContainer>
                <Space height={100}/>
                <TitleListContainer>
                    <Heading3>Creators</Heading3>
                    <ListContainer>
                        {
                            Creators.map((creator) => <Card title={creator.name} description={""}/>)
                        }
                    </ListContainer>
                </TitleListContainer>
                <Space height={40}/>
            </BodyContainer>
        </Background>
    )
}

export default Home

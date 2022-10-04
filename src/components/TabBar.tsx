/* Node Modules */
import React from 'react'
import styled from 'styled-components'

import {ProjectName, TabBarItems} from "../constants/strings";

const TabBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px 100px;
`

const MenuItem = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`

const TabBar: React.FC = () => {
    return <TabBarContainer>
        <MenuItem>
            {ProjectName}
        </MenuItem>
        <Menu>
            {
                TabBarItems.map((tabBarItem, index) => {
                    return <div key={index.toString()}>
                        <MenuItem>
                        {tabBarItem.title}
                    </MenuItem>
                    </div>
                })
            }
        </Menu>
    </TabBarContainer>
}

export default TabBar
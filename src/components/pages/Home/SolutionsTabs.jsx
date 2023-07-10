import React from 'react'
import { TabList, Tabs, Tab, TabPanel } from 'react-tabs'
import './styles/tabs.scss'
import {FaFantasyFlightGames} from 'react-icons/fa'
import {MdGames} from 'react-icons/md'
import {SiRiotgames} from 'react-icons/si'

const SolutionsTabs = () => {
  return (
    <div className='solutions-tabs'>
        <h1 data-aos='fade-up'>Solutions</h1>
        <Tabs defaultIndex={1}>

            {/* buttons */}
            <TabList>
                <Tab disabled={true}><FaFantasyFlightGames /> Tab 1</Tab>
                <Tab><MdGames /> Tab 2</Tab>
                <Tab><SiRiotgames />Tab 3</Tab>
            </TabList>

            {/* contents */}
            <div className='panels-container'>
                <TabPanel>
                    <h1>Tab 1</h1>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </TabPanel>
                <TabPanel>
                    <h1>Tab 2</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </TabPanel>
                <TabPanel>
                    <h1>Tab 3</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                </TabPanel>
            </div>
            
        </Tabs>
    </div>
  )
}

export default SolutionsTabs
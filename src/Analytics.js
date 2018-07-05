import React, { Component } from 'react';
import { Slider, TabsContainer, Tabs, Tab, TextField, Button  } from 'react-md';
import ana1 from './ana_1.png';
import ana2 from './ana_2.png';
import ana3 from './ana_3.png';
export default class Analytics extends Component {
  render() {
    return (
      <div >
        <h2 >
          Applicant Analytics
        </h2>
       
        <TabsContainer panelClassName="md-grid" colored>
            <Tabs tabId="simple-tab" 
         contentContainerStyle={{background: '#FFF'}}>
              <Tab label="1. Define Skills Stack">
              <img src={ana1} alt="Search" />
              
              </Tab>
              <Tab label="2. Analytics Summary">
              
              <img src={ana2} alt="Summary" />

              </Tab>
              <Tab label="3. Details List">
                <img src={ana3} alt="Details" />
              </Tab>
            </Tabs>
          </TabsContainer>
      </div>
    );
  }
}

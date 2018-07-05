import React, { Component } from 'react';
import { Slider, TabsContainer, Tabs, Tab, TextField, Button  } from 'react-md';
import EditableTable from './EditableTable';



export default class Configuration extends Component {
  render() {
    return (
      <div >
        <h2 >
          Configuration
        </h2>
       
        <TabsContainer panelClassName="md-grid" colored>
            <Tabs tabId="simple-tab" 
         contentContainerStyle={{background: '#FFF'}}>
              <Tab label="1. Define Status">
              <TextField
                    id="floating-center-title"
                    label="Status Set Name"
                    lineDirection="center"
                    placeholder="Status Set Name"
                    className="md-cell md-cell--6"
                    style={{width: '200px'}}
                  />
                <TextField
                    id="floating-center-title"
                    label="Status Set Description"
                    lineDirection="center"
                    placeholder="Status Set Description"
                    className="md-cell md-cell--6"
                    style={{width: '200px'}}
                />  
               <Button raised primary iconClassName="fa fa-hand-spock-o"  style={{width: '150px'}}>Add Item</Button>
                <div class="row">

                </div>
              
              </Tab>
              <Tab label="2. Define Workflow">
              <TextField
                    id="floating-center-title"
                    label="Workflow Name"
                    lineDirection="center"
                    placeholder="Set Workflow name"
                    className="md-cell md-cell--6"
                    style={{width: '200px'}}
                  />

              <TextField
                    id="floating-center-title"
                    label="Status Set Name"
                    lineDirection="center"
                    placeholder="Status Set Name"
                    className="md-cell md-cell--6"
                    style={{width: '200px'}}
                  />
              <EditableTable />

              </Tab>
              <Tab label="3. Create Schedule">
                <TextField
                    id="floating-center-title"
                    label="Job Code"
                    lineDirection="center"
                    placeholder="Job Code"
                    className="md-cell md-cell--6"
                    style={{width: '200px'}}
                  />

              <TextField
                    id="floating-center-title"
                    label="Profile ID"
                    lineDirection="center"
                    placeholder="Profile ID"
                    className="md-cell md-cell--6"
                    style={{width: '200px'}}
                  />
              <EditableTable />
              </Tab>
            </Tabs>
          </TabsContainer>
      </div>
    );
  }
}

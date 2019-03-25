import React, { Component } from 'react';
import { Tabs } from 'antd';
import Example from '../../utils/Example';

const TabPane = Tabs.TabPane;

class CardType extends Component {
  render() { 
    return (
      <Example title="Card type tab">

        <Tabs type="card">
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </Example>
    );
  }
}
 
export default CardType;

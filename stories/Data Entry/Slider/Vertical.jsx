import React, { Component } from 'react';
import { Slider } from 'antd';

const style = {
  float: 'left',
  height: 180,
  marginLeft: 30,
};

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

class Vertical extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Vertical</h3>

        <div style={{ height: 200 }}>
          <div style={style}>
            <Slider vertical defaultValue={30} />
          </div>
          <div style={style}>
            <Slider vertical range step={10} defaultValue={[20, 50]} />
          </div>
          <div style={style}>
            <Slider vertical range marks={marks} defaultValue={[26, 37]} />
          </div>
        </div>
      </section>
    );
  }
}
 
export default Vertical;
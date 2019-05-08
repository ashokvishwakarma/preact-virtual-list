import { h, Component, render } from 'preact';

import VirtualList, { ItemStyle } from '../../src';
import './demo.css';

class Demo extends Component {
  renderItem = ({ style, index }: { style: ItemStyle; index: number }) => {
    return (
      <div className="Row" style={style} key={index}>
        Row #{index}
      </div>
    );
  };

  render() {
    return (
      <div className="Root">
        <VirtualList
          width="auto"
          height={400}
          itemCount={1000}
          renderItem={this.renderItem}
          itemSize={50}
          className="VirtualList"
          infiniteScroll={true}
        />
      </div>
    );
  }
}

render(<Demo />, document.body);

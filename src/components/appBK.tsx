import * as React from 'react';

interface HelloProps {
  name: string;
}
interface HelloState {
  name: string;
}

class appBK extends React.Component<HelloProps, HelloState> {
  constructor(props: HelloProps) {
    super(props);
    this.state = {
      name: props.name,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(name: string): void {
    this.setState({ name });
  }

  render(): JSX.Element {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleNameChange(e.target.value)}
        />
        <button onClick={e => this.handleNameChange('')}>Clear</button>
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default appBK;

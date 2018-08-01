import React from 'react'

export default class FocusRef extends React.Component {
    state = { text: '' };
  
    update = ({ target: { value }}) => this.setState({ text: value });
  
    setRef = (node) => this.node = node;
  
    submit = () => {
      if (this.state.text === 'hello') {
        this.setState({ success: true })
        this.node.style.background = 'none';
      } else {
        this.setState({ success: false })
        this.node.focus()
        this.node.style.background = 'palegoldenrod';
      }
    };
  
    render() {
      return <React.Fragment>
        <form>
          <input value={this.state.text} onSubmit={this.submit} ref={this.setRef} onChange={this.update} />
          <button type='submit' onClick={this.submit} >submit</button>
        </form>
        {this.state.success && <p>Success</p>}
      </React.Fragment>
    }
  }
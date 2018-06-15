// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import Error from './error-boundaries/error'
import Boundary from './error-boundaries/boundary'
import Portal from './portal'

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React's Latest Features
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Error boundaries
          </Heading>
          <Heading size={3} textColor="primary">
            Fragments
          </Heading>
          <Heading size={3} textColor="primary">
            Portals
          </Heading>
          <Heading size={3} textColor="primary">
            createRef/forwardRef
          </Heading>
          <Heading size={3} textColor="primary">
            New context API
          </Heading>
          <Heading size={3} textColor="primary">
            New lifecycle methods
          </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Error Boundaries
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="-100px auto" size={6} textColor="primary">Before Error boundaries</Heading>
          <CodePane
            textSize="20px"
            lang="js"
            source={`export default class Error extends React.Component {
    state = {
        open: false
    }

    open() {
        this.setState(state => ({ open: !state.open }))
    }

    render() {
        return this.state.open ? (
            { uh: 'oh' }
        ) : <div>
            <button onClick={this.open.bind(this)}>
                Create Error
            </button>
        </div>
    }
}`}
            margin="200px auto"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={3} margin="100px 0" textColor="primary">Before Error boundaries</Heading>
          <Error />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="-100px auto" size={6} textColor="primary">With Error boundaries</Heading>
          <CodePane
            textSize="20px"
            lang="js"
            source={`export default class Boundary extends React.Component {
    state = { hasError: false }
    
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true })
        // You can also log the error to an error reporting service
        console.error(error, info)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1 style={{ backgroundColor: 'red' }}>Uh oh.</h1>;
        }
        return this.props.children;
    }
}`}
            margin="200px auto"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <Heading size={3} margin="100px 0" textColor="primary">With Error boundaries</Heading>
          <Boundary>
            <Error />
          </Boundary>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Fragments
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading margin="-100px auto" size={6} textColor="secondary">Before Fragments</Heading>
          <CodePane
            textSize="20px"
            lang="js"
            source={`
const Columns = () => (
  <div>
    <td>John</td>
    <td>Cena</td>
  </div>
)

const Table = () => (
  <table>
    <tr>
      <Columns />
    </tr>
  </table>
}`}
            margin="200px auto"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading margin="-100px auto" size={6} textColor="primary">With Fragments</Heading>
          <CodePane
            textSize="20px"
            lang="js"
            source={`
const Columns = () => (
  <React.Fragment>
    <td>John</td>
    <td>Cena</td>
  </React.Fragment>
)

const Table = () => (
  <table>
    <tr>
      <Columns />
    </tr>
  </table>
}`}
            margin="200px auto"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading margin="-100px auto" size={6} textColor="primary">Fragment Shorthand</Heading>
          <CodePane
            textSize="20px"
            lang="js"
            source={`
const Columns = () => (
  <>
    <td>John</td>
    <td>Cena</td>
  </>
)

const Table = () => (
  <table>
    <tr>
      <Columns />
    </tr>
  </table>
}`}
            margin="200px auto"
          />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Portals
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading margin="-100px auto" size={6} textColor="primary">Portal</Heading>
          <CodePane
            textSize="20px"
            lang="js"
            source={`
  render() {
    // React does *not* create a new div. It renders the children into "domNode".
    // "domNode" is any valid DOM node, regardless of its location in the DOM.
    return ReactDOM.createPortal(
      this.props.children,
      domNode
    );
  }
}`}
            margin="200px 0 50px auto"
          />
          <Text textColor="primary">Portals let you render a component as a child, without rending them as a dom child.</Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading margin="140px auto" size={3} fit caps lineHeight={1} textColor="secondary">
            Portal Demo
          </Heading>
          <Portal />          
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading margin="-100px auto" size={6} textColor="primary">Render a portal anywhere in the React tree</Heading>
          <CodePane
            textSize="20px"
            lang="js"
            source={`
  render() {
    return <React.Fragment>
        {this.state.portalOpen && <Portal />}
        <button onClick={this.togglePortal}>
            Toggle Portal
        </button>
    </React.Fragment>
}`}
            margin="200px 0 50px auto"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading margin="-100px auto" size={6} textColor="primary">Attach a portal to a DOM element</Heading>
          <CodePane
            textSize="20px"
            lang="js"
            source={`const portalRoot = document.getElementById('portalRoot');

class Portal extends React.Component {
  constructor(props) {
      super(props);
      this.el = document.createElement('div');
  }

  componentDidMount() {
      portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
      portalRoot.removeChild(this.el);
  }

  render() {
      return ReactDOM.createPortal(
          <img src={require('./portal.png')} />,
          this.el
      );
  }
}`}
            margin="200px 0 50px auto"
          />
        </Slide>
      </Deck>
    );
  }
}

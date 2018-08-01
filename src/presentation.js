// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane,
  Link
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import Error from './error-boundaries/error'
import Boundary from './error-boundaries/boundary'
import Portal from './portal'
import FocusRef from './refs'

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
          <Heading size={1} lineHeight={1} textColor="secondary">
            React's Latest Features
          </Heading>
          <Link href="https://react-latest-features.surge.sh">https://react-latest-features.surge.sh</Link>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Austin Willis
          </Heading>
          <Heading size={3} lineHeight={1} textColor="secondary">
            1904labs
          </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React Fiber
          </Heading>
          <List>
            <ListItem>Complete rearchitecture of react</ListItem>
            <ListItem>Incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames</ListItem>
            <ListItem>Ability to pause, abort, or reuse work as new updates come in</ListItem>
            <ListItem>Ability to assign priority to different types of updates</ListItem>
          </List>
          <Link href="https://github.com/acdlite/react-fiber-architecture" target="_blank">https://github.com/acdlite/react-fiber-architecture</Link>
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
          <Heading size={3} textColor="primary">
            Upcoming Features
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
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Ref Changes
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">When to use refs?</Heading>
          <List>
            <ListItem>Managing focus, text selection, or media playback.</ListItem>
            <ListItem>Triggering imperative animations.</ListItem>
            <ListItem>Integrating with third-party DOM libraries.</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
            <Heading margin="-100px auto" size={6} textColor="primary">Old Refs</Heading>
            <CodePane
              textSize="20px"
              lang="js"
              source={`
    class FocusRef extends React.Component {
      state = { text: '' }

      update({ e: { target: { value }}}) { this.setState({ text: value }) }

      setRef(node) {
        this.node = node;
      }

      focus() {
        // validate
        this.node.focus();
      }
    
      render() {
        return <React.Fragment>
          <input ref={this.setRef} value={this.state.text} onChange={this.update} />
          <button onClick={this.focus} >focus</button>
        </React.Fragment>
      }
    }`}
                margin="200px 0 50px auto"
          />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading margin="140px auto" size={3} fit lineHeight={1} textColor="secondary">
            Ref Secret Word Demo
          </Heading>
          <FocusRef />          
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
            <Heading margin="-100px auto" size={6} textColor="primary">New Refs</Heading>
            <CodePane
              textSize="20px"
              lang="js"
              source={`
    class FocusRef extends React.Component {
      constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = { text: '' }
      }


      update({ e: { target: { value }}}) { this.setState({ text: value }) }

      focus() {
        // validate
        this.myRef.current.focus();
      }
    
      render() {
        return <React.Fragment>
          <input ref={this.myRef} value={this.state.text} onChange={this.update} />
          <button onClick={this.focus} >focus</button>
        </React.Fragment>
      }
    }`}
                margin="200px 0 50px auto"
          />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading margin="140px auto" size={3} fit caps lineHeight={1} textColor="secondary">
            New Context API
          </Heading>        
        </Slide>
        <Slide transition={['fade']}>
          <Heading margin="-100px auto" size={6} textColor="secondary">Legacy Context Api</Heading>
            <CodePane
              textSize="20px"
              lang="js"
              source={`class AdminUser extends React.Component {
  getChildContext() {
    return { isAdmin: this.state.adminUser };
  }

  render() {
    return this.props.children;
  }
}

AdminUser.childContextTypes = {
  isAdmin: PropTypes.boolean
};
`}
                margin="200px 0 50px auto"
          />
        </Slide>
        <Slide transition={['fade']}>
          <Heading margin="-100px auto" size={6} textColor="secondary">Legacy Context Api continued</Heading>
            <CodePane
              textSize="20px"
              lang="js"
              source={`class AdminPage extends React.Component {
  render() {
    return !this.context.isAdmin && <h3>Unauthorized</h3>;
  }
}

AdminUser.contextTypes = {
  isAdmin: PropTypes.boolean
};
`}
                margin="200px 0 50px auto"
          />
        </Slide>
        <Slide bgColor="secondary" transition={['fade']}>
          <Heading size={6} textColor="primary">Legacy Context Api Problem</Heading>
          <BlockQuote textColor="primary">
            If a context value provided by a component changes, descendants that use that value won’t update if an intermediate parent returns false from shouldComponentUpdate.
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']}>
            <Heading margin="-200px 0 50px auto" size={6} textColor="secondary">New Context API</Heading>
            <CodePane
              textSize="20px"
              lang="js"
              source={`// adminContext.js
import {createContext} from 'react';
export createContext({ isAdmin: false });

// App.jsx
import {Provider} from './adminContext.js';
export class App extends React.Component {
  constructor() {
    this.state = { isAdmin: false }
  }

  componentDidMount() { // find out if admin and set state }

  render() {
    <Provider value={this.state}>
      {this.props.children}
    </Provider>
  }
}

// AdminPage.jsx
import {Consumer} from './adminContext'
class AdminPage extends React.Component {
  render() {
    <Consumer>
      {({ isAdmin }) => (
        isAdmin ? 'Authorized' : 'Unauthorized'
      )}
    </Consumer>
  }
}`}
                margin="0px 0 50px auto"
          />
        </Slide>
        <Slide transition={['fade']}>
            <Heading margin="-200px 0 50px auto" size={6} textColor="secondary">Changing Context</Heading>
            <CodePane
              textSize="20px"
              lang="js"
              source={`// themeContext.js
export createContext({ theme: 'light', toggleTheme: () => {} });
// App.jsx
export class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }));
    };

    this.state = { theme: themes.light, toggleTheme: this.toggleTheme };
  }

  render() {
    <Provider value={this.state}>{this.props.children}</Provider>
  }
}
// ToggleThemeButton.jsx
class ToggleThemeButton extends React.Component {
  render() {
    <Consumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme} className={\`btn ${theme}\`}>Toggle Theme</button>
      )}
    </Consumer>
  }
}`}
                margin="0px 0 50px auto"
          />
        </Slide>
        <Slide bgColor="secondary" transition={['fade']}>
          <Heading size={6} textColor="primary">New Lifecycle Methods</Heading>
          <List textColor="primary">
            <ListItem>getDerivedStateFromProps - replaces componentWillReceiveProps</ListItem>
            <ListItem>getSnapshotBeforeUpdate</ListItem>
            <ListItem>componentWillUpdate deprecated</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textColor="secondary">getDerivedStateFromProps</Heading>
            <List>
              <ListItem>a <b>static</b> class method</ListItem>
              <ListItem>getSnapshotBeforeUpdate</ListItem>
              <ListItem>componentWillUpdate deprecated</ListItem>
            </List>
            <CodePane
              textSize="20px"
              lang="js"
              source={`class App extends React.Component {
  // state calculated from props
  // will be merged into prevState automatically like setState
  static getDerivedStateFromProps(props, prevState) {
    return {
      if (props.disabled) {
        // merge empty list into state
        return { list: [] }
      }
      // merge nothing into state
      return null;
    }
  }
}`}
                margin="100px 0 50px auto"
          />
        </Slide>
        <Slide transition={['fade']}>
            <Heading margin="-150px 100px 0 auto" size={6} textColor="secondary">getSnapshotBeforeUpdate</Heading>
            <List>
              <ListItem>Get dom information before updates happen, send them to componentDidUpdate to be used</ListItem>
              <ListItem>Return value passed as third parameter to componentDidUpdate</ListItem>
            </List>
            <CodePane
              textSize="20px"
              lang="js"
              source={`class App extends React.Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // check if current list length is greater then previous
    if (prevProps.list.length < this.props.list.length) {
      return (
        // capture list scroll location and send to componentDidUpdate
        this.listRef.scrollHeight - this.listRef.scrollTop
      );
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // list changed, change scroll location to match previous
    if (snapshot !== null) {
      this.listRef.scrollTop =
        this.listRef.scrollHeight - snapshot;
    }
  }`}
          />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React's Future
          </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React Suspense
          </Heading>
          <List>
            <ListItem>Pause rendering until data is loaded</ListItem>
            <ListItem>Fallback UI</ListItem>
          </List>
          <Link href="https://auth0.com/blog/time-slice-suspense-react16/" target="_blank">https://auth0.com/blog/time-slice-suspense-react16/</Link>
        </Slide>
      </Deck>
    );
  }
}

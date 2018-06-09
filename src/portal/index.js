import React from 'react';
import ReactDOM from'react-dom';

const portalRoot = document.getElementById('portalRoot');

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
            <img src='https://data.apksum.com/cb/com.nvidia.valvesoftware.portal/screenhost/icon.png' />,
            this.el
        );
    }
}

export default class PortalDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portalOpen: false
        };
        this.togglePortal = this.togglePortal.bind(this);
    }

    togglePortal() {
        this.setState(state => ({ portalOpen: !state.portalOpen }))
    }

    render() {
        return <React.Fragment>
            {this.state.portalOpen && <Portal />}
            <button
                style={{
                    cursor: 'pointer',
                    width: '30rem',
                    height: '10rem',
                    margin: '1rem',
                    fontSize: '50px',
                    border: 'none',
                    borderRadius: '2px'
                }}
                onClick={this.togglePortal}
            >
                Toggle Portal
            </button>
        </React.Fragment>
    }
}
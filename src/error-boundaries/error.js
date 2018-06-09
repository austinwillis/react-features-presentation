import React from 'react'

export default class Error extends React.Component {
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
            <button
                onClick={this.open.bind(this)}
                style={{
                    cursor: 'pointer',
                    width: '30rem',
                    height: '10rem',
                    margin: '1rem',
                    fontSize: '50px',
                    border: 'none',
                    borderRadius: '2px'
                }}
            >
                Create Error
            </button>
        </div>
    }
}
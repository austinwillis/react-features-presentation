import React from 'react'

export default class Boundary extends React.Component {
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
}
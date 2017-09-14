// THIS IS THE BASE OF EVERY HOC

import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {

    class Authentication extends Component {
        // This gives us access to the Router, we have to explicitly declare it
        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push('/')
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.push('/')
            }
        }

        render() {
            //console.log('test', ComposedComponent)
            //console.log(this.props.authenticated) // flips true/false
            //console.log(this.context)
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.authenticated }
    }

    return connect(mapStateToProps)(Authentication)
}

// This is used in any other files
// EXAMPLE:

// import Authentication from './components/hoc/require_auth' // This is the HOC
// import Resources from './components/resources'             // Component to wrap

// const ComposedComponent = Authentication(Resources)        // Function called with existing component

// In some render method:
// <ComposedComponent />

// ##########

// <ComposedComponent resources={resourceList} />
// makes 'resourceList' available inside HOC as this.props.resources

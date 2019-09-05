import React, { Component } from 'react';
import { connect } from 'react-redux';
import confirm from './confirm';
import { change, reduxForm, Field } from 'redux-form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
        this.props.initialize(this.props);
    }

    onChange = e => {
        confirm('Are you sure')
        .then(
            result => {
                console.log('-- change proceed');
            },
            cancel => {
                console.log('-- change canceled');
            }
        );
    }

    onSubmit(values) {
        console.log('-------------------------------------');
        console.log(values);
    }

    onClick = async e => {
        let value = e.target.value;
        let r = await confirm('Are you sure').then(
            (result) => {
              // `proceed` callback
              console.log('proceed called');
              return result;
            },
            (result) => {
              // `cancel` callback
              console.log('cancel called');
              return result;
            }
        );
        if (r === 'proceed') {
            console.log('== changing form', value);
            this.props.change('name', value);
            console.log(this.props);
        } else {
            console.log('== cancelling change');
            console.log(this.props);
        }
        
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="App">
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        name="name"
                        component="input"
                        type="radio"
                        placeholder=""
                        value="Ted"
                        onMouseDown={this.onClick}
                    />Ted

                    <Field
                        name="name"
                        component="input"
                        type="radio"
                        placeholder=""
                        value="Jim"
                        onMouseDown={this.onClick}
                    />Jim

                    <Field
                        name="name"
                        component="input"
                        type="radio"
                        placeholder=""
                        value="Greg"
                        onMouseDown={this.onClick}
                    />Greg
                
                    <button type="submit">Submit</button>
                    
                </form>
                    
            </div>
        )
    }
}

function mapStateToProps({simple}) {
    return simple;
}

export default reduxForm({
    form: 'simple' // a unique identifier for this form
  })(connect(mapStateToProps, null)(App));

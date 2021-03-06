import React, { Component } from 'react';
import { Header, Form, Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';

class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props;
    if(password === passwordConfirmation)
      dispatch(registerUser(email, password, passwordConfirmation, history));
    else
      alert('Passwords do NOT match!');
  }

  handleChange = (e) => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = e.target;
    const id = e.target.id;
    const value = e.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const { email, password, passwordConfirmation } = this.state;

    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Register Component</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input
              id='email'
              placeholder='Email'
              required
              value={email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              id='password'
              placeholder='Password'
              type='password'
              required
              value={password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password Confirmation</label>
            <input
              id='passwordConfirmation'
              placeholder='Password Confirmation'
              type='password'
              required
              value={passwordConfirmation}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment basic textAlign='center'>
            <Button type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

export default connect()(Register);
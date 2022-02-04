import React from 'react';

class MerchForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.props.onQueryChange(event.target.value);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(event.target.value);
    }
  
    render() {
      const query = this.props.query;

      return (
        <div>
            <p>Please type main idea here</p>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={query} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Make Generation!" />
            </form>
        </div>
        
      );
    }
  }

export default MerchForm;
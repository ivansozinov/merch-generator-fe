import React from 'react';
import axios from 'axios'
import MerchForm from '../MerchForm/MerchForm';
import List from '../MerchList/List';

class MerchPanel extends React.Component {
    constructor(props) {
      super(props);
      this.handleQueryChange = this.handleQueryChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
          query: '',
          images: [],
          loading: false
      };
    }
  
    handleQueryChange(q) {
      this.setState({query: q});
    }

    handleSubmit() {
        this.setState({loading: true});
        this.setState({images: []});
        const apiUrl = 'http://localhost:3004/images';
        axios.post(apiUrl, {
          query: this.state.query
        }).then((resp) => {
            const images = resp.data.image_urls;
            this.setState({loading: false});
            this.setState({images: images});
        }).catch(() => {
            this.setState({loading: false});
            this.setState({images: []});
        });
    } 
  
    render() {
      const query = this.state.query;
      const loading = this.state.loading;
      const images = this.state.images;

      return (
          <>
            <h1>Create your own merch</h1>
            <MerchForm 
                query={query} 
                onSubmit={this.handleSubmit}
                onQueryChange={this.handleQueryChange}
            />

            <List
                images={images}
                isLoading={loading}
            />
          </>
        
      );
    }
  }

  export default MerchPanel;
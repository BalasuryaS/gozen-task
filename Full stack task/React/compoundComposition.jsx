import React from 'react';
const withLoading = (WrappedComponent) => {
  return class WithLoading extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
      };
    }

    toggleLoading = () => {
      this.setState(prevState => ({
        isLoading: !prevState.isLoading,
      }));
    };

    render() {
      
      return (
        <WrappedComponent
          isLoading={this.state.isLoading}
          toggleLoading={this.toggleLoading}
          {...this.props}
        />
      );
    }
  };
};


const MyComponent = ({ isLoading, toggleLoading }) => {
  return (
    <div>
      <button onClick={toggleLoading}>
        {isLoading ? 'Hide Loading' : 'Show Loading'}
      </button>
      {isLoading ? <p>Loading...</p> : <p>Content loaded!</p>}
    </div>
  );
};


const MyComponentWithLoading = withLoading(MyComponent);

export default MyComponentWithLoading;

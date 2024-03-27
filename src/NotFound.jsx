import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error messages or perform other error handling tasks
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render custom error message or fallback UI
      return <div>Oops! Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

import React, { ErrorInfo, ReactNode } from 'react';

type ErrorBoundaryProps = {
  message: string;
  children: ReactNode;
  definition?: any;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.info('----FAILED RENDER-----', error, errorInfo, this.props);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h4 style={{ color: '#FC532E' }}>{this.props.message}</h4>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

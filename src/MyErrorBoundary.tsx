import React, { type PropsWithChildren, type ErrorInfo } from "react";

type Props = PropsWithChildren;

type State = {
  hasError: boolean;
  error?: unknown;
}

export class MyErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }

  // optional
  componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  resetError() {
    this.setState({
        hasError: false,
        error: null
    });
  }

  render() {
    const {error, hasError} = this.state;
    if (hasError) {
      // fallback
      return <div>
        {String(error)}
        <button onClick={() => this.resetError()}>Try again</button>
      </div>;
    }

    return this.props.children; 
  }
}

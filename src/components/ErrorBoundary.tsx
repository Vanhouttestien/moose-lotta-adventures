import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: unknown) {
    console.error("[@moose-lotta/ErrorBoundary]", error, info);
  }

  reset = () => {
    this.setState({ error: null });
  };

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
        <p className="font-display text-lg font-semibold text-foreground">
          Något gick fel / Something went wrong
        </p>
        <p className="max-w-sm text-sm text-muted-foreground">{this.state.error.message}</p>
        <button
          onClick={this.reset}
          className="mt-2 rounded-full bg-foreground px-6 py-2.5 font-display text-sm font-semibold text-background active:scale-95"
        >
          Försök igen / Try again
        </button>
      </div>
    );
  }
}

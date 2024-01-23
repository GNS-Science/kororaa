import React, { Component, ErrorInfo, ReactNode } from "react";
import { Alert, AlertTitle, Button } from "@mui/material";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {this.state.error?.message}
            <br />
            <Button
              style={{ marginTop: "1rem" }}
              variant={"outlined"}
              color={"error"}
              onClick={() => {
                window.location.href = "/RuptureMap";
              }}
            >
              reload page
            </Button>
          </Alert>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

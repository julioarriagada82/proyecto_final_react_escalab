import React from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
      <div role="alert">
        <p>Sucedio un problema:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Intente nuevamente</button>
      </div>
    );
  };

  export default ErrorFallback;
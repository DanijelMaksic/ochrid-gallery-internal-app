import './index.css';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ui/ErrorFallback.jsx';

createRoot(document.getElementById('root')).render(
   <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
   >
      <App />
   </ErrorBoundary>
);

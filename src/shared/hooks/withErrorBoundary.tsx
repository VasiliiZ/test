import React from 'react';

import { ErrorBoundary } from '../../shared/components/ErrorBoundary';
import { ErrorComponent } from '../ui/ErrorComponent';

export const withErrorBoundary = (WrappedComponent: React.ReactNode) => (
  <ErrorBoundary FallbackComponent={ErrorComponent}>
    {WrappedComponent}
  </ErrorBoundary>
);
 
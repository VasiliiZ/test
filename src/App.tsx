import React, { Suspense } from 'react';

import { MainPage } from './pages/MainPage';
import { useCocktails , withErrorBoundary , withRouter } from './shared/hooks';
import { LoadingFallback } from './shared/ui';
import { MainSidebar } from './widgets/MainSidebar';

const AppComponent: React.FC = () => {
  useCocktails();

  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <MainSidebar />
        <MainPage />
      </Suspense>
    </>
  );
};

const AppWithRouter = withRouter(<AppComponent />);
const AppWithProviders = withErrorBoundary(AppWithRouter);

export const App = () => AppWithProviders;

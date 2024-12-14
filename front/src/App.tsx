import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TrpcProvider } from './lib/trpc';
import { AllIdeasPage } from './pages/AllIdeasPage';
import { OneIdea } from './pages/OneIdea';
import { getAllIdeasRoute, getOneIdea } from './lib/routes';

export const App = () => {

  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
          <Route path={getOneIdea({id: ':id'})} element={<OneIdea />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};

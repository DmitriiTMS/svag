import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TrpcProvider } from './lib/trpc';
import { AllIdeasPage } from './pages/AllIdeasPage';
import { OneIdea } from './pages/OneIdea';
import { getAllIdeasRoute, getOneIdea } from './lib/routes';
import { Layout } from './components/Layout';

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
            <Route path={getOneIdea({ id: ':id' })} element={<OneIdea />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};

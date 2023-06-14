import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Spinner = lazy(() => import('../../components/spinner'));
const Home = lazy(() => import('../../pages/home'));
const NotFound = lazy(() => import('../../pages/not-found'));

function AppNavigator() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppNavigator;

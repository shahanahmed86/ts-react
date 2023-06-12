import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home.page';
import NotFound from '../../pages/NotFound.page';

function AppNavigator() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppNavigator;

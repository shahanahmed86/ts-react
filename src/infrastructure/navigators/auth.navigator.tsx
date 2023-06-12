import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login.page';

function AuthNavigator() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AuthNavigator;

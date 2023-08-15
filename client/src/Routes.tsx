import { BrowserRouter, Route, Routes as BrowserRoutes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PageLayout from './layout/PageLayout';
// import Contacts from './pages/Contacts';
import Information from './pages/Information';
import FormLayout from './layout/FormLayout';
import VINRequiest from './components/VINRequiest';
import LoginPage from './pages/LoginPage';
import RegistrationForm from './components/RegistrationForm';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route path="*" element={<PageLayout />}>
          <Route path="catalogue" element={<MainPage />} />
          {/* <Route path="contacts" element={<Contacts />} /> */}
          <Route path="info" element={<Information />} />
          <Route path="requiest" element={<VINRequiest />} />
        </Route>
        <Route path="authorization" element={<FormLayout />}>
          <Route path="registration" element={<RegistrationForm />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </BrowserRoutes>
    </BrowserRouter>
  );
};

export default Routes;

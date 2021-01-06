import React from 'react';
import SignIn from './pages/SignIn';
// import SignIn from './pages/SignUp';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';


const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;

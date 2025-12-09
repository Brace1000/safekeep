import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './styles/index.css'; 


function App() {
  
  React.useEffect(() => {
    const saved = localStorage.getItem('theme');
    const theme = saved === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
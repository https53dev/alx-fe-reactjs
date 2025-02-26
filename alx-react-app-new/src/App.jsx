import WelcomeMessage from './WelcomeMessage';
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';




function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

import UserProfile from './alx-react-app-new/UserProfile'; // Or './UserProfile' if in same directory

function App() {
  return (
    <div>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      {/* ... other UserProfile components or other content ... */}
    </div>
  );
}
export default App;


import Counter from './Counter'; // Assuming Counter.jsx is in the same directory

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
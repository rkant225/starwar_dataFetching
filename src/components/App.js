import React from 'react';
import "./styles.css";
import Layout from "./Layout/Layout";
import Characters from "./starwar/Characters";


function App() {
  return (
    <div className="App">
      <Layout>
        <Characters />
      </Layout>
    </div>
  );
}

export default App;
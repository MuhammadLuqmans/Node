import React from "react";
import "./App.css"
import {
  ApolloProvider,
} from "@apollo/client";
import client from '../config/gql_config';
import StudentData from "./StudentData";

function App() {
  return (
    <div className="App">
     <ApolloProvider client={client}>
     <div>
      <h2>My first Apollo app 🚀</h2>
      <StudentData />
    </div>
  </ApolloProvider>
    </div>
  );
}

export default App;

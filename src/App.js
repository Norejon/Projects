import './App.css';

import UserForm from "./components/userComponent/UserForm";
import Users from "./components/userComponent/Users";

function App() {
  return (
    <div className="App">
        <UserForm/>
        <hr/>
      <Users/>
    </div>
  );
}

export default App;

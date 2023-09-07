import { useState } from 'react';
import Profile from "./components/Profile"
import ReposList from "./components/ReposList";

function App() {
  const [user, setUser] = useState('');
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(inputValue);
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit} className='form'>
          <input
            value={inputValue}
            onChange={handleInputChange}
            className='formInput'
            type="text"
            placeholder='GitHub User'
          />
          <button className='formButton' type="submit">Search</button>
        </form>
      </div>
      
      <Profile username={user} />
      <ReposList username={user} />
    </>
  )
}

export default App

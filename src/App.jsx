import { useState } from 'react';

import Profile from "./components/Profile"
import ReposList from "./components/ReposList";

function App() {
  const [user, setUser] = useState('');
  const [input, setInput] = useState('');

  return (
    <>
      <div className='container'>
        <form className='form'>
          <input
            onBlur={e => setInput(e.target.value)}
            className='formInput'
            type="text"
            placeholder='GitHub User'
          />
          <button
            onClick={() => setUser(input)}
            className='formButton'
            type="button"
          >
              Search
          </button>
        </form>
      </div>

      {user.length > 0 && (
        <>
          <Profile username={user} />
          <ReposList username={user} />
        </>
      )}
      
    </>
  )
}

export default App

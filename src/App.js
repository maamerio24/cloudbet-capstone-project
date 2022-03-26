import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './views/Home'
import { useAuth } from './contexts/AuthProvider'
import { Main } from './views/Main'
import { Contact } from './views/Contact'


export const App = () => {

  const { signInWithGoogle, currentUser, logOut } = useAuth()


  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul id="first" className="navbar-nav mr-auto mt-2 mt-lg-0">
              <Link id="links" className="navbar-brand" to="/">Bet On It</Link>
            </ul>
            <ul id="second" className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link id="links" className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link id="links" className="nav-link" to="/contact">Contact <span className="sr-only">(current)</span></Link>
              </li>
              {
                !currentUser.loggedIn
                  ?
                  <>
                  <li className="nav-item active">
                    <Link id="links" onClick={() => signInWithGoogle()} className="nav-link" to="." >Sign in</Link>
                  </li>
                  </>
                  :
                  <li className="nav-item active">
                    <Link id="links" onClick={() => logOut()} className="nav-link" to=".">Sign out</Link>
                  </li>
              }
            </ul>

          </div>
        </nav>
      </header>

      <main id = "body" className="container">
        {
          !currentUser.loggedIn
            ?
            <Home />
            :
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        }
      </main>

      <footer>
      
      </footer>
    </React.Fragment>
  )
}


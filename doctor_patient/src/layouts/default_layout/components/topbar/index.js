import React from 'react'

const TopBar = () => {
  return (
   <>
           <div className="App">
              <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" color='black'>Max hospital</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#"  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
                <li className="nav-item">
                  <a className="nav-link" href="#">Patient-Cell</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">FeedBack</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          
            </div>
            </>
  )
}

export default TopBar
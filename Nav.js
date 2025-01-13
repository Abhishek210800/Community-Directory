import React from 'react'
import icon from './images/icon.png';
function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
        <div className="container">
			<a className="navbar-brand" href="index.html" >
				<img className="pb-1" src={icon} alt="logo" width="30px" /> Community Directory
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
           
        </div>
      </nav>
    </div>
  )
}

export default Nav
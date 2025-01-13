import React from 'react'

function Footer() {
  return (
    <footer>
		<div className="container">
			<div className="row">
				<div className="col-md-4 ftrone">
					<h3>Subscribe Newsletter</h3>
					<form>
						<input type="text" placeholder="Enter your email ID" />
						<button className="">Submit</button>
					</form>
				</div>
				<div className="col-md-4 ftrone">
					<h3>Quick Links</h3>
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="about.html">About Us</a></li>
						<li><a href="events.html">Events</a></li>
						<li><a href="signup.html">Signup</a></li>
					</ul>
				</div>
				<div className="col-md-4 ftrone">
					<h3>Contact Us</h3>
					<p><a href="">info@communitydirectory.com</a></p>
					<div className="socialin"><a href=""><i className="fa fa-facebook"></i></a>
						<a href=""><i className="fa fa-linkedin"></i></a>
						<a href=""><i className="fa fa-instagram"></i></a>
					</div>

				</div>
			</div>
		</div>

		<div className="container margtptty">
			<div className="row">
				<div className="col-md-12">
					<p>© 2024 Community Directory. All rights reserved.</p>


				</div>
			</div>
		</div>
	</footer>

  )
}

export default Footer
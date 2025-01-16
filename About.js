import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link  to="/"className="lefttpbtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>{" "}
              Back to Directory
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="coverbox boxwhitein">
              <div className="contbox">
                <div className="sprtpagecnt">
                  <h1>About Community Directory</h1>
                  <h4>Our Mission</h4>
                  <p>
                    At AI Agents Directory, we're on a mission to simplify the
                    complex world of AI agents. Our goal is to create a
                    comprehensive, user-friendly platform that connects
                    individuals and businesses with the most suitable AI agents
                    for their specific needs.
                  </p>

                  <h4>What We Do </h4>
                  <p>
                    We curate and categorize a wide range of AI agents, from
                    task-specific tools to general-purpose assistants. Our
                    directory provides concise, straightforward information
                    about each agent's capabilities, key features, and use
                    cases, helping you make informed decisions quickly.
                  </p>

                  <h4>Who We Serve </h4>
                  <p>Our platform is designed for:</p>

                  <ul>
                    <li>Developers seeking AI solutions for their projects</li>
                    <li>Businesses looking to enhance their operations with AI</li>
                    <li>Researchers exploring the landscape of AI agents</li>
                    <li>Curious individuals interested in the potential of AI</li>
                  </ul>

                  <h4>Our Vision</h4>
                  <p>
                    We envision a future where AI agents are seamlessly
                    integrated into daily life and work, enhancing human
                    capabilities and driving innovation. By bridging the gap
                    between AI developers and users, we aim to accelerate the
                    adoption and understanding of AI technologies.
                  </p>

                  <h4>Get in Touch</h4>
                  <p>We value your feedback and inquiries. Feel free to reach out to us:</p>
                  <p>
                    <a href="mailto:info@communitydirectory.com">
                      info@communitydirectory.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

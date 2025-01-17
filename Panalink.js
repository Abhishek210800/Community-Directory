import React, { useState } from 'react';

const Panalink = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <a href="index.html" className="lefttpbtn">
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
              </svg>
              Back to Directory
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="coverbox boxwhitein">
              <div className="headbggrntop">
                <div className="topbd">
                  <img src="images/panalink.jpg" alt="Panalink Logo" />
                  <h4>Panalink Infotech Limited</h4>
                  <p className="smlfnt">
                    K, 128, Mohammadpur Main Rd, Bhikaji Cama Place, New Delhi
                    110066
                  </p>
                  <p>
                    Panalink Infotech Limited is a disruptive mobile and web app
                    development company.
                  </p>
                  <ul className="listblok">
                    <li>
                      <a href="tel:+919899524524">
                        <i className="fa fa-mobile"></i> (+91) 989-952-4524
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contactus@panalinks.com">
                        <i className="fa fa-envelope-o"></i>{' '}
                        contactus@panalinks.com
                      </a>
                    </li>
                    <li>
                      <a href="https://www.panalinks.com">
                        <i className="fa fa-desktop"></i> www.panalinks.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="contbox">
                <div className="lstbxcnt">
                  <h4>Overview</h4>
                  <p>
                    Panalink Infotech Limited was founded in 1995 as Panalink
                    Internet Services and was formally incorporated as Panalink
                    Infotech Limited in 2001. Our focus has been offshore
                    software development, website designing, website
                    maintenance, website hosting, and web development.
                  </p>
                  <p>
                    Panalink Infotech Limited is a disruptive mobile and web app
                    development company. We create cutting edge apps and UX/UI
                    designs to bring your brilliant ideas to reality. Our team
                    of hardened tech developers will be with you in the twists
                    and turns of app development.
                  </p>
                </div>

                <div className="lstbxcnt">
                  <h4>We provide products and services in following categories:</h4>
                  <ul className="catlist">
                    {[
                      'Website',
                      'Ecommerce',
                      'Mobile App',
                      'Cloud Software',
                      'Upgrade Applications',
                      'Startup Services',
                      'SEO',
                      'Digital Marketing',
                    ].map((category, index) => (
                      <li key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check mr-3 text-green-500 flex-shrink-0 mt-1"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <a href="#">{category}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lstbxcnt">
                  <h4>Contact</h4>
                  <p>Let our Team handle all the Tech, So you can Execute the Rest</p>
                  <p>
                    <strong>Name of Person:</strong> Subhash Palsule
                  </p>
                  <p>
                    <strong>Designation:</strong> Director
                  </p>

                  <div className="toprwto">
                    <a
                      href="https://www.panalinks.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btnlkhd"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe mr-2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>{' '}
                      Website
                    </a>
                    <a href="mailto:contactus@panalinks.com" className="btnemail">
                      <i className="fa fa-envelope-o"></i> Email
                    </a>
                    <a href="tel:+919899524524" className="btnemail">
                      <i className="fa fa-phone"></i> Phone
                    </a>
                    <a
                      href="https://wa.me/919899699546?text="
                      className="btnwhatp"
                    >
                      <i className="fa fa-whatsapp"></i> Whatsapp
                    </a>
                    <button
                      className="btnchat"
                      onClick={() => setIsChatOpen(!isChatOpen)}
                    >
                      <i className="fa fa-comment-o"></i> Chat
                    </button>

                    {isChatOpen && (
                      <div className="wrapper">
                        <div className="header">
                          <h6>
                            Let's Chat - Online{' '}
                            <i
                              className="fa fa-times"
                              onClick={() => setIsChatOpen(false)}
                              style={{
                                cursor: 'pointer',
                                float: 'right',
                                fontWeight: 400,
                                fontSize: '16px',
                                marginTop: '3px',
                              }}
                            ></i>
                          </h6>
                        </div>
                        <div className="text-left">
                          <span className="lightchat">
                            Please fill out the form to start chat!
                          </span>
                        </div>
                        <div className="chat-form">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                          />
                          <textarea
                            className="form-control"
                            placeholder="Your Text Message"
                          ></textarea>
                          <button className="btn btn-success btn-block">
                            Submit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panalink;

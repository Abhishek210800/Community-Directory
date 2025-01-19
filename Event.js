import React, { useState } from "react";

const EventItem = ({ title, description }) => (
  <div className="rwarwhite">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    {
      title: "India Cloud Summit 2024",
      description:
        "Innovate And Transform - Strategies For Cloud Adoption And Data Innovation.",
    },
    {
      title: "Future Fintech Forum & Exhibition 2024",
      description:
        "Join the Indian Fintech Revolution. The India fintech market is poised to grow at a CAGR of more than 10 percent.",
    },
    {
      title: "Smart CIO Summit 2024",
      description:
        "India's must-attend technology event of C-Level Executives. At Smart CIO Summit, we recognize the pivotal role of CIOs.",
    },
  ];

  const pastEvents = [
    {
      title: "ET Retail E-Commerce & Digital Natives Summit 2024",
      description:
        "Sketching the World-Class Future of Indian Ecommerce Industry. ET Retail E-Commerce & Digital Natives Summit will bring together industry pioneers.",
    },
    {
      title: "International Conference on Emerging Techniques in Computational Intelligence 2024",
      description:
        "This conference aims to highlight the evolution of topics, frontline research, and multiple applications in Computational Intelligence.",
    },
  ];

  const renderEvents = (events) =>
    events.map((event, index) => (
      <EventItem key={index} title={event.title} description={event.description} />
    ));

  return (
    <div className="container">
      {/* Page Header */}
      <div className="row">
        <div className="col-md-12 rodhdr">
          <h1>Events</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="row">
        <div className="col-md-12">
          <div className="coverbox tabliting">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className={`nav-link ${activeTab === "upcoming" ? "active" : ""}`}
                  onClick={() => setActiveTab("upcoming")}
                >
                  Upcoming Events
                </button>
                <button
                  className={`nav-link ${activeTab === "past" ? "active" : ""}`}
                  onClick={() => setActiveTab("past")}
                >
                  Past Events
                </button>
              </div>
            </nav>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === "upcoming" && renderEvents(upcomingEvents)}
              {activeTab === "past" && renderEvents(pastEvents)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

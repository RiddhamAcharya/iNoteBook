import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">About iNoteBook</h1>
        <p className="text-muted">
          Your notes. Your cloud. Your control.
        </p>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <h3 className="fw-semibold">What is iNoteBook?</h3>
          <p>
            iNoteBook is a modern cloud-based note-taking application designed
            to help you capture, organize, and access your ideas anytime,
            anywhere. Whether it's study notes, project plans, or daily thoughts,
            iNoteBook keeps everything secure and synced.
          </p>

          <h4 className="mt-4">Why iNoteBook?</h4>
          <ul>
            <li>☁️ Secure cloud storage</li>
            <li>⚡ Fast and responsive UI</li>
            <li>🔐 Authentication protected notes</li>
            <li>📝 Create, edit and delete instantly</li>
            <li>🌍 Access from anywhere</li>
          </ul>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-lg border-0 p-4">
            <h4 className="fw-semibold">Our Mission</h4>
            <p>
              Our mission is to make note-taking simple, powerful, and secure.
              We believe your ideas deserve a safe place in the cloud where
              creativity meets productivity.
            </p>

            <h4 className="mt-3 fw-semibold">Built With</h4>
            <p>
              React, Node.js, Express, MongoDB and modern web technologies to
              ensure speed, reliability and scalability.
            </p>

            <h4 className="mt-3 fw-semibold">Made For</h4>
            <p>
              Students, developers, creators, and anyone who loves staying
              organized.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="text-muted">
          🚀 iNoteBook — Where your thoughts live safely in the cloud.
        </p>
      </div>
    </div>
  );
};

export default About;

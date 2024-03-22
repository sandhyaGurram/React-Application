import React from 'react'

export default function Aboutus() {
  return (
    <div>
      
      <section className="container aboutUs">
        <div>
          <h1 className="text-center animate-h1">About Us</h1>
          <p className="about-text">ELearn Infotech is a Professional Software Courses Training Company like Python, Fullstack development, React Js, Node Js, UI Development, UI/UX Designing, Web designing, PHP with MySQL, Graphic Designing, Cloud Modules, SAP Modules etc. We Provide Training for Design Unique websites & Develop Web Application, Digital Marketing Solutions like SEO, SMM, PPC (Google Ads) and help businesses create their brand. ELearn Infotech built a Relationship with students, who allows us to build up a tailored branding plan advance. ELearn Infotech offers Excellent Software Courses with end to end support to the candidates.</p>
          <h1 className="text-center animate-h1">Why Choose Us?</h1>
          <p className='animate-choose'><i className="bi bi-arrow-90deg-right "></i>   Quality of Training as per International Standards.</p>
          <p className='animate-choose2'><i className="bi bi-arrow-90deg-right"></i>   Real time Training with Realtime Projects.</p>
          <p className='animate-choose3'><i className="bi bi-arrow-90deg-right"></i>   Students satisfaction is the ultimate goal for us.</p>
          <p className='animate-choose4'><i className="bi bi-arrow-90deg-right"></i>  Business ethics is more important than money.</p>
          <p className='animate-choose5'><i className="bi bi-arrow-90deg-right"></i>  Help students to reach their true potential with Personality Development.</p>
          <p className='animate-choose6'><i className="bi bi-arrow-90deg-right"></i>  Help students to become entrepreneurs with motivation and support.</p>

        </div>
      </section>

      <section className="container-fluid  p-5">
        <div className="row px-5">
          <div className="col-12 col-sm-12 col-md-4 col-xl-4 training-modes">
            <div className="card">
              <i className="bi bi-mortarboard-fill training"></i>
              <div className="card-body text-center">
                <h3 className="card-title">Classroom Training</h3>
                <p>Classroom Training is an effective means of delivering knowledge, as it allows real-time feedback, questions and answers change of delivery to suit the needs of learners in a real time environment.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-xl-4 training-modes">
            <div className="card">
              <i className="bi bi-person-fill training"></i>
              <div className="card-body text-center">
                <h3 className="card-title">Classroom Training</h3>
                <p>We have Invested Heavily in our Online Training Division to Develop rich Content with out Compromising the ideal Learning Process for the Trainee.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-xl-4 training-modes">
            <div className="card">
              <i className="bi bi-book-half training"></i>
              <div className="card-body text-center">
                <h3 className="card-title">Corporate Training</h3>
                <p>Corporate Training helps to Understand the Requirement of the Industry & we are able to understand the requirements because all our trainings are tailor made to the needs of the organization under consideration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

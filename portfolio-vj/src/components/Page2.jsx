
// import React from 'react';
// import vjpf from './vjpf.jpg';
import React from 'react';
import vjpf from './vjpf.jpg';

function Page2() {
  const skills = ['Java', 'JavaScript', 'React', 'HTML', 'CSS', 'Cloud', 'AI/ML'];

  return (
    <div className="container my-5 py-5">
      <div 
        className="card border-0 shadow-lg text-white" 
        style={{
          background: 'rgba(33, 37, 41, 0.85)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          overflow: 'hidden'
        }}
      >
        
        <div style={{ height: '6px', background: 'linear-gradient(90deg, #007bff, #6610f2)' }}></div>
        
        <div className="card-body p-4 p-md-5">
          <div className="row align-items-center">
           
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <div className="position-relative d-inline-block">
                <img
                  src={vjpf}
                  alt="Vijay Madira Profile"
                  className="img-fluid rounded-circle shadow-lg border border-4 border-dark"
                  style={{ width: '220px', height: '220px', objectFit: 'cover' }}
                />
              </div>
            </div>

            
            <div className="col-md-8">
              <span className="badge bg-primary mb-2 px-3 py-2 text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>
                Full Stack Developer
              </span>
              <h1 className="display-5 fw-bold mb-3">Vijay Madira</h1>
              <p className="lead text-light opacity-75">
                A motivated B.E graduate and passionate <strong>Java Developer</strong>. 
                I bridge technical logic with visual storytelling, currently specializing in 
                <strong> Full Stack Development</strong> and <strong>DSA</strong>.
              </p>

              <hr className="my-4 border-secondary opacity-25" />

              <div className="row">
                
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <h4 className="fw-bold text-primary mb-3">Education</h4>
                  <div className="ps-3 border-start  ">
                    <h6 className="mb-0 fw-bold">Bachelor of Engineering</h6>
                    <p className="small text-info mb-1">Class of 2025</p>
                    <p className="small text-muted mb-0">
                      Core focus: Data Structures, OS, and Java Development.
                    </p>
                  </div>
                </div>

                
                <div className="col-lg-6">
                  <h4 className="fw-bold text-primary mb-3">Tech Stack</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span 
                        key={skill} 
                        className="badge rounded-pill border border-secondary fw-normal px-3 py-2"
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)', fontSize: '0.9rem' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
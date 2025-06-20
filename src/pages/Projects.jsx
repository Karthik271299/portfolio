import React, { useState, useEffect } from 'react';
import { Github, Code } from 'lucide-react';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const projects = [
    {
      title: 'Job Portal',
      description: 'Built a full-stack job portal using React.js frontend with JavaScript, Java Spring Boot backend with Spring Security, JWT authentication, BCrypt password encryption, microservice architecture with separate service layers, and role-based access control for Job Seekers and Employers. Created an optimized user experience with role-based registration and dashboards, persistent login sessions using JWT tokens, real-time feedback for all actions, protected routes with automatic redirects, dynamic content loading, and separate functionalities for job searching/application (Job Seekers) and candidate searching/job posting (Employers).',
      technologies: ['React', 'JavaScript', 'Java', 'Spring Boot', 'MySQL', 'JWT', 'Spring Security'],
      githubLink: 'https://github.com/Karthik271299/JobPortal',
    },
    {
      title: 'Smart Data Storage System',
      description: 'Worked on Spring Boot to create RESTful APIs to capture and process customer requests, utilized AWS for secure and scalable data storage. Used Node.js to develop middleware and routing logic for integrating Spring Boot APIs with Angular services, ensuring efficient exception handling, status code management, and seamless data flow. Designed and implemented dynamic forms, interactive pages, and user-friendly interfaces to improve workflow efficiency. Added features to create tables in AWS resources and streamline data processing, enhancing overall usability and reducing unnecessary data consumption.',
      technologies: ['Java', 'Angular', 'Node.js', 'Spring Boot', 'AWS'],
      githubLink: 'https://github.com/Karthik271299/JobPortal',
    },
  ];

  const containerStyles = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    padding: isMobile ? '2rem 1rem' : '4rem 2rem',
    color: '#ffffff',
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: isMobile ? '3rem' : '4rem',
  };

  const titleStyles = {
    fontSize: isMobile ? '2rem' : '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #64b5f6 30%, #f50057 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem',
    lineHeight: '1.2',
  };

  const subtitleStyles = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    color: '#b0b0b0',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: isMobile ? '2rem' : '3rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  };

  const cardStyles = {
    background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 0.4) 100%)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(100, 181, 246, 0.2)',
    borderRadius: '16px',
    padding: isMobile ? '1.5rem' : '2rem',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    height: 'fit-content',
  };

  const iconContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: isMobile ? '120px' : '150px',
    backgroundColor: 'rgba(100, 181, 246, 0.1)',
    borderRadius: '12px',
    marginBottom: '1.5rem',
  };

  const projectTitleStyles = {
    fontSize: isMobile ? '1.3rem' : '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#ffffff',
  };

  const descriptionStyles = {
    fontSize: isMobile ? '0.9rem' : '1rem',
    color: '#b0b0b0',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    display: '-webkit-box',
    WebkitLineClamp: isMobile ? 6 : 8,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const techContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '2rem',
  };

  const techChipStyles = {
    backgroundColor: 'rgba(100, 181, 246, 0.1)',
    border: '1px solid rgba(100, 181, 246, 0.3)',
    borderRadius: '20px',
    padding: isMobile ? '0.3rem 0.8rem' : '0.4rem 1rem',
    fontSize: isMobile ? '0.7rem' : '0.8rem',
    color: '#64b5f6',
    fontWeight: '500',
  };

  const buttonStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    backgroundColor: 'transparent',
    border: '2px solid #64b5f6',
    borderRadius: '8px',
    padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
    color: '#64b5f6',
    fontSize: isMobile ? '0.9rem' : '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    textDecoration: 'none',
    width: 'fit-content',
    margin: '0 auto',
  };

  const callToActionStyles = {
    textAlign: 'center',
    marginTop: isMobile ? '4rem' : '6rem',
    padding: isMobile ? '2rem 1rem' : '3rem 2rem',
    background: 'rgba(100, 181, 246, 0.05)',
    borderRadius: '16px',
    maxWidth: '600px',
    margin: `${isMobile ? '4rem' : '6rem'} auto 0`,
  };

  const ctaButtonStyles = {
    ...buttonStyles,
    background: 'linear-gradient(45deg, #64b5f6 30%, #f50057 90%)',
    border: 'none',
    color: 'white',
    marginTop: '1.5rem',
  };

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>My Projects</h1>
        <p style={subtitleStyles}>
          Here are the projects I've worked on, showcasing my skills in full-stack development, 
          cloud technologies, and modern web practices.
        </p>
      </div>

      <div style={gridStyles}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={cardStyles}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = isMobile ? 'translateY(-4px)' : 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(100, 181, 246, 0.3)';
              e.currentTarget.style.border = '1px solid rgba(100, 181, 246, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.border = '1px solid rgba(100, 181, 246, 0.2)';
            }}
          >
            <div style={iconContainerStyles}>
              <Code size={isMobile ? 40 : 60} color="#64b5f6" opacity={0.7} />
            </div>
            
            <h3 style={projectTitleStyles}>{project.title}</h3>
            
            <p style={descriptionStyles}>{project.description}</p>
            
            <div style={techContainerStyles}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} style={techChipStyles}>
                  {tech}
                </span>
              ))}
            </div>
            
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={buttonStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#64b5f6';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#64b5f6';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Github size={isMobile ? 18 : 20} />
              View Code
            </a>
          </div>
        ))}
      </div>

      <div style={callToActionStyles}>
        <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.4rem', marginBottom: '1rem', color: '#ffffff' }}>
          Want to see more of my work?
        </h3>
        <p style={{ color: '#b0b0b0', fontSize: isMobile ? '0.9rem' : '1rem', lineHeight: '1.6' }}>
          Check out my GitHub profile for additional projects and contributions.
        </p>
        <a
          href="https://github.com/Karthik271299"
          target="_blank"
          rel="noopener noreferrer"
          style={ctaButtonStyles}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(45deg, #42a5f5 30%, #e91e63 90%)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(45deg, #64b5f6 30%, #f50057 90%)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <Github size={isMobile ? 18 : 20} />
          Visit My GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
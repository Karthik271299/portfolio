import React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Chip,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Code, Work } from "@mui/icons-material";
import karthikPic from "../ImagesAndFiles/Karthik-Passport-Pic.jpeg";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const skills = [
    { name: "Java", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "AWS Services", category: "Cloud" },
    { name: "Angular", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Terraform", category: "DevOps" },
    { name: "SonarQube", category: "DevOps" },
    { name: "Git", category: "DevOps" },
    { name: "GitHub", category: "DevOps" },
    { name: "Bitbucket", category: "DevOps" },
    { name: "Jenkins", category: "DevOps" },
    { name: "MYSQL", category: "Database" },
    { name: "Postgresql", category: "Database" },
  ];

  const coursesAndCertifications = [
    {
      title: "JAVA",
      period: "April 2023 - September 2023",
      description:
        "Certified in Java with expertise in object-oriented programming, data structures, and algorithm development. Gained hands-on experience in building scalable applications and showcasing skills in development and debugging through project assignments.",
    },
    {
      title: "WEB DEVELOPMENT",
      period: "April 2023 - September 2023",
      description:
        "Completed a certification in web development with hands-on experience in building responsive applications using Angular, Node.js, HTML, CSS, and TypeScript. Demonstrated proficiency in front-end and back-end development, API integration, and scalable solution design.",
    },
  ];

  const workExperience = [
    {
      title: "Java Full Stack Developer",
      company: "Gavs Technologies",
      period: "Jan 2025 - Present",
      description: "Developed and integrated new features in a Spring Boot-based microservice application, enhancing business functionality and ensuring seamless interaction across distributed services. Optimized backend logic using data structures like Map, Set, and List along with algorithms such as sliding window and two-pointer, reducing time complexity and improving data retrieval efficiency from MySQL. Data Cleanup Automation: Developed a scheduled cron-based Lambda function to purge records older than 1 year from the MySQL database, improving data consistency and performance. AWS Serverless Development: Designed and deployed AWS Lambda functions using the Serverless Framework and Terraform for scheduled tasks via cron triggers to automate backend processes. Upgraded Spring Boot applications to the latest stable versions by resolving deprecated methods, replacing outdated dependencies, and ensuring backward compatibility. Designed secure REST APIs by implementing JWT-based authentication, enforcing token validation on each request and significantly improving the overall security posture of the application. Frontend Development: Built responsive and accessible UI components in React using Material UI, enhancing user experience and interface intuitiveness. Documented end-to-end test scenarios to support QA testing and executed load and performance testing using AWS CloudWatch and JMeter, ensuring system scalability and stability under peak load. AWS, SpringBoot, React, Node JS, Sonar, Jenkins, Docker, PostgreSQL, MYSQL, JavaScript,Junit, Terraform."
    },
    {
      title: "Software Development Engineer",
      company: "Fidelity Investments",
      period: "Oct 2023 - Oct 2024",
      description: "API Development: Designed and developed RESTful API endpoints using Spring Boot, enabling seamless interaction between backend services and Angular frontend components. Frontend Development: Built intuitive and responsive user interfaces using Angular, enhancing user experience and optimizing UI performance. Security Implementation: Integrated Spring Security with JWT token-based authentication, generating and validating tokens for each API request to ensure secure and stateless communication. Authentication & Authorization: Implemented robust user authentication and role-based authorization, ensuring controlled access across the application. Backend Development: Developed scalable backend services using Node.js and TypeScript, improving system performance by 20% through code optimization and modularization. Data Structures & Algorithms: Utilized advanced DSA techniques including HashMap, List interfaces, Sliding Window, and Two-Pointer approaches to optimize logic and application performance. Leveraged Java Streams API for concise and efficient data processing. CI/CD Pipelines: Deployed applications using CI/CD pipelines with custom Jenkins pipeline stages, ensuring seamless integration. Managed the transition of environments from passive to active states, ensuring minimal downtime and maintaining application stability with rollback strategies Java, TypeScript, Jenkins, DynamoDB, MySQL, Node JS, Angular, Sonar, Karma and Jasmine.",
    },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", pt: 2 }}>
      {/* Fixed Left Sidebar - Profile Navigation */}
      <Box
        sx={{
          width: isMobile ? "100%" : 380,
          position: isMobile ? "relative" : "fixed",
          height: isMobile ? "auto" : "100vh",
          overflowY: "auto",
          p: 2,
          backgroundColor: "background.default",
          borderRight: isMobile ? "none" : "1px solid",
          borderRightColor: "divider",
          zIndex: 1000,
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(0,0,0,0.1)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(100, 181, 246, 0.5)",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "rgba(100, 181, 246, 0.7)",
          },
        }}
      >
        <Paper
          sx={{
            p: 4,
            minHeight: "fit-content",
            background:
              "linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(245, 0, 87, 0.1) 100%)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(100, 181, 246, 0.2)",
            borderRadius: 4,
          }}
        >
          {/* Profile Picture and Basic Info */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Avatar
              src={karthikPic}
              alt="Karthik Siva"
              sx={{
                width: isMobile ? 120 : 150,
                height: isMobile ? 120 : 150,
                mx: "auto",
                mb: 3,
                border: "4px solid",
                borderColor: "primary.main",
              }}
            />
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h1"
              gutterBottom
              sx={{
                background: "linear-gradient(45deg, #64b5f6 30%, #f50057 90%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              Karthik Siva
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Full Stack Developer
            </Typography>
          </Box>

          {/* About Me */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              About Me
            </Typography>
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                fontSize: "0.95rem",
              }}
            >
              I am passionate about creating innovative solutions and always
              love to learn and adapt to new technologies. I believe in hands-on
              practice and continuous learning to stay ahead in the
              ever-evolving tech landscape. My expertise spans across full-stack
              development, cloud technologies, and modern DevOps practices.
            </Typography>
          </Box>

          {/* Skills */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Skills
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill.name}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ 
                    fontSize: "0.7rem",
                    mb: 1,
                  }}
                />
              ))}
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          ml: isMobile ? 0 : "380px",
          p: 3,
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          {/* Work Experience Section */}
          <Paper
            sx={{
              p: 4,
              mb: 4,
              background:
                "linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(245, 0, 87, 0.1) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(100, 181, 246, 0.2)",
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", mb: 3 }}
            >
              <Work sx={{ mr: 2, color: "primary.main" }} />
              Work Experience
            </Typography>
            {workExperience.map((job, index) => (
              <Box
                key={index}
                sx={{
                  py: 3,
                  px: 3,
                  mb: 3,
                  backgroundColor: "rgba(100, 181, 246, 0.1)",
                  borderRadius: 3,
                  borderLeft: "4px solid",
                  borderLeftColor: "primary.main",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {job.title}
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
                  {job.company}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, fontStyle: "italic" }}
                >
                  {job.period}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                  {job.description}
                </Typography>
              </Box>
            ))}
          </Paper>

          {/* Courses and Certifications Section */}
          <Paper
            sx={{
              p: 4,
              background:
                "linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(245, 0, 87, 0.1) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(100, 181, 246, 0.2)",
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", mb: 3 }}
            >
              <Code sx={{ mr: 2, color: "primary.main" }} />
              Courses and Certifications
            </Typography>
            {coursesAndCertifications.map((item, index) => (
              <Box
                key={index}
                sx={{
                  py: 3,
                  px: 3,
                  mb: 3,
                  backgroundColor: "rgba(100, 181, 246, 0.1)",
                  borderRadius: 3,
                  borderLeft: "4px solid",
                  borderLeftColor: "primary.main",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, fontStyle: "italic" }}
                >
                  {item.period}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
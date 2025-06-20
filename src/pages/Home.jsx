import React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Code } from "@mui/icons-material";
import karthikPic from "../ImagesAndFiles/Karthik-Passport-Pic.jpeg";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const skills = [
    { name: "Java", level: 85, category: "Backend" },
    { name: "Spring Boot", level: 85, category: "Backend" },
    { name: "AWS Services", level: 70, category: "Cloud" },
    { name: "Angular", level: 85, category: "Frontend" },
    { name: "React", level: 40, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "JavaScript", level: 70, category: "Frontend" },
    { name: "TypeScript", level: 80, category: "Frontend" },
    { name: "Terraform", level: 85, category: "DevOps" },
    { name: "SonarQube", level: 80, category: "DevOps" },
    { name: "Git", level: 95, category: "DevOps" },
    { name: "GitHub", level: 90, category: "DevOps" },
    { name: "Bitbucket", level: 85, category: "DevOps" },
    { name: "Jenkins", level: 80, category: "DevOps" },
    { name: "MYSQL", level: 70, category: "Database" },
    { name: "Postgresql", level: 70, category: "Database" },
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

  return (
    <>
      <Box sx={{ pt: 10, minHeight: "100vh" }}>
        <Container maxWidth="lg">
          {/* Hero Section */}
          <Box
            sx={{
              textAlign: "center",
              py: 8,
              background:
                "linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(245, 0, 87, 0.1) 100%)",
              borderRadius: 4,
              mb: 8,
            }}
          >
            <Avatar
              src={karthikPic}
              alt="Karthik Siva"
              sx={{
                width: isMobile ? 150 : 200,
                height: isMobile ? 150 : 200,
                mx: "auto",
                mb: 4,
                border: "4px solid",
                borderColor: "primary.main",
              }}
            />
            <Typography
              variant={isMobile ? "h3" : "h2"}
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
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Full Stack Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 600,
                mx: "auto",
                mt: 3,
                lineHeight: 1.8,
                fontSize: "1.1rem",
              }}
            >
              I am passionate about creating innovative solutions and always
              love to learn and adapt to new technologies. I believe in hands-on
              practice and continuous learning to stay ahead in the
              ever-evolving tech landscape. My expertise spans across full-stack
              development, cloud technologies, and modern DevOps practices.
            </Typography>
          </Box>
          
          {/* Skills Section */}
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "center", alignItems: "stretch" }}
          >
            {skills.map((skill, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                sx={{ display: "flex" }}
              >
                <Card
                  sx={{
                    width: "100%",
                    minHeight: 120,
                    background:
                      "linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 0.4) 100%)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(100, 181, 246, 0.2)",
                    transition: "transform 0.3s ease-in-out",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 20px rgba(100, 181, 246, 0.3)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          flexGrow: 1,
                          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                        }}
                      >
                        {skill.name}
                      </Typography>
                      <Chip
                        label={skill.category}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}
                      />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ width: "100%", mr: 1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: { xs: 6, sm: 8 },
                            borderRadius: 5,
                            backgroundColor: "rgba(100, 181, 246, 0.2)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 5,
                              background:
                                "linear-gradient(90deg, #64b5f6 0%, #f50057 100%)",
                            },
                          }}
                        />
                      </Box>
                      <Box sx={{ minWidth: { xs: 30, sm: 35 } }}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Certifications and Courses */}
          <Grid container spacing={4} sx={{ mb: 8, mt: 6 }}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 4,
                  background:
                    "linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(245, 0, 87, 0.1) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(100, 181, 246, 0.2)",
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;

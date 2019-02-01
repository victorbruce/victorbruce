import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div id="home" className="wrapper">
      <section>
        <Grid container>
          <Grid item xs={12} sm={4} className="profile-img">
            <img src={require("./victorbruce.png")} alt="Victor Bruce" />
          </Grid>
          <Grid item xs={12} sm={8} className="brief-intro">
            <Typography component="h1" variant="h3" gutterBottom>
              Victor Bruce
            </Typography>
            <Typography component="h2" variant="h5" gutterBottom>
              Full Stack Software Engineer
            </Typography>
            <Typography gutterButtom>
            <i className="fas fa-map-marker-alt"></i>Accra, Ghana
            </Typography>
            <Grid item xs={12} className="social-media-icons">
              <a
                href="https://twitter.com/Victorbruce3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-2x" />
              </a>
              <a
                href="https://github.com/victorbruce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/victorbruce3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-2x" />
              </a>
              <a
                href="mailto:victorbruce82@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope-square fa-2x" />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </section>
      <section className="profile">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Profile
            </Typography>
            <Typography variant="body1" gutterBottom>
              A problem solver and a full-stack software engineer with much
              experience in designing, developing and deploying responsive and
              scalable cross-platform applications.
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section className="tech-stack">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Tech Stack
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} className="tech-stack-card">
            <Card>
              <CardContent>
                <Typography variant="h6">NodeJs</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} className="tech-stack-card">
            <Card>
              <CardContent>
                <Typography variant="h6">Express</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} className="tech-stack-card">
            <Card>
              <CardContent>
                <Typography variant="h6">MongoDB</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} className="tech-stack-card">
            <Card>
              <CardContent>
                <Typography variant="h6">MYSQL</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} className="tech-stack-card">
            <Card>
              <CardContent>
                <Typography variant="h6">ReactJs</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} className="tech-stack-card">
            <Card>
              <CardContent>
                <Typography variant="h6">JavaScript</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
      <Footer />
    </div>
  );
};

export default About;

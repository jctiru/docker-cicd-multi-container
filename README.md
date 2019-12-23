# Multi-Container Docker React CICD to AWS Elastic Beanstalk using Travis CI

[![Build Status](https://travis-ci.com/jctiru/docker-cicd-multi-container.svg?branch=master)](https://travis-ci.com/jctiru/docker-cicd-multi-container)

1. Push code in master branch to github
2. Travis automatically pulls repo
3. Travis builds a test image (for react), tests code
4. Travis builds prod images
5. Travis pushes built prod images to Docker Hub
6. Travis pushes project to AWS EB
7. EB reads Dockerrun.aws.json, pulls images from Docker Hub, deploys

### Fibonacci Calculator

- Nginx container as front-end proxy to another Nginx (with React prod files) container and Express Server container
- Nginx container with React prod files as front-end website
- Express Server container as backend which makes calls to Postgres and Redis
- Worker container for async calculations 
- AWS RDS Postgres as database which remembers all past inputs
- AWS Elasticache Redis as another form of "database" (intended as not cache) which remembers all past calculations

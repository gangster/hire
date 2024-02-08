---
title: Josh Deeden
description: Resume about Josh Deeden, Senior Software Engineer.
---
**Web, Backend & Infrastructure Engineer**

Camas, WA, USA | 626-558-1136 | work@deeden.org | [Website](https://josh.deeden.org) | [Github](http://github.com/gangster) | [LinkedIn](http://linkedin.com/in/jdeeden)
## Summary
I'm an engineer with a strong foundation in programming and DevOps, skilled at navigating the complexities of backend, distributed systems, and microservices architectures. Certified in AWS, Kubernetes, and Terraform, I combine my coding expertise with a comprehensive understanding of cloud infrastructure to build scalable and creative solutions.
## Work Experience

### [Prismatic](https://www.prismatic.io/)
#### Senior Infrastructure Engineer | March 2023 - December 2023
- **Automated Docker Container System**:
  - Led design and implementation to standardize CI jobs and production services with best-practice-based, customizable Docker containers.
  - Enabled support for multiple language runtimes, as well as tools like Terraform CLI, AWS CLI, and others, allowing project-specific versioning and adjustments.
  - Streamlined development and deployment processes, reducing build times and integration issues, enhancing project flexibility and efficiency.
  - **Stack**: Docker, Gitlab CI/CD, Linux


- **Domain specific CI tool**:
  - Developed a Dockerized Go application, integrated into the CI/CD pipeline, to optimize workflows within our monorepo.
    - Streamlined pipeline execution by selectively triggering builds only for updated components, significantly reducing build times and resource usage.
    - Resulted in expedited developer feedback and improved issue resolution efficiency, fostering a more agile development environment.
  - **Stack**: Docker, Go, GitLab CI/CD, Typescript, asdf, Linux

- **Modernized Documentation Generator**:
  - Overhauled an outdated Python-based documentation tool for our TypeScript projects, addressing legacy issues and unlocking automation capabilities.
    - Rewrote the tool in TypeScript, leveraging software architecture and design best practices.
    - Enabled automated documentation generation within CI/CD pipelines, replacing manual tasks and improving workflow efficiency.
  - Resulted in streamlined documentation processes, reducing manual efforts and more up-to-date documentation for our users.
  - **Stack**: TypeScript, Python, Docker, CI/CD pipelines


### [Ontra](https://ontra.ai/)
#### Lead Infrastructure Engineer | September 2019 - November 2022
- **Serverless Database Replication System**:
  - Led the design and implementation of a serverless solution to replicate our production Heroku database into Snowflake for data team use, replacing costly commercial solutions.
    - Utilized AWS CDK, Lambda, Step Functions, S3 and Fargate to orchestrate a serverless pipeline for scheduled database replication tasks.
    - Addressed complexities including differing data types and SQL dialects between Postgres and Snowflake.
    - Ensured system reliability critical for BI dashboards by implementing robust error handling and monitoring with Datadog.
    - Deployed the system across development, staging, and production AWS accounts, implementing a scalable serverless strategy.
  - Resulted in significant cost savings by replacing costly commercial solutions with an efficient and scalable serverless architecture.
  - **Stack**: Docker, Typescript, Python, AWS CDK, Lambda, Step Functions, Fargate, RDS, S3, Linux, Datadog


- **Automated Ephemeral Environments**:
  - Spearheaded the development and implementation of a sophisticated automated system to provision ephemeral test environments for each pull request, improving the development and testing workflow.
    - Leveraged AWS CDK, Kubernetes, and GitLab CI/CD to seamlessly integrate with existing pipelines and automate environment provisioning.
    - Orchestrated the deployment of complex full-stack applications, microservices and JavaScript frontends onto AWS EKS Kubernetes clusters, ensuring availability and reliability.
    - Addressed challenges such as data seeding, AWS resource provisioning, secrets management, and custom domain configuration, streamlining the process and enhancing efficiency.
    - Enabled continuous deployment by automatically updating ephemeral environments with the latest commits upon new pull request activity, facilitating rapid feedback loops.
  - Resulted in reduced contention for test environments among developers and QA teams, leading to accelerated application delivery and improved collaboration across the development lifecycle.
  - **Stack**: AWS CDK, AWS IAM, AWS EKS, Kubernetes, Helm, Linux, GitLab CI/CD, Docker, Typescript, AWS EKS, AWS RDS, AWS S3, Route 53, AWS ACM, Traefik, Datadog

- **Scalable CI/CD Infrastructure with AWS EKS**:
  - Designed and built a scalable system to provision AWS EKS clusters, optimized for autoscaling GitLab runner workloads to meet the CI/CD demands of our growing team.
    - Automated the provisioning of EKS and related AWS resources and networking infrastructure using AWS CDK, streamlining the deployment process.
    - Utilized Helm for the automated setup of GitLab runner and operations-related services, ensuring efficient CI/CD operations.
    - Implemented deploy-time configuration options, enabling customization of cluster resources to optimize job execution, resulting in a performant and cost-efficient system.
    - Facilitated easy cluster upgrades and maintenance by allowing for simple teardown and re-provisioning through GitLab CI/CD pipeline executions.
  - This system significantly enhanced our CI/CD capabilities, providing a robust, flexible, and cost-efficient infrastructure that supports rapid development and deployment cycles.
  - **Stack**: AWS CDK, AWS IAM, AWS S3, AWS EKS, Kubernetes, Helm, Linux, GitLab CI/CD, Docker, Bash, Typescript, Datadog


### [Wurl](https://wurl.com/)
#### Senior Infrastructure Engineer | April 2018 - August 2019
- **AWS Serverless Media Ingestion Pipeline**:
  - Engineered and deployed an AWS serverless-based solution to optimize the ingestion of customers' large video files into our video streaming platform, ensuring a highly reliable and scalable system for handling increasing volumes of media content.
    - Implemented AWS Lambda, AWS Transfer for SFTP, S3, DynamoDB, Fargate, and utilized the Serverless Framework to efficiently and cost-effectively automate the ingestion pipeline.
    - This approach significantly reduced operational costs and complexity while enhancing scalability and system reliability.
  - **Stack**: AWS Lambda, AWS Transfer for SFTP, S3, DynamoDB, Fargate, Serverless Framework, Typescript
- **High-Performance Log Analysis Tool**:
  - Developed using Go, this tool parallelized the fetching and processing of HTTP logs from S3, which detailed viewership of video content, including timestamps and anonymized IDs.
    - Utilized Go's concurrency to efficiently handle data from video streaming endpoints, speeding up insights into viewer behavior and content engagement.
    - Extracted metrics such as viewership trends, peak times, and engagement levels, crucial for BI analyses that informed content strategy and business decisions.
    - Enabled the sales and executive teams to generate reports on content performance and viewer preferences, guiding marketing and content acquisition strategies.
  - Enhanced our understanding of viewer interactions, supporting strategic alignment and operational optimization.
  - **Stack**: Go, AWS S3, Docker, Fargate

### Other Roles
#### Senior Full Stack Engineer | January 1998 - January 2018
- Contributed significantly to various software development projects at companies like PolicyGenius, Jibe, OkCupid Labs, VMWare, and Microsoft using a variety of stacks including Ruby on Rails, Node.js and Java.

## Technical Skills
- **Languages:** TypeScript, Javascript, Ruby, Go, Bash
- **Cloud Providers:** AWS, some GCP
- **Frameworks and Libraries:**  React, NextJS, Remix, NestJS, Svelte, SvelteKit, Ruby on Rails
- **Infrastructure as Code:** AWS CDK, Terraform, CDKTF, Pulumi, Serverless Framework, Ansible
- **Databases:** PostgreSQL, MySQL, SQLite, DynamoDB, MongoDB, Redis, etcd, Elasticsearch
- **Containerization:** Docker, Kubernetes, EKS
- **CI/CD:** GitLab CI/CD, GitHub Actions, CircleCI, Jenkins
- **Distributed Systems:** Microservices Architectures, HA, Fault-tolerance & Reliability, Orchestration, Monitoring & Alerting, Service Mesh, Secrets Management
- **Monorepo Management:** NX, Turborepo, Lerna

## Certifications
- [Certified Kubernetes Administrator](https://www.credly.com/badges/fb25eaba-3561-49d2-8145-71eb075ac520/public_url)
- [Certified Kubernetes Application Developer](https://www.credly.com/badges/591ddb29-fe6d-4b36-ba62-b00f278b3a9f/public_url)
- [HashiCorp Certified: Terraform Associate (003)](https://www.credly.com/badges/8247b9fa-b89a-4728-83fa-1301d2dd137d/public_url)
- [AWS Certified Solutions Architect - Associate](https://www.credly.com/badges/ebdb09ae-1c1d-45b2-894a-0502d4e2b701/public_url)
- [AWS Certified Cloud Practitioner](https://www.credly.com/badges/96124598-47c7-4f5d-8951-f1a6f3064a0b/public_url)
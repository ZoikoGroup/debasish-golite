 const jobsData = [
  {
    id: 1,
    title: "SDE - Java",
    location: "mohali",
    technologies: ["Java", "Spring Boot", "Microservices", "MySQL"],
    shortDescription: "Build scalable backend systems using Java and Spring Boot.",
    description:
      "As an SDE - Java, you will work on designing, developing, and maintaining scalable backend services using Java and Spring Boot. You will collaborate with cross-functional teams, write clean and efficient code, and participate in code reviews while ensuring high performance and reliability of applications.",
  },
  {
    id: 2,
    title: "Java Full Stack Developer",
    location: "mohali",
    technologies: ["Java", "Spring Boot", "Angular", "REST API"],
    shortDescription: "Develop end-to-end web applications using Java and Angular.",
    description:
      "This role involves working on both backend and frontend components of enterprise applications. You will build REST APIs using Spring Boot and create responsive user interfaces using Angular while ensuring smooth integration between frontend and backend systems.",
  },
  {
    id: 3,
    title: "Backend Engineer - Spring Boot",
    location: "chandigarh",
    technologies: ["Java", "Spring Boot", "Hibernate", "PostgreSQL"],
    shortDescription: "Focus on backend APIs and database-driven applications.",
    description:
      "The Backend Engineer will be responsible for creating and optimizing RESTful APIs, managing databases, and implementing business logic using Spring Boot and Hibernate. Strong understanding of SQL and backend performance optimization is expected.",
  },
  {
    id: 4,
    title: "Software Engineer (Java)",
    location: "delhi",
    technologies: ["Java", "Spring", "JPA", "SQL"],
    shortDescription: "Work on enterprise-grade Java applications.",
    description:
      "You will contribute to the development of enterprise software solutions using Java and Spring frameworks. Responsibilities include writing maintainable code, debugging issues, and working closely with senior engineers to deliver high-quality solutions.",
  },
  {
    id: 5,
    title: "Java Microservices Developer",
    location: "mohali",
    technologies: ["Java", "Spring Boot", "Docker", "Kafka"],
    shortDescription: "Build distributed systems using Spring Boot microservices.",
    description:
      "This role focuses on building and maintaining microservices-based architectures. You will work with Spring Boot, containerization tools like Docker, and messaging systems such as Kafka to develop highly scalable services.",
  },
  {
    id: 6,
    title: "Junior SDE - Java",
    location: "chandigarh",
    technologies: ["Java", "Spring Boot", "Git"],
    shortDescription: "Entry-level SDE role focused on backend development.",
    description:
      "As a Junior SDE, you will assist in developing backend modules, fixing bugs, and learning best practices in software engineering. This role is ideal for developers looking to strengthen their Java and Spring Boot skills.",
  },
  {
    id: 7,
    title: "Full Stack Engineer (Java + React)",
    location: "bangalore",
    technologies: ["Java", "Spring Boot", "React", "REST API"],
    shortDescription: "Develop full stack applications with Java and React.",
    description:
      "You will design and implement REST APIs using Spring Boot and build interactive frontend components using React. The role requires a good understanding of both frontend and backend development practices.",
  },
  {
    id: 8,
    title: "Java API Developer",
    location: "mohali",
    technologies: ["Java", "Spring Boot", "REST API", "JWT"],
    shortDescription: "Design secure and scalable REST APIs.",
    description:
      "The Java API Developer will focus on creating secure, scalable, and high-performance REST APIs using Spring Boot. You will also implement authentication and authorization mechanisms using JWT.",
  },
  {
    id: 9,
    title: "Enterprise Java Developer",
    location: "chandigarh",
    technologies: ["Java", "Spring", "Hibernate", "Oracle"],
    shortDescription: "Develop enterprise applications using Java technologies.",
    description:
      "This role involves working on large-scale enterprise systems, integrating multiple modules, and ensuring data consistency. Experience with ORM frameworks and enterprise databases is required.",
  },
  {
    id: 10,
    title: "Java Application Developer",
    location: "mumbai",
    technologies: ["Java", "Spring Boot", "MySQL"],
    shortDescription: "Build and maintain Java-based applications.",
    description:
      "You will be responsible for developing Java-based applications, fixing production issues, and enhancing existing features. The role demands strong problem-solving skills and attention to detail.",
  },
  {
    id: 11,
    title: "Senior Java Developer",
    location: "mohali",
    technologies: ["Java", "Spring Boot", "System Design"],
    shortDescription: "Lead development of complex Java applications.",
    description:
      "As a Senior Java Developer, you will design application architecture, mentor junior developers, and ensure code quality. Strong experience in Spring Boot and system design is essential.",
  },
  {
    id: 12,
    title: "Java Web Developer",
    location: "delhi",
    technologies: ["Java", "Spring Boot", "HTML", "CSS"],
    shortDescription: "Develop Java-based web applications.",
    description:
      "This role focuses on building server-side logic using Java and Spring Boot while working closely with frontend developers to deliver complete web solutions.",
  },
  {
    id: 13,
    title: "SDE - Backend Systems",
    location: "chandigarh",
    technologies: ["Java", "Spring Boot", "Redis"],
    shortDescription: "Work on high-performance backend systems.",
    description:
      "You will develop backend systems that handle high traffic and large datasets. Experience with caching mechanisms like Redis and performance optimization is a plus.",
  },
  {
    id: 14,
    title: "Java Platform Engineer",
    location: "mohali",
    technologies: ["Java", "Spring Boot", "CI/CD"],
    shortDescription: "Build and maintain internal Java platforms.",
    description:
      "The Platform Engineer will focus on building reusable backend components and improving developer productivity through automation and CI/CD pipelines.",
  },
  {
    id: 15,
    title: "Java REST API Engineer",
    location: "bangalore",
    technologies: ["Java", "Spring Boot", "REST API"],
    shortDescription: "Develop RESTful services using Spring Boot.",
    description:
      "This role involves designing REST APIs, handling data validation, and ensuring API security and performance across different services.",
  },
  {
    id: 16,
    title: "Full Stack Java Engineer",
    location: "mohali",
    technologies: ["Java", "Spring Boot", "Angular", "MySQL"],
    shortDescription: "Work across frontend and backend using Java.",
    description:
      "You will develop complete web applications, from database design to UI development, using Java, Spring Boot, and Angular.",
  },
  {
    id: 17,
    title: "Java Integration Developer",
    location: "chandigarh",
    technologies: ["Java", "Spring Boot", "REST API"],
    shortDescription: "Integrate multiple systems using Java APIs.",
    description:
      "This role focuses on integrating third-party systems and internal services using REST APIs and Java-based backend solutions.",
  },
  {
    id: 18,
    title: "Associate SDE - Java",
    location: "mohali",
    technologies: ["Java", "Spring Boot", "DSA"],
    shortDescription: "Entry-level SDE role with strong Java focus.",
    description:
      "You will work on backend features, write clean code, and gradually take ownership of modules while strengthening your Java and problem-solving skills.",
  },
  {
    id: 19,
    title: "Java Cloud Backend Developer",
    location: "chandigarh",
    technologies: ["Java", "Spring Boot", "AWS"],
    shortDescription: "Build cloud-ready Java backend services.",
    description:
      "You will design and deploy backend services on cloud platforms using Java and Spring Boot, ensuring scalability, reliability, and security.",
  },
  {
    id: 20,
    title: "Product Engineer - Java",
    location: "mohali",
    technologies: ["Java", "Spring Boot", "Microservices"],
    shortDescription: "Develop product-focused backend features.",
    description:
      "As a Product Engineer, you will work closely with product teams to develop backend features that directly impact end users, using modern Java and microservices-based architectures.",
  },
];


export default jobsData;
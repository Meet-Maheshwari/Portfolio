import { ExternalLink, Github, Play } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button.jsx";

const projects = [
  {
    title: "MyPharma",
    description:
      "AI-Supported Pharmacy Platform with intelligent inventory management",
    longDescription:
      "A comprehensive pharmacy management system featuring an AI-powered symptom checker for medicine recommendations, a 500+ product catalog with seamless search, secure Razorpay payment integration, and scalable cloud deployment on Vercel with optimized performance. Built with modern web technologies for optimal performance",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Gemini AI",
      "Razorpay",
      "Zustand",
    ],
    liveUrl: "https://mypharma-psi.vercel.app/",
    githubUrl: "https://github.com/Meet-Maheshwari/MyPharma",
    featured: true,
  },
  {
    title: "FlowBit",
    description: "Real-Time Chat Application with advanced messaging features",
    longDescription:
      "A sophisticated real-time chat application built with Socket.io for instant messaging, featuring secure user authentication, real-time online presence indicators, typing status updates, file sharing, and a responsive design for seamless communication across devices.",
    technologies: [
      "React.js",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express.js",
      "JWT",
    ],
    githubUrl: "https://github.com/Meet-Maheshwari/Chat-App",
    featured: false,
  },
  {
    title: "AI Chatbot using Google Gemini",
    description:
      "Intelligent conversational AI powered by Google's Gemini model",
    longDescription:
      "An advanced AI chatbot leveraging Google's Gemini API for natural language processing. Features context-aware conversations, multi-turn dialogue support, and an intuitive interface for seamless user interaction.",
    technologies: [
      "Google AI Studio",
      "Node.js",
      "Express.js",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    githubUrl: "https://github.com/Meet-Maheshwari/AI_Chatbot",
    featured: false,
  },
  {
    title: "WanderNest",
    description:
      "Travel & Accommodation Platform for seamless booking experiences",
    longDescription:
      "A full-featured travel booking platform inspired by Airbnb, offering property listings, advanced search filters, booking management, user reviews, and integrated payment processing. Designed for both travelers and property owners.",
    technologies: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "EJS",
      "Bootstrap",
      "Mapbox API",
      "Razorpay",
      "Cloudinary",
    ],
    liveUrl: "https://wandernest-el6k.onrender.com/listings",
    githubUrl: "https://github.com/Meet-Maheshwari/WanderNest",
    featured: true,
  },
];

const teamProjects = [
  {
    title: "Last Mile Delivery Optimization",
    description:
      "Hackathon project for last mile delivery optimization with integrated ML clustering",
    longDescription:
      "Built a comprehensive last mile delivery optimization platform with three integrated layers. Personally engineered the core backend logic applying TSP (Travelling Salesman Problem) algorithm on ML-generated clusters of addresses. Designed complex route optimization algorithms and integrated Mapbox for interactive geospatial maps and Google Maps API for address geocoding. Selected among Top 250 teams across Indian universities for innovation and execution.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "TSP Algorithm",
      "Mapbox API",
      "Google Maps API",
      "MVC Architecture",
      "ML Integration",
    ],
    githubUrl: "https://github.com/Major-Web-Project/Last_Mile_Delivery",
    featured: true,
    teamProject: true,
  },
  {
    title: "Infinite Learning Platform",
    description:
      "Final year project - AI-powered smart learning platform with personalized roadmaps",
    longDescription:
      "Developed an AI-powered smart learning platform with frontend, backend, and ML layers. Personally responsible for the backend system, building structured AI-driven goal roadmaps for users based on strengths, experience, and time availability. Designed robust authentication & authorization using JWT + bcrypt, implemented MVC pattern, and integrated MongoDB for goal/task storage. Connected Google Gemini model for roadmap creation and AI detector to validate user-submitted tasks. Delivered a scalable platform that adapts personalized learning journeys dynamically.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini API",
      "JWT",
      "bcrypt",
      "MVC Architecture",
      "Django",
      "Python",
      "AI/ML",
    ],
    githubUrl: "https://github.com/Major-Web-Project/Major/tree/All-Done",
    featured: true,
    teamProject: true,
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Card
      className={`card-hover h-full ${
        project.featured ? "ring-2 ring-primary/20" : ""
      }`}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-semibold">
              {project.title}
              {project.featured && (
                <Badge className="ml-2 bg-primary/10 text-primary hover:bg-primary/20">
                  Featured
                </Badge>
              )}
            </CardTitle>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.longDescription}
        </p>

        {/* Technologies */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          {project.liveUrl && (
            <Button asChild className="flex-1" size="sm">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}

          <Button asChild variant="outline" className="flex-1" size="sm">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const TeamProjectCard = ({ project }) => {
  return (
    <Card className="card-hover h-full border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-semibold">
              {project.title}
              <Badge className="ml-2 bg-primary/10 text-primary hover:bg-primary/20">
                Team Project
              </Badge>
            </CardTitle>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.longDescription}
        </p>

        {/* Technologies */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <Button asChild variant="outline" className="flex-1" size="sm">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              View Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Team <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborative projects showcasing teamwork, backend leadership,
              and cross-functional integration with frontend and ML teams.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {teamProjects.map((project) => (
              <TeamProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Personal <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work spanning web development, AI
            integration, and full-stack applications
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">
            Other <span className="text-gradient">Projects</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button asChild size="lg" className="btn-hero">
            <a
              href="https://github.com/Meet-Maheshwari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

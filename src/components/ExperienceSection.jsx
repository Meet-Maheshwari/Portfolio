import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  ExternalLink,
  Eye,
  X,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";

const ExperienceSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const experience = {
    title: "Full Stack Web Developer Intern",
    company: "Bharat Intern",
    duration: "March 2024 - April 2024",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Built a full stack blog application with complete CRUD functionality for user-generated content",
      "Designed and implemented scalable backend data management using Node.js and MongoDB",
      "Collaborated with team members to identify and fix bugs, improving reliability and performance",
      "Enhanced platform usability by focusing on intuitive UI/UX design with EJS, Bootstrap, and CSS",
    ],
  };

  const certifications = [
    {
      title: "AWS Cloud Practitioner (Training Course)",
      issuer: "GeeksforGeeks",
      date: "2024",
      category: "Cloud Computing",
      file: "/certificates/aws-cloud.pdf", // put in /public/certificates
    },
    {
      title: "Full Stack Web Development (MERN)",
      issuer: "Apna College",
      date: "2024",
      category: "Web Development",
      file: "/certificates/web_development.pdf",
    },
    {
      title: "Data Structures and Algorithms with C++",
      issuer: "Apna College",
      date: "2023",
      category: "Programming",
      file: "/certificates/certificate.pdf",
    },
    {
      title: "Computer Networks & Internet Protocols",
      issuer: "NPTEL, IIT Kharagpur",
      date: "2023",
      category: "Networking",
      file: "/certificates/Computer Networks And Internet Protocol.pdf",
    },
  ];

  const achievements = [
    {
      title: "100 Days of Code Challenge",
      description:
        "Successfully completed the 100 Days of Code challenge, building projects daily and maintaining consistent learning",
      icon: "🏆",
    },
    {
      title: "LeetCode Problem Solver",
      description:
        "Solved 350+ problems on LeetCode, strengthening core concepts in data structures, algorithms, and problem-solving",
      icon: "💻",
    },
    {
      title: "Cloud & Deployment Experience",
      description:
        "Deployed scalable full-stack applications using Vercel, Render, and MongoDB Atlas with CI/CD workflows",
      icon: "☁️",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience, certifications, and notable achievements in
            my development journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Experience */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold">
                      {experience.title}
                    </CardTitle>
                    <p className="text-lg text-primary font-medium">
                      {experience.company}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                      <Badge variant="secondary">{experience.type}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-4">Key Achievements:</h4>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    setSelectedCertificate({
                      title: `${experience.title} Certificate`,
                      issuer: experience.company,
                      file: "/certificates/Internship_Certificate.pdf", // put your actual file here
                    })
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition mt-4"
                >
                  <Eye className="h-4 w-4" />
                  View Certificate
                </button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center space-x-3">
                  <Award className="h-6 w-6 text-primary" />
                  <span>Notable Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div>
                        <h4 className="font-medium mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              <span className="text-gradient">Certifications</span>
            </h3>
            {certifications.map((cert, index) => (
              <Card
                key={index}
                onClick={() => setSelectedCertificate(cert)}
                className="card-hover cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h4 className="font-medium leading-tight">{cert.title}</h4>
                    <p className="text-sm text-primary font-medium">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {cert.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {cert.date}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                      <p className="text-xs text-muted-foreground hover:text-primary transition-colors">
                        Click to view certificate
                      </p>
                      <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="relative bg-card p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <button
              className="absolute top-3 right-3 p-2 rounded-full bg-background hover:bg-muted"
              onClick={() => setSelectedCertificate(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-xl font-semibold mb-2">
              {selectedCertificate.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Issued by {selectedCertificate.issuer}
            </p>
            <iframe
              src={selectedCertificate.file}
              className="w-full h-[500px] rounded-lg border"
              title={selectedCertificate.title}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;

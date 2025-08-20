import { Briefcase, Calendar, MapPin, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ExperienceSection = () => {
  const experience = {
    title: "Full Stack Web Developer Intern",
    company: "Bharat Intern",
    duration: "March 2024 - April 2024",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Developed and deployed 3 full-stack web applications using MERN stack",
      "Implemented responsive design principles for optimal user experience across devices",
      "Collaborated with a team of 5 developers using Git for version control",
      "Optimized database queries resulting in 40% faster page load times",
      "Gained hands-on experience with modern development workflows and best practices"
    ]
  }

  const certifications = [
    {
      title: "AWS Cloud Practitioner (Training Course)",
      issuer: "GeeksforGeeks",
      date: "2024",
      category: "Cloud Computing"
    },
    {
      title: "Full Stack Web Development (MERN)",
      issuer: "Apna College",
      date: "2024",
      category: "Web Development"
    },
    {
      title: "Data Structures and Algorithms with C++",
      issuer: "Apna College",
      date: "2023",
      category: "Programming"
    },
    {
      title: "Computer Networks & Internet Protocols",
      issuer: "NPTEL, IIT Kharagpur",
      date: "2023",
      category: "Networking"
    }
  ]

  const achievements = [
    {
      title: "100 Days of Code Challenge",
      description: "Successfully completed the 100 Days of Code challenge, building projects daily and maintaining consistent learning",
      icon: "🏆"
    },
    {
      title: "LeetCode Problem Solver",
      description: "Active on LeetCode with consistent problem-solving practice in data structures and algorithms",
      icon: "💻"
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to various open-source projects and maintained personal repositories with clean, documented code",
      icon: "🌟"
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience, certifications, and notable achievements in my development journey
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
                    <p className="text-lg text-primary font-medium">{experience.company}</p>
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
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
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
                        <h4 className="font-medium mb-1">{achievement.title}</h4>
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
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h4 className="font-medium leading-tight">{cert.title}</h4>
                    <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {cert.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Skills Summary */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Quick Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium mb-2">Problem Solving</div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: "90%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Full-Stack Development</div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: "85%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Team Collaboration</div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: "88%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
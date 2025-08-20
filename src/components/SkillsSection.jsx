import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  // Programming Languages
  { name: "JavaScript", level: 90, category: "Languages" },
  { name: "TypeScript", level: 85, category: "Languages" },
  { name: "Python", level: 80, category: "Languages" },
  { name: "C++", level: 85, category: "Languages" },
  { name: "Java", level: 75, category: "Languages" },
  
  // Frontend
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Redux", level: 75, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express.js", level: 85, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Backend" },
  { name: "MySQL", level: 75, category: "Backend" },
  { name: "Socket.io", level: 80, category: "Backend" },
  
  // Cloud & Tools
  { name: "AWS", level: 70, category: "Cloud & Tools" },
  { name: "Git/GitHub", level: 90, category: "Cloud & Tools" },
  { name: "Docker", level: 65, category: "Cloud & Tools" },
  { name: "Postman", level: 85, category: "Cloud & Tools" },
  { name: "VS Code", level: 95, category: "Cloud & Tools" },
]

const SkillBar = ({ skill, shouldAnimate }) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => {
        setWidth(skill.level)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [shouldAnimate, skill.level])

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const categories = [...new Set(skills.map(skill => skill.category))]

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card key={category} className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center space-x-2">
                  <span className="text-primary">{category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      shouldAnimate={isVisible}
                    />
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Additional <span className="text-gradient">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Structures & Algorithms",
              "Computer Networks", 
              "Operating Systems",
              "Database Management",
              "API Development",
              "Real-time Applications",
              "AI/ML Basics",
              "Responsive Design",
              "Version Control",
              "Problem Solving",
              "Team Collaboration",
              "Agile Methodology"
            ].map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
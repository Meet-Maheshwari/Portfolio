import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.jsx";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a strong foundation in computer science
            and a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground">
                I'm a dedicated Full-Stack Developer with expertise in the MERN
                stack, passionate about building scalable web applications and
                solving complex algorithmic problems. My journey began with a
                fascination for technology and has evolved into a comprehensive
                skill set spanning frontend development, backend architecture,
                and cloud technologies.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                With hands-on experience in modern frameworks like React,
                Node.js, and expertise in databases and cloud platforms, I enjoy
                taking on challenging projects that push the boundaries of
                what's possible on the web. I'm also deeply interested in AI
                technologies and their practical applications in solving
                real-world problems.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">
                  Years Learning
                </div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-primary">
                          B.Tech in Computer Science & Engineering (AI)
                        </h4>
                        <p className="text-muted-foreground">
                          Parul University - Vadodara
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>2022 - 2026</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>Gujarat, India</span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success/10 text-success">
                            CGPA: 8.40
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Details */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">Gujarat, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-medium">
                      meetmaheshwari2107@gmail.com
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone</span>
                    <span className="font-medium">+91 8200348820</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-medium">Virtual Internship</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

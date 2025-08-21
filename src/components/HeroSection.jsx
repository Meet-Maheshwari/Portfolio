import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 hero-gradient opacity-90" />

      {/* Floating Elements */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-float" />
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-primary rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-5 h-5 bg-primary rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="text-center">
          {/* Main Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-neutral-900 dark:text-white">Meet</span>{" "}
              <span className="text-blue-600 dark:text-gradient">
                Maheshwari
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-800 dark:text-white/90 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer | DSA Enthusiast | AI Explorer
            </p>

            <p className="text-lg text-neutral-700 dark:text-white/80 mb-12 max-w-2xl mx-auto">
              Passionate about building innovative web applications and solving
              complex problems with modern technologies. Specialized in MERN
              stack and cloud solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                asChild
                className="btn-hero bg-white text-primary hover:bg-white/90"
              >
                <a href="#projects">View My Work</a>
              </Button>

              <Button
                asChild
                className="btn-outline border-white text-white hover:bg-white hover:text-primary"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="w-12 h-12 text-neutral-900 dark:text-white hover:text-primary hover:bg-white/20"
              >
                <a
                  href="https://github.com/Meet-Maheshwari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="w-12 h-12 text-neutral-900 dark:text-white hover:text-primary hover:bg-white/20"
              >
                <a
                  href="https://www.linkedin.com/in/meet-maheshwari-80a639254/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="w-12 h-12 text-neutral-900 dark:text-white hover:text-primary hover:bg-white/20"
              >
                <a href="mailto:meetmaheshwari2107@gmail.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="w-12 h-12 text-neutral-900 dark:text-white hover:text-primary hover:bg-white/20"
              >
                <a href="/resume.pdf" download>
                  <Download className="h-6 w-6" />
                </a>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="animate-bounce">
                <ArrowDown className="h-6 w-6 text-neutral-800 dark:text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageSquare,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Label } from "@/components/ui/label.jsx";
import { useToast } from "@/hooks/use-toast.js";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await response.json();
      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description:
            data.error || "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "meetmaheshwari2107@gmail.com",
      href: "mailto:meetmaheshwari2107@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8200348820",
      href: "tel:+918200348820",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujarat, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Meet-Maheshwari",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/meet-maheshwari-80a639254/",
      color: "hover:text-blue-600",
    },
    {
      icon: MessageSquare,
      label: "LeetCode",
      href: "https://leetcode.com/u/Meet_21/",
      color: "hover:text-orange-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project ideas or explore potential collaboration
            opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Let's Start a Conversation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new opportunities,
                  collaborating on exciting projects, or simply connecting with
                  fellow developers. Whether you have a project in mind, need
                  technical consultation, or just want to say hello, I'd love to
                  hear from you!
                </p>

                {/* Contact Details */}
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href !== "#" ? (
                          <a
                            href={item.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with me:
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        asChild
                        variant="ghost"
                        size="icon"
                        className={`w-12 h-12 ${social.color} transition-colors`}
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    className="min-h-[120px] resize-none"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-hero"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

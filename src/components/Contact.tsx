
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "muhammadabdulraheem000",
      href: "mailto:muhammadabdulraheem000@gmail.com",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/abdulraheem",
      href: "https://www.linkedin.com/in/abdulraheemishafaq/",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/raheemishfaq",
      href: "https://github.com/raheemashfaq",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50 ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or any inquiries.
        </p>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-background dark:bg-dark-bg rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="mb-4 text-primary">{link.icon}</div>
              <h3 className="font-semibold mb-2">{link.label}</h3>
              <p className="text-sm text-foreground/80">{link.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

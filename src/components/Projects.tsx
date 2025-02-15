
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      image:"/ecommeerce.jpeg",
      title: "E-Commerce Store",
      description: "A fully responsive online store with product filtering, cart management, and checkout features.",
      techStack: ["React.js", "Redux", "Tailwind CSS", "Firebase"],
      demoLink: "https://raheemcommerce.vercel.app/",
      githubLink: "https://github.com/raheemashfaq/e-commerce",
    },
    {
      image:"/food.jpeg",
      title: "Food Delivery App",

      description: "A user-friendly food ordering platform with real-time order tracking.",
      techStack: ["React.js", "MUI", "Node.js", "Express.js"],
      demoLink: "https://raheemfoods.vercel.app/",
      githubLink: "https://github.com/raheemashfaq/food-delivery-platform",
    },
    {
      image:"/image copy.png",
      title: "Payzen",
      description: "A seamless payment processing app designed for secure and fast transactions.",
      techStack: ["React.js", "Next.js", "MUI"],
      demoLink: "https://raheempayzen.vercel.app/",
      githubLink: "https://github.com/raheemashfaq/payzen",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="bg-card dark:bg-dark-bg p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt="" />
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-foreground/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button
                  variant="default"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => window.open(project.demoLink, "_blank")}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => window.open(project.githubLink, "_blank")}
                >
                  <Github className="h-4 w-4" />
                  View Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

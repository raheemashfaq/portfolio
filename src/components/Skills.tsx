
import { Code2, Palette, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Redux Toolkit", "Next.js"],
    },
    {
      title: "UI Libraries",
      icon: <Palette className="h-6 w-6" />,
      skills: ["MUI", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Tools & Version Control",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "GitHub", "Vercel", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50 ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-background dark:bg-dark-bg p-6 rounded-lg shadow-lg ">
              <div className="flex items-center gap-3 mb-4 ">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-foreground/80">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

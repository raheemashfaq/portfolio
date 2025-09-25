
const About = () => {
  return (
    <section id="about" className="py-20 bg-background dark:bg-dark-bg">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
            src="/img.jpeg"
            alt="Abdul Raheem"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-lg text-foreground/80 leading-relaxed">
         I’m Abdul Raheem, a passionate Frontend Developer and MERN Stack enthusiast.
I craft modern, responsive, and user-friendly web applications with React.js.
With skills in JavaScript, Tailwind CSS, MUI, Node.js, Express, and MongoDB,
I love solving complex problems and turning ideas into impactful digital solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;

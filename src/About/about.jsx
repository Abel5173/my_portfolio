import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function About() {

  const codeString = `
class AbelZeleke {
  // I would love to level up my skills.
  // My skills are continuously expanding.
  constructor() {
    this.name = 'Abel Zeleke';
    this.email = 'abelzeleke5173@gmail.com';
  }
  workExperience() {
    return [
      { '2022-now' : 'Junior Full-stack Developer' },
      { 'March 2023- June 2023' : 'Intern at AppDiv System Software Development' }
    ];
  }
  education() {
    return [
      { '2019/20-2023/24': 'Wolkite University Bachelor of Science in Software Engineering' },
      { '2022-2024': 'ALX Software Engineering Program with specialization in Back-end' }
    ];
  }
  skills() {
    return [ 'HTML/CSS/JS', 'Node.js', 'Tailwind', 'Firebase', 'MySQL/MongoDB/ORM', 
    'Illustrator', 'UX/UI', 'TypeScript', 'NestJS', 'NextJS' ];
  }
}`;

  return (
    <section id="about" className="flex flex-col items-center justify-center min-h-screen bg-slate-900 p-4">
      <h1 className="font-extralight font-mono text-teal-200">About /&gt;</h1>
      <div className="relative bg-gradient-to-b from-blue-950 to-transparent opacity-80 text-teal-200 p-6 rounded-lg shadow-lg w-screen max-w-2xl">
        <div className="absolute top-2 right-2 flex items-center gap-2">
          <div className="rounded-full h-3 w-3 bg-yellow-200"></div>
          <div className="rounded-full h-3 w-3 bg-green-500"></div>
          <div className="rounded-full h-3 w-3 bg-red-500"></div>
        </div>
        <SyntaxHighlighter
        className="text-lg"
          language="javascript"
          style={vscDarkPlus}
          showLineNumbers={true}
          customStyle={{
            backgroundColor: "transparent",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}

export default About;

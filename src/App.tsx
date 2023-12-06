import ContactForm from "./components/ContactForm/ContactForm";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Title from "./components/Title/Title";
import Skill from "./components/Skill/Skill";
import { skills } from "./data/skills";
import { projects } from "./data/projects";

function App() {
	return (
		<div className='flex flex-col min-h-screen w-full items-center pt-8 px-16 pb-32 bg-primary'>
			<div className='max-w-[1440px]'>
				<Navbar />
				<Header />
				<Title title='Skills' />
				<div className='skillsSection flex flex-wrap gap-3 w-full mb-20 justify-center lg:justify-start'>
					{skills.map((skill) => (
						<Skill
							name={skill.name}
							icon={skill.icon}
							level={skill.level}
						/>
					))}
				</div>
				<Title title='Projects' />
				<div className='projectSection flex flex-wrap lg:flex-nowrap gap-3 w-full mb-20'>
					{projects.map((project, index) => (
						<ProjectCard
							id={0 + (index + 1).toString()}
							name={project.name}
							preview={project.img}
							technologies={project.technos}
							description={project.description}
						/>
					))}
				</div>
				<Title title='Contact' />
				<ContactForm />
			</div>
		</div>
	);
}

export default App;

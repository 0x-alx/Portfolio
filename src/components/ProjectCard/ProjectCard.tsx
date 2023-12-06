import { FC } from "react";

interface ProjectCardProps {
	name: string;
	preview: string;
	technologies: string[];
	description: string;
	id: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
	id,
	name,
	preview,
	technologies,
	description,
}) => {
	return (
		<div className='w-full lg:w-1/3 bg-secondary rounded-xl p-8 relative h-fit'>
			<div className='flex gap-2 text mb-4'>
				<span className='text-[#FCFFFA] text-2xl font-bold'>{id}</span>
				<span className='text-tertiary text-sm uppercase'>{name}</span>
			</div>
			<div className='p-2 bg-[#FCFFFA] rounded mb-4'>
				<img
					src={preview}
					alt='Project preview'
				/>
			</div>
			<div>
				<ul className='flex gap-2 flex-wrap '>
					{technologies.map((technology) => (
						<li className='bg-tertiary text-secondary text-sm font-bold p-1 rounded'>
							{technology}
						</li>
					))}
				</ul>
			</div>
			<div className='mt-4'>
				<span className='text-[#FCFFFA]'>{description}</span>
			</div>
		</div>
	);
};

export default ProjectCard;

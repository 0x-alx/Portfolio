import { FC } from "react";

interface SkillProps {
	name: string;
	icon: string;
	level: string;
}

const Skill: FC<SkillProps> = ({ name, icon, level }) => {
	return (
		<div className='flex flex-col items-center bg-secondary rounded text-[#FCFFFA] px-4 pb-4'>
			<span className='w-2 h-[16px] bg-primary'></span>
			<div className='flex justify-center items-center rounded-full border-8 border-primary h-28 w-28 bg-[#FCFFFA]'>
				<img
					src={icon}
					alt=''
					width={64}
				/>
			</div>
			<div className='flex flex-col items-center'>
				<span className='font-bold'>{name}</span>
				<span>{level}</span>
			</div>
		</div>
	);
};

export default Skill;

import { FC } from "react";

interface TitleProps {
	title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
	return (
		<div className='flex w-full items-center gap-4 mb-8'>
			<h2 className='text-[#FCFFFA] text-4xl font-["Outfit"] font-bold uppercase leading-12'>
				{title}
			</h2>
			<span className='w-full h-1 bg-secondary'></span>
		</div>
	);
};

export default Title;

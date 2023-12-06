import { FaLocationDot } from "react-icons/fa6";
import Avatar from "../../assets/avatar.jpg";

const Header = () => {
	return (
		<div className='gap-14 lg:gap-0 flex flex-wrap w-full mb-20 justify-around'>
			<div className='leftPanel flex flex-col justify-center w-fit lg:w-1/2'>
				<div className='mb-16'>
					<span className='text-tertiary tracking-[0.3rem] uppercase'>
						Web Developer
					</span>
				</div>

				<h1 className='text-[#FCFFFA] text-5xl lg:text-6xl font-["Outfit"] font-bold uppercase leading-12 mb-8'>
					Alex <br /> Charbonneyre
				</h1>
				<span className='text-[#FCFFFA] text-lg'>
					I'm a young web developer driven by a passion for code and
					innovation. <br /> My mission: to turn lines of code into
					exceptional user experiences.
				</span>
				<div className='flex gap-2 mt-4 text-left justify-start'>
					<FaLocationDot className='text-tertiary text-2xl' />
					<span className='text-[#FCFFFA] text-lg'>
						Aix-en-Provence, France
					</span>
				</div>
			</div>
			<div className='rightPanel'>
				<div className='border-4 border-secondary p-1 rounded'>
					<div className='border-2 border-secondary p-3 rounded'>
						<div className='border-4 border-secondary p-3 rounded-full'>
							<img
								src={Avatar}
								alt='alex.jpg'
								className=' lg:w-[450px] lg:h-[450px] rounded-3xl'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

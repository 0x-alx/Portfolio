import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
	return (
		<div className='inline-flex justify-between items-center h-[80px] w-full border-2 border-secondary rounded-lg overflow-hidden pr-8 text-[#FCFFFA] font-["Outfit"] mb-20'>
			<div className='w-full max-w-[240px] sm:max-w-[280px] h-full inline-flex'>
				<div className='w-16 h-full bg-[#F3E9E6] border-r-2 border-primary'></div>
				<div className='relative min-w-[200px] w-full h-full bg-[#FCFFFA]'>
					<div className='absolute inline-flex items-center -left-[20px] top-[13px] gap-2'>
						<div className='flex justify-center items-center h-[50px] w-[50px] bg-primary rounded'>
							<span className='text-2xl font-bold'>AC</span>
						</div>
						<div className='text-primary text-sm font-bold uppercase'>
							<p>Alex</p>
							<p>Charbonneyre</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<ul className='inline-flex gap-2 [&>*]:cursor-pointer'>
					<li className='flex justify-center items-center bg-secondary rounded-full w-10 h-10'>
						<a
							href='https://github.com/0x-alx'
							target='_blank'
							rel='noreferrer'
						>
							<FaGithub className='h-[24px] w-[24px]' />
						</a>
					</li>
					<li className='flex justify-center items-center bg-secondary rounded-full w-10 h-10'>
						<a
							href='https://www.linkedin.com/in/alex-chrb/'
							target='_blank'
							rel='noreferrer'
						>
							<FaLinkedin className='h-[24px] w-[24px]' />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

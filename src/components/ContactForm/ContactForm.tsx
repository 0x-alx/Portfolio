import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import animationData from "../../assets/mail-animation.json";

const ContactForm = () => {
	const form = useRef(null);
	const [sendingSuccess, setSendingSuccess] = React.useState(false);
	const lottieRef = useRef<any>(null);

	useEffect(() => {
		if (lottieRef.current) {
			lottieRef.current.goToAndStop(60, true);
		}
	}, []);

	useEffect(() => {
		if (lottieRef.current && sendingSuccess) {
			lottieRef.current.play();
		}
	}, [sendingSuccess]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (e: any) => {
		e.preventDefault;

		if (!form.current) return;

		emailjs
			.sendForm(
				"service_4mdlhun",
				"template_t112ad9",
				form.current,
				"cN8JYCaOjbFqH4zqJ"
			)
			.then(
				() => {
					lottieRef.current && lottieRef.current.play();
					setSendingSuccess(true);
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	console.log(errors);

	return (
		<div className='flex w-full items-center'>
			<form
				ref={form}
				onSubmit={handleSubmit(onSubmit)}
				className='w-full lg:w-2/3 flex flex-col gap-3 bg-secondary rounded-lg p-8 text-lg text-primary  font-["Outfit"] h-fit'
			>
				<div className='flex gap-3'>
					<input
						type='text'
						placeholder='First name'
						{...register("first_name", {
							required: true,
							maxLength: 80,
						})}
						className='rounded h-12 w-full bg-[#FCFFFA] border-2 border-primary px-2 placeholder:text-primary focus:border-[#FCFFFA] outline-none'
					/>
					<input
						type='text'
						placeholder='Last name'
						{...register("last_name", {
							required: true,
							maxLength: 100,
						})}
						className='rounded h-12 w-full bg-[#FCFFFA] border-2 border-primary px-2 placeholder:text-primary focus:border-[#FCFFFA] outline-none'
					/>
				</div>

				<input
					type='email'
					placeholder='Email'
					{...register("email", {
						required: true,
						pattern: /^\S+@\S+$/i,
					})}
					className='rounded h-12 bg-[#FCFFFA] border-2 border-primary px-2 placeholder:text-primary focus:border-[#FCFFFA] outline-none'
				/>
				<textarea
					placeholder='Type your text here...'
					{...register("message", {})}
					className='rounded bg-[#FCFFFA] border-2 border-primary px-2 placeholder:text-primary focus:border-[#FCFFFA] outline-none'
				/>

				<input
					value='Send'
					type='submit'
					className='bg-[#FCFFFA] font-bold text-primary rounded w-fit cursor-pointer px-4 py-1 self-end '
				/>
			</form>
			<div className='hidden lg:flex justify-center w-1/3 h-[292px]'>
				<Lottie
					lottieRef={lottieRef}
					animationData={animationData}
					autoplay
					loop={false}
					className='h-full '
				/>
			</div>
			;
		</div>
	);
};

export default ContactForm;

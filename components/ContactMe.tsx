import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

function ContactMe({ }: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:adamsmithetc@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

    return (
        <div className='h-screen flex relative flex-col  text-center md:text-left md:flex-row max-w-7xl px-10 pb-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className='flex flex-col space-y-1 pt-20'>
                <h4 className='text-3xl font-semibold text-center pb-5'>
                    {/* I&apos;ve got just what you need. {" "} */}
                    <span className='decoration-[#F7AB0A]/50 underline'>Let&apos;s talk about it.</span>
                </h4>
                <div className='space-y-5'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>503-975-6868</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>adamsmithetc@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>Hood River, Oregon</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-0.5 w-auto pb-10'>
                    <div className='flex'>
                        <input {...register('name')} placeholder='Name' className='contactInput w-80' type="text" />
                    </div>
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-[#00f5d4] py-5 px-10 rounded-md text-black font-bold text-lg'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe
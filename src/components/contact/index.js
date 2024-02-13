"use client"
import { useState } from "react"
import { Bio } from "../constants"
import { IoRocketSharp } from "react-icons/io5";
import CustomButton from "../custom-button";
import { sendEmail } from "@/app/api/sendEmail/route";
import { toast } from "react-hot-toast"

export default function Contact() {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSendMail = async (e) => {
        e.preventDefault()
        try {
            const data = await sendEmail(email, name, subject, message)
            setEmail("")
            setName("")
            setSubject("")
            setMessage("")
            if (data.status === 200) {
                toast.success(`Hey ${name}! Email sent succesfully`)
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong!')
        }
    }
    return (
        <div id="contact" className="bg-[#1C1D2A] pt-16 pb-10">
            <div className='w-full container mx-auto max-w-6xl text-white'>
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="text-white text-4xl font-medium">Contact</div>
                    <div className="text-[#b1b2b3] text-center max-w-[600px] text-sm sm:text-lg">{Bio.descriptionContact}</div>
                    <form onSubmit={handleSendMail} className="bg-[#191924] flex flex-col max-w-[300px] sm:min-w-[600px] p-8 gap-3 items-center rounded-xl">
                        <div className="text-2xl font-semibold text-[#F2F3F4] flex gap-2">Email Me <IoRocketSharp size={25} /></div>
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email"
                            className="bg-transparent w-full outline-none border border-solid border-[#b1b2b3] px-3 py-4 rounded-xl focus:border-[#854CE6] placeholder:text-[#F2F3F4] placeholder:text-lg placeholder:font-thin"
                        />
                        <input
                            type="text"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            className="bg-transparent w-full outline-none border border-solid border-[#b1b2b3] px-3 py-4 rounded-xl focus:border-[#854CE6] placeholder:text-[#F2F3F4] placeholder:text-lg placeholder:font-thin"
                        />
                        <input
                            type="text"
                            value={subject}
                            required
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Your Subject"
                            className="bg-transparent w-full outline-none border border-solid border-[#b1b2b3] px-3 py-4 rounded-xl focus:border-[#854CE6] placeholder:text-[#F2F3F4] placeholder:text-lg placeholder:font-thin"
                        />
                        <textarea
                            value={message}
                            required
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your Message"
                            className="bg-transparent w-full h-40 outline-none border border-solid border-[#b1b2b3] px-3 py-4 rounded-xl focus:border-[#854CE6] placeholder:text-[#F2F3F4] placeholder:text-lg placeholder:font-thin"
                        />
                        <CustomButton title='Submit' width="200px" />
                    </form>
                </div>
            </div>
        </div>
    )
}
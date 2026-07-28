import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Mail, CheckCircle2 } from 'lucide-react';
import { useForm } from '@formspree/react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: ''
    });

    const [state, handleSubmit] = useForm("xaqdzlzp");
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (formErrors[name]) setFormErrors({ ...formErrors, [name]: '' });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
        if (!formData.comment.trim()) errors.comment = "Message is required";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) await handleSubmit(e);
    };

    useEffect(() => {
        if (state.succeeded) {
            setFormData({ name: '', email: '', comment: '' });
        }
    }, [state.succeeded]);

    return (
        <section
            id="contactSection"
            className="relative bg-white text-[#08060d] py-16 sm:py-24 overflow-hidden select-none border-t border-gray-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* 3-Column Layout: Portrait | Form | Socials */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* LEFT COLUMN: Headshot (Hidden on mobile) */}
                    <div className="hidden lg:block lg:col-span-4 justify-self-start">
                        <div className="w-[280px] h-[373px] bg-gray-50 border border-gray-100 shadow-md overflow-hidden relative group">
                            <img
                                src="/profile.jpeg"
                                alt="Preet Gusain"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                            />
                        </div>
                    </div>

                    {/* MIDDLE COLUMN: Form and Title */}
                    <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tight mb-8 lg:mb-10 text-left text-[#08060d] leading-none">
                            Let’s Talk
                        </h2>

                        <AnimatePresence mode="wait">
                            {state.succeeded ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    className="flex items-start gap-4 p-5 bg-green-50 border border-green-200 rounded-xl text-green-800"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-base mb-1">Message Sent Successfully!</h4>
                                        <p className="text-sm opacity-90">Thank you for reaching out. I will respond to your inquiry within 12 hours.</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.form
                                    onSubmit={onFormSubmit}
                                    className="space-y-7 text-left"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {/* Name Field */}
                                    <div className="relative border-b border-gray-300 focus-within:border-[#08060d] transition-colors py-2">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Name"
                                            className="w-full bg-transparent border-none outline-none text-[#08060d] text-base placeholder:text-gray-400 font-medium"
                                        />
                                        {formErrors.name && (
                                            <p className="text-red-600 text-xs font-bold mt-1.5 uppercase tracking-wide">
                                                {formErrors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div className="relative border-b border-gray-300 focus-within:border-[#08060d] transition-colors py-2">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Email Address"
                                            className="w-full bg-transparent border-none outline-none text-[#08060d] text-base placeholder:text-gray-400 font-medium"
                                        />
                                        {formErrors.email && (
                                            <p className="text-red-600 text-xs font-bold mt-1.5 uppercase tracking-wide">
                                                {formErrors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div className="relative border-b border-gray-300 focus-within:border-[#08060d] transition-colors py-2">
                                        <textarea
                                            id="comment"
                                            name="comment"
                                            value={formData.comment}
                                            onChange={handleInputChange}
                                            placeholder="Message"
                                            rows="1"
                                            className="w-full bg-transparent border-none outline-none text-[#08060d] text-base placeholder:text-gray-400 font-medium resize-none"
                                            style={{ overflow: "hidden" }}
                                            onInput={(e) => {
                                                e.target.style.height = "auto";
                                                e.target.style.height = e.target.scrollHeight + "px";
                                            }}
                                        />
                                        {formErrors.comment && (
                                            <p className="text-red-600 text-xs font-bold mt-1.5 uppercase tracking-wide">
                                                {formErrors.comment}
                                            </p>
                                        )}
                                    </div>

                                    {/* Action Button */}
                                    <div className="pt-4 flex justify-start">
                                        <button
                                            type="submit"
                                            disabled={state.submitting}
                                            className="px-12 py-3.5 border border-[#08060d] bg-transparent text-[#08060d] font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#08060d] hover:text-white disabled:opacity-50 active:scale-98 cursor-pointer"
                                        >
                                            {state.submitting ? "Sending..." : "Send"}
                                        </button>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* RIGHT COLUMN: Vertical Social Actions (Horizontal row on mobile) */}
                    <div className="col-span-1 lg:col-span-1 lg:justify-self-end mt-6 lg:mt-0">
                        <div className="flex flex-row lg:flex-col gap-4 justify-center items-center">
                            {[
                                { icon: Linkedin, link: 'https://www.linkedin.com/in/preet-gusain-986b022a5/' },
                                { icon: Github, link: 'https://github.com/preetcoder12' },
                                { icon: Mail, link: 'mailto:preetgusain84@gmail.com' }
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 transition-all duration-300 hover:border-[#08060d] hover:bg-[#08060d] hover:text-white active:scale-95"
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* Centered Footer */}
                <div className="w-full text-center mt-20 pt-8 border-t border-gray-100">
                    <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide uppercase">
                        © 2026 Preet Gusain
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Contact;
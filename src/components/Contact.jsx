import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle, XCircle, Loader2, Linkedin, Github } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: ''
    });

    const [state, handleSubmit] = useForm("xaqdzlzp");
    const [formErrors, setFormErrors] = useState({});

    const { ref: animationRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

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
        if (state.succeeded) setFormData({ name: '', email: '', comment: '' });
    }, [state.succeeded]);

    return (
        <section id="contactSection" className="relative py-20 lg:py-32 bg-[#020617] text-white overflow-hidden font-sans">
            {/* Ultra-Premium Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-violet-600/20 rounded-full blur-[140px]" />
                <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-fuchsia-600/10 rounded-full blur-[100px] animate-bounce" style={{ animationDuration: '8s' }} />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 max-w-6xl">
                {/* Modern Header Section */}
                <motion.div
                    className="text-center mb-16 lg:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.span
                        className="inline-block px-5 py-2 mb-6 text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        Contact Me
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
                        Got a vision? Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-500 to-fuchsia-500">spark</span> it.
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed px-4">
                        Whether it's a bold new startup or a complex enterprise app, I'm ready to bring your ideas to life with precision and style.
                    </p>
                </motion.div>

                <div ref={animationRef} className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                    {/* Interactive Contact Sidebar */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-6 md:p-8 rounded-[2.5rem] bg-indigo-500/5 border border-indigo-500/10 backdrop-blur-sm group hover:border-indigo-500/30 transition-all duration-500"
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
                                <div className="w-16 h-16 shrink-0 rounded-[1.25rem] bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-indigo-500/10">
                                    <Mail className="w-8 h-8 text-indigo-400 group-hover:text-white" />
                                </div>
                                <div className="w-full">
                                    <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Drop me a line</h4>
                                    <a href="mailto:preetgusain84@gmail.com" className="text-lg md:text-xl font-bold hover:text-indigo-400 transition-colors block break-all sm:break-normal">
                                        preetgusain84@gmail.com
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { icon: Linkedin, label: 'LinkedIn', color: 'blue', link: 'https://www.linkedin.com/in/preet-gusain-986b022a5/' },
                                { icon: Github, label: 'Personal', color: 'indigo', link: 'https://github.com/preetcoder12' },
                                { icon: Github, label: 'Org', color: 'fuchsia', link: 'https://github.com/preetgusain' }
                            ].map((item, idx) => (
                                <motion.a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                    className={`p-4 md:p-6 rounded-[1.5rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center gap-3 hover:border-${item.color}-500/30 transition-all duration-500 group`}
                                >
                                    <item.icon className={`w-6 h-6 md:w-8 md:h-8 text-gray-400 group-hover:text-${item.color}-400 group-hover:scale-110 transition-all duration-500`} />
                                    <span className="text-[10px] md:text-xs font-black tracking-widest opacity-60 group-hover:opacity-100 uppercase">{item.label}</span>
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-600/20 to-violet-700/20 border border-indigo-500/20 relative overflow-hidden group"
                        >
                            <div className="relative z-10 text-center sm:text-left">
                                <h3 className="text-2xl font-black mb-3 italic bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-violet-300">Fast Response</h3>
                                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                    I'm globally active. Expect a reply within <span className="text-indigo-300 font-bold">12 hours</span>.
                                </p>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-[60px] group-hover:bg-indigo-500/20 transition-all duration-700" />
                        </motion.div>
                    </div>

                    {/* Highly-Responsive Contact Form */}
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.02] border border-white/5 p-6 md:p-12 rounded-[3rem] backdrop-blur-2xl shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl" />

                            <form onSubmit={onFormSubmit} className="space-y-6 md:space-y-8 relative z-10">
                                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                    {/* Name Field */}
                                    <div className="space-y-3">
                                        <label htmlFor="name" className="flex items-center gap-2 text-[10px] sm:text-xs font-black text-gray-500 uppercase tracking-widest ml-1">
                                            <User className="w-3 h-3 text-indigo-400" /> Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            className={`w-full bg-white/[0.03] border rounded-[1.5rem] px-6 py-4 md:py-5 text-white placeholder:text-gray-700 outline-none transition-all duration-500 group-hover:bg-white/[0.05] focus:bg-indigo-500/[0.05] ${formErrors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-indigo-500/50'
                                                }`}
                                        />
                                        {formErrors.name && <p className="text-red-500 text-[10px] font-bold mt-1 ml-4 uppercase tracking-tighter">{formErrors.name}</p>}
                                    </div>

                                    {/* Email Field */}
                                    <div className="space-y-3">
                                        <label htmlFor="email" className="flex items-center gap-2 text-[10px] sm:text-xs font-black text-gray-500 uppercase tracking-widest ml-1">
                                            <Mail className="w-3 h-3 text-indigo-400" /> Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="hello@world.com"
                                            className={`w-full bg-white/[0.03] border rounded-[1.5rem] px-6 py-4 md:py-5 text-white placeholder:text-gray-700 outline-none transition-all duration-500 group-hover:bg-white/[0.05] focus:bg-indigo-500/[0.05] ${formErrors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-indigo-500/50'
                                                }`}
                                        />
                                        {formErrors.email && <p className="text-red-500 text-[10px] font-bold mt-1 ml-4 uppercase tracking-tighter">{formErrors.email}</p>}
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="space-y-3">
                                    <label htmlFor="comment" className="flex items-center gap-2 text-[10px] sm:text-xs font-black text-gray-500 uppercase tracking-widest ml-1">
                                        <MessageSquare className="w-3 h-3 text-indigo-400" /> The Mission
                                    </label>
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        value={formData.comment}
                                        onChange={handleInputChange}
                                        placeholder="Tell me about your project or just say hi..."
                                        rows="4"
                                        className={`w-full bg-white/[0.03] border rounded-[1.5rem] px-6 py-4 md:py-5 text-white placeholder:text-gray-700 outline-none transition-all duration-500 group-hover:bg-white/[0.05] focus:bg-indigo-500/[0.05] resize-none ${formErrors.comment ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-indigo-500/50'
                                            }`}
                                    />
                                    {formErrors.comment && <p className="text-red-500 text-[10px] font-bold mt-1 ml-4 uppercase tracking-tighter">{formErrors.comment}</p>}
                                </div>

                                {/* Vibrant Action Button */}
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="relative w-full overflow-hidden group py-5 md:py-6 rounded-[1.5rem] bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white font-black text-lg md:text-xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/40 active:scale-[0.98] disabled:opacity-50"
                                >
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative z-10 flex items-center justify-center gap-4">
                                        {state.submitting ? (
                                            <Loader2 className="w-7 h-7 animate-spin" />
                                        ) : (
                                            <>
                                                Send Message <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                                            </>
                                        )}
                                    </span>
                                </button>

                                {/* Aesthetic Notifications */}
                                {state.succeeded && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="p-5 md:p-6 bg-green-500/10 border border-green-500/20 rounded-[1.5rem] flex items-center gap-4 shadow-xl"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                            <CheckCircle className="text-green-500 w-6 h-6" />
                                        </div>
                                        <p className="text-green-400 font-bold text-sm md:text-base">Got it! I'll reach out shortly.</p>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700;900&display=swap');
                #contactSection { font-family: 'Public Sans', sans-serif; }
                input:-webkit-autofill,
                input:-webkit-autofill:hover, 
                input:-webkit-autofill:focus,
                textarea:-webkit-autofill,
                textarea:-webkit-autofill:hover,
                textarea:-webkit-autofill:focus {
                    -webkit-text-fill-color: white !important;
                    -webkit-box-shadow: 0 0 0px 1000px #0f172a inset !important;
                    transition: background-color 5000s ease-in-out 0s;
                }
            ` }} />
        </section>
    );
};

export default Contact;
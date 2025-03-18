import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, User, MessageSquare, ArrowRight, CheckCircle, XCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: ''
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [focusedField, setFocusedField] = useState(null);
    
    const { ref: animationRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        // Clear error when typing
        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: ''
            });
        }
    };

    // Validate form
    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
        if (!formData.comment.trim()) errors.comment = "Message is required";
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setLoading(true);
        setStatus('');
        
        emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({ name: '', email: '', comment: '' });
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // Clear status message after 5 seconds
    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(''), 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleFocus = (field) => {
        setFocusedField(field);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    return (
        <div id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-yellow-500 rounded-full filter blur-3xl opacity-5"></div>
            </div>

            <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white orbitron">
                        Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600">Touch</span>
                    </h2>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        Have a question or want to work together? Drop me a message and I'll get back to you soon!
                    </p>
                    <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto mt-6"></div>
                </div>

                {/* Contact Container */}
                <div 
                    ref={animationRef}
                    className={`flex flex-col lg:flex-row gap-8 items-stretch max-w-5xl mx-auto transition-all duration-1000 ${
                        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    {/* Contact Info */}
                    <div className="lg:w-2/5 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700 shadow-xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <p className="text-gray-300 mb-8">
                                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-yellow-500 bg-opacity-20 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <a href="mailto:your.email@example.com" className="text-white hover:text-yellow-400 transition-colors">
                                           preetgusain84@gmail.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-yellow-500 bg-opacity-20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/preet-gusain-986b022a5/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
                                            linkedin.com/in/yourprofile
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-yellow-500 bg-opacity-20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">GitHub</p>
                                        <a href="https://github.com/preetcoder12" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
                                            github.com/yourusername
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-12">
                            <img 
                                src="preet_3.png" 
                                alt="Contact" 
                                className="max-w-full rounded-lg shadow-lg transform -translate-y-6 hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-3/5 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <div className={`absolute left-3 top-3 transition-all duration-300 ${
                                    focusedField === 'name' || formData.name 
                                        ? 'text-yellow-400 transform -translate-y-10 text-sm' 
                                        : 'text-gray-400'
                                }`}>
                                    <User className="w-5 h-5 inline mr-2" />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    onFocus={() => handleFocus('name')}
                                    onBlur={handleBlur}
                                    className={`w-full py-3 px-12 bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 text-white transition-all duration-300 ${
                                        formErrors.name 
                                            ? 'border-red-500 focus:ring-red-500' 
                                            : 'border-gray-600 focus:ring-yellow-500'
                                    }`}
                                />
                                {formErrors.name && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                                )}
                            </div>
                            
                            <div className="relative">
                                <div className={`absolute left-3 top-3 transition-all duration-300 ${
                                    focusedField === 'email' || formData.email 
                                        ? 'text-yellow-400 transform -translate-y-10 text-sm' 
                                        : 'text-gray-400'
                                }`}>
                                    <Mail className="w-5 h-5 inline mr-2" />
                                    <label htmlFor="email">Your Email</label>
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onFocus={() => handleFocus('email')}
                                    onBlur={handleBlur}
                                    className={`w-full py-3 px-12 bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 text-white transition-all duration-300 ${
                                        formErrors.email 
                                            ? 'border-red-500 focus:ring-red-500' 
                                            : 'border-gray-600 focus:ring-yellow-500'
                                    }`}
                                />
                                {formErrors.email && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                                )}
                            </div>
                            
                            <div className="relative">
                                <div className={`absolute left-3 top-3 transition-all duration-300 ${
                                    focusedField === 'comment' || formData.comment 
                                        ? 'text-yellow-400 transform -translate-y-10 text-sm' 
                                        : 'text-gray-400'
                                }`}>
                                    <MessageSquare className="w-5 h-5 inline mr-2" />
                                    <label htmlFor="comment">Your Message</label>
                                </div>
                                <textarea
                                    id="comment"
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleInputChange}
                                    onFocus={() => handleFocus('comment')}
                                    onBlur={handleBlur}
                                    className={`w-full py-3 px-12 bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 text-white transition-all duration-300 h-32 resize-none ${
                                        formErrors.comment 
                                            ? 'border-red-500 focus:ring-red-500' 
                                            : 'border-gray-600 focus:ring-yellow-500'
                                    }`}
                                />
                                {formErrors.comment && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.comment}</p>
                                )}
                            </div>
                            
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-medium rounded-xl shadow-lg hover:shadow-amber-900/30 focus:outline-none transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 w-full md:w-auto"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                        
                        {/* Status Messages */}
                        {status === 'success' && (
                            <div className="mt-6 p-4 bg-green-900 bg-opacity-30 border border-green-500 rounded-lg flex items-center gap-3">
                                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                                <p className="text-green-400">Your message has been sent successfully! I'll get back to you soon.</p>
                            </div>
                        )}
                        
                        {status === 'error' && (
                            <div className="mt-6 p-4 bg-red-900 bg-opacity-30 border border-red-500 rounded-lg flex items-center gap-3">
                                <XCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
                                <p className="text-red-400">This is just frontend i haven't created the backend yet because of college exams so please give me some time .</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
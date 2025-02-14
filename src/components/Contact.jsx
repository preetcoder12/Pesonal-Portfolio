import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useInView } from 'react-intersection-observer'; // If you are using react-intersection-observer

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: ''
    });
    const [status, setStatus] = useState('');

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
            .then((result) => {
                console.log(result.text);
                setStatus('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                setStatus('Message failed to send.');
            });
    };
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5, // Trigger when 50% of the element is visible
    });
    return (
        <div className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <div className="w-full max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 orbitron">
                    Contact <span className="text-yellow-400">Me</span>
                </h2>
                <hr className="w-24 md:w-32 lg:w-40 border-t-4 border-yellow-400 mx-auto mb-12" />
            </div>

            {/* Flexbox container for form and image */}
            <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-6xl space-y-8 md:space-y-0">
                {/* Form Section */}
                <div className="w-full max-w-3xl bg-[#1E1E1E] p-8 rounded-lg shadow-xl text-white">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium text-white">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black transition-transform transform hover:scale-105 hover:shadow-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black transition-transform transform hover:scale-105 hover:shadow-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="comment" className="block text-lg font-medium text-white">Comment</label>
                                <textarea
                                    name="comment"
                                    placeholder="Your message"
                                    value={formData.comment}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 text-black transition-transform transform hover:scale-105 hover:shadow-lg"
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 transform hover:scale-105 hover:shadow-2xl"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>

                    {status && <p className="mt-4 text-center text-lg text-yellow-300">{status}</p>}
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <img
                        src="preet_3.png"
                        alt="Contact"
                        ref={ref}
                        className={`max-w-full rounded-lg shadow-xl relative -top-[5rem] -left-[0.5rem] hidden sm:block ${inView ? 'animate-slide-left' : ''}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;

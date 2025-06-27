"use client"
import { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        // Optionally reset:
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <div className='flex flex-col gap-8'>
           <h3 className="text-2xl font-bold">Send us a message!</h3>
            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border-b py-2 text-white placeholder:text-white placeholder:font-light"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border-b py-2 text-white placeholder:text-white placeholder:font-light"
                    required
                />

                 <input
                    type="number"
                    name="number"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border-b py-2 text-white placeholder:text-white placeholder:font-light"
                    required
                />

                 <input
                    type="url"
                    name="website"
                    placeholder="Website"
                    value={form.website}
                    onChange={handleChange}
                    className="w-full border-b py-2 text-white placeholder:text-white placeholder:font-light"
                    required
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border-b py-2 text-white placeholder:text-white placeholder:font-light"
                    rows="4"
                    required
                />

                <button
                    type="submit"
                    className="bg-brand-button-gradient cursor-pointer text-white font-semibold px-16 py-3 rounded-full shadow-sm hover:shadow-xl/20 hover:scale-[102%] transition-all"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;

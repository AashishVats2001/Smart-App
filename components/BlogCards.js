'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';


const blogPosts = [
    {
        title: 'A process behind app',
        date: 'May 24, 2017',
        author: 'Admin',
        comments: 20,
        image: '/blog1.jpg',
        excerpt:
            'Lorem Ipsum is simply dummy text of the printing and typeseg indusry Lorem Ipsum e printing and has been the industry’s standard dummy text ever since the.',
    },
    {
        title: 'Blog title goes here',
        date: 'May 24, 2017',
        author: 'Admin',
        comments: 20,
        image: '/blog2.jpg',
        excerpt:
            'Lorem Ipsum is simply dummy text of the printing and typeseg indusry Lorem Ipsum e printing and has been the industry’s standard dummy text ever since the.',
    },
    {
        title: 'A process behind app',
        date: 'May 24, 2017',
        author: 'Admin',
        comments: 20,
        image: '/blog3.jpg',
        excerpt:
            'Lorem Ipsum is simply dummy text of the printing and typeseg indusry Lorem Ipsum e printing and has been the industry’s standard dummy text ever since the.',
    },
];

const BlogCards = () => {
    return (
        <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.map((post, i) => (
                    <div className="flex flex-col relative"
                        key={i}
                    >

                        <motion.div
                            whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
                            className="rounded-xl bg-white overflow-hidden shadow-md transition-all z-10"
                        >
                            <div className="w-full h-60 relative">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col gap-2">
                                <div className="text-sm text-gray-400">
                                    By {post.author} | ({post.comments}) Comments
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                                <p className="text-sm text-gray-500 font-medium">{post.date}</p>
                                <p className="text-sm text-gray-600 leading-relaxed mt-2">{post.excerpt}</p>
                            </div>
                        </motion.div>
                        <div className="bg-brand-gradient absolute left-0 right-0 bottom-0 z-0 py-3 text-center translate-y-1/2 pt-16 rounded-b-xl text-white text-base font-semibold cursor-pointer hover:opacity-90">
                            READ MORE
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogCards;
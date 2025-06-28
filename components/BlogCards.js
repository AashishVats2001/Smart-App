'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BlogImage from '@/public/blog-post1.jpg'


const blogPosts = [
    {
        title: 'A process behind app',
        date: 'May 24, 2017',
        author: 'Admin',
        comments: 20,
        image: BlogImage,
        excerpt:
            'Lorem Ipsum is simply dummy text of the printing and typeseg indusry Lorem Ipsum e printing and has been the industry’s standard dummy text ever since the.',
    },
    {
        title: 'Blog title goes here',
        date: 'May 24, 2017',
        author: 'Admin',
        comments: 20,
        image: BlogImage,
        excerpt:
            'Lorem Ipsum is simply dummy text of the printing and typeseg indusry Lorem Ipsum e printing and has been the industry’s standard dummy text ever since the.',
    },
    {
        title: 'A process behind app',
        date: 'May 24, 2017',
        author: 'Admin',
        comments: 20,
        image: BlogImage,
        excerpt:
            'Lorem Ipsum is simply dummy text of the printing and typeseg indusry Lorem Ipsum e printing and has been the industry’s standard dummy text ever since the.',
    },
];

const BlogCards = () => {
    return (
        <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8">
                {blogPosts.map((post, i) => (
                    <div className="flex flex-col relative"
                        key={i}
                    >

                        <motion.div
                            whileHover={{
                                y: [0, -45, 0, -24, 0, -4, 0],
                                transition: {
                                    duration: 0.6,
                                    ease: 'easeOut',
                                },
                            }}
                            className="rounded-xl bg-white overflow-hidden shadow-md z-10 cursor-pointer"
                        >
                            <div className="w-full h-60 relative">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col gap-1">
                                <div className="text-sm text-muted opacity-65">
                                    By {post.author} | ({post.comments}) Comments
                                </div>
                                <h3 className="text-xl font-semibold ">{post.title}</h3>
                                <p className="text-sm font-semibold opacity-90">{post.date}</p>
                                <p className="text-sm text-muted leading-relaxed mt-2">{post.excerpt}</p>
                            </div>
                        </motion.div>
                        <div className="bg-brand-gradient absolute left-0 right-0 text-start bottom-0 z-0 p-4 translate-y-1/2 pt-16 rounded-b-xl text-white text-sm font-semibold cursor-pointer hover:opacity-90">
                            READ MORE
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogCards;
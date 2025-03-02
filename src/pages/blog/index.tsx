import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '../../utils/blog';
import { BlogPostMeta } from '../../types/blog';

interface BlogIndexProps {
  posts: BlogPostMeta[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No blog posts found.</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl h-full">
                {post.coverImage && (
                  <div className="relative h-48">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <div className="text-gray-600 text-sm mb-4">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <p className="text-gray-700">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-blue-600 group-hover:text-blue-800 transition-colors">
                    Read more →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = getAllPosts();
    return {
      props: { posts },
    };
  } catch (error) {
    console.error('Error in blog index getStaticProps:', error);
    return {
      props: { posts: [] },
    };
  }
}; 
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '../../utils/blog';
import { BlogPost } from '../../types/blog';

interface BlogPostPageProps {
  post: BlogPost | null;
  error?: string;
}

export default function BlogPostPage({ post, error }: BlogPostPageProps) {
  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Error</h1>
        <p className="text-gray-600 mb-8">{error || 'Post not found'}</p>
        <Link href="/blog" className="text-blue-600 hover:text-blue-800">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-4">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        {post.coverImage && (
          <div className="relative w-full mb-8">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
          </div>
        )}
      </header>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="mt-8">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800">
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const posts = getAllPosts();
    return {
      paths: posts.map((post) => ({
        params: {
          slug: post.slug,
        },
      })),
      fallback: false,
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await getPostBySlug(params?.slug as string);
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        post: null,
        error: 'Failed to load blog post',
      },
    };
  }
}; 
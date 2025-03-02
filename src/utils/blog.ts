import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost, BlogPostMeta } from '../types/blog';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  try {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fullPath}`);
      throw new Error(`Post not found: ${slug}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      slug: realSlug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      coverImage: data.coverImage,
      content: contentHtml,
    };
  } catch (error) {
    console.error('Error in getPostBySlug:', error);
    throw error;
  }
}

export function getAllPosts(): BlogPostMeta[] {
  try {
    console.log('Posts directory:', postsDirectory);
    
    if (!fs.existsSync(postsDirectory)) {
      console.error(`Blog posts directory not found: ${postsDirectory}`);
      return [];
    }

    const slugs = fs.readdirSync(postsDirectory);
    console.log('Found blog posts:', slugs);

    const posts = slugs
      .filter((slug) => slug.endsWith('.md'))
      .map((slug) => {
        const fullPath = path.join(postsDirectory, slug);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug: slug.replace(/\.md$/, ''),
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          author: data.author,
          coverImage: data.coverImage,
        };
      })
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    console.log('Processed posts:', posts);
    return posts;
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return [];
  }
} 
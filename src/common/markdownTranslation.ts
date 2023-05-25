import * as fs from 'fs';
import * as path from 'path';
import * as matter from 'gray-matter';
import * as MarkdownIt from 'markdown-it';

const md = new (MarkdownIt as any)();

const POSTS_DIR = path.join(__dirname, '/posts');
const OUT_DIR = path.join(__dirname, '/posts');
const OUT_FILE = path.join(OUT_DIR, '/posts/index.json');

if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
}

const files = fs.readdirSync(POSTS_DIR);
const posts = files.map((file: string) => {
    const markdownWithMeta = fs.readFileSync(
        path.join(POSTS_DIR, file),
        'utf-8',
    );

    // Get metadata and content from markdown
    const { data: metadata, content } = matter.read(markdownWithMeta);

    // Convert markdown to html
    const htmlContent = md.render(content);

    return {
        metadata,
        content: htmlContent,
    };
});

fs.writeFileSync(OUT_FILE, JSON.stringify(posts, null, 2));

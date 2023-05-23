// markdownTranslation.ts
import frontMatter from 'front-matter';

interface FileData {
    title: string;
    date: string;
    tags: string[];
}

export const fetchFileContents = async (filePath: string) => {
    const response = await fetch(filePath);
    const fileContents = await response.text();
    return fileContents;
};

export const getFileData = async (
    filePath: string,
): Promise<FileData | null> => {
    const fileContents = await fetchFileContents(filePath);
    if (!fileContents) {
        console.error(`No file contents found at path: ${filePath}`);
        return null; // Return null if file contents not found
    }
    const { attributes }: { attributes: FileData } = frontMatter(fileContents);
    return attributes;
};

export const filePaths = ['/tack-blog/posts/blog/first-write.md'];

const getFileDataForFiles = async () => {
    try {
        await Promise.all(
            filePaths.map(async (filePath) => {
                const fileData = await getFileData(filePath);
                if (!fileData) {
                    console.error(`File data is null for path: ${filePath}`);
                    return;
                }
                const { title, date, tags } = fileData;
                console.log(title, date, tags);
            }),
        );
    } catch (error) {
        console.error(error);
    }
};

getFileDataForFiles();

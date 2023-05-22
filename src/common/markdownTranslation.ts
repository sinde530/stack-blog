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

export const getFileData = async (filePath: string) => {
    const fileContents = await fetchFileContents(filePath);
    if (!fileContents) {
        console.error(`No file contents found at path: ${filePath}`);
    }
    const { attributes }: { attributes: FileData } = frontMatter(fileContents);
    return attributes;
};

export const filePaths = ['/tack-blog/posts/tutorial/README.md'];

const getFileDataForFiles = async () => {
    try {
        await Promise.all(
            filePaths.map(async (filePath) => {
                const fileData = await getFileData(filePath);
                const { title, date, tags } = fileData;
                console.log(title, date, tags);
            }),
        );
    } catch (error) {
        console.error(error);
    }
};

getFileDataForFiles();

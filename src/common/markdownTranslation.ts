import matter from 'gray-matter';

export const fetchFileContents = async (filePath: string) => {
    const response = await fetch(filePath);
    const fileContents = await response.text();
    return fileContents;
};
export const getFileData = async (filePath: string) => {
    const fileContents = await fetchFileContents(filePath);
    const { data } = matter(fileContents);
    const { title, date, tags } = data;
    return { title, date, tags };
};

export const filePaths = [
    '/posts/tutorial/README.md',
    '/posts/test/가나다라-마바사.md',
    // '/posts/tutorial/dfdf.md',
    // '/posts/tutorial1/가나다라.md',
    // '/posts/tutorial2/마바사.md',
];

const getFileDataForAllFiles = async () => {
    try {
        const fileDataPromises = filePaths.map((filePath) =>
            getFileData(filePath),
        );
        const allFileData = await Promise.all(fileDataPromises);

        allFileData.forEach((data) => {
            const { title, date, tags } = data;
            console.log(title, date, tags);
        });
    } catch (error) {
        console.error(error);
    }
};

getFileDataForAllFiles();

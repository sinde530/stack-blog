import matter from 'gray-matter';

export const fetchFileContents = async () => {
    const response = await fetch('/posts/tutorial/README.md');
    const fileContents = await response.text();
    return fileContents;
};

const getFileData = async () => {
    const fileContents = await fetchFileContents();
    const { data } = matter(fileContents);
    const { title, date, tags } = data;
    return { title, date, tags };
};

getFileData()
    .then((data) => {
        const { title, date, tags } = data;
        console.log(title, date, tags);

        // Use the title and date variables here
    })
    .catch((error) => {
        // Handle any errors that occur during the file fetching or processing
        console.error(error);
    });

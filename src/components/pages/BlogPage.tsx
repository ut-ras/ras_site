import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Modal from '@/components/Modal';
import { Col, Container, Row } from 'react-grid-system';
import styles from "@/css/pages/BlogPage.module.css";

export default function Blog() {
    const [markdownFiles, setMarkdownFiles] = useState([]);
    const [selectedMarkdown, setSelectedMarkdown] = useState(null); // Store selected markdown content
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

    useEffect(() => {
        const importMarkdownFiles = async () => {
            // Use import.meta.glob to import all .md files in the posts folder
            const markdownImports = import.meta.glob('/src/_posts/*.md');

            const loadedMarkdowns = [];

            // Iterate through each Markdown file and import its content
            for (const path in markdownImports) {
                const module = await markdownImports[path]();
                const content = module.default;

                // Extract the filename (e.g., "2015-11-06-primavera.md")
                const filename = path.split('/').pop();

                // Extract the date and the slug (e.g., "2015-11-06" and "primavera")
                const dateAndTitle = filename.replace('.md', '').split('-');
                const date = `${dateAndTitle[0]}-${dateAndTitle[1]}-${dateAndTitle[2]}`;
                const postTitleSlug = dateAndTitle.slice(3).join('-'); // Join the rest as the slug

                // Extract the title from the markdown content (assuming the first heading is the title)
                const titleMatch = content.match(/^#\s+(.+)/); // Matches the first markdown title (e.g., "# Blog Title")
                const title = titleMatch ? titleMatch[1] : postTitleSlug.replace(/-/g, ' '); // Fallback to filename slug if no title

                loadedMarkdowns.push({
                    path,
                    content,
                    title,
                    date // Store the extracted date
                });
            }

            // Store the markdown content in state (reverse to show latest first)
            setMarkdownFiles(loadedMarkdowns.reverse());
        };

        importMarkdownFiles();
    }, []);

    // Function to handle opening modal with the selected blog content
    const openModal = (markdownContent) => {
        setSelectedMarkdown(markdownContent);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMarkdown(null);
    };

    return (
        <main>
            <h1>Blog Posts</h1>
            <table className={styles.blogTable}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {markdownFiles.map((file, index) => (
                        <tr key={index}>
                            <td>{file.date}</td>
                            <td>
                                <a href="" onClick={(e) => {
                                    e.preventDefault();
                                    openModal(file.content)
                                }}>
                                    {file.title}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal Component */}
            {isModalOpen && (
                <Container>
                    <Row>
                        <Col>
                            <Modal isOpen={isModalOpen} onClose={closeModal}>
                                <ReactMarkdown
                                    children={selectedMarkdown}
                                    components={{
                                        img: ({ node, ...props }) => (
                                            <DynamicImage {...props} />
                                        )
                                    }}
                                />
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            )}
        </main>
    );
}

// Create a Vite glob for all images in the blog folder
const imageModules = import.meta.glob('/src/_posts/blog/**/*.(png|jpg|jpeg|gif|svg)');

function DynamicImage({ src, alt, ...props }) {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                // Extract the imgPath after "blog/"
                const imgPath = src.includes('blog/') ? src.split('blog/')[1] : src;

                // Match the imgPath with the glob
                const importedImage = imageModules[`/src/_posts/blog/${imgPath}`];
                if (importedImage) {
                    const image = await importedImage();
                    setImageSrc(image.default);
                } else {
                    console.error(`Image not found for path: /src/_posts/blog/${imgPath}`);
                }
            } catch (error) {
                console.error("Error loading image:", error);
                setImageSrc(src); // Fallback to the original source if import fails
            }
        };

        loadImage();
    }, [src]);

    return <img src={imageSrc} alt={alt} style={{ maxWidth: '80%', height: 'auto', display: 'block', margin: '0 auto' }} {...props} />;
}

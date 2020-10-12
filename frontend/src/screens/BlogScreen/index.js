import React, { Fragment } from 'react';

// Assets
import blog_page from '../../assets/blog_page.jpg';

// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import ArticleContainer from '../../components/utils/ArticleContainer';

const content = [
  {
    category: 'Website Development',
    imageURL: blog_page,
    title: 'whats a domain name?',
    description: 'dwndabnrybawuiyfbaiwjhfbnawihjfbnaiwfbwaf',
    link: 'www.google.com',
  },
  {
    category: 'Website Development',
    imageURL: blog_page,
    title: 'whats a domain name?',
    description:
      'dwndabnrybawuiyfbaiwjhfbnawihjfbnaiwfbwafwdjhabdhwabduhwabdwuahdbwuahydbwaouDyhbwduywagbvduyatgdwyagdwydgaudygwaudygawdyagwduyydbwaudygbwuydbwaudygawduywagduywagduwydgauydgaufyawfy',
    link: 'www.google.com',
  },
];
const BlogScreen = () => {
  return (
    <Fragment>
      <ImageBanner
        imageLOC={blog_page}
        label='All Things Digital'
        bgOpacity
        opacity={0.3}
      />
      <CenterContainer Horizontal justify='left'>
        {content.map((articleElement) => (
          <ArticleContainer
            category={articleElement.category}
            title={articleElement.title}
            imageLOC={articleElement.imageURL}
            description={articleElement.description}
            link={articleElement.link}
          />
        ))}
      </CenterContainer>
    </Fragment>
  );
};

export default BlogScreen;

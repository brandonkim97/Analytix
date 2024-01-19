import PropTypes from 'prop-types';

const LazyLoadedPost = ({ imagePath, className }) => {
    return <img src={imagePath} className={`${className}`} alt="Lazy Loaded Post" />
}

LazyLoadedPost.propTypes = {
    imagePath: PropTypes.string,
    className: PropTypes.string,
}

export default LazyLoadedPost;

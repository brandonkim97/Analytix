import PropTypes from 'prop-types';

const ShadowBox = ({ children, hover, classes }) => {
    return (
        <div 
            className={`drop-shadow-lg rounded-lg company-color ${hover ? 'hover:bg-zinc-700' : ''} ${classes ?? ''}`}>
            {children}
        </div>
    )
}

ShadowBox.propTypes = {
    children: PropTypes.node,
    hover: PropTypes.bool,
    classes: PropTypes.string
}

export default ShadowBox;
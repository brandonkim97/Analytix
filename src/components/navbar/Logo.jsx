import PropTypes from 'prop-types';

const Logo = ({ className }) => {
    return (
        <div className={`${className}`}>
            <img src="/images/logo.png" alt="Logo"></img>
        </div>
    )
}

Logo.propTypes = {
    className: PropTypes.string
}

export default Logo;
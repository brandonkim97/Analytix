import PropTypes from 'prop-types';

const CenteredDot = ({ isActive }) => {
    return (
        <div className={`w-2 h-2 ${isActive ? 'bg-orange-500' : 'bg-zinc-700'} rounded-full`}></div>
    );
};

CenteredDot.propTypes = {
    isActive: PropTypes.bool,
}

export default CenteredDot;
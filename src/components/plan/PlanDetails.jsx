import PropTypes from 'prop-types';
import CheckIcon from '@mui/icons-material/Check';

const PlanDetails = ({ details }) => {
    return (
        <div className="flex gap-2 items-center">
            <div className="text-green-500"><CheckIcon /></div>
            <div className="text-color">{details}</div>
        </div>
    )
}

PlanDetails.propTypes = {
    details: PropTypes.string,
}

export default PlanDetails;
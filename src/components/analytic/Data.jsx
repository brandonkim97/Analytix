import PropTypes from 'prop-types';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const Data = ({ color, icon, iconColor, dataNumber, text, rate }) => {
    const rateStr = rate > 0 ? `+${rate}%` : `${rate}%`;
    
    return (
        <div className={`flex flex-col grow items-center w-full lg-w-1/5 ${color} h-48 xl:h-60 rounded-[12px] last:mr-0 first:ml-0 py-3 px-6`}>
            <div className={`p-2 ${iconColor} rounded-md`}>{icon}</div>
            <div className="mt-2 text-3xl font-semibold">{dataNumber}</div>
            <div className="mt-2 text-sm text-center">{text}</div>
            <div className="flex flex-row items-center mt-auto">
                <div className="mr-2">{rateStr}</div>
                <div>{rate > 0 ? <TrendingUpOutlinedIcon /> : <TrendingDownOutlinedIcon />}</div>
            </div>
        </div>
    )
}

Data.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.node,
    iconColor: PropTypes.string,
    dataNumber: PropTypes.string,
    text: PropTypes.string,
    rate: PropTypes.number,
}

export default Data;
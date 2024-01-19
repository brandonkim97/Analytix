import PropTypes from 'prop-types';

const CountryReach = ({ country, views, totalViews }) => {
    const percent = Math.round((views  / totalViews) * 100).toString() + '%';

    return (
        <div className="flex flex-col text-sm">
            <div>{country}</div>
            <div className="flex flex-row gap-6 items-center">
                <div className="h-5 w-5/6 relative">
                    <div className="h-2 w-full absolute bg-color rounded-full"></div>
                    <div 
                        className={`h-2 bg-yellow-50 absolute rounded-full`}
                        style={{ width: `${percent}` }}
                    >
                    </div>
                </div>
                <div className="h-8 w-1/6 self-center">{percent}</div>
            </div>
        </div>
    )
}

CountryReach.propTypes = {
    country: PropTypes.string,
    views: PropTypes.number,
    totalViews: PropTypes.number,
}

export default CountryReach;
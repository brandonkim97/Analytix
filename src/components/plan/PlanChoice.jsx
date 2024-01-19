import PropTypes from 'prop-types';
import ShadowBox from '../ShadowBox';
import PlanDetails from './PlanDetails';

const PlanChoice = ({ data, isActive, onClick, pending }) => {

    return (
        <div className="bg-color">
            <ShadowBox classes={`group flex flex-col gap-6 w-full h-[600px] p-4 lg:p-6 text-center items-center font-semibold 
                ${!isActive ? 'hover:bg-[#5246bc]' : ''}
            `}>
                <div className="w-14 h-14 bg-indigo-300 rounded-full flex items-center justify-center">{data.icon}</div>
                <div>
                    <div className="">{data.title}</div>
                    <div className="text-sm text-color ">{data.subtitle}</div>
                </div>
                <div>
                    <div className="text-4xl mb-1">{data.price}</div>
                    <div className="text-sm text-color">{data.price_subtitle}</div>
                </div>
                <div className={`w-2/3 border border-zinc-800 rounded-xl py-2 text-sm
                        ${!isActive ? 
                            'group-hover:text-[#5246bc] bg-white text-black hover:cursor-pointer hover:bg-zinc-800' 
                            : 
                            ''
                        }
                        ${pending ? 'pointer-events-none bg-zinc-800' : ''}
                    `}
                    onClick={!isActive ? onClick : null}
                >
                    {isActive ? 'Current Plan' : 'Choose Plan'}
                </div>
                <div className="flex flex-col gap-4 text-md">
                    {data.plan_details.map((detail) => (
                        <div key={detail} className="text-start">
                            <PlanDetails details={detail} />
                        </div>
                    ))}
                </div>
            </ShadowBox>
        </div>
    )
}

PlanChoice.propTypes = {
    data: PropTypes.object,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    pending: PropTypes.bool,
}

export default PlanChoice;
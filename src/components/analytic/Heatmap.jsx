import { PropTypes } from 'prop-types';

const HeatMap = ({ data }) => {
    const days = ["Sat", "Fri", "Thu", "Wed", "Tue", "Mon", "Sun"];
    const weeks = [11, 12, 13, 14, 15];
    return (
        <>
            <div className="text-zinc-500">
                <div className="flex flex-row">
                    <div className="flex flex-col mb-4">
                    {days.map((day, index) => (
                        <div className="py-2" key={`day-${days[index]}`}>{day}</div>
                    ))}
                    </div>
                    <div className="grid grid-cols-5 gap-x-2 gap-y-0 ml-5">
                        {data.map((item, index) => {
                            let color = '';
                            if (item.value >= 7) color = 'bg-cyan-500';
                            else if (item.value >= 4) color = 'bg-cyan-700';
                            else color = 'bg-cyan-900';
                            return (
                                <div className="" key={`${data[index].week}-${data[index].day}`}>
                                    <div className={`w-11 h-6 ${color} rounded-md`}></div>
                                </div>
                            )
                            
                        })}
                    </div>
                </div>

                <div className="flex flex-row ml-14">
                    {weeks.map((week, index) => (
                        <div className="mx-4" key={`week-${weeks[index]}`}>{week}</div>
                    ))}
                </div>
            </div>
        </>
    )
}

HeatMap.propTypes = {
    data: PropTypes.array
}

export default HeatMap;
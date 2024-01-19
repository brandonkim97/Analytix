import PropTypes from "prop-types";
import ShadowBox from "./ShadowBox"
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const Timeline = ({ data }) => {
    return (
        <ShadowBox classes="p-2 hover:cursor-pointer" hover>
            <div className="flex flex-row gap-2 items-center text-color">
                <div><CalendarTodayOutlinedIcon /></div>
                <div>15 August - 22 August</div>
            </div>
        </ShadowBox>
    )
}

Timeline.propTypes = {
    data: PropTypes.node,
}

export default Timeline;
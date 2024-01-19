import Logo from './Logo';
import MenuItem from './MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LanguageIcon from '@mui/icons-material/Language';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SettingsIcon from '@mui/icons-material/Settings';
import PropTypes from 'prop-types';

const socialDropDownContent = [
    { label: 'Social Media Post', link: '/posts'},
    { label: 'Social Media Statistic', link: '/statistic'},
    // { label: 'Social Media Profile', link: '/profile'},
    // { label: 'Social Media Followers', link: '/followers'},
];

const settingContent = [
    { label: 'Plan', link: '/plan'},
    // { label: 'Security', link: '/security'},
]

const Navbar = ({ close, classes, handleOpen }) => {
    const navigate = useNavigate();


    return (
        <>
            <div className={`bg-zinc-900 w-60 py-8 px-6 flex-shrink-0 z-50
                ${classes}
            `}>
                {close && (
                    <div className="hover:cursor-pointer mb-4 -ml-4 -mt-4 p-2" onClick={handleOpen}>
                        <ArrowForwardIosIcon />
                    </div>
                )}
                <Link to="/" replace={true}>
                    <div className="flex flex-row items-center pb-12">
                        <div className="pr-4">
                            <Logo className="w-28 rounded-full" />
                        </div>
                    </div>
                </Link>
                <div>
                    <MenuItem to='/' onClick={() => navigate('/')} label="Analytic" icon={<AssessmentIcon />} />
                    <MenuItem label="Social Media" icon={<LanguageIcon />} dropDownContent={socialDropDownContent}/>
                    {/* <MenuItem to='/message' onClick={() => navigate('/message')} label="Message" icon={<EmailIcon />} /> */}
                    <MenuItem to='/schedule' onClick={() => navigate('/schedule')} label="Schedule" icon={<CalendarMonthIcon />} />
                    <MenuItem label="Setting" icon={<SettingsIcon />} dropDownContent={settingContent} />
                </div>
            </div>
        </>
    )
}

Navbar.propTypes = {
    classes: PropTypes.string,
    close: PropTypes.bool,
    handleOpen: PropTypes.func,
}

export default Navbar;
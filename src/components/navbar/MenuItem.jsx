import PropTypes from 'prop-types';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import CenteredDot from './CenteredDot';
import { useNavigate, useLocation  } from 'react-router-dom';


const MenuItem = ({ to, onClick, label, icon, dropDownContent }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isActive = pathname === to;

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const handleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }
    
    return (
        <>
            <div 
                onClick={onClick || handleDropDown} 
                className="group flex items-center py-3 text-zinc-500 hover:cursor-pointer transition-all font-semibold">
                    <span className={`mr-2 group-hover:text-amber-600  ${isActive ? 'text-amber-600' : ''}`}>
                        {icon}
                    </span>
                    <span className={`group-hover:text-zinc-100 ${isActive ? 'text-white' : ''}`}>
                        {label}
                    </span>
                    {dropDownContent && (
                        <div className="ml-auto group-hover:text-zinc-100"><KeyboardArrowDownIcon /></div>
                    )}
            </div>
            {isDropDownOpen && (
                <div className={`transition-transform duration-300 ease-in-out`}>
                    {dropDownContent.map((content, index) => {
                        return (
                            <div onClick={() => navigate(content.link)} className='group text-zinc-700' key={index}>
                                <div className="transform -rotate-90 inline-block">
                                    <HorizontalRuleIcon fontSize="medium" />
                                </div>
                                <div className="flex items-center group-hover:text-zinc-100 hover:cursor-pointer">
                                    <div className="ml-2 mr-4"><CenteredDot isActive={pathname === content.link} /></div>
                                    <div className={`text-sm ${pathname === content.link ? 'text-white' : ''}`}>{content.label}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    );
}

MenuItem.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    icon: PropTypes.node,
    dropDownContent: PropTypes.array,
    to: PropTypes.string,
}

export default MenuItem;
import { PropTypes } from "prop-types";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navbar from "./navbar/Navbar";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";


const Header = ({ label }) => {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 1280 });

    const handleOpen = () => {
        if (!(isMobile || open)) return;
        setOpen(!open);
    }

    return (
        <>
            <Navbar 
                classes={`top-0 right-0 h-full w-full fixed duration-300 ease-in-out
                    ${open ? 'translate-x-0' : 'translate-x-full'}
                `}
                close 
                handleOpen={handleOpen} 
            />
            <div className="z-20 bg-color max-xl:pt-4 max-xl:sticky max-xl:top-0">
                <div className="flex flex-row items-center justify-between text-white pb-8">
                    <div className="text-2xl">
                        {label}
                    </div>
                    <div className="flex justify-end">
                        <div className="mr-6 text-zinc-400">
                            <NotificationsOutlinedIcon />
                        </div>
                        <div className="flex max-xl:hover:cursor-pointer" onClick={handleOpen}>
                            <div className="mr-2">
                                <AccountCircleIcon />
                            </div>
                            <div className="mr-6">
                                Brandon Kim
                            </div>
                            <div className="text-zinc-400 xl:hidden">
                                <KeyboardArrowDownIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-t-1 border-zinc-900 pb-4" />
            </div>
        </>
    )
}

Header.propTypes = {
    label: PropTypes.string
}

export default Header;


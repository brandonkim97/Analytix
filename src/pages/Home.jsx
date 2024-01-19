import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Data from "../components/analytic/Data";
import Graph from "../components/analytic/Graph";
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CastOutlinedIcon from '@mui/icons-material/CastOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Heatmap from "../components/analytic/Heatmap";
import ButtonTab from "../components/analytic/ButtonTab";
import getCompanyData from "../services/getCompanyData";
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const dropdownOptions = {
    day: "Day",
    month: "Month",
    year: "Year",
}

const generateRandomData = () => {
    const weeks = 5;
    const daysPerWeek = 7;
  
    return Array.from({ length: weeks * daysPerWeek }, (_, index) => ({
      week: Math.floor(index / daysPerWeek) + 1,
      day: (index % daysPerWeek) + 1,
      value: Math.floor(Math.random() * 10), // Random value for activity
    }));
};

const CompanyData = () => {
    //Get company data
    const companies = getCompanyData();
    return (
        companies.map((item, index) => (
            <div key={item.name} className="grid md:grid-cols-8 my-6 gap-8 items-center text-center justify-center bg-zinc-900 p-4 rounded-xl md:bg-transparent">
                <div className="h-16 w-16">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <img className="rounded-xl" src={item.logo} />
                    </a>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-xl">{item.name}</div>
                    <div className="text-sm text-zinc-500">{item.at}</div>
                </div>
                <div className={`py-2 company-color bg-[#222733] rounded-lg shadow-lg ${item.isActive ? 'text-violet-800' : 'text-red-800'}`}>{item.isActive ? 'Active' : 'Inactive'}</div>
                <div className={`flex flex-row gap-1 ${item.rate > 0 ? 'text-green-600' : item.rate < 0 ? 'text-red-600' : ''}`}>
                    {`${item.rate > 0 ? '+' : ''}${item.rate}%`}
                    {item.rate > 0 ? <TrendingUpOutlinedIcon /> : item.rate < 0 ? <TrendingDownOutlinedIcon /> : <HorizontalRuleIcon />}
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-xl">{item.posts}</div>
                    <div className="text-sm text-zinc-500">Posts</div>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-xl">{item.views}</div>
                    <div className="text-sm text-zinc-500">Vews</div>
                </div>
                <div>
                    <div className="font-bold text-xl">{item.actions}</div>
                    <div className="text-sm text-zinc-500">Actions</div>
                </div>
                <div>
                    <div className="font-bold text-xl">{item.fans}</div>
                    <div className="text-sm text-zinc-500">Fans</div>
                </div>
            </div>
        ))
    );
}

const Home = () => {
    const [timeFrame, setTimeFrame] = useState(dropdownOptions.month);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [data, setData] = useState([]);
    const [activeButton, setActiveButton] = useState(1)
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
    const tabsRef = useRef([]);

    useEffect(() => {
        function setTabPosition() {
            const currentTab = tabsRef.current[activeButton];
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
          }
      
          setTabPosition();
          window.addEventListener("resize", setTabPosition);
      
          return () => window.removeEventListener("resize", setTabPosition);
    }, [activeButton]);

    const handleTimeFrameChange = (value) => {
        setTimeFrame(dropdownOptions[value]);
    }

    const handleDropdownOpen = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    }

    useEffect(() => {
        setData(generateRandomData);
    }, []);


    return (
        <>
            <Header label="Analytics" />
            <div className="text-xl pb-4">Overview</div>
            <div className="flex justify-between flex-col lg:flex-row gap-4">
                <Data 
                    color="bg-cyan-600" 
                    icon={<SentimentSatisfiedOutlinedIcon />}
                    iconColor="bg-cyan-500"
                    dataNumber="56,984%"
                    text="Average engagement rate per post"
                    rate={30}
                />
                <Data 
                    color="bg-indigo-500" 
                    icon={<VisibilityOutlinedIcon />}
                    iconColor="bg-indigo-400"
                    dataNumber="5.473.433"
                    text="Impressions"
                    rate={30} 
                />
                <Data 
                    color="bg-blue-500"
                    icon={<FavoriteBorderOutlinedIcon />}
                    iconColor="bg-blue-400"
                    dataNumber="15,487%"
                    text="Average engagement reach per post"
                    rate={-30}
                />
                <Data 
                    color="bg-amber-600" 
                    icon={<CastOutlinedIcon />}
                    iconColor="bg-amber-500"
                    dataNumber="12.473.474"
                    text="Reach"
                    rate={-30}
                />
            </div>
            <div className="flex flex-col 2xl:flex-row my-6 gap-6 2xl:gap-0">
                <div className="max-h-[600px] w-full 2xl:w-4/6 bg-zinc-900 p-2 sm:p-6 rounded-lg mr-8">
                    <div className="flex justify-between mb-4 font-semibold ml-8 items-center">
                        <div className="text-xl">Report</div>
                        <div onClick={handleDropdownOpen} className="flex flex-row border p-1  border-zinc-800 rounded-md hover:cursor-pointer">
                            <div className="mr-2 text-lg">
                                <div className="text-md">{timeFrame}</div>
                                {dropdownOpen && (
                                    <div className="absolute z-10 mt-4 -m-24 w-48 drop-shadow-lg rounded-md bg-zinc-900 border border-zinc-800">
                                        {Object.entries(dropdownOptions).map(([value, label]) => (
                                            <div className="p-4 text-sm hover:bg-zinc-800" key={value} onClick={() => handleTimeFrameChange(value)}>
                                                {label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div><KeyboardArrowDownIcon /></div>
                        </div>
                    </div>
                    <div>
                        <Graph timeFrame={timeFrame} />
                    </div>
                </div>
                <div className="grid w-full 2xl:w-2/6 bg-zinc-900 p-6 rounded-lg content-end justify-center">
                    <Heatmap data={data} />
                </div>
            </div>
            <div>
                <div className="flex flex-row gap-10 mb-4">
                    <ButtonTab 
                    onClick={() => handleButtonClick(1)} 
                    label="Channels" 
                    ref={(el) => (tabsRef.current[1] = el)}
                    />
                    <ButtonTab 
                    onClick={() => handleButtonClick(2)} 
                    label="Responses" 
                    ref={(el) => (tabsRef.current[2] = el)}
                    />
                    <ButtonTab 
                    onClick={() => handleButtonClick(3)} 
                    label="Series" 
                    ref={(el) => (tabsRef.current[3] = el)}
                    />
                </div>
                <span 
                    className="absolute block h-1 bg-orange-600 transition-all duration-300" 
                    style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                />
                <div className="w-full h-1 bg-zinc-800 rounded-full"></div>
                    <CompanyData />
            </div>
        </>
    )
}

export default Home;
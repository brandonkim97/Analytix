import Header from "../components/Header";
import ShadowBox from "../components/ShadowBox";
import Timeline from "../components/Timeline";
import Calendar from "../components/schedule/Calendar";

const Schedule = () => {
    return (
       <>
           <Header label="Schedule" />
           <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex flex-col w-full sm:w-1/4">
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="text-xl">Upcoming Post</div>
                            <div className="text-sm text-color mb-6">Tomorrow</div>
                            <div className="flex flex-col gap-3">
                                <ShadowBox classes="h-24 p-2">
                                    <div className="flex gap-2 items-center mb-2">
                                        <div className="w-2 h-2 rounded-full bg-cyan-300"></div>
                                        <div className="text-color">10:00-11:00</div>
                                    </div>
                                    <div className="font-semibold">Meeting with a client</div>
                                    <div className="text-xs font-semibold text-color">Post Audit</div>
                                </ShadowBox>
                                <ShadowBox classes="h-24 p-2">
                                    <div className="flex gap-2 items-center mb-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                                        <div className="text-color">10:00-11:00</div>
                                    </div>
                                    <div className="font-semibold">Meeting with a client</div>
                                    <div className="text-xs font-semibold text-color">Post Audit</div>
                                </ShadowBox>
                                <ShadowBox classes="h-24 p-2">
                                    <div className="flex gap-2 items-center mb-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                                        <div className="text-color">10:00-11:00</div>
                                    </div>
                                    <div className="font-semibold">Meeting with a client</div>
                                    <div className="text-xs font-semibold text-color">Post Audit</div>
                                </ShadowBox>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="text-xl">Media Library</div>
                            <div className="max-sm:flex max-sm:flex-col max-sm:gap-6 sm:grid grid-cols-1 sm:grid-cols-2 sm:gap-2 max-w-[500px]">
                                <img src="public/images/posts/post-7.jpg" className="object-cover w-full h-64 sm:h-24 rounded-lg"/>
                                <img src="public/images/posts/post-8.jpg" className="object-cover w-full h-64 sm:h-24 rounded-lg"/>
                                <img src="public/images/posts/post-9.jpg" className="object-cover w-full h-64 sm:h-24 rounded-lg"/>
                                <img src="public/images/posts/post-10.jpg" className="object-cover w-full h-64 sm:h-24 rounded-lg"/>
                                <img src="public/images/posts/post-11.jpg" className="object-cover w-full h-64 sm:h-24 rounded-lg"/>
                                <img src="public/images/posts/post-12.jpg" className="object-cover w-full h-64 sm:h-24 rounded-lg"/>
                                <img src="public/images/posts/post-13.jpg" className="object-cover w-full h-64 sm:h-24 rounded-lg"/>
                                <img src="public/images/posts/post-14.jpg" className="object-cover w-full h-64 sm:h-24 rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <ShadowBox classes="w-full sm:w-3/4 p-3 sm:py-6 sm:px-4 max-sm:h-screen text-color">
                    <div className="flex justify-between items-center mb-6">
                        <div className="text-lg sm:text-2xl font-semibold text-white">Post Schedule</div>
                        <Timeline />
                    </div>
                    <Calendar />
                </ShadowBox>
           </div>
       </>
    )
   }
   
   export default Schedule;
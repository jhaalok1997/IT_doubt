import React from 'react'

const Part_2 = () => {
    return (
        <section className="bg-teal-100 md:h-[900px]">
            <div>
                <div className="p-6 ">
                    <h1 className="text-inter text-lg sm:text-xl md:text-2xl lg:text-[30px] text-center font-[700]">
                        Building High-Performance Web and Mobile Apps: Essential Considerations and Best Practices
                    </h1>
                    <p className="text-sm md:text-base lg:text-[19px] text-inter pt-4 md:pt-6 text-center font-[400] ">
                        In today's digital world, users expect applications across the web and mobile platforms to be responsive, intuitive, and  reliable. developing <br /> high-performance  applications will entail high-speed, scalable, and user-friendly facets that add up to  the satisfaction index of your users, and thus the long-term success.
                    </p>
                </div>

                <div>
                    <div className="grid gird-cols-1 md:grid-cols-2 gap-4  p-4   ">
                        <div className="w-full flex justify-center">
                            <img className="w-full md:w-[350px] h-auto" src="./Blogimg/Page_1/13 1.png" alt="Tech Image" />
                        </div>
                      
                      <div className="" >
                        <div className="relative ml-10 sm:mt-6 md:mt-0 md:absolute md:top-[1100px] md:left-[50%] mt-52 lg:top-[1030px] right-[40px]">
                            <h1 className="text-inter text-wrap text-xl sm:text-1xl md:text-2xl lg:text-[28px] font-[700]">Picking a series of technologies</h1>
                            <p className="text-inter text-sm sm:text-md md:text-base lg:text-[19px] pt-2 font-[400]">Having a proper tech stack is the foundation of a performing application. The chosen technology would determine everything from the speed of development and scalability  to maintaining the application.</p>
                            <div className="grid grid-rows-2 mt-2">
                                <div>
                                <h2 className="text-inter font-[700] text-base md:text-xl lg:text-[23px] mt-1 ">Frontend Technologies</h2>
                                <ul className="space-y-2 text-sm md:text-base lg:text-[19px]">
                                    <li className="text-inter font-[400] font-inter"><span className="font-[700] ">React -</span> A pretty lean Library for building up Web Applications. Flexible, and renders quickly. It is particularly  effective in building complex user interfaces requiring real-time updates. </li>

                                    <li className="text-inter font-[400] font-inter"><span className="font-[700] ">Vue.js: </span> It is very lightweight and highly flexible and suitable for simple and highly scalable projects. </li>

                                    <li className="text-inter font-[400] font-inter"><span className="font-[700] ">Flutter: </span> It is very lightweight and highly flexible and suitable for simple and highly scalable projects. </li>
                                </ul>
                            </div>

                               
                        </div>

                        

                            
                           

                        </div>
                       
                       </div>

                    </div>
                   
                </div>

                <div className="p-4  sm:mb-4 md:ml-24  space-y-2">
                                <h2 className="text-inter font-[700] text-[23px] mt-1 ">Backend Technologies</h2>
                                <ul className="space-y-2 text-base md:text-lg lg:text-[19px]">
                                    <li className="text-inter font-[400] font-inter"><span className="font-[700] ">Node.js: </span>Network applications with high potential for scaling, Node (both front-end and back -end).js stands for  JavaScript and this will be helpful <br/> for full-stack development also. </li>

                                    <li className="text-inter font-[400] font-inter"><span className="font-[700] ">Django: </span>A python-based framework, it is used for security, scale, and often data-heavy application. </li>

                                    <li className="text-inter font-[400] font-inter"><span className="font-[700] ">Ruby on rails: </span> It is known for its developer-friendly approach and fast development for apps that require a lot of updates. </li>
                                </ul>
                                <p className="text-sm md:text-base lg:text-[19px] font-inter font-[400] mt-4">The right technology stack selection creates the foundation for an application to perform well, scale  appropriately, and support long-term <br/> maintenance.</p>
                            </div>
            </div>
        </section>
    )
}

export default Part_2
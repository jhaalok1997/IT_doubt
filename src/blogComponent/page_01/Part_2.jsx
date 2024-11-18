import React from 'react'

const Part_2 = () => {
    return (
        <section className="bg-teal-100 h-[920px]">
            <div>
                <div className="p-4 ">
                    <h1 className="text-inter text-[30px] text-center font-[700]">
                        Building High-Performance Web and Mobile Apps: Essential Considerations and Best Practices
                    </h1>
                    <p className="text-[19px] text-inter pt-6 text-center font-[400]">
                        In today's digital world, users expect applications across the web and mobile platforms to be responsive, intuitive, and  reliable. developing <br /> high-performance  applications will entail high-speed, scalable, and user-friendly facets that add up to  the satisfaction index of your users,<br /> and thus the long-term success.
                    </p>
                </div>

                <div>
                    <div className="ml-24 mt-10 w-[384px] ">
                        <div className="">
                            <img className="h-[600px] w-[400px]" src="./Blogimg/Page_1/Rectangle 27.png" />
                        </div>

                        <div className="absolute top-[800px] left-[550px]">
                            <h1 className="text-inter text-[28px] font-[700]">Picking a series of technologies</h1>
                            <p className="text-inter text-[19px] pt-2 font-[400]">Having a proper tech stack is the foundation of a performing application. The chosen <br /> technology would determine everything from the speed of development and scalability <br /> to maintaining the application.</p>
                            <div className="mt-4">
                                <h2 className="text-inter font-[700] text-[23px] mt-1 ">Frontend Technologies</h2>
                                <ul className="space-y-2 text-[19px]">
                                    <li className="text-inter font-[400] font-inter"><span className="font-[700] ">React -</span> A pretty lean Library for building up Web Applications. Flexible, and renders quickly.<br/> It is particularly  effective in building complex user interfaces requiring real-time updates. </li>

                                    <li className="text-inter font-[400] font-inter"><span className="font-[700] ">Vue.js: </span> It is very lightweight and highly flexible and suitable for simple and highly scalable <br/> projects. </li>

                                    <li className="text-inter font-[400] font-inter"><span className="font-[700] ">Flutter: </span> It is very lightweight and highly flexible and suitable for simple and highly scalable <br/> projects. </li>
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h2 className="text-inter font-[700] text-[23px] mt-1 ">Backend Technologies</h2>
                                <ul className="space-y-2 text-[19px]">
                                    <li className="text-inter font-[400] font-inter"><span className="font-[700] ">Node.js: </span>Network applications with high potential for scaling, Node (both front-end and back <br/>-end).js stands for <br /> JavaScript and this will be helpful for full-stack development also. </li>

                                    <li className="text-inter font-[400] font-inter"><span className="font-[700] ">Django: </span>A python-based framework, it is used for security, scale, and often data-heavy application. </li>

                                    <li className="text-inter font-[400] font-inter"><span className="font-[700] ">Ruby on rails: </span> It is known for its developer-friendly approach and fast development for apps that <br/> require a lot of updates. </li>
                                </ul>
                                <p className="text-[19px] font-inter font-[400] mt-2">The right technology stack selection creates the foundation for an application to perform well, scale <br/> appropriately, and support long-term maintenance.</p>
                            </div>
                           

                        </div>
                       

                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default Part_2
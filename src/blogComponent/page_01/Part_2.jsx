import React from 'react'

const Part_2 = () => {
    return (
        <section className="bg-teal-100 h-[900px]">
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
                    <div className="ml-36 mt-8 w-96 ">
                        <div>
                            <img src="./Blogimg/Page_1/Rectangle 27.png" />
                        </div>

                        <div className="absolute top-[800px] left-[550px]">
                            <h1 className="text-inter text-[28px] font-[700]">Picking a series of technologies</h1>
                            <p className="text-inter text-[19px] pt-2 font-[400]">Having a proper tech stack is the foundation of a performing application. The chosen <br /> technology would determine everything from the speed of development and scalability <br /> to maintaining the application.</p>
                            <div className="mt-4">
                                <h2 className="text-inter font-[700] text-[23px] mt-1 ">Frontend Technologies</h2>
                                <ul className="space-y-2">
                                    <li className="text-inter font-[400]"><span className="font-[700] ">React -</span> A pretty lean Library for building up Web Applications. Flexible, and renders quickly. It is particularly <br /> effective in building complex user interfaces requiring real-time updates. </li>

                                    <li className="text-inter font-[400]"><span className="font-[700] ">Vue.js: </span> It is very lightweight and highly flexible and suitable for simple and highly scalable projects. </li>

                                    <li className="text-inter font-[400]"><span className="font-[700] ">Flutter: </span> It is very lightweight and highly flexible and suitable for simple and highly scalable projects. </li>
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h2 className="text-inter font-[700] text-[23px] mt-1 ">Backend Technologies</h2>
                                <ul className="space-y-2">
                                    <li className="text-inter font-[400]"><span className="font-[700] ">Node.js: </span>Network applications with high potential for scaling, Node (both front-end and back-end).js stands for <br /> JavaScript and this will be helpful for full-stack development also. </li>

                                    <li className="text-inter font-[400]"><span className="font-[700] ">Django: </span>A python-based framework, it is used for security, scale, and often data-heavy application. </li>

                                    <li className="text-inter font-[400]"><span className="font-[700] ">Ruby on rails: </span> It is known for its developer-friendly approach and fast development for apps that require a lot <br /> of updates. </li>
                                </ul>

                            </div>
                           

                        </div>
                       

                    </div>
                    <p className="font-[19px] font-inter text-[400] mt-2">The right technology stack selection creates the foundation for an application to perform well, scale appropriately, and support long-term maintenance.</p>
                </div>
            </div>
        </section>
    )
}

export default Part_2
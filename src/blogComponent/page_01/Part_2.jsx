import React from 'react'

const Part_2 = () => {
    return (
       <section>
        <div className="bg-[#D7EAFF] p-4 md:p-12 space-y-2">
            <h1 className=" font-[700] text-lg sm:text-lg md:text-2xl lg:text-[30px]">Building High-Performance Web and Mobile Apps: Essential Considerations and Best Practices</h1>
            <p className=" font-[400] text-sm sm:text-sm md:text-base lg:text-[19px]">In today's digital world, users expect applications across the web and mobile platforms to be responsive, intuitive, and reliable. Developing high-performance applications will entail high-speed, scalable, and user-friendly facets that add up to the satisfaction index of your users, and thus the long-term success.</p>

            <div className="grid grids-cols-1 md:grid-cols-2 gap-4 ">
                <div className="flex justify-center">
                    <img className="ml-8 mt-8 h-auto md:h-[330px] " src="./Blogimg/Page_1/13 1.png" alt="tech Image" />
                </div>
                <div className="mt-4">
                    <h2 className="font-[700] text-lg sm:text-lg md:text-xl lg:text-[28px]">Picking a series of technologies</h2>
                    <p className="font-[400] text-sm sm:text-sm md:text-base lg:text-[19px]">Having a proper tech stack is the foundation of a performing application. The chosen technology would determine everything from the speed of development and scalability to maintaining the application.</p>

                    <ul className="space-y-2 mt-4">
                        <h3 className="text-md sm:text-md md:text-lg g:text-[23px] font-[700]">Frontend Technologies</h3>
                        <li className="font-[400]"><span className="font-[700]">•	React: </span>A pretty lean Library, React is probably the most used library for building up Web Applications. Flexible, and renders quickly. It is particularly effective in building complex user interfaces requiring real-time updates.
                        </li>
                        <li className="font-[400]"><span className="font-[700]">•	Vue.js: </span>	Vue.js: It is very lightweight and highly flexible and suitable for simple and highly scalable projects.
                        </li>
                        <li className="font-[400]"><span className="font-[700]">• Flutter: </span> Mobile cross-platform solution using Flutter, which means write once and deploy once on any iOS or Android.</li>
                    </ul>
                </div>
            </div>
            <h3 className="text-md sm:text-md md:text-lg lg:text-[23px] font-[700]">Backend Technologies</h3>
             <ul className="space-y-2">
                <li className="font-[400]"><span className="font-[700]">•	Node. js:</span> Network applications with high potential for scaling, Node (both front-end and back-end). js stands for JavaScript and this will be helpful for full-stack development also.</li>
                <li className="font-[400]"><span className="font-[700]">•	Django: </span>A python-based framework; it is used for security, scale, and often data-heavy applications.</li>
                <li className="font-[400]"><span className="font-[700]">•	Ruby on Rails </span>is known for its developer-friendly approach and fast development for apps that require a lot of updates.</li>
             </ul>
             <p className="font-[400] text-sm sm:text-sm md:text-md lg:text-[19px]">The right technology stack selection creates the foundation for an application to perform well, scale appropriately, and support long-term maintenance.</p>

        </div>
       </section>
    )
}

export default Part_2
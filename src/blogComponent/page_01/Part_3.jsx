

const Part_3 = () => {

    const Objects = [
        {
            Heading: "1. The Speed Of coding and minification",
            Subhead1: "Writing Clean Code:",
            Point1: " Practicing clean code helps to minimize the bugs and make the application scale easily.",
            Subhead2: "Minification:",
            Point2: "Compression of CSS, HTML, and JavaScript files reduces file size, loads pages faster, and maintains functionality.",
        },
        {
            Heading: "2. Image and Video Optimization",
            Subhead1: "Image Compression: ",
            Point1: "It reduces loads by many folds in the case of compressed images. One can take the help of TinyPNG or ImageOptim so that the file size does not increase while reducing its quality.",
            Subhead2: "Responsive Images:",
            Point2: "Using Formats that Scale to Screen Sizes WebP provides high-quality images at smaller size",
            Subhead3: "Video optimization:",
            Point3: " If you have applications containing videos, lazy loading can work wonders where in there would be a load only when view is in view and hence reduces the bandwidth which thereby optimizes your initial load-up. ",

        },
        {
            Heading: "3. Database Optimization ",
            Subhead1: "Indexing and Caching:",
            Point1: " Run indexing on data every time that is frequently accessed to reduce the query time and in case of overload servers, prefer caching.",
            Subhead2: "Transaction related:",
            Point2: " Write SQL Query which is optimized with consideration of what can be skipped by an application and rather why handling much data",
        }
    ]

  return (
    <section >
        <div className="pl-[100px] m-2 mt-12 ">
        <div className="font-inter space-y-2">
            <h1 className="font-[700] text-xl md:text-2xl lg:text-[28px]">Optimizing for Speed and Responsiveness</h1>
            <p className="text-sm sm:text-sm md:text-base lg:text-[19px] font-[400]">A high-performance application has speed and responsiveness; it provides such an experience to the users. Therefore, let us make this clear at the outset:</p>

            {
                Objects.map((items,key) => {
                    const {Heading,Subhead1,Subhead2,Subhead3,Point1,Point2,Point3} = items
                    return  <div key={key}>
                          <h1 className="font-inter font-[700] text-lg sm:text-lg md:text-xl lg:text-[23px]">{Heading}</h1>
                          <p className="font-[400] text-md sm:text-md md:text-base lg:text-[19px] pl-6"><span className="font-[700]">{Subhead1}</span>{Point1}</p>
                          <p className="font-[400] text-md sm:text-md md:text-base lg:text-[19px] pl-6"><span className="font-[700]">{Subhead2}</span>{Point2}</p>
                          <p className="font-[400]text-md sm:text-md md:text-base lg:text-[19px] pl-6"><span className="font-[700]">{Subhead3}</span>{Point3}</p>
                    </div>
                })
            }
           
        </div>
        </div>


        <div className="  pl-[100px] m-2 mt-12 md:mt-24 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 p-4">
            <div className="space-y-4 md:w-2/3">
            <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-[28px] font-inter font-[700]">Scaling Out of the Box</h1>
            <p className="text-md sm:text-md md:text-base lg:text-[19px] font-inter font-[400]">It means that an app can manage a higher volume of load without the user <br/> experience dropping. It is one of the essential factors for success in the long run.<br/>
            How To Make Your App Deliver Different Level Scalability?
            </p>

            <div className="font-inter space-y-6">
                <h2 className="font-[700] text-lg sm:text-lg md:text-xl lg:text-[23px]">1. Scale out/Scale up</h2>
                <p className="font-[400 text-sm sm:text-sm md:text-base lg:text-[19px]"><span className="font-[700] ">Horizontal Scaling: </span> This scaling helps to support more users by adding servers or instances of application <br/> to serve the requests. This is usually more advisable for big user-based applications.</p>
                <p className="font-[400] text-sm sm:text-sm md:text-base lg:text-[19px]"><span className="font-[700]">Scale Up:</span>  This is to add more oomph to a server that you already have. This is usually the most appropriate <br/> for a small app or an app that does not demand too much from users.</p>
                
                <h2 className="font-[700] text-lg sm:text-lg md:text-xl lg:text-[23px]">2. Microservices</h2>
                <p className="font-[400] text-sm sm:text-sm md:text-base lg:text-[19px] ">This breaks the application into smaller, independent services in Microservices architecture.<br/> Each of the services is built with the aim of doing only one thing and hence scalable <br/> independently. This thus gives a way out for lesser chances of failure in a whole system <br/> and also a degree of flexibility.</p>

                <h2 className="font-[700] text-lg sm:text-lg md:text-xl lg:text-[23px]">3. Cloud Infrastructure</h2>
                <p className="font-[400] text-sm sm:text-sm md:text-base lg:text-[19px] ">Cloud providers like AWS, Azure, and Google Cloud automatically scale up or down to <br/> meet the demand. Monitoring performance and handling backups also are services offered <br/> by the  cloud providers, which an application requires to be scalable.</p>

            </div>
            </div>

            {/* right part */}

            <div className="bg-[#D7EAFF] w-[100%] ml-1  sm:w h-auto md:h-[700px] lg:h-[920px] md:w-1/3  md:ml-12 rounded-lg p-4 space-y-4">
                 <h1 className="font-inter text-lg sm:text-lg md:text-2xl lg:text-[28px] font-[700]">Security from Development to Deployment</h1>
                 <p className="font-inter text-sm sm:text-sm md:text-base lg:text-[19px] font-[400]">Security is paramount because the consequences of data breaches last long-term in terms of financial implications and reputational damage. Here's how to do it at each stage of development:</p>

                 <div className="font-inter space-y-2">
                    <h2 className=" text-lg sm:text-lg md:text-xl lg:text-[23px] font-[700]">1. Data Encryption and Authentication</h2>
                    <p className="font-[400] text-sm sm:text-sm md:text-base lg:text-[19px]"><span className="font-[700]">End-to-End Encryption: </span>  Data needs to be encrypted from end to end in its transmission and thereby disallows any unauthorized access to data.</p>
                    <p className="font-[400] text-sm sm:text-sm md:text-base lg:text-[19px]"><span className="font-[700]">Secure Authentication: </span> Use MFA and strong password policies, and the user account is protected</p>

                    <h2 className="text-lg sm:text-lg md:text-xl lg:text-[23px] font-[700]">2. Secure API Development</h2>
                    <p className="font-[400] text-sm sm:text-sm md:text-base lg:text-[19px]"><span className="font-[700]">API authentication: </span> APIs should be used with a token or OAuth to not allow any kind of unauthorized access to APIs
                    </p>
                    <p className="font-[400] text-sm sm:text-sm md:text-base lg:text-[19px]"><span className="font-[700]">Rate Limiting: </span>  It prohibits DDoS attacks by establishing limits on requests by which a user or an application sends; hence, it prevents abuse.</p>
                    
                    <h2 className="text-lg sm:text-lg md:text-xl lg:text-[23px]text-[23px] font-[700]">3. Regular Security Audits </h2>
                    <p className="font-[400] text-sm sm:text-sm md:text-base lg:text-[19px] ">Security auditing and pen-testing expose vulnerabilities. Effectively, this means controlling some issues from being exploited in a manner that these are resolved before this turn into something which could be leveraged, and thus lined up changing in treats together with security facilities.</p>
                 </div>
            </div>

        </div>
    </section>
  )
}

export default Part_3
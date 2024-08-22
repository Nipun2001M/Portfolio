import React from "react";

const Technology1 = () => {
  return (
    <div className="py-20"  id="tech">
      <h1 className="heading  mb-10">
        Skill
        <span className="text-purple">s</span>
      </h1>
      <div className="flex flex-col gap-y-10">
      <div className="flex flex-col align-middle justify-center text-center">
          
      <h2 className="text-lg">
        Programming 
        <span className="text-purple ">{" "}Languages</span>
      </h2>
      <div className="flex flex-row  justify-center flex-wrap  ">
            {[
             
              { icon: "/cl.svg", name: "C" },
              { icon: "/java.svg", name: "Java" },
              { icon: "/python.svg", name: "Python" },
              { icon: "/js.svg", name: "Java Script" },
             
            ].map((t) => (
              <div
              key={t.name}
                className="mt-5 ml-5  overflow-hidden rounded-2xl  hover:shadow-xl  p-2 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col  w-[10rem]   "
                style={{
                  background: "rgb(2,0,36)",
                  backgroundColor:
                    " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,6,17,1) 35%, rgba(90,105,227,1) 100%)",
                }}
              >
                <div className="flex flex-row justify-between items-center">
                  <img
                    className="rounded-full bg-black-100 lg:w-10 lg:h-10 w-5 h-5 flex justify-center items-center border-white"
                    src={t.icon}
                  ></img>
                  <span className="ml-3">{t.name}</span>
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col align-middle justify-center text-center" >
        <h2 className="text-lg">
       Front 
        <span className="text-purple ">end</span>
      </h2>
      <div className="flex flex-row  justify-center flex-wrap  ">
            {[
              { icon: "/re.svg", name: "React Js" },
              { icon: "/html.svg", name: "HTML" },
              { icon: "/css.svg", name: "CSS" },
              { icon: "/tail.svg", name: "Tailwind" },
              { icon: "materialui.svg", name: "MUI" },
             
              { icon: "/next.svg", name: "Next.js" },
            ].map((t) => (
              <div
              key={t.name}
                className="mt-5 ml-5  overflow-hidden rounded-2xl  hover:shadow-xl  p-2 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col  w-[10rem]   "
                style={{
                  background: "rgb(2,0,36)",
                  backgroundColor:
                    " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,6,17,1) 35%, rgba(90,105,227,1) 100%)",
                }}
              >
                <div className="flex flex-row justify-between items-center">
                  <img
                    className="rounded-full bg-black-100 lg:w-10 lg:h-10 w-5 h-5 flex justify-center items-center border-white"
                    src={t.icon}
                  ></img>
                  <span className="ml-3">{t.name}</span>
                </div>{" "}
              </div>
            ))}
          </div>

        </div>
        <div className="flex flex-col align-middle justify-center text-center">
        <h2 className="text-lg">
        Back 
        <span className="text-purple ">end</span>
      </h2>
      <div className="flex flex-row  justify-center flex-wrap  ">
            {[
              
              { icon: "/nodejs.svg", name: "Node js" },
           
            ].map((t) => (
              <div
              key={t.name}
                className="mt-5 ml-5  overflow-hidden rounded-2xl  hover:shadow-xl  p-2 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col  w-[10rem]   "
                style={{
                  background: "rgb(2,0,36)",
                  backgroundColor:
                    " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,6,17,1) 35%, rgba(90,105,227,1) 100%)",
                }}
              >
                <div className="flex flex-row justify-between items-center">
                  <img
                    className="rounded-full bg-black-100 lg:w-10 lg:h-10 w-5 h-5 flex justify-center items-center border-white"
                    src={t.icon}
                  ></img>
                  <span className="ml-3">{t.name}</span>
                </div>{" "}
              </div>
            ))}
          </div>

        </div>
        <div className="flex flex-col align-middle justify-between text-center">
          
        <h2 className="text-lg">
        Data 
        <span className="text-purple ">base</span>
      </h2>
      <div className="flex flex-row  justify-center flex-wrap  ">
            {[
            
              { icon: "/mysql.svg", name: "MySql" },
              { icon: "/mssql.svg", name: "MSSql" },
              { icon: "/oracle2.svg", name: "OracleDB" },
              { icon: "/mongo.svg", name: "MongoDB" },
            
            ].map((t) => (
              <div
              key={t.name}
                className="mt-5 ml-5  overflow-hidden rounded-2xl  hover:shadow-xl  p-2 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col  w-[10rem]   "
                style={{
                  background: "rgb(2,0,36)",
                  backgroundColor:
                    " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,6,17,1) 35%, rgba(90,105,227,1) 100%)",
                }}
              >
                <div className="flex flex-row justify-between items-center">
                  <img
                    className="rounded-full bg-black-100 lg:w-10 lg:h-10 w-5 h-5 flex justify-center items-center border-white"
                    src={t.icon}
                  ></img>
                  <span className="ml-3">{t.name}</span>
                </div>{" "}
              </div>
            ))}
          </div>

        </div>
        <div className="flex flex-col align-middle justify-center text-center">
          
        <h2 className="text-lg">
        Othe 
        <span className="text-purple ">r</span>
      </h2>         
       {/* <div>A A A A A</div> */}

        </div>
        
      </div>
    </div>
  );
};

export default Technology1;

import Image from "next/image";
import folio_pic_2 from './assets/images/folio_pic_2.webp';
import Ex_3_pic_1 from './assets/images/Ex_3_pic_1.png';
import Ex_3_pic_2 from './assets/images/Ex_3_pic_2.png';
import Ex_3_pic_3 from './assets/images/Ex_3_pic_3.png';
import Ex_3_pic_4 from './assets/images/Ex_3_pic_4.png';
import Wisdm_pic_1 from './assets/images/Wisdm_pic_1.png';
import Wisdm_pic_2 from './assets/images/Wisdm_pic_2.png';
import Wisdm_pic_3 from './assets/images/Wisdm_pic_3.png';
import Wisdm_pic_4 from './assets/images/Wisdm_pic_4.png';
import Wisdm_pic_5 from './assets/images/Wisdm_pic_5.png';
import ROC from './assets/images/ROC.png';
import classifier_report from './assets/images/classifier_report.png';
import clustering from './assets/images/clustering.png';
import pca from './assets/images/pca.png';
import ImageSlider from "@/components/ImageSlider";
import './globals.css';

export default function Home() {
  const naturalEarth = [
    (
      <div className="flex flex-col mt-20 gap-5">
      <h2 className="text-2xl font-thin">
        Global population estimates
      </h2>
      <Image 
        className="w-128 h-88 object-cover" // Ensure images have the same height
        src={Ex_3_pic_1}
        alt="Choropleth graph"
      />
    </div>
    ), 
    (
    <div className="flex flex-col mt-20 gap-5">
      <h2 className="text-2xl font-thin">
        Population estimates with annotated countries
      </h2>
      <Image 
        className="w-128 h-88 object-cover"
        src={Ex_3_pic_2}
        alt="Choropleth graph with place annotations"
      />
    </div>
    ), 
    (
      <div className="flex flex-col  gap-5">
        <h2 className="text-2xl font-thin">
          GDP  
        </h2>
        <Image 
          className="w-128 h-88 object-cover"
          src={Ex_3_pic_3}
          alt="Choropleth graph"
        />
       </div>
    ), 
    (
      <div className="flex flex-col  gap-5">
        <h2 className="text-2xl font-thin ">
          GDP per Capita 
        </h2>
        <Image 
          className="w-128 h-88 object-cover"
          src={Ex_3_pic_4}
          alt="Choropleth graph with place annotations"
        />
      </div>
    )

  ]

  return (

    <div>
      {/* Main Content Section */}
      <div className="flex-col h-screen text-center relative custom-gradient pt-52">
        <h1 className="font-alegreya text-8xl font-bold">
          Mcanthony Otuonye, MSc
        </h1>
        <p className="font-alegreya text-4xl mt-8">
          Data Analyst
        </p>
      </div>

      <div className="flex justify-center mt-20 gap-56"> 
        <div>
          <Image 
            className="h-96 w-96 rounded-full transform scale-110" 
            objectPosition="center top"
            src={folio_pic_2} 
            alt="headshot image"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col text-center w-5/12 p-8">
          <h1 className="text-6xl font-bold">Hello!</h1>
          <hr className="mt-5 w-full rounded-xl bg-customRed h-1.5" />
          <p className="mt-4 text-2xl font-alegreya">
            I'm Mcanthony. <br/> 
            I'm a 24-year-old data analyst and web developer currently pursuing a Master’s degree in Computing from Edge Hill University.<br/>  
            I am driven by curiosity and dedicated to extracting impactful insights that can make a positive difference in the world.
          </p>
          <button className="font-montserrat font-bold bg-customRed w-2/4 h-10 mx-auto mt-6 rounded-full">Find out more?</button>
        </div>
      </div>

      {/* New Content Wrapper Section */}
      <div className="bg-gray-800 h-auto flex flex-col justify-center text-white ">
        <div className="flex flex-col bg-black justify-center">
          <h2 className="text-6xl font-bold mb-4 text-center pt-5">
            Projects
          </h2>
          <p className="w-3/5 mt-5 ml-auto mr-auto text-2xl text-center font-alegreya mb-6 pb-5">
          My work focuses on visualising and analysing datasets using Python to extract meaningful insights. <br/>  Additionally, applying machine learning algorithms has been instrumental in developing predictive models, such as activity prediction in the WISDM dataset.
           <br/> Key highlights of my work are showcased below, with further details available on the Projects page
          </p>
        </div>

        {/* WISDM Section */}
        <div className="flex flex-col font-alegreya text-2xl justify-center text-center ">
          <h1 className="mt-24 text-5xl">Wireless Sensor Data Mining (WISDM) <br/> dataset </h1>   
          <div className="flex mt-14 justify-center gap-10">
           <div className="flex flex-col gap-5" >
            <h2> Line Chart displaying activity frequency in 24hrs</h2>
              <Image 
                className="w-128 h-88"
                src={Wisdm_pic_4}
                alt="Line chart of Non-hand orientated activities"
              />
            </div>
            <div className="flex flex-col gap-5"> 
              <h1> Distribution of Accelerometer data via Boxplots </h1>
              <Image 
                className="w-160 h-88"
                src={Wisdm_pic_5}
                alt="Line chart of Non-hand orientated activities"
              />
           </div>
          </div> 

          {/* Project Images Section */}
          <div className="flex justify-center mt-10 gap-20 flex-wrap">
            <div className="flex flex-col mt-14 gap-5">
              <h2 className="text-2xl font-thin">
                X,Y, Z Walking Data for Subject 1600 
              </h2>
              <div className="flex flex-wrap gap-10 mt-1 justify-center">
                <Image 
                  className="w-128 h-88 object-cover" // Ensure images have the same height
                  src={Wisdm_pic_1}
                  alt="Choropleth graph"
                />
                <Image 
                  className="w-128 h-88 object-cover"
                  src={Wisdm_pic_2}
                  alt="Choropleth graph with place annotations"
                />
                <Image 
                  className="w-128 h-88 object-cover"
                  src={Wisdm_pic_3}
                  alt="Choropleth graph with place annotations"
                />
              </div>
            </div>
          </div> 

          {/* ML Section */}
          <div className="flex mt-14 justify-center">
           <div className="flex flex-col justify-center mt-14">
            <h1 className="text-5xl"> Machine learning (WISDM dataset) </h1>
             <div className="flex gap-10 mt-14 ">
               <div className="flex flex-col gap-5" >
                <h2> RandomForest Classifier for activity prediction </h2>
                  <Image 
                    className="w-128 h-88"
                    src={classifier_report}
                    alt="Line chart of Non-hand orientated activities"
                  />
                </div>
                <div className="flex flex-col gap-5"> 
                  <h2> ROC Curve </h2>
                  <Image 
                    className="w-128 h-88"
                    src={ROC}
                    alt="Line chart of Non-hand orientated activities"
                  />
               </div>
             </div>
             {/* Clustering & PCA Section */}
             <div className="flex gap-10 mt-14">
              <div className="flex flex-col gap-5" >
                  <h2> Clustering similiar activities </h2>
                    <Image 
                      className="w-128 h-88"
                      src={clustering}
                      alt="Line chart of Non-hand orientated activities"
                    />
                </div>
                  <div className="flex flex-col gap-5"> 
                    <h2> Principal Component Analysis </h2>
                    <Image 
                      className="w-128 h-88"
                      src={pca}
                      alt="Line chart of Non-hand orientated activities"
                    />
                </div>
              </div>
           </div>
          </div> 

        </div>

        
        {/*Natural Earth Section */}
        <div className="flex flex-col font-alegreya text-2xl justify-center text-center ">
          <h1 className="mt-40 text-5xl">Natural Earth Dataset</h1>
          {naturalEarth.map((item, idx) =>{
            return (
              <Image src={item.src} alt={item.alt} key={idx}
              />
            )
          }

          )

          }
       
        
        </div>
        


      </div>
    </div>
  );
}

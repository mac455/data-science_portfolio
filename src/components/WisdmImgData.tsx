import wisdm_1600_x from '../app/assets/images/wisdm_1600_x.png';
import wisdm_1600_y from '../app/assets/images/wisdm_1600_y.png';
import wisdm_1600_z from '../app/assets/images/wisdm_1600_z.png';
import Wisdm_1601_x from '../app/assets/images/Wisdm_1601_x.png';
import Wisdm_1601_y from '../app/assets/images/Wisdm_1601_y.png';
import Wisdm_1601_z from '../app/assets/images/Wisdm_1601_z.png';
import Wisdm_boxplot_1601 from '../app/assets/images/Wisdm_boxplot_1601.png';
import Wisdm_linechart from '../app/assets/images/Wisdm_linechart.png';
import Wisdm_boxplot from '../app/assets/images/Wisdm_boxplot.png';
import ROC from '../app/assets/images/ROC.png';
import classifier_report from '../app/assets/images/classifier_report.png';
import clustering from '../app/assets/images/clustering.png';
import pca from '../app/assets/images/pca.png';


export const subject_1600 = [
    {
      text: "Figures 1-3",
      src:wisdm_1600_x,
      alt: "Figure 1",
      description: (
        <>
             <p>
            Figures 1-3  show accelerometer data for subject 1600 (S1600) as a line chart using the first 1000 rows.
             Subject 1600 shows regular fluctuations in acceleration across all visualisations. 
             This is consistent with expectations while walking. 
             The amplitude in the Y-axis indicates that S1600 was walking at a moderate pace. 
             Acceleration is regularly above 12m/s2 and only drops to -2.5 m/s2. 
             Large peaks or troughs suggest a quick change of pace. 
             There is also consistent side–to–side movement shown by variability in the X-axis. 
             This may be from a constant change in direction while walking.  
             The Z-axis also shows consistent movement patterns with sporadic spikes. 
             It is difficult to dictate what the movement may be without specific knowledge of how the activity was carried out.'
            </p>

        </>

      )
    },
    {
        text: "Figure 2",
        src:wisdm_1600_y,
        alt: "Figure 2",
        description: ' See figure 1'
    },
    {
        text: "Figure 3",
        src:wisdm_1600_z,
        alt: "Figure 3",
        description: 'See figure 1'
    },
  ];

export const subject_1601 =[
    {
      text: "Figures 4-6",
      src:Wisdm_1601_x,
      alt: "Figure 4",
      description: (
        <>
        <p>
        Subject 1601 (S1601) shows similar variability for both x-axis and y-axis (Figures 4-6).
         Acceleration on the X-axis slows down over time, reducing lateral movement as time elapses.  
         This could be characteristic of the individual. 
         Overall, S1601 had a consistent walking pattern, indicated by the density of the data points between 20m/s2 and 7.5 m/s2 on the Y-axis. 
         This shows that S1601 was walking quicker than S1600.
          Any sudden changes in acceleration are shown by sudden positive or negative spikes in the X, Y, and Z axis. 
        </p>
        </>
      )
    },
    {
      text: "Figure 5 ",
      src: Wisdm_1601_y,
      alt: "Figure 5",
      description: 'See Figure 4'
    },
    {
      text: "Figure 6",
      src: Wisdm_1601_z,
      alt: "Figure 6",
      description:'See Figure 4'
    }
]

export const boxplot =[
    {
        text: 'Figures 7-8',
        src: Wisdm_boxplot,
        alt: "Figure 7",
        description:'See Figure 4'
    },
    {
        text: 'Figures 7-8',
        src: Wisdm_boxplot_1601,
        alt: "Figure 7",
        description:'See Figure 4'
    }
    
]
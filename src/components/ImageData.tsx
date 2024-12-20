
import Ex_3_pic_1 from '../app/assets/images/Ex_3_pic_1.png';
import Ex_3_pic_2 from '../app/assets/images/Ex_3_pic_2.png';
import Ex_3_pic_3 from '../app/assets/images/Ex_3_pic_3.png';
import Ex_3_pic_4 from '../app/assets/images/Ex_3_pic_4.png';
import wisdm_1600_x from '../app/assets/images/Wisdm/wisdm_1600_x.png';
import wisdm_1600_y from '../app/assets/images/Wisdm/wisdm_1600_y.png';
import wisdm_1600_z from '../app/assets/images/Wisdm/wisdm_1600_z.png';
import Wisdm_1601_x from '../app/assets/images/Wisdm/Wisdm_1601_x.png';
import Wisdm_1601_y from '../app/assets/images/Wisdm/Wisdm_1601_y.png';
import Wisdm_1601_z from '../app/assets/images/Wisdm/Wisdm_1601_z.png';
import Wisdm_linechart from '../app/assets/images/Wisdm/Wisdm_linechart.png';
import Wisdm_boxplot from '../app/assets/images/Wisdm/Wisdm_boxplot.png';
import roc_no_smote from '../app/assets/images/Wisdm/roc_no_smote.png';
import report_no_smote from '../app/assets/images/Wisdm/report_no_smote.png';
import cluster_no_pca from '../app/assets/images/Wisdm/cluster_no_pca.png';
import pca from '../app/assets/images/Wisdm/pca.png';
import melb_scatter from '../app/assets/images/melb/melb_scatter.png';
import melb_hist from '../app/assets/images/melb/melb_hist.png';
import melb_boxplot from '../app/assets/images/melb/melb_boxplot.png';


//Defining props using arrays and exporting 
export const naturalEarth = [
    {
      title: "Global population estimates",
      src: Ex_3_pic_1,
      alt: "Choropleth graph",
    },
    {
      title: "Population estimates with annotated countries",
      src: Ex_3_pic_2,
      alt: "Choropleth graph with place annotations",
    },
    {
      title: "GDP",
      src: Ex_3_pic_3,
      alt: "Choropleth graph",
    },
    {
      title: "GDP per Capita",
      src: Ex_3_pic_4,
      alt: "Choropleth graph with place annotations",
    },
  ];
  
 export const wisdmData = [
    {
      title: "Line Chart displaying activity frequency in 24hrs",
      src: Wisdm_linechart,
      alt: "Line chart of Non-hand orientated activities",
    },
    {
      title: "Distribution of Accelerometer data via Boxplots",
      src: Wisdm_boxplot,
      alt: "Boxplots displaying Accelerometer data distribution",
    },
    {
        title: "Walking Data for Subject 1600 (X)",
        src:wisdm_1600_x,
        alt: "Walking data for subject 1600 on the X axis",
    },
    {
        title: "Walking Data for Subject 1600 (Y)",
        src:wisdm_1600_y,
        alt: "Walking data for subject 1600 on the Y axis",
    },
    {
        title: "Walking Data for Subject 1600 (Z)",
        src:wisdm_1600_z,
        alt: "Walking data for subject 1600 on the Z axis",
    },

    {
      title: "Walking Data for Subject 1601 (X)",
      src:Wisdm_1601_x,
      alt: "Walking data for subject 1601 on the X axis",
    },
    {
      title: "  Walking Data for Subject 1601 (Y)",
      src: Wisdm_1601_y,
      alt: "Walking data for subject 1601 on the Y axis",
    },
    {
      title: "Walking Data for Subject 1601 (Z)",
      src: Wisdm_1601_z,
      alt: "Walking data for subject 1601 on the Z axis",
    }
  ];

  export const wisdmML = [
    {
      title: "RandomForest Classifier for activity prediction",
      src: report_no_smote, // This should be your actual image import or path
      alt: "RandomForest Classifier report for activity prediction",
    },
    {
      title: "ROC Curve",
      src: roc_no_smote, // This should be your actual image import or path
      alt: "Receiver Operating Characteristic (ROC) Curve",
    },
    {
      title: "Clustering similar activities",
      src: cluster_no_pca, // This should be your actual image import or path
      alt: "Clustering similar activities",
    },
    {
      title: "Principal Component Analysis",
      src: pca, // This should be your actual image import or path
      alt: "Principal Component Analysis",
    },
  ];

export const melb_data = [ 
    {
    title: "Distance and no. of room vs Housing Price",
    src: melb_scatter,
    alt: "Scatter plot",
    },
    {
        title: "Property type vs Housing Price",
        src: melb_boxplot,
        alt: "Boxplot",
    },
    {
        title: "Distribution of house prices across melbourne",
        src: melb_hist,
        alt: "Histogram",
    },
];




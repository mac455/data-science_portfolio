import wisdm_1600_x from '../app/assets/images/Wisdm/wisdm_1600_x.png';
import wisdm_1600_y from '../app/assets/images/Wisdm/wisdm_1600_y.png';
import wisdm_1600_z from '../app/assets/images/Wisdm/wisdm_1600_z.png';
import Wisdm_1601_x from '../app/assets/images/Wisdm/Wisdm_1601_x.png';
import Wisdm_1601_y from '../app/assets/images/Wisdm/Wisdm_1601_y.png';
import Wisdm_1601_z from '../app/assets/images/Wisdm/Wisdm_1601_z.png';
import gyro_x_1600 from '../app/assets/images/Wisdm/gyro_x_1600.png';
import gyro_y_1600 from '../app/assets/images/Wisdm/gyro_y_1600.png';
import gyro_z_1600 from '../app/assets/images/Wisdm/gyro_z_1600.png';
import gyro_x_1601 from '../app/assets/images/Wisdm/gyro_x_1601.png';
import gyro_y_1601 from '../app/assets/images/Wisdm/gyro_y_1601.png';
import gyro_z_1601 from '../app/assets/images/Wisdm/gyro_z_1601.png';
import gyro_boxplot_1600 from '../app/assets/images/Wisdm/gyro_boxplot_1600.png';
import gyro_boxplot_1601 from '../app/assets/images/Wisdm/gyro_boxplot_1601.png';
import Wisdm_boxplot_1601 from '../app/assets/images/Wisdm/Wisdm_boxplot_1601.png';
import Wisdm_linechart from '../app/assets/images/Wisdm/Wisdm_linechart.png';
import Wisdm_boxplot from '../app/assets/images/Wisdm/Wisdm_boxplot.png';
import roc_no_smote from '../app/assets/images/Wisdm/roc_no_smote.png';
import report_smote from '../app/assets/images/Wisdm/report_smote.png';
import report_no_smote from '../app/assets/images/Wisdm/report_no_smote.png';
import clusters_no_pca from '../app/assets/images/Wisdm/clusters_no_pca.png';
import cluster_no_pca from '../app/assets/images/Wisdm/cluster_no_pca.png';
import pca from '../app/assets/images/Wisdm/pca.png';
import pca_clusters from '../app/assets/images/Wisdm/pca_clusters.png';
import { ModalSliderImgItem } from '@/components/ModalSlider';
import { ImageItem } from './ImageOpacity';
import references from '../app/assets/images/references.jpg'


export const subject_1600:  ModalSliderImgItem[] = [
    {
      text: "Figures 1-3",
      src:wisdm_1600_x,
      alt: "Figure 1",
      description: (
        <>
             <p className='font-opensans'>
            Figures 1-3  show accelerometer data for subject 1600 (S1600) as a line chart using the first 1000 rows.
             Subject 1600 shows regular fluctuations in acceleration across all visualisations, consistent with expectations.
             There is also consistent side–to–side movement shown by variability in the X-axis. 
             This may be from a constant change in direction while walking.  
            </p>

        </>

      )
    },
    {
        text: "Figure 2",
        src:wisdm_1600_y,
        alt: "Figure 2",
        description: (
          <>
            <p className='font-opensans'>
            The amplitude in the Y-axis indicates that S1600 was walking at a moderate pace. 
            Acceleration is regularly above 12m/s2 and only drops to -2.5 m/s2. 
            Large peaks or troughs suggest a quick change of pace. 
            </p>
          </>
        )
      },
    {
        text: "Figure 3",
        src:wisdm_1600_z,
        alt: "Figure 3",
        description: (
          <>
            <p className='font-opensans'>
            The Z-axis also shows consistent movement patterns with sporadic spikes. 
             It is difficult to dictate what the cause of the spikes without specific knowledge of how the activity was carried out.
             However, the pattern of movement provides useful insights into individual behaviour while completing the exercise.
            </p>
          </>
        ),
    }
  ];

export const subject_1601:  ModalSliderImgItem[] =[
    {
      text: "Figures 4-6",
      src:Wisdm_1601_x,
      alt: "Figure 4",
      description: (
        <>
        <p className='font-opensans'>
        Subject 1601 (S1601) shows similar variability for both x-axis and y-axis (Figures 4-6).
         Acceleration on the X-axis slows down over time, reducing lateral movement as time elapses.  
         This could be characteristic of the individual. 
        </p>
        </>
      )
    },
    {
      text: "Figure 5 ",
      src: Wisdm_1601_y,
      alt: "Figure 5",
      description: (
        <>
        <p className='font-opensans'>
        Overall, S1601 had a consistent walking pattern, indicated by the density of the data points between 20m/s2 and 7.5 m/s2 on the Y-axis. 
        This shows that S1601 was walking quicker than S1600.
        </p>
        </>
      )
    },
    {
      text: "Figure 6",
      src: Wisdm_1601_z,
      alt: "Figure 6",
      description:(
        <>
        <p className='font-opensans'>
        S1600 maintained consistent pace. 
        </p>
        </>
      )
    }
]

export const gyroscope_1600: ModalSliderImgItem[] = [
  {
    text: "Figure 7-9",
      src: gyro_x_1600,
      alt: "Figure 7",
      description:(
        <>
        <p className='font-opensans'>
        Figures 7-9 display the phone gyroscope data for S1600, showing consistent angular rotation along the X, Y, and Z axes. 
        These patterns help identify behavioral trends during the activity.
        </p>
        </>
      )
  }, 
  {
    text: "Figure 8",
      src: gyro_y_1600,
      alt: "Figure 8",
      description:(
        <>
        <p className='font-opensans'>
        Consistent movement along Y-axis
        </p>
        </>
      )
  },
  {
    text: "Figure 9",
      src: gyro_z_1600,
      alt: "Figure 9",
      description:(
        <>
        <p className='font-opensans'>
        Figure 10 reveals significant angular movement along the Z-axis. The density of the data is the most significant of all three axes,
        However, the data is also consistent across the timespan, indicating this is a behavioral trait of S1600 rather than an abrupt and sudden twisting or turning.
        The phone may have been held in hand during walking and experinced substantial arm movement.
        As mentioned earlier, a thorough analysis is challenging without precise details on how the activity was carried out.
        </p>
        </>
      )


  }
]

export const gyroscope_1601: ModalSliderImgItem[] = [
  {
    text: "Figure 10-12",
      src: gyro_x_1601,
      alt: "Figure 7",
      description:(
        <>
        <p className='font-opensans'>
        The X-axis shows consistent peaks and troughs, indicating periodic movements.
        The range of movement suggests S1601 was swaying from side to side or swingin their arms while walking. 

        </p>
        </>
      )
  }, 
  {
    text: "Figure 11",
      src: gyro_y_1601,
      alt: "Figure 11",
      description:(
        <>
        <p className='font-opensans'>
        Y-axis follows a similar pattern, with sporadic spikes across the timespan. 
        This may be attributed to sudden change in direction or movement.
        </p>
        </>
      )
  },
  {
    text: "Figure 12",
      src: gyro_z_1601,
      alt: "Figure 12",
      description:(
        <>
        <p className='font-opensans'>
        The Z-axis data shows a regular oscillation pattern but with a relatively smaller range compared to the X and Y axes. Z-axis movement suggest turning or twisting of the body while walking.
        The lower range of movement means that there’s less pronounced rotation along this axis, but still consistent enough to suggest ongoing physical movement.
        </p>
        </>
      )


  }
]

export const boxplot_accel:  ModalSliderImgItem[] = [
    {
        text: 'Figures 13 & 14 ',
        src: Wisdm_boxplot,
        alt: "Figure 13",
        description:(
          <>
          <p className='font-opensans'>
          Figures 13 and 14 show that S1600 and S1601 exhibit very similar movement patterns in non-hand-oriented activities. <br/>
          <span style={{fontWeight:'bold'}}>X-axis:</span> <br/> The x-axis for both subjects display a small range. 
          This is expected as non-hand-oriented activities do not require much side movement. 
          The median for most activities on the x-axis is near 0, suggesting little lateral motion. 
          However, the outliers highlight moments of sudden lateral movement. <br/>
          <span style={{fontWeight:'bold'}}>Y-axis:</span> <br/>
           The Y-axis shows the largest variability in acceleration, especially jogging. 
           In jogging, the similar medians suggest both subjects are running at a similar pace. 
           However, S1601 has a higher interquartile range. 
           This means S1601 is running at a faster pace for a longer period. 
           The outliers highlight a rapid change in acceleration. 
           Both subjects display similar patterns in all other activities <br/>
           <span style={{fontWeight:'bold'}}>Z-axis:</span> <br/> 
           The z-axis shows a range of different distributions for both subjects. 
           For some activities, these movements may be characteristic of the individual because a small range is expected for non-hand-oriented activities in the z-axis. 
           This is because there is little or no up/down movement in these activities.  
           The outliers point towards significant rapid up/down movement.




          </p>
          </>
        )
    },
    {
        text: 'Figures 14',
        src: Wisdm_boxplot_1601,
        alt: "Figure 7",
        description:'See Figure 4'
    }
    
]

export const boxplot_gyro:  ModalSliderImgItem[] = [
  {
      text: 'Figures 15 & 16 ',
      src: gyro_boxplot_1600,
      alt: "Figure 13",
      description:(
        <>
        <p className='font-opensans'>
        ASK FOR ANALYSIS 



        </p>
        </>
      )
  },
  {
      text: 'Figure 16',
      src: gyro_boxplot_1601,
      alt: "Figure 7",
      description:'See Figure 4'
  }
  
]

export const activities_LC_Imgitem: ImageItem  [] = [
  {
    text: "Figures 17",
    src:Wisdm_linechart,
    alt: "Figure 17",
    description: (
      <>
           <p className='font-opensans'>
           Non-hand oriented activites were used as they show the best variability across the dataset. 
           The peaks and troughs can be attributed to high and low activity counts, respectively. 
           Activity counts for all activities drop significantly from around 00:00 to 05:00 which is expected as people would be sleeping during these hours. 
           The sharp increase in activity counts around 06:00 – 07:00 shows a pattern of early morning exercise across all subjects. 
           An increase in activities during the late evening may be individuals who prefer exercise at night
          </p>

      </>

    )
  },
]

export const clusterBeforePCA:  ModalSliderImgItem[] = [
  {
      text: 'Figures 18 & 19 ',
      src: cluster_no_pca,
      alt: "Figure 18",
      description:(
        <>
        <p className='font-opensans'>
      I attempted to create 3 activity clusters according to the dataset description to use for visualisation purposes.
       K-means clustering is a commonly used model (Colpas et al., 2020). Rodado et al., (2020) mentioned combining sensor data captured at the same. 
       Hence, both accelerometer and gyroscope sensor data from S1600 were used to obtain 6-axis-related features. 
       The silhouette score of 0.56 suggests the clustering algorithm has decent performance but failed to form distinct clusters according to the dataset description
        </p>
        </>
      )
  },
  {
      text: 'Figures 19',
      src: clusters_no_pca,
      alt: "Figure 19",
      description:(
        <>
        <p>
        Cluster 0  and 1 contained a similar activity code with similarly high counts. 
        Cluster 2 contained significantly fewer activities with significantly lower counts. 
        There is much overlap of activities between all clusters. 
        Activities were grouped according to similar acceleration/gyroscope patterns.
         However, a majority of activities contain outliers(Figure 13-16). 
         The clustering model may have incorrectly grouped the activities as it is sensitive to outliers (Zhang et al.,2020). 
         K-Medians and DBSCAN model are more robust to outliers, but these were programmatically more difficult and memory-intensive models. 
        </p>
        </>
      )

  }
  
]
export const clusterAfterPCA:  ModalSliderImgItem[] = [
  {
      text: 'Figures 20 & 21 ',
      src: pca,
      alt: "Figure 20",
      description:(
        <>
        <p className='font-opensans'>
        Tajunisha and Saravanan (2011) suggested the use of PCA to improve clustering performance. 
        PCA was applied as 100% of the variance across 6 features could be captured by 2 principal components.
        </p>
        </>
      )
  },
  {
      text: 'Figure 21',
      src: pca_clusters,
      alt: "Figure 21",
      description:(
        <>
        <p>
        Applying PCA marginally improved performance (Silhouette score: 0.57) .
         It created well-separated clusters but they were not valid as per the description of non-hand-oriented activities.
        After more unsuccessful attempts, the groups were created using basic Python syntax. 

        </p>
        </>
      )

  },
  {
    text: 'References - Figures 18 - 21',
    src: references,
    alt: "References ",
    description:(
      <>
      <p>
      Ariza Colpas, Paola, et al. 
      “Unsupervised Human Activity Recognition Using the Clustering Approach: A Review.” Sensors, vol. 20, no. 9, 9 May 2020, p. 2702, https://doi.org/10.3390/s20092702.
       Accessed 25 Nov. 2021. <br/>
       <br/>
       Neira-Rodado, D., Nugent, C., Cleland, I., Velasquez, J. and Viloria, A. (2020). 
       Evaluating the Impact of a Two-Stage Multivariate Data Cleansing Approach to Improve to the Performance of Machine Learning Classifiers: A Case Study in Human Activity Recognition. 
       Sensors, 20(7), p.1858. 
       doi:https://doi.org/10.3390/s20071858. <br/> 
       <br/>
       Tajunisha, and Saravanan. “An Efficient Method to Improve the Clustering Performance for High Dimensional Data by Principal Component Analysis and Modified K-Means.”
        International Journal of Database Management Systems ( IJDMS ), vol. 3, no. 1, 2011, https://doi.org/10.5121/ijdms.2011.3113. 
       Accessed 25 Apr. 2024. <br/>
       <br/>
       Zhang, Xiaoliang, et al.
        “A Robust K-Means Clustering Algorithm Based on Observation Point Mechanism.” Complexity, vol. 2020, 30 Mar. 2020, pp. 1–11, downloads.hindawi.com/journals/complexity/2020/3650926.pdf, https://doi.org/10.1155/2020/3650926.
      </p> 
      </>
    )

}
  
]


export const classifierNoSmt:  ModalSliderImgItem[] = [
  {
      text: 'Figures 22 & 23 ',
      src: report_no_smote,
      alt: "Figure 22",
      description:(
        <>
        <p className='font-opensans'>
        Figures 13-16 (Boxplots) show distinct differences in movement patterns for non-hand-oriented activities. 
         This suggests that sensor data can be used to classify activities. 
         For example, walking or not walking.  
         Several studies have achieved high accuracy (up to 91%) with Random Forest Classifiers for activity prediction (Nayak et al., 2022; Min et al., 2020). 
         Hence, a classifier model was built with a RandomForest Classifier. <br/>
         The classifier performed well at identifying non-walking activities (class 0), as evidenced by 84% precision and 89% recall. 
         The F1 score (0.86) highlights a good balance between precision and recall in class 0.
        The model struggles to correctly identify instances of walking (class 1), shown by recall: 48% and precision: 59%.  
        The F1 score (0.53) suggests there is significant room for improvement between the balance of precision and recall in class 1.
      The overall accuracy is high but this is misleading as support values indicate a class imbalance in favour of non-walking activities, significantly inflating accuracy. 

         
        </p>
        </>
      )
  },
  {
      text: 'Figure 23',
      src: roc_no_smote,
      alt: "Figure 23",
      description:(
        <>
        <p>
          A common way to display the model performance is an ROC curve as shown above, However, as the dataset is imbalanced, the ROC is ill-suited to use as an evaluation metric (Saito and Rehmsmeier, 2015). 
          Appropriate evaluation methods include recall, precision, and F1 score (Saito and Rehmsmeier, 2015).

        </p>
        </>
      )

  },
]
export const classifierWithSmt: ModalSliderImgItem[] =[
     { text: 'Figure 24',
      src: report_smote,
      alt: "Figure 24",
      description: ( 
        <>
        <p>
        To address this, the Synthetic Minority Oversampling (SMOTE) technique was applied. 
        Figure 24 displays evaluating metrics after applying SMOTE. 
        SMOTE increased the precision (87%) at the cost of recall (80%) in class 0. 
        The F1 score (0.83) slightly decreased in class 0.  
        In class 1, the model improved in identifying true positives shown by  65% recall. 
        However, there was a slight decrease in precision at 51%, indicating more false positives in classification. 
        The improved F1 score (0.58) indicates there is a better balance between precision and recall.
         Furthermore, it highlights the model is performing better in class 1. 
         The accuracy achieved is significantly lower than the values published in research studies, at 76% compared to 91% by Nayak et al.,(2022). Nayak et al.,(2022) implemented cross-validation, providing a more robust method of model evaluation. 
         Insights from cross-validation are very valuable for improving model performance (Bertolini et al., 2021). 
        Unfortunately, Cross-validation proved to be too computationally intensive for my system.
        </p>
        </>

      )
     },
     {
      text: 'References',
      src: references,
      alt: "References",
      description:(
        <>
        <p>
        Bertolini, R., Finch, S.J. and Nehm, R.H. (2021). Enhancing data pipelines for forecasting student performance: integrating feature selection with cross-validation. International Journal of Educational Technology in Higher Education, 18(1). doi:https://doi.org/10.1186/s41239-021-00279-6.<br/>
        <br/>Min, Y., Yin Htay, Y., Khin, K. and Oo (2020). Comparing the Performance of Machine Learning Algorithms for Human Activities Recognition using WISDM Dataset. International Journal of Computer.<br/>
        <br/>Nayak, S., Panigrahi, C., Pati, B., Nanda, S. and Hsieh, M.-Y. (2022). Comparative analysis of HAR datasets using classification algorithms. Computer Science and Information Systems, 19(1), pp.47–63. doi:https://doi.org/10.2298/csis201221043n.<br/>
        <br/>Saito, T. and Rehmsmeier, M. (2015). The Precision-Recall Plot Is More Informative than the ROC Plot When Evaluating Binary Classifiers on Imbalanced Datasets. PLOS ONE, 10(3), p.e0118432. doi:https://doi.org/10.1371/journal.pone.0118432.
        </p>
        </>
      )
     }


]
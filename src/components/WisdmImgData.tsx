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
             <p >
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
            <p >
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
            <p >
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
        <p >
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
        <p >
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
        <p >
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
        <p >
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
        <p >
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
        <p >
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
      alt: "Figure 10",
      description:(
        <>
        <p >
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
        <p >
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
        <p >
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
          <p >
         <br/>
          <span style={{fontWeight:'bold'}}>X-axis:</span> 
          <br/> 
      
          The X-axis shows limited lateral motion across most activities, with static activities like sitting and standing showing minimal movement, near zero median. 
          Dynamic activities like jogging and kicking present higher variability, with broader IQRs and a significant number of outliers, reflecting unpredictable side-to-side movement. 
          The negative outliers suggest sharp leftward movements, which are consistent with more physically demanding activities. 
          Overall, lateral movement is controlled but exhibits sudden deviations, primarily during high-motion activities. <br/>
          
          <br/>
          <span style={{fontWeight:'bold'}}>Y-axis:</span> <br/>
          
          <br/>
          The Y-axis displays considerable variability, especially for jogging and kicking, which have large IQRs and frequent outliers, signifying strong forward-backward acceleration. 
          The wider ranges indicate sustained acceleration during active movements, while static activities (e.g., sitting, standing) remain clustered around zero. 
          Outliers, both positive and negative, suggest rapid changes in acceleration, reflecting shifts in speed or direction during motion-heavy activities.<br/>

          <br/>
          <span style={{fontWeight:'bold'}}>Z-axis:</span> 
          <br/> 
           
           <br/>The Z-axis shows the most pronounced range of motion, especially during jogging and kicking. 
           These activities have wide IQRs and numerous outliers, indicating significant vertical acceleration changes, typical of up-and-down movements like bouncing or impact during physical exertion. 
           Activities like walking and stairs exhibit more controlled, consistent vertical motion, while sitting and standing stay near zero, reflecting near-constant vertical position. 
           The outliers highlight moments of sharp vertical acceleration, possibly from jumps or abrupt movements.


          </p>
          </>
        )
    },
    {
        text: 'Figures 14',
        src: Wisdm_boxplot_1601,
        alt: "Figure 14",
        description:(
          <>
            <p >

            <br/>
            <span style={{fontWeight:'bold'}}>X-axis:</span> 
            <br/> 
            Movement patterns in X-axis are very similar to S1600.
            Limited lateral motion across most activities, with static activities like sitting and standing showing minimal movement. 
            Dynamic activities display higher variability, with wider IQRs and more outliers. <br/>
           
            <br/>
            <span style={{fontWeight:'bold'}}>Y-axis:</span>            
            <br/>

            <br/> The Y-axis shows the largest variability in acceleration, especially "Jogging". 
            In "Jogging", the similar medians suggest both subjects are running at a similar pace. 
            However, S1601 has a higher interquartile range, meaning S1601 has greater sustained acceleration. <br/>
            <br/> The outliers highlight a rapid change in acceleration. 
            Especially in "Kicking" and " Stairs". 
            Outliers in "Kicking" are likely due to quick and sudden acceleration as physically intensive sport. 
            However, the range in acceleration on the "Stairs" suggest inconsistent pacing and may be down to individual characteristics.
            <br/>Both subjects display similar patterns in all other activities.<br/>
            <br/>
            <span style={{fontWeight:'bold'}}>Z-axis:</span> 
            <br/> 

           
            <br/>Movement patterns in Z-axis are also very similar to S1600. Significant range of motion from jogging and kicking due to the nature of the excercise. 
            IQR and outliers from these activities suggest quick changes in vertical motion. 
            Static activities ("Sitting" and "Standing") stay near zero, reflecting near-constant vertical position. 

            </p>
          </>
        )
    }
    
]

export const boxplot_gyro:  ModalSliderImgItem[] = [
  {
      text: 'Figures 15 & 16 ',
      src: gyro_boxplot_1600,
      alt: "Figure 15",
      description:(
        <>
        <p>
              <span style={{fontWeight:'bold'}}>X-axis:</span> 
              <br/>

              <br/>Lateral motion is minimal across most activities, as seen by the narrow IQRs, especially for "Sitting," "Standing," and "Stairs," with medians near zero. 
              "Walking" and "Jogging" exhibit slightly larger IQRs, indicating more side-to-side movement, while "Kicking" shows the widest range, suggesting unpredictable lateral shifts. 
              <br/>The numerous outliers, particularly in "Jogging" and "Kicking," reflect sudden, sharp lateral motions, highlighting individual style or technique during these activities.<br/>

              <br/>
              <span style={{fontWeight:'bold'}}>Y-axis:</span> <br/>
              <br/>

              The y-axis shows the most variability in "Jogging," with a wide IQR, suggesting significant forward-backward movement.
              The outliers in this activity highlight rapid changes in acceleration, likely due to inconsistent pacing. <br/>
              <br/>Activities, "Walking" and "Kicking", also show relatively high variation, while static activities like "Sitting" and "Standing" exhibit little motion. 
              The limited outliers in these static activities suggest minimal unintended movements, indicating individual behaviour in maintaining stillness.<br/>
              
              
              <br/>
              <span style={{fontWeight:'bold'}}>Z-axis:</span> 
              <br/>
              
              <br/>Vertical movement is moderate in dynamic activities, with "Jogging" and "Kicking" showing the highest variability. 
              The wide IQR for "Jogging" suggests significant vertical motion, possibly due to footfalls and jumps. 
              For static activities, the z-axis shows near-zero motion, as expected, though some outliers exist in "Sitting" and "Standing," possibly due to small posture adjustments or fidgeting.
        </p>
        </>
      )
  },
  {
      text: 'Figure 16',
      src: gyro_boxplot_1601,
      alt: "Figure 16",
      description:(
        <>
        <p>
          <span style={{fontWeight:'bold'}}>X-axis:</span> 
          <br/>

          <br/>S1601 displays similar lateral movement patterns to S1600, with little to no side-to-side motion for static activities like "Sitting" and "Standing." 
          <br/>However, "Jogging" and "Kicking" show larger IQRs and more outliers, with "Kicking" again standing out for its high variability, indicating erratic lateral shifts.<br/>
          
          <br/>
          <span style={{fontWeight:'bold'}}>Y-axis:</span> 
          <br/>      
          
          <br/>The y-axis shows significant variability in "Jogging," with a wider IQR compared to S1600, suggesting more pronounced forward-backward movements. 
          This could indicate a more inconsistent pace during jogging. 
          "Kicking" also shows high variability, while static activities remain near-zero with few outliers, similar to S1600.
          <br/> The greater number of outliers in "Jogging" reflects rapid changes in acceleration, suggesting S1601 may be running faster or with less control than S1600. <br/> 
        
          <br/>
          <span style={{fontWeight:'bold'}}>Z-axis:</span>
          <br/>     

          <br/>Vertical motion is most apparent in "Jogging" and "Kicking," with S1601 showing a wider IQR in "Jogging" than S1600. 
          This suggests S1601 experiences more uneven vertical motion, possibly due to variations in running or kicking style.
           As expected, vertical motion is minimal in static activities, though a few outliers are present in "Sitting" and "Standing," indicating minor, possibly unintended movements.

        </p>

        </>
      )
  }
  
]

export const activities_LC_Imgitem: ImageItem  [] = [
  {
    text: "Figures 17",
    src:Wisdm_linechart,
    alt: "Figure 17",
    description: (
      <>
           <p>
           Non-hand-oriented activities were selected for analysis due to their high variability across the dataset. 
           The observed peaks and troughs correspond to high and low activity counts, respectively. 
           Notably, activity counts drop significantly from around 00:00 to 05:00, which is expected as individuals are typically sleeping during these hours. 
           A sharp increase in activity counts between 06:00 and 07:00 indicates a pattern of early morning exercise among the subjects. 
           Additionally, an increase in activities during the late evening suggests that some individuals prefer to exercise at night.
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
        <p>
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
         However, a majority of activities contain outliers (Figure 13-16). 
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
        <p>
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
        <p >
                  
            Figures 13-16 (Boxplots) highlight distinct movement patterns for non-hand-oriented activities, indicating that sensor data can effectively classify activities, such as distinguishing walking from non-walking. 
            Studies have shown Random Forest Classifiers can achieve high accuracy (up to 91%) for activity prediction (Nayak et al., 2022; Min et al., 2020). 
            Based on this, a Random Forest classifier was developed.<br/>
            <br/>
            The model performed well in identifying non-walking activities (class 0), with 84% precision and 89% recall, and an F1 score of 0.86, reflecting a strong balance between precision and recall. 
            However, the model struggled to detect walking (class 1), with recall at 48% and precision at 59%, resulting in an F1 score of 0.53, indicating significant room for improvement.
            While the overall accuracy appears high, the class imbalance towards non-walking activities inflates this figure, masking the model's poorer performance on walking.
            
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
          A common way to display the model performance is an ROC curve as shown above, 
          However, as the dataset is imbalanced, the ROC is ill-suited to use as an evaluation metric (Saito and Rehmsmeier, 2015). 
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
        In class 0, SMOTE increased precision to 87%, but recall dropped to 80%, resulting in a slight decrease in the F1 score to 0.83. 
        This indicates a trade-off, where the model became more conservative, reducing false positives but missing actual positives.<br/>
        
        <br/>Conversely, class 1 saw improved recall at 65%, highlighting the model's better identification of true positives, albeit with a precision decrease to 51%, leading to more false positives. 
        The F1 score of 0.58 suggests a better balance between precision and recall, indicating improved performance in class 1 despite the trade-offs.<br/>
        
        <br/>Overall accuracy was 76%, significantly lower than Nayak et al. (2022), which reported 91% due to cross-validation. 
        Nayak et al. employed cross-validation, which provides a more robust and reliable method for model evaluation by ensuring that performance metrics are not overly optimistic due to overfitting. 
        The insights derived from cross-validation are invaluable for understanding model behavior and identifying areas for improvement (Bertolini et al., 2021). <br/>
    
        <br/>Unfortunately, the implementation of cross-validation was deemed too computationally intensive for my system, limiting my ability to achieve the same level of model robustness. 
        Future work may benefit from exploring alternative techniques, such as stratified sampling or simpler validation methods, that can provide insights into model performance without the full overhead of cross-validation. 
        
        <br/>
        <br/>Additionally, feature investigations to enhance model performance and achieve a more balanced classification across both classes
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
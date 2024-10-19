import React from "react";

import melb_scatter from '../app/assets/images/melb/melb_scatter.png'
import int_scatter from '../app/assets/images/melb/int_scatter.png'
import int_hist from '../app/assets/images/melb/int_hist.png'
import melb_hist from '../app/assets/images/melb/melb_hist.png'
import distance_hist from '../app/assets/images/melb/distance_int.png'


import { ModalSliderImgItem } from "./ModalSlider";

export const staticIntScatter:ModalSliderImgItem[] = [
    {   text: 'Static & Interactive Scatter Plot Comparison',
        src: melb_scatter,
        alt: 'Static Scatter Plot',
        description: (
            <>
            <p>
            Scatter plots are highly effective for illustrating relationships between numerical variables (Nguyen et al., 2020). In my analysis of the Melbourne Housing Market, a scatter plot allowed me to visualise key relationships between factors like price, distance from the city center, and the number of rooms, helping to form initial insights.
             For instance, the scatter plot clearly shows that properties closer to the city center with multiple rooms tend to be the most expensive, aligning with expectations in urban real estate markets.
             <br/> 
             <br/> 
             However, as Mahajan and Gokhale (2018) point out, static plots are "author-focused" and provide a limited view of the data, offering only a surface-level understanding of broader market dynamics.
             For example, while the static scatter plot may show that properties in central suburbs are more expensive, it doesn't allow me to explore why certain outer suburbs might have high-priced outliers, perhaps due to unique local factors like new infrastructure or developments.
            </p>
            </>
        )


    },
    {
        text:'Interactive Scatter Plot',
        src:int_scatter,
        alt:'Interactive Scatter Plot',
        description:(
            <>
            <p>
            Interactive scatter plots, by contrast, offer deeper analytical capabilities. 
            For example, I can identify specific outliers, expensive properties far from the city center, and investigate whether they are larger estates, newly developed homes, or located in high-demand suburbs.
             Additionally, by interacting with the plot, I can more clearly see how variables like year built, number of rooms, or even land size contribute to property pricing in specific regions.
             <br/><br/>
             This level of interaction provides a greater understanding of the Melbourne housing market in 2016. It reveals trends in the market, such as the relationship between location and price, but also highlights specific factors that influence market variability. 
             For example, the interactive plot shows several properties built after 2000 in suburbs over 30km away from the city center with less than 5 rooms priced at over 700k. 
             <br/><br/>
             More investigation into these suburbs may reveal new transporation hubs or excellent local amenities.
             This type of insight is invaluable for a detailed market analysis, allowing for a more informed perspective on housing affordability and regional property trends across Melbourne.
            </p>
            </>
        )


    },
    {
        text: null,
        src: null,
        alt: 'References',
        description: (
            <>
            <p>
            Mahajan, K.N. and Ajay Gokhale, L. (2018). Comparative Study of Static and Interactive VisualizationApproaches. International Journal on Computer Science and Engineering, 10(3), pp.85–91. doi:https://doi.org/10.21817/ijcse/2018/v10i3/181003016.'
            <br/><br/>
            Nguyen, Q.V., Miller, N., Arness, D., Huang, W., Huang, M.L. and Simoff, S. (2020). Evaluation on interactive visualization data with scatterplots. Visual Informatics, [online] 4(4), pp.1–10. doi:https://doi.org/10.1016/j.visinf.2020.09.004.
            </p>
            </>
        )
    }
]

export const staticIntBoxplot:ModalSliderImgItem[] = [
    {
        text:'Static vs Interactive Boxplots',
        src: int_hist,
        alt: 'Static boxplot',
        description: (
            <>
            <p>
            Box plots are highly effective for visualising data distribution (Hu, 2020), offering a clear summary of central tendencies and variability. 
            They are particularly robust for skewed data and are excellent for detecting outliers (Hu et al., 2020). 
            The static box plot highlights that houses tend to be the most expensive property type, while units are the least costly. Additionally, houses are the most prevalent type of property, further indicating their prominence in the Melbourne real estate market.
            However, while static box plots are useful for summarising data, they have limitations. Key details like quartiles and medians can only be inferred from the scale, making it harder to extract precise information.

            </p>
            </>
        )
    },
    {
        text:'Static vs Interactive Boxplots',
        src: int_hist,
        alt: 'Interactive boxplot',
        description: (
            <>
            <p>
            By contrast, interactive box plots allow users to engage directly with the data, providing exact values for medians, quartiles, and outliers on demand.
            For instance, by hovering over data points in an interactive plot, I can access variables like the number of rooms, land size, or year built, factors that may be critical in explaining outliers or price differences.
            <br/><br/>
            The results from the static box plots suggest that Melbourne's housing market in 2016 was heavily skewed toward high prices.
             The minimum recorded price of 131k for a house highlights that even the lower end of the market was relatively expensive. 
             Units, though cheaper, still had 50% of prices exceeding 605k, suggesting a high cost of living across property types. 
             The presence of numerous outliers in house prices likely indicates that factors such as location, land size, and the number of rooms significantly influence property prices.<br/>
             <br/>
             Interactive plots help to dissect these outliers further, allowing for a more detailed analysis of why certain properties deviate from the typical price range.
             In a city like Melbourne, where property prices are influenced by various socioeconomic factors, interactive plots can provide critical insights into housing affordability and market trends. 
             They offer a dynamic way to explore how different variables, such as proximity to the city center, land size, or amenities affect price distributions across property types.
             This level of detail is crucial for understanding broader housing trends, offering policymakers and investors deeper insights into the Melbourne real estate market in 2016.
            </p>
            </>
        )
    },
    {
        text: null,
        src: null,
        alt: 'References',
        description: (
            <>
            <p>
            Hu, K. (2020). Become Competent within One Day in Generating Boxplots and Violin Plots for a Novice without Prior R Experience. Methods and Protocols, [online] 3(4). doi:https://doi.org/10.3390/mps3040064.

            </p>
            </>
        )
    }
]

export const DistanceVsPrice:ModalSliderImgItem[] = [
    {
        text:'Regional House Price Trends ',
        src: melb_hist,
        alt: 'Average house price by region',
        description: (
            <>
            <p>
                The bar chart, which compares house prices across different regions, clearly demonstrates that metropolitan areas, particularly Southern Metropolitan, are significantly more expensive compared to more rural or suburban regions. 
                For example, the average price in the Southern Metropolitan area exceeds 1 million AUD, while even the least expensive metropolitan region, Western Metropolitan, averages around 900k AUD.
                This illustrates a growing disparity in housing affordability between metropolitan and regional areas.
                
            </p>
            </>
        )
    },
    {
        text:'Regional House Price Trends ',
        src: distance_hist,
        alt: 'Scatter plot of house price by region and distance from the city center' ,
        description: (
            <>
            <p>
            Analysis of the scatter plot highlights how distance from the city center correlates with property prices.
             Properties in regions like Western and Northern Victoria, which are farther from the Melbourne city center, tend to be more affordable, with prices declining as distance increases. 
             However, this trend also exposes the challenges of urban sprawl.
              Those looking for more affordable homes may have to sacrifice proximity to work, amenities, and transport infrastructure.
             <br/><br/>
             Both plots suggest that property prices in Australia, especially in metropolitan Melbourne, are becoming increasingly unattainable for many, particularly for the younger generation. 
             Even in less affluent Victorian regions, the average price of around 696k AUD is still a considerable sum, well beyond the reach of most first-time buyers without significant financial support. 
             <br/><br/>
             This growing divide between urban and regional affordability, coupled with the overall high cost of housing across the board, signals a potential housing crisis in which younger and lower-income populations may find themselves priced out of property ownership.
             While metropolitan areas offer more job opportunities and amenities, the cost of living is becoming quite high, particularly for younger individuals, pushing them toward more distant and less serviced regions. 


            </p>
            </>
        )
    }
]
import { ModalSliderImgItem } from '@/components/ModalSlider';
import { ImageItem } from './ImageOpacity';
import boxplot from '../app/assets/images/djia/boxplot.png'
import ViolinPlot from '../app/assets/images/djia/ViolinPlot.png'
import linechart_months from  '../app/assets/images/djia/linechart_months.png'
import djia_LOBF from '../app/assets/images/djia/djia_LOBF.png'
import references from '../app/assets/images/references.jpg'


export const DjiaBoxplot: ImageItem [] =[
    {
        text:'Boxplot',
        src: boxplot,
        alt: ' Boxplot of DJIA Price ',
        description: (
            <>
            <p>
            Figure 2 reveals that the lower stock prices (below $500) were concentrated between the 25th and 75th percentiles, indicating a significant portion of the data represents a period of economic challenges. 
            This clustering of lower prices suggests that businesses faced numerous difficulties between 1914 and 1968, a period marked by events such as the Great Depression, two World Wars, and economic recessions. 
            These conditions likely contributed to lower investor confidence, reduced capital flow, and overall poor market performance, reflected in the low stock prices.
            <br/>
            <br/>
            The top 25% of the data, representing higher stock prices, signals periods of more favorable market conditions. 
            These could correspond to economic recoveries or growth phases, where industries rebounded and investors gained confidence. 
            Such periods likely reflect key moments of post-war recovery or advancements in certain sectors, leading to greater economic prosperity.
             The contrast between these two price ranges highlights the volatility and fluctuating nature of the market during this time frame, where external factors like global conflict and policy changes had a profound impact on market performance.


            </p>
            </>
        )
    }
]

export const DjiaViolinPlot: ModalSliderImgItem [] =[
    {
        text:'Violin Plot',
        src: ViolinPlot,
        alt: ' Violin Plot of DJIA Price ',
        description: (
            <>
            <p>
            Violin plots are useful in this context as they provide a more detailed visual representation of how stock prices were distributed over time. 
            Unlike a standard box plot, the violin plot shows where the data is concentrated, offering a clearer picture of the market&apos;s behavior during periods of economic distress or growth, which can inform deeper insights into historical economic trends.


            <br/>
            <br/>
            The width of the plot around the $160 mark indicates that DJIA prices during 1914-1968 were densely clustered around this value, suggesting a period of economic stagnation or slow growth.
            This dense concentration at lower price levels, paired with the shape of the violin plot, implies prolonged economic hardship, possibly tied to events such as the Great Depression or post-war recovery efforts. 
            <br/><br/>
            The narrower sections at higher price ranges reflect that fewer companies experienced significant growth during this period.
             This asymmetry in the distribution also suggests that while certain sectors or businesses might have thrived, the overall market struggled to achieve consistent upward mobility.
            </p>
            </>
        )
    },
    {
        text:'References', 
        src:references,
        alt:'References',
        description: (
            <>
            <p>
            Molina, E., Viale, L. and Vázquez, P.-P.V. (2022). How should we design violin plots? [online] IEEE Xplore. doi:https://doi.org/10.1109/VisGuides57787.2022.00006.
            </p>
            </>
        )
    }
]

export const DjiaLineChart: ModalSliderImgItem [] =[
    {
        text:'Linechart of DJIA Price',
        src: linechart_months,
        alt: ' Linechart of DJIA Price',
        description: (
            <>
            <p>
            The line chart of DJIA prices from 1914 to 1968 reveals significant market trends, with the 1920s marking a pronounced stock market boom. 
            The sharp rise during this period reflects heightened economic optimism and increased investment, as noted by Ellsworth (1928). However, this upward momentum was abruptly halted by the infamous 1929 stock market crash, observable between months 180-220 on the chart, which led to widespread economic turmoil and a deep recession, corroborated by Harold (2010).

            <br/>
            <br/>
            Following the crash, the chart shows stagnation in stock prices for several years, likely influenced by the global impact of World War II and other conflicts, which hindered economic recovery.
             However, post-war recovery, industrial growth, and renewed market optimism in the 1950s and 60s likely contributed to the sharp increase in DJIA prices, culminating in another market boom, aligning with Binswanger&apos;s (2000) observations on the economic resurgence during that period.
            </p>
            </>
        )
    },
    {
        text:'References', 
        src:references,
        alt:'References',
        description: (
            <>
            <p>
            Binswanger, M. (2000). Stock market booms and real economic activity. International Review of Economics & Finance, 9(4), pp.387–415. doi:https://doi.org/10.1016/s1059-0560(99)00056-8.
            <br/><br/>
            Ellsworth, D.W. (1928). Causes of Stock Market Boom. Current History (1916-1940), [online] 29(3), pp.xxviii–xxxii. Available at: https://www.jstor.org/stable/45333074?seq=2 [Accessed 18 Feb. 2024].
            <br/><br/>
            James, H. (2010a). 1929: The New York Stock Market Crash. Representations, 110(1), pp.129–144. doi:https://doi.org/10.1525/rep.2010.110.1.129.
            </p>
            </>
        )
    }
]

export const LOBF: ImageItem []=[
    {
        text: ' Line of best fit ',
        src: djia_LOBF,
        alt: ' Line of best fit',
        description: (
            <>
                <p>
                In this analysis, the line of best fit illustrates an overall upward trend in DJIA prices across the years, indicating a recovering market following the significant crash observed around month 150.
                The upward trajectory post-crash suggests a gradual restoration of investor confidence and economic stability. 
                This recovery phase could be attributed to various factors, such as changes in goverment policies, government intervention post-crash, and an overall rebound in key sectors driving economic growth. 
                Furthermore, the increasing prices imply that investors are becoming more optimistic about future earnings, which may lead to higher stock valuations.
                </p>
            </>
        )
    }
]
import Ex_3_pic_3 from '../app/assets/images/Ex_3_pic_3.png'
import Ex_3_pic_4 from '../app/assets/images/Ex_3_pic_4.png'
import { ModalSliderImgItem } from './ModalSlider'

export const GDP: ModalSliderImgItem[] = [
    {
        text:'GDP & GDP per capita',
        src: Ex_3_pic_3,
        alt: 'GDP',
        description:(
            <>
                <p>
                Gross Domestic Product (GDP) is often used as a broad indicator of a nation&apos;s economic output.
                 The first choropleth map visualizes global GDP, highlighting regions such as China, the United States, and parts of Europe as having the highest GDPs.
                  China, in particular, leads globally due to its large economy and massive population. 
                  The United States and the European Union follow closely behind, reflecting their highly developed economies.
                  <br/>
                  <br/>
                  However, this measure can be deceptive. Countries with large populations tend to have higher GDP figures simply due to the sheer number of people contributing to the economy. For instance, China and India show high GDPs, but this doesn’t necessarily mean these nations have the highest economic wellbeing per citizen.
                </p>
            </>
        )
    },
    {
        text:null,
        src: Ex_3_pic_4,
        alt: 'GDP per capita',
        description:(
            <>
                <p>
                This choropleth map presents a clearer picture of the economic wellbeing of individuals within each country through GDP per capita. 
                This measure divides the total GDP by the population, offering insight into the average economic productivity per person. 
                <br/>
                <br/>
                Regions like North America, Europe, and Oceania rank the highest, indicating higher standards of living and more evenly distributed wealth. 
                In contrast, Africa and parts of Asia show much lower GDP per capita figures despite some nations in these regions having relatively high total GDPs.
                For example, China&apos;s GDP per capita is much lower compared to its overall GDP ranking, reflecting its large population. Similarly, Africa's low GDP per capita highlights the widespread poverty within the continent, despite some countries having moderate GDP levels.
                <br/>
                <br/>
                While GDP reflects a country&apos;s economic power, GDP per capita offers a more accurate measure of the average citizen&apos;s welfare. 
                When evaluating a nation’s economic standing, both measures should be considered alongside other indicators such as income inequality, employment rates, and access to resources. 
                This helps avoid misleading conclusions about the true economic wellbeing of its population.
                </p>
            </>
        )
    }
]
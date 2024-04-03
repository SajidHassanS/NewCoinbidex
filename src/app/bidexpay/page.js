
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import BelowSection from "../../components/commerce/BelowSections";

import Banner from "../../components/commerce/CommerceBanner";
import GetSet from "../../components/commerce/GetSet";
import GetupMain from "../../components/commerce/GetupMain";
import LastSlider from "../../components/commerce/LastSlider";


const commerce = () => {
  return (
    <>
      <SeoHead title='Coinbidex' />
      <Layout>
       
        <div className="bg-white-300">
       <Banner/>


       </div>

       <div className="bg-white-500">
       <GetSet/>
       </div>
       <div className=" bg-blue-200">
       <GetupMain/>
       </div>
       <div className="bg-white-300 pt-10  pb-32">
       <BelowSection/>
       </div>
       <div className="bg-blue-200">
       <LastSlider/>
       </div>
      
      </Layout>
    </>
  )
}

export default commerce
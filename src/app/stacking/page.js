
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import Accordion from "../../components/stackingPage/Accordion";
import AllProduct from "../../components/stackingPage/AllProduct";
import Banner from "../../components/stackingPage/Banner";
import StakeAndEarn from "../../components/stackingPage/StakeAndEarn";

const stacking = () => {
  return (
    <>
      <SeoHead title='C' />
      <Layout>
        <div className="bg-white-300">
       <Banner/>

       </div>
       <div>
        <StakeAndEarn/>
       </div>

       <div className=" bg-white-300 ">
        <AllProduct/>
       </div>

       <div className=" bg-white-500 ">
        <Accordion/>
       </div>
      </Layout>
    </>
  )
}

export default stacking
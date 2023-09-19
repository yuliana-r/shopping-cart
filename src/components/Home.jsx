import Header from './Header/Header';
import Footer from './Footer';
import chair from '../assets/home/chair.jpg'
import kitchen from '../assets/home/kitchen.jpg'
import PropTypes from 'prop-types';

export default function Home(props) {
  return(
    <>
      <Header cartItems={props.cartItems} />
      <div className="mt-[240px] flex flex-col items-center justify-center w-full m-2 text-lg leading-7 text-justify select-none h-fit font-display bg-silver-50 text-black-950">
        <div className="flex flex-row flex-wrap items-center justify-center  w-[min(90vw,900px)] m-6 xl:flex-nowrap">
          <p className="m-4">
                At <span className="font-extrabold text-navy-500">shop &apos;n&apos; roll</span>, we&apos;ve 
                crafted a unique online shopping experience that 
                combines the <span className="text-3xl font-semibold tracking-wide text-yellow-500 font-motto">joy</span> of strolling through your favorite stores with the convenience 
                of online shopping.
          </p>
          <img src={chair} alt="white chair next to succulent and white mug" className="m-4 rounded shadow-2xl" />
        </div>

        <div className="flex flex-row items-center justify-center w-7/12 m-8">
          <p className="m-4">
                We prioritize your shopping experience, making it as enjoyable and <span className="text-3xl font-semibold tracking-wide font-motto text-navy-500">stress-free </span> 
                as possible. Our user-friendly website is designed to be easy to navigate, allowing you to 
                effortlessly find the items you desire. Plus, our <span className="text-3xl font-semibold tracking-wide text-yellow-500 font-motto">dedicated</span> customer support team is always 
                ready to assist you with any questions or concerns you may have. 
          </p>
        </div>
            
        <div className="flex flex-row flex-wrap items-center justify-center w-7/12 m-6 xl:flex-nowrap">
          <img src={kitchen} alt="kitchen countertop with recipe book, spatulas and chopping boards on it" className="m-4 rounded shadow-2xl" />
          <p className="m-4">
                We understand that everyone&apos;s tastes and preferences are as diverse as the items 
                they seek, which is why we offer an <span className="text-3xl font-semibold tracking-wide text-yellow-500 font-motto">extensive range</span> of products from various 
                categories. 
          </p>
        </div>

        <div className="flex flex-row items-center justify-center w-7/12 m-8">
          <p className="m-4">
                We encourage you to roll with us, explore our diverse selection, and stroll through our virtual aisles at <span className="text-3xl font-semibold tracking-wide font-motto text-navy-500">your own pace</span>.  
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

Home.propTypes = {
  cartItems: PropTypes.array
}
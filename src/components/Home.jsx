import Header from "./Header";
import Footer from "./Footer";
import chair from "../assets/chair.jpg"
import kitchen from "../assets/kitchen.jpg"

function Home() {
    return(
        <>
        <Header />
        <div className="flex flex-col items-center justify-center w-full m-2 text-lg leading-7 text-justify h-fit font-display bg-silver-50 text-black-950">
            <div className="flex flex-row flex-wrap items-center justify-center w-7/12 m-8 xl:flex-nowrap">
                <p className="m-4">
                At <span className="font-bold text-navy-500">shop 'n' roll</span>, we've 
                crafted a unique online shopping experience that 
                combines the <span className="font-bold text-yellow-500">joy</span> of strolling through your favorite stores with the convenience 
                of online shopping.
                </p>
                <img src={chair} alt="white chair next to succulent and white mug" className="m-4 rounded shadow-2xl" />
            </div>

            <div className="flex flex-row items-center justify-center w-7/12 m-8">
                <p className="m-4">
                    We prioritize your shopping experience, making it as <span className="font-bold text-navy-500">enjoyable</span> and stress-free 
                    as possible. Our user-friendly website is designed to be easy to navigate, allowing you to 
                    effortlessly find the items you desire. Plus, our <span className="font-bold text-yellow-500">dedicated</span> customer support team is always 
                    ready to assist you with any questions or concerns you may have. 
                </p>
            </div>
            
            <div className="flex flex-row flex-wrap items-center justify-center w-7/12 m-8 xl:flex-nowrap">
                <img src={kitchen} alt="white chair next to succulent and white mug" className="m-4 rounded shadow-2xl" />
                <p className="m-4">
                We understand that everyone's tastes and preferences are as diverse as the items 
                they seek, which is why we offer an <span className="font-bold text-yellow-500">extensive range</span> of products from various 
                categories. 
                </p>
            </div>

            <div className="flex flex-row items-center justify-center w-7/12 m-8">
                <p className="m-4">
                    We encourage you to roll with us, explore our diverse selection, and stroll through our virtual aisles at <span className="font-bold text-navy-500">your own pace</span>.  
                </p>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Home;
import instagram from '../assets/footer/instagram.png';
import facebook from '../assets/footer/facebook.png';
import youtube from '../assets/footer/youtube.png';
import gmail from '../assets/footer/gmail.png';
import tiktok from '../assets/footer/tiktok.png';

function Footer() {
  return(
    <footer className="flex flex-col items-center justify-between w-full border-t-2 border-solid bg-navy-700 h-fit font-display text-silver-200 border-navy-500">
      <div className="flex flex-row flex-wrap items-start justify-center gap-8 pt-8 pb-2 ">
        <div className="m-4 w-52">
          <h4 className="mb-4 font-bold tracking-wider select-none">COMPANY</h4>
          <div className="flex flex-col items-start justify-center">
            <a href="" className="mb-1 hover:underline">About us</a>
            <a href="" className="mb-1 hover:underline">Careers</a>
          </div>
        </div>

        <div className="m-4 w-52">
          <h4 className="mb-4 font-bold tracking-wider select-none">OUR COMMITMENTS</h4>
          <div className="flex flex-col items-start justify-center">
            <a href="" className="mb-1 hover:underline">Sustainability</a>
            <a href="" className="mb-1 hover:underline">Accessibility</a>
          </div>
        </div>

        <div className="m-4 w-52">
          <h4 className="mb-4 font-bold tracking-wider select-none">CUSTOMER CARE</h4>
          <div className="flex flex-col items-start justify-center">
            <a href="" className="mb-1 hover:underline">FAQ</a>
            <a href="" className="mb-1 hover:underline">Delivery & Returns</a>
            <a href="" className="mb-1 hover:underline">Terms & Conditions</a>
          </div>
        </div>

        <div className="m-4 w-52">
          <h4 className="mb-4 font-bold tracking-wider select-none">STAY IN TOUCH</h4>
          <div className="flex flex-row items-start justify-center gap-4 p-r-4">
            <a href=""><img src={instagram} alt="instagram logo" className="h-7 hover:scale-110 hover:saturate-150" /></a>
            <a href=""><img src={facebook} alt="facebook logo" className="h-7 hover:scale-110 hover:saturate-150" /></a>
            <a href=""><img src={youtube} alt="youtube logo" className="h-7 hover:scale-110 hover:saturate-150" /></a>
            <a href=""><img src={tiktok} alt="tiktok logo" className="h-7 hover:scale-110 hover:saturate-150" /></a>
            <a href=""><img src={gmail} alt="gmail logo" className="h-7 hover:scale-110 hover:saturate-150" /></a>
          </div>
        </div>

      </div>
      <div className="flex flex-row items-center justify-center gap-2 mb-1.5 text-lg font-medium font-display">
        <a href="https://github.com/yuliana-r/shopping-cart" target="_blank" rel="noreferrer" 
          aria-label='project repository'>
          <i className="transition-transform fab text-xl fa-github hover:rotate-[360deg] hover:scale-125">
          </i></a><p className='mb-2 text-4xl select-none font-motto'>yuliana-r</p>
      </div>
    </footer>
  )
}

export default Footer;
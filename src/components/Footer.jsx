import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import gmail from '../assets/gmail.png';
import tiktok from '../assets/tiktok.png';

function Footer() {
  return(
    <footer className="flex flex-col items-center justify-between w-full bg-navy-700 h-fit font-display text-silver-200">
        <div className="flex flex-row flex-wrap items-start justify-center gap-8 pt-8 pb-2 ">
          <div className="m-4 w-52">
            <h4 className="mb-4 font-bold tracking-wider">COMPANY</h4>
            <div className="flex flex-col items-start justify-center">
              <a href="" className="mb-1">About us</a>
              <a href="" className="mb-1">Careers</a>
            </div>
          </div>

          <div className="m-4 w-52">
            <h4 className="mb-4 font-bold tracking-wider">OUR COMMITMENTS</h4>
            <div className="flex flex-col items-start justify-center">
              <a href="" className="mb-1">Sustainability</a>
              <a href="" className="mb-1">Accessibility</a>
            </div>
          </div>

          <div className="m-4 w-52">
            <h4 className="mb-4 font-bold tracking-wider">CUSTOMER CARE</h4>
            <div className="flex flex-col items-start justify-center">
              <a href="" className="mb-1">FAQ</a>
              <a href="" className="mb-1">Delivery & Returns</a>
              <a href="" className="mb-1">Terms & Conditions</a>
            </div>
          </div>

          <div className="m-4 w-52">
            <h4 className="mb-4 font-bold tracking-wider">STAY IN TOUCH</h4>
            <div className="flex flex-row items-start justify-center gap-4 p-r-4">
              <a href=""><img src={instagram} alt="instagram logo" className="h-7 hover:scale-110 hover:saturate-150" /></a>
              <a href=""><img src={facebook} alt="facebook logo" className="h-7 hover:scale-110 hover:saturate-150" /></a>
              <a href=""><img src={youtube} alt="youtube logo" className="h-7 hover:scale-110 hover:saturate-150" /></a>
              <a href=""><img src={tiktok} alt="tiktok logo" className="h-7 hover:scale-110 hover:saturate-150" /></a>
              <a href=""><img src={gmail} alt="gmail logo" className="h-7 hover:scale-110 hover:saturate-150" /></a>
            </div>
          </div>


        </div>
        <div className="flex flex-row items-center justify-center gap-2 m-1.5 text-lg font-medium font-display">
        <a href="https://github.com/yuliana-r/shopping-cart" target="_blank" rel="noreferrer" 
        aria-label='project repository'>
        <i className="transition-transform fab fa-github hover:rotate-[360deg] hover:scale-125">
        </i></a><p>yuliana-r</p>
        </div>
    </footer>
  )
}

export default Footer;
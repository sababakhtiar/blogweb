import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../Assest/logo3.png';

const Footer = () => {
  return (
    <div className='bg-black w-full text-center lg:text-left'>
      <div className='p-2'>
        <div className='grid grid-cols-1 mt-3  md:grid-cols-2 lg:grid-cols-5 gap-4'>
          <div className='mb-3 lg:mb-0 lg:col-span-1 p-4 flex justify-center items-center'>
            <img src={logo} className='w-15 h-14 mb-7' alt="Blog Logo" />
          </div>
          <div className='mb-6 md:mb-0'>
            <h5 className='mb-2.5 font-bold uppercase text-white'>
              Company
            </h5>
            <ul className='mb-0 list-none'>
              <li>
                <Link to='/' className='text-white hover:text-gray-200'>Home</Link>
              </li>
              <li>
                <Link to='/contact' className='text-white hover:text-gray-200'>Contact</Link>
              </li>
              <li>
                <Link to='/about' className='text-white hover:text-gray-200'>About </Link>
              </li>
              <li>
                <Link to='/articles' className='text-white hover:text-gray-200'>Blog</Link>
              </li>
            </ul>
          </div>
          <div className='mb-6 md:mb-0'>
            <h5 className='mb-2.5 font-bold uppercase text-white'>
              Category
            </h5>
            <ul className='mb-0 list-none'>
              <li>
                <Link to='/web' className='text-white hover:text-gray-200'>Web</Link>
              </li>
              <li>
                <Link to='/ecommerce' className='text-white hover:text-gray-200'>Ecommerce</Link>
              </li>
              <li>
                <Link to='/business' className='text-white hover:text-gray-200'>Business</Link>
              </li>
              <li>
                <Link to='/news' className='text-white hover:text-gray-200'>News</Link>
              </li>
            </ul>
          </div>
          <div className='mb-6 md:mb-0'>
            <h5 className='mb-2.5 font-bold uppercase text-white'>
              Support
            </h5>
            <ul className='mb-0 list-none'>
              <li>
                <Link to='/help-center' className='text-white hover:text-gray-200'>Help Center</Link>
              </li>
              <li>
                <Link to='/faq' className='text-white hover:text-gray-200'>FAQ</Link>
              </li>
              <li>
                <Link to='/privacy-policy' className='text-white hover:text-gray-200'>Privacy Policy</Link>
              </li>
              <li>
                <Link to='/terms-of-service' className='text-white hover:text-gray-200'>Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className='mb-6 md:mb-0'>
            <h5 className='mb-2.5 font-bold uppercase text-white'>
              Subscribe
            </h5>
            <form className='flex flex-col'>
              <input
                type='email'
                placeholder='Enter your email'
                className='p-2 mb-2 rounded-md'
              />
              <button type='submit' className='bg-white text-black p-2 font-bold rounded-md'>Subscribe</button>
            </form>
            <div className='mt-4'>
              <h5 className='mb-2.5 font-bold uppercase text-white'>
                Follow Us
              </h5>
              <div className='flex justify-center lg:justify-start'>
                <a href='/' className='text-white hover:text-gray-200 mx-2'><FaFacebook size={24} /></a>
                <a href='/' className='text-white hover:text-gray-200 mx-2'><FaTwitter size={24} /></a>
                <a href='/' className='text-white hover:text-gray-200 mx-2'><FaInstagram size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-700 p-4 text-center text-white'>
        &copy; 2024 BlogWebsite. Powered By: Saba
      </div>
    </div>
  );
};

export default Footer;

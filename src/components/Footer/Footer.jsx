import React from 'react';

const Footer = () => {
    return (
        <div className='p-10'>
            <div className='text-center my-10'>
       <h1 className='text-3xl font-bold text-black mb-3'>Gadget Heaven</h1>
       <p>Leading the way in cutting-edge technology and innovation..</p>
       <div class="divider mt-5 "></div>
            </div>
            <div>
            <footer className="footer justify-around footer-horizontal bg-white ">
  <nav>
    <h6 className="font-bold text-xl text-black">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="font-bold text-xl text-black">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="font-bold text-xl text-black">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
</footer>
            </div>
        </div>
    );
};

export default Footer;
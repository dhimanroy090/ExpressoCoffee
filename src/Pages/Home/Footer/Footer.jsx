import "./Footer.css"
import logo from "../../../assets/images/more/logo1.png"
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";

const Footer = () => {
    return (
        <div className="foot_bg">
            <div className="  w-[70%] flex mx-auto pt-16 pb-3">

                <div className="w-full">
                    <img className="w-[75px] h-[90px]" src={logo} alt="" />
                    <h2 className="text-[#331A15] text-2xl my-3">Espresso Emporium</h2>
                    <p className="text-[#331A15] my-3 ">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className="flex mx-auto gap-3 my-5 text-2xl">
                        <BsFacebook></BsFacebook>
                        <BsTwitter></BsTwitter>
                        <BsInstagram></BsInstagram>
                        <BsLinkedin></BsLinkedin>
                    </div>
                    <h2 className="mt-3 text-2xl my-5">Get in Touch</h2>
                    <div className="flex-column mx-auto items-center">
                        <div className="flex gap-3 mx-auto my-3">
                            <BsFillTelephoneFill></BsFillTelephoneFill>
                            <p>+88 01533 333 333</p>
                        </div>
                        <div className="flex gap-3 mx-auto my-3">
                            <GrMail></GrMail>
                            <p>info@gmail.com</p>
                        </div>
                        <div className="flex gap-3 mx-auto my-3">
                            <IoLocationSharp></IoLocationSharp>
                            <p>72, Wall street, King Road, Dhaka</p>
                        </div>


                    </div>
                </div>
                <div className="w-full">
                    <h2 className="text-2xl text-center">Connect With Us</h2>
                    <div className="my-12 mx-auto">
                    <input type="text" placeholder="Name" className="input input-bordered input-md w-full max-w-xs my-3" />
                    <input type="text" placeholder="Email" className="input input-bordered input-md w-full max-w-xs my-3" />
                    <input type="text" placeholder="Message" className="input input-bordered input-md w-full max-w-xs h-[120px] mt-3" />
                    </div>
                    <button className=" px-3 py-2 border-2  border-[#331A15] rounded-2xl text-[#331A15]">Send Message</button>
                </div>
            </div>
            <div className="right text-center text-white">
                <h2 className="p-3">Copyright Espresso Emporium ! All Rights Reserved</h2>
            </div>
        </div>
    );
};

export default Footer;
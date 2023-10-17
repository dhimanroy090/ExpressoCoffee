import img1 from '../../assets/images/cups/Rectangle 9.png'
import img2 from '../../assets/images/cups/Rectangle 10.png'
import img3 from '../../assets/images/cups/Rectangle 11.png'
import img4 from '../../assets/images/cups/Rectangle 12.png'
import img5 from '../../assets/images/cups/Rectangle 13.png'
import img6 from '../../assets/images/cups/Rectangle 14.png'
import img7 from '../../assets/images/cups/Rectangle 15.png'
import img8 from '../../assets/images/cups/Rectangle 16.png'

const ScoialPages = () => {
    return (
        <div className="my-32">
            <p className="text-center">Follow Us Now</p>
            <h2 className="text-center text-3xl font-semibold text-[#331A15] mb-20">Follow on Instagram</h2>
            <div className='md:grid grid-cols-4 gap-6 w-[80%] mx-auto'>
                <div className="w-full">
                    <img className="w-full rounded-2xl" src={img1} alt="socila images" />
                </div>
                <div className="w-full">
                    <img className="w-full rounded-2xl" src={img2} alt="socila images" />
                </div>
                <div className="w-full">
                    <img className="w-full rounded-2xl" src={img3} alt="socila images" />
                </div>
                <div className="w-full">
                    <img className="w-full rounded-2xl" src={img4} alt="socila images" />
                </div>
                <div className="w-full">
                    <img className="w-full rounded-2xl" src={img5} alt="socila images" />
                </div>
                <div className="w-full">
                    <img className="w-full rounded-2xl" src={img6} alt="socila images" />
                </div>
                <div className="w-full">
                    <img className="w-full rounded-2xl" src={img7} alt="socila images" />
                </div>
                <div className="w-full">
                    <img className="w-full rounded-2xl" src={img8} alt="socila images" />
                </div>
            </div>
        </div>
    );
};

export default ScoialPages;
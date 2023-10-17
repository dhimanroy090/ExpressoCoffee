import icon1 from "../../../assets/images/icons/1.png"
import icon2 from "../../../assets/images/icons/2.png"
import icon3 from "../../../assets/images/icons/3.png"
import icon4 from "../../../assets/images/icons/4.png"
import "./Banner.css"


const Banner = () => {
    return (
        <div>
            {/* First banner */}
            <div className="banner w-full flex items-center">
                <div className="w-full">

                </div>
                <div className="w-full mx-auto space-y-3">
                    <h2 className="text-white text-[55px]">Would you like a Cup of Delicious Coffee?</h2>
                    <p className="text-[#FFFFFF] text-normal">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="p-3 bg-[#E3B577]">Learn more</button>
                </div> 
            </div>

            {/* Second banner */}
            <div className="w-full bg-[#ECEAE3]">
                <div className="w-[80%] mx-auto flex items-center gap-12 py-8">
                    <div className="w-full mx-auto ">
                        <img className="my-3 w-[70px]" src={icon1} alt="" />
                        <h2 className="text-3xl text-bold mb-3">Awesome Aroma</h2>
                        <p className="des">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className="w-full mx-auto">
                        <img className="my-3" src={icon2} alt="" />
                        <h2 className="text-3xl text-bold mb-3">High Quality</h2>
                        <p className="des">We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className="w-full mx-auto">
                        <img className="my-3" src={icon3} alt="" />
                        <h2 className="text-3xl text-bold mb-3">Pure Grades</h2>
                        <p className="des">The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className="w-full mx-auto">
                        <img className="my-3" src={icon4} alt="" />
                        <h2 className="text-3xl text-bold mb-3">Proper Roasting</h2>
                        <p className="des">Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
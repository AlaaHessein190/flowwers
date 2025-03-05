import { img16 } from "../assets";
import MovingComponent from "react-moving-text";

const Primer = () => {
  return (
    <div className="min-h-screen h-[100vh] flex justify-center items-center overflow-hidden">
      <div className="relative">
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-[#F1EFEB] 
                        w-full max-w-[350px] md:max-w-[400px] h-[80%] md:h-[400px] rounded-t-full z-0"></div>
        
        <img src={img16} alt="" className="relative z-20 w-full h-auto rounded-lg" />

        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        text-center w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] z-50">
          <MovingComponent
            type="fadeOutToTop"
            duration="3000ms"
            delay="3s"
            direction="normal"
            timing="ease-in-out"
            iteration="infinite"
            fillMode="none"
          >
            <p className="text-lg sm:text-2xl md:text-2xl lg:text-5xl font-semibold">
              A premier and family-<br />owned luxury floral<br /> boutique
            </p>
          </MovingComponent>
        </div>

      </div>
    </div>
  );
};

export default Primer;

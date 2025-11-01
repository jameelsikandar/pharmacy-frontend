import { Bell } from "lucide-react";
import MainBtn from "./Buttons/MainBtn";

interface NavbarProps {
  title: string;
  descripition: string;
}

const Navbar: React.FC<NavbarProps> = ({ title, descripition }) => {
  return (
    <>
      <div
        className="w-full bg-white h-24 px-5 py-6 flex justify-between border-b-2 
           border-black/10 "
      >
        {/* right side  */}
        <div>
          <h1 className="text-3xl font-ui font-bold">{title}</h1>
          <p className="font-light font-body mt-1">{descripition}</p>
        </div>

        {/* left side  */}
        <div className="flex items-center gap-6 flex-row">
          <button
            className="p-2  rounded-full hover:bg-primary/20 cursor-pointer transition
          duration-300 active:active:scale-95
          "
          >
            <Bell />
          </button>

          <MainBtn
            name="Quick Sale"
            btnClassName="flex transition-all duration-300 active:scale-95 items-center gap-2 text-xl 
        text-white bg-primary/80 
       px-5 py-2 rounded-xl  hover:bg-primary/90 
       cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

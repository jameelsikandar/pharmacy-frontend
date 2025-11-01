interface BtnProps {
  name: string;
  btnClassName: string;
}

const MainBtn: React.FC<BtnProps> = ({ name, btnClassName }) => {
  return (
    <>
      <button className={`${btnClassName}`}>
        <span className="text-xl font-ui font-bold pr-2.5 ">+</span>
        {name}
      </button>
    </>
  );
};

export default MainBtn;

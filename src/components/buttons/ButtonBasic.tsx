type ButtonBasicProps = {
  displayName: string;
  stylings?: string;
  buttonClick: (e: any) => void;
};

const ButtonBasic = ({
  displayName,
  stylings,
  buttonClick,
}: ButtonBasicProps) => {
  return (
    <button
      onClick={buttonClick}
      className={` rounded-md flex justify-center items-center w-full font-bold ${stylings}`}
    >
      {displayName}
    </button>
  );
};

export default ButtonBasic;

type ButtonBasicProps = {
  displayName: string;

  stylings?: string;
};

const ButtonBasic = ({
  displayName,

  stylings,
}: ButtonBasicProps) => {
  return (
    <button
      className={` rounded-md flex justify-center items-center w-full font-bold ${stylings}`}
    >
      {displayName}
    </button>
  );
};

export default ButtonBasic;

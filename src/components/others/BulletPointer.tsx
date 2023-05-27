type stylingType = {
  styling: string;
};

const BulletPointer = ({ styling }: stylingType) => {
  return (
    <div className={`w-[6px] h-[6px] rounded-full bg-clrDark ${styling}`}></div>
  );
};

export default BulletPointer;

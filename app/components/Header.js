import Image from "next/image";

const Header = () => {
  return (
    <>
      <Image
        src="/dme-logo.png"
        alt="Department of Myanmar Examinations"
        className=""
        width={320}
        height={320}
      />
      <h1 className="text-[24px] font-extrabold text-center mb-4 mt-10 leading-tight text-[#10172B]">
        မြန်မာနိုင်ငံစာစစ်ဦးစီးဌာန
      </h1>
      <h2 className="lg:text-2xl text-base mb-4">
        Department of Myanmar Examinations
      </h2>
    </>
  );
};

export default Header;

import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center gap-4">
      <Image
        src="/dme-logo.png"
        alt="Department of Myanmar Examinations"
        width={320} // for lg:w-80
        height={120}
        className="lg:w-80 w-40 lg:mb-6 mb-4"
      />
      <h1 className="lg:text-2xl text-base font-bold text-slate-900">
        မြန်မာနိုင်ငံစာစစ်ဦးစီးဌာန
      </h1>
      <h2 className="lg:text-2xl text-base">
        Department of Myanmar Examinations
      </h2>
    </div>
  );
};

export default Header;

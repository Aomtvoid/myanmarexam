import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="h-screen  flex flex-col items-center bg-[#F0F4F8] p-10">
       <>
            <Image
              src="/dme-logo.png"
              alt="Department of Myanmar Examinations"
              className=""
              width={280}
              height={280}
            />
            <h1 className="text-[24px] font-extrabold text-center mb-4 mt-10 leading-tight text-indigo-900">
              မြန်မာနိုင်ငံစာစစ်ဦးစီးဌာန
            </h1>
            <h2 className="lg:text-2xl text-base mb-4 text-indigo-900">
              Department of Myanmar Examinations
            </h2>
          </>
      <p className="font-bold font-mono lg:text-xl lg:px-0 px-4 text-red-500">
       အချက်အလက်များ စစ်ဆေးနိုင်ရန် အောင်လက်မှတ်ပါ QR Code ကို Scan ဖတ်ပါ 
      </p>
    </main>
  );
}


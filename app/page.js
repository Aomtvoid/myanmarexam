import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="h-screen justify-center items-center w-full flex bg-slate-100 flex-col gap-4">
      <Image
        src="/dme-logo.png"
        alt="Department of Myanmar Examinations"
        className="lg:w-60 w-40 lg:mb-4 mb-4 -mt-20"
        width={280}
        height={280}
      />
      <h1 className="lg:text-2xl text-base font-bold text-indigo-900">
        မြန်မာနိုင်ငံစာစစ်ဦးစီးဌာန
      </h1>
      <p className="lg:text-2xl text-base text-indigo-900">
        Department of Myanmar Examinations
      </p>
      <p className="font-bold font-mono lg:text-xl lg:px-0 px-4 text-red-500">
        အချက်အလက်များ စစ်ဆေးနိုင်ရန် အောင်လက်မှတ်ပါ QR Code ကို Scan ဖတ်ပါ
      </p>
    </main>
  );
}

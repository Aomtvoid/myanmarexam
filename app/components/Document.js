import Image from "next/image";
import SubjectCard from "./Subject";

const Document = () => {
  const info = {
    လက်မှတ်အမှတ်: "၃၁၈၉၇၀",
    အောင်မြင်ခုနှစ်: "၂၀၂၅",
    ခုံနံပါတ်: "မနမ ၈၈၃",
    အမည်: "မောင်သက်ဘုန်းနိုင်",
    မွေးသက္ကရာဇ်: "၃၁-၃-၂၀၀၆",
    အဖအမည်: "ဦးညွန့်လှိင်",
    အမိအမည်: "ဒေါ်အေးစန္ဒာ",
    ဘာသာတွဲ: "STEAMS-2",
    ဂုဏ်ထူးရဘာသာများ: "-",
  };

  return (
    <>
      <div className="bg-[#f8f8ff] p-4 rounded-2xl shadow-lg w-full max-w-[50vw] border">
        <div className="flex items-center justify-center m-6 ml-2">
          <Image
            src="/dme-logo.png"
            width={150}
            height={150}
            className="mr-11"
            alt="Department of Myanmar Education"
          />

          <div className="text-center">
            <h2 className="text-lg font-semibold mb-4">
              ပညာရေးဝန်ကြီးဌာန - Ministry of Education
            </h2>
            <h1 className="text-lg font-bold leading-snug">
              မြန်မာနိုင်ငံစာစစ်ဦးစီးဌာန - Department of
              <br /> Myanmar Examinations
            </h1>
          </div>
        </div>

        <h3 className="text-lg font-bold text-center mb-1">
          အောင်လက်မှတ်အချက်အလက်များ
        </h3>

        <div className="space-y-2 p-5">
          {Object.entries(info).map(([key, value]) => (
            <div
              key={key}
              className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-dashed border-gray-300 pb-2"
            >
              <span className="font-medium text-black text-left">{key}</span>

              <span className="text-center text-black">-</span>
              <div className="flex justify-center">
              <span className="font-[500] text-[14px] text-black text-left min-w-[33%]">
                {value}
              </span>
                </div>
            </div>
          ))}
        </div>
      </div>
      <SubjectCard />
    </>
  );
};

export default Document;

import Image from "next/image";
import SubjectCard from "./Subject";

const Document = ({ userInfo }) => {
  const { _id, uid, qrCode, ...publicUser } = userInfo;

  return (
    <div className="w-full flex flex-col justify-center items-center bg-slate-100">
      <div className="bg-slate-50 lg:p-10 p-4 lg:w-1/2 w-full lg:rounded-2xl ring-slate-500 drop-shadow-md ring-1 lg:mt-10">
        <div className="flex lg:flex-row flex-col gap-4 items-center justify-center mb-4">
          <Image
            src="/dme-logo.png"
            width={150}
            height={150}
            className="lg:w-36 w-20"
            alt="Department of Myanmar Education"
          />

          <div className="flex flex-col gap-4 lg:text-lg text-base text-center">
            <div className="flex flex-col items-center">
              <h1 className="font-bold mb-3">
                ပညာရေးဝန်ကြီးဌာန - Ministry of Education
              </h1>
              <h1 className="font-bold">
                မြန်မာနိုင်ငံစာစစ်ဦးစီးဌာန - Department of
                <br /> Myanmar Examinations
              </h1>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-bold text-center mb-1">
          အောင်လက်မှတ်အချက်အလက်များ
        </h2>
        <div className="flex flex-col justify-center divide-y-2 divide-dotted lg:px-0 px-4">
          {Object.entries(publicUser).map(([key, value]) => (
            <div key={key} className="grid grid-cols-3 py-2">
              <p className="">{key}</p>

              <span className="text-center text-black">-</span>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <SubjectCard />
      <div className="py-4 text-center flex flex-col gap-4 text-sm lg:px-0 px-2 leading-6">
        <p>
          အောင်လက်မှတ်ပါ အချက်အလက်များနှင့် အထက်ဖော်ပြပါ အချက်အလက်များ
          ကွဲလွဲမှုရှိလျင်{" "}
          <a className="text-blue-700" href="mailto:qr@myanmarexam.org">
            qr@myanmarexam.org
          </a>
          သို့ ဆက်သွယ် ဆောင်ရွက်နိုင်ပါသည်။
        </p>
        <p>
          If the details on the certificate differ from the above information,
          kindly reach out to
          <a className="text-blue-700" href="mailto:qr@myanmarexam.org">
            qr@myanmarexam.org
          </a>
          .
        </p>
      </div>
      <div className="p-4 text-center text-slate-700 bg-white w-full">
        <p>
          Copyright. © 2024 All rights reserved. Department of Myanmar
          Examinations.
        </p>
      </div>
    </div>
  );
};

export default Document;

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Document from "@/app/components/Document";

export default function UidPage() {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [showDocument, setShowDocument] = useState(false);
  const [notMatch, setNotMatch] = useState(false);
  const canvasRef = useRef(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setShowDocument(false);
    generateCaptcha();
  }, [pathname, searchParams]);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num = Math.floor(100000 + Math.random() * 900000).toString();
    setCaptcha(num);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#E1E5EC";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = " 19px Verdana, sans-serif";
    ctx.fillStyle = "#E6245F";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(num, canvas.width / 2, canvas.height / 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === captcha) {
      setShowDocument(true);
    } else {
      setNotMatch(true);
      generateCaptcha();
      setUserInput("");
    }
  };

  if (notMatch) {
    return (
    <main className="h-screen flex flex-col items-center bg-[#F0F4F8] p-10">
        <Header />
        <p className="font-bold font-mono lg:text-xl lg:px-0 px-4 text-red-500">
          If you believe there is an error, please get in touch with{" "}
           <a
                href="mailto:qr@myanmarexam.org"
                className="text-blue-600 hover:underline"
              >
                qr@myanmarexam.org.
              </a>
        </p>
      </main>
    );
  }

  if (showDocument) {
    return (
      <>
        <main className="min-h-screen flex flex-col items-center justify-center bg-[#F0F4F8] p-4 sm:p-10">
          <Document />
        </main>
        <footer className="w-full text-center bg-[#F0F4F8]">
          <div className="flex flex-col items-center">
            <p className="text-[14px] text-gray-900 w-fulll mb-4">
              အောင်လက်မှတ်ပါ အချက်အလက်များနှင့် အထက်ဖော်ပြပါ အချက်အလက်များ
              ကွဲလွဲမှုရှိလျင်{" "}
              <a
                href="mailto:qr@myanmarexam.org"
                className="text-blue-600 hover:underline"
              >
                qr@myanmarexam.org
              </a>
              သို့ ဆက်သွယ် ဆောင်ရွက်နိုင်ပါသည်။
            </p>
            <p className="text-sm text-gray-900">
              If the details on the certificate differ from the above
              information, kindly reach out to{" "}
              <a
                href="mailto:qr@myanmarexam.org"
                className="text-blue-600 hover:underline"
              >
                qr@myanmarexam.org
              </a>
              .
            </p>
          </div>
          <div className="w-full mt-4 bg-white border-gray-300 p-4">
            <p className=" text-gray-600">
              Copyright. © 2024 All rights reserved. Department of Myanmar
              Examinations.
            </p>
          </div>
        </footer>
      </>
    );
  }

  return (
    <main className="max-h-screen flex flex-col items-center justify-center bg-[#F0F4F8] p-10">
      <Header />
      <div className="bg-[#E1E5EC] rounded-md p-6 w-full max-w-[430px] shadow-sm text-center border border-gray-400/80">
        <canvas
          ref={canvasRef}
          width={120}
          height={30}
          className="mx-auto"
        ></canvas>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="အထက်ပါ နံပါတ်အား ရိုက်ထည့်ပါ"
            className="w-full text-16 px-2 py-3 bg-white text-gray-700 text-left rounded-sm mb-2 border border-[#DDE0E7] outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-[#1E3A8A] text-white py-3 rounded-sm hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>

      <p className="text-[14px] mt-6 text-center text-black fixed bottom-2">
        Copyright. © 2024 All rights reserved. Department of Myanmar
        Examinations.
      </p>
    </main>
  );
}

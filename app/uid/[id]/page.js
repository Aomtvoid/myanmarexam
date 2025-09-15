"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { usePathname, useSearchParams } from "next/navigation";
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

  const fontSize = window.innerWidth < 640 ? 14 : 19;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = `${fontSize}px Verdana, sans-serif`;
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
      <div className="h-screen justify-center items-center w-full flex flex-col gap-4 text-center bg-slate-100">
        <Image
          className="lg:w-60 w-28 lg:-mt-[12rem]"
          src="/dme-logo.png"
          width={320}
          height={120}
          alt="Department of Myanmar Examinations"
        />
        <h1 className="lg:text-2xl text-base font-bold">
          မြန်မာနိုင်ငံစာစစ်ဦးစီးဌာန
        </h1>
        <p className="lg:text-2xl text-base">Department of Myanmar Examinations</p>
        <p className="font-bold font-mono lg:text-xl lg:px-0 px-4 text-red-500">
          If you believe there is an error, please get in touch with{" "}
          <a className="text-blue-500" href="mailto:qr@myanmarexam.org">
            qr@myanmarexam.org.
          </a>
        </p>
      </div>
    );
  }

  if (showDocument) {
    return <Document />;
  }

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-slate-100 lg:px-0 px-4">
      <Header />
      <div className="bg-slate-200 p-5 mt-4 rounded ring-1 ring-slate-400 lg:w-2/6 w-full flex flex-col justify-center items-center">
        <canvas
          ref={canvasRef}
          width={200}
          height={40}
          className="p-2 w-52 object-contain bg-transparent"
        ></canvas>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <input
            type="text"
            placeholder="အထက်ပါ နံပါတ်အား ရိုက်ထည့်ပါ"
            className="p-3 w-full rounded bg-slate-100 ring-slate-200 focus:outline-blue-700"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />

          <button
            type="submit"
            className="py-3 px-6 bg-blue-900 text-slate-50 w-full rounded"
          >
            Submit
          </button>
        </form>
      </div>

      <p className="absolute bottom-0 text-sm p-2 text-center">
        Copyright. © 2024 All rights reserved. Department of Myanmar
        Examinations.{" "}
      </p>
    </main>
  );
}

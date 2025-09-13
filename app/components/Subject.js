import React from "react";

const cardStyles = "bg-[#f8f8ff] rounded-lg border-gray-300 w-full max-w-[50vw] border mt-3";
const headerGridStyles = "grid grid-cols-4 w-full max-w-[50rem] text-center border-b border-dashed border-gray-400";
const headerCellStyles = "p-4 border-r-2 font-medium col-span-1 border-gray-200";
const rowGridStyles = "grid grid-cols-[20%_80%] w-full max-w-[50rem] border-b border-gray-400 border-dashed p-1";
const compilationStyles = "font-medium text-[15px] text-gray-800 mb-1 w-full";
const subjectTextStyles = "font-medium text-black mb-1 py-3 border-b-2 border-gray-200";
const subjectEnglishStyles = " text-black pt-2";
const subjectCompilationCellStyles = "border-gray-400 flex flex-col items-center justify-center text-center";

const SubjectRow = ({ compilation, subjectsMyanmar, subjectsEnglish, isEvenRow }) => {
  const rowBgColor = isEvenRow ? "bg-white" : "bg-[#F0F4F8]";

  return (
    <div className={`${rowGridStyles} ${rowBgColor}`}>
      <div className={`${subjectCompilationCellStyles}`}>
        <p className={`${compilationStyles} border-r-2 border-gray-200`}>{compilation}</p>
      </div>
      <div className="py-2 text-left flex flex-col justify-center leading-loose min-h-28">
        <p className={subjectTextStyles}>{subjectsMyanmar}</p>
        <p className={subjectEnglishStyles}>{subjectsEnglish}</p>
      </div>
    </div>
  );
};

const SubjectCard = () => {
  const subjects = [
    {
      compilation: "STEAMS-1",
      myanmar: "မြန်မာစာ၊ အင်္ဂလိပ်စာ၊ သင်္ချာ၊ ဓာတုဗေဒ၊ ရူပဗေဒ၊ ဇီဝဗေဒ",
      english: "Myanmar, English, Mathematics, Chemistry, Physics, Biology",
    },
    {
      compilation: "STEAMS-2",
      myanmar: "မြန်မာစာ၊ အင်္ဂလိပ်စာ၊ သင်္ချာ၊ ဓာတုဗေဒ၊ ရူပဗေဒ၊ ဘောဂဗေဒ",
      english: "Myanmar, English, Mathematics, Chemistry, Physics, Economics",
    },
    {
      compilation: "STAMS-1",
      myanmar: "မြန်မာစာ၊ အင်္ဂလိပ်စာ၊ သင်္ချာ၊ ပထဝီဝင်၊ သမိုင်း၊ ဘောဂဗေဒ",
      english: "Myanmar, English, Mathematics, Geography, History, Economics",
    },
    {
      compilation: "STAMS-2",
      myanmar: "မြန်မာစာ၊ အင်္ဂလိပ်စာ၊ သင်္ချာ၊ မြန်မာရွေးချယ်၊ လူမှုရေးသိပ္ပံ၊ ဘောဂဗေဒ",
      english: "Myanmar, English, Mathematics, Selected Myanmar, Social Science, Economics",
    },
  ];

  return (
    <div className={cardStyles}>
      <div className="flex justify-center">
        <div className={headerGridStyles}>
          <div className={headerCellStyles}>
            ဘာသာတွဲ
            <br />
            <span className="font-normal">(Compilations)</span>
          </div>
          <div className="p-2 font-medium col-span-3">
            ဘာသာရပ်များ
            <br />
            <span className="font-normal">(Subjects)</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        {subjects.map((subject, index) => (
          <SubjectRow
            key={subject.compilation}
            compilation={subject.compilation}
            subjectsMyanmar={subject.myanmar}
            subjectsEnglish={subject.english}
            isEvenRow={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectCard;
import React from "react";

const cardStyles =
  "lg:rounded-lg bg-slate-50 ring-1 overflow-hidden ring-slate-300 mt-4 mb-4 lg:w-1/2 w-full flex flex-col divide-y-2 divide-dotted";
const headerGridStyles = "text-center w-40 border-r-2 border-slate-200 p-4";
const headerCellStyles =
  "p-4 border-r-2 font-medium col-span-1 border-gray-200";
const rowGridStyles =
  "flex lg:flex-row flex-col items-center justify-between bg-slate-100";
const compilationStyles = "font-medium text-[15px] text-gray-800 mb-1 w-full";
const subjectTextStyles =
  "font-medium text-black mb-1 py-3 border-b-2 border-gray-200";
const subjectEnglishStyles = " text-black pt-2";
const subjectCompilationCellStyles =
  "text-center lg:w-40 lg:border-r-2 border-slate-200 lg:py-0 py-4";

const SubjectRow = ({
  compilation,
  subjectsMyanmar,
  subjectsEnglish,
  isEvenRow,
}) => {
  const rowBgColor = isEvenRow ? "bg-white" : "bg-slate-100";

  return (
    <div className={`${rowGridStyles} ${rowBgColor}`}>
      <div className={`${subjectCompilationCellStyles}`}>
        <p className={`font-medium`}>{compilation}</p>
      </div>
      <div className="flex flex-col divide-y-2 divide-solid divide-slate-200 gap-4 py-4 lg:px-0 px-4 justify-start lg:text-start text-center lg:w-[38rem]">
        <p className="py-2">{subjectsMyanmar}</p>
        <p className="py-2">{subjectsEnglish}</p>
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
      myanmar:
        "မြန်မာစာ၊ အင်္ဂလိပ်စာ၊ သင်္ချာ၊ မြန်မာရွေးချယ်၊ လူမှုရေးသိပ္ပံ၊ ဘောဂဗေဒ",
      english:
        "Myanmar, English, Mathematics, Selected Myanmar, Social Science, Economics",
    },
  ];

  return (
    <div className={cardStyles}>
      <div className="lg:grid grid-cols-2 hidden">
        <div className={headerGridStyles}>
          <p>ဘာသာတွဲ</p>
          <p>(Compilations)</p>
        </div>
        <div className="text-start p-4">
          <p>ဘာသာရပ်များ</p>
          <p>(Subjects)</p>
        </div>
      </div>

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
  );
};

export default SubjectCard;

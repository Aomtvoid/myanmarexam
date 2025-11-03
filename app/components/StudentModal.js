"use client";

import { useState, useEffect } from "react";
import axiosInstance from "../config/axiosInstance";
import toast from "react-hot-toast";
import Image from "next/image";
export default function StudentModal({
  open,
  onClose,
  mode,
  student,
  onSuccess,
}) {
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    အမည်: "",
    အဖအမည်: "",
    အမိအမည်: "",
    ခုံနံပါတ်: "",
    လက်မှတ်အမှတ်: "",
    ဘာသာတွဲ: "",
    အောင်မြင်ခုနှစ်: "",
    မွေးသက္ကရာဇ်: "",
    ဂုဏ်ထူးရဘာသာများ: "",
  });
  const [infoLink, setInfoLink] = useState("");

  useEffect(() => {
    if (!open) return;
    if (mode === "edit" && student) {
      setInfoLink(`https://verify.myanmarexam.info/uid/${student.uid}`);
      setFormData(student);
    } else {
      setInfoLink("");
      setFormData({
        အမည်: "",
        အဖအမည်: "",
        အမိအမည်: "",
        ခုံနံပါတ်: "",
        လက်မှတ်အမှတ်: "",
        ဘာသာတွဲ: "",
        အောင်မြင်ခုနှစ်: "",
        မွေးသက္ကရာဇ်: "",
        ဂုဏ်ထူးရဘာသာများ: "",
      });
    }
  }, [open, mode, student]);

  if (!open) return null;

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value.trimStart() }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;
    const hasEmpty = Object.entries(formData).some(
      ([key, value]) => !value.trim()
    );
    if (hasEmpty) {
      toast.error("ကျေးဇူးပြုပြီး အချက်အလက်အားလုံး ဖြည့်ပါ။");
      return;
    }
    setSaving(true);
    try {
      const cleanedData = Object.fromEntries(
        Object.entries(formData).map(([k, v]) => [k, v.trim()])
      );
      if (mode === "edit") {
        await axiosInstance.put(`/admin/user/${student.uid}`, cleanedData);
        toast.success("အချက်အလက်ကို ပြင်ဆင်ပြီးပါပြီ။");
      } else {
        await axiosInstance.post("/admin/create", cleanedData);
        toast.success("ကျောင်းသားအသစ်ကို ထည့်သွင်းပြီးပါပြီ။");
      }
      onSuccess?.();
      onClose();
    } catch (error) {
      console.error("Save failed:", error);
      toast.error("မှားယွင်းမှုတစ်ခု ဖြစ်ပွားခဲ့သည်။");
    } finally {
      setSaving(false);
    }
  };

  const handleClose = () => {
    setFormData({
      အမည်: "",
      အဖအမည်: "",
      အမိအမည်: "",
      ခုံနံပါတ်: "",
      လက်မှတ်အမှတ်: "",
      ဘာသာတွဲ: "",
      အောင်မြင်ခုနှစ်: "",
      မွေးသက္ကရာဇ်: "",
      ဂုဏ်ထူးရဘာသာများ: "",
    });
    setInfoLink("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999] transition-opacity duration-200">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 shadow-lg transform transition-transform duration-200 scale-100">
        <h2 className="text-lg font-semibold mb-4">
          {mode === "edit" ? "တည်းဖြတ်မည်" : "ကျောင်းသားအသစ်ထည့်မည်"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-3 max-h-[70vh] overflow-y-auto pr-2"
        >
          {Object.keys(formData).map((key) => {
            if (key === "_id" || key === "uid" || key === "qrCode") return;
            return (
              <div key={key}>
                <label className="block text-sm mb-1">{key}</label>
                <input
                  value={formData[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            );
          })}
          {mode !== "add" && (
            <div className="relative">
              <label className="block text-sm mb-1">Information Link</label>
              <div className="flex items-center gap-2">
                <p className="flex-1 border rounded px-3 py-2 text-sm bg-gray-100 truncate">
                  {infoLink}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    if (infoLink) {
                      navigator.clipboard.writeText(infoLink);
                      toast.success("Link copied to clipboard!");
                    } else {
                      toast.error("No link available to copy.");
                    }
                  }}
                  className="px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Copy
                </button>

                <a
                  href={infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
                >
                  View
                </a>
              </div>
            </div>
          )}
          {mode !== "add" && student?.qrCode && (
            <div>
              <label className="block text-sm mb-1">QR Code</label>
              <div className="flex items-center gap-4">
                <Image
                  src={student.qrCode}
                  alt="QR Code"
                  width={100}
                  height={100}
                  className="border rounded"
                />
                <button
                  type="button"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = student.qrCode;
                    link.download = `${student.အမည် || "student"}_QR.png`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    toast.success("QR Code downloaded!");
                  }}
                  className="px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              ပိတ်မည်
            </button>
            <button
              type="submit"
              disabled={saving}
              className={`px-4 py-2 rounded text-white ${
                saving
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {saving ? "သိမ်းနေသည်..." : "သိမ်းမည်"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

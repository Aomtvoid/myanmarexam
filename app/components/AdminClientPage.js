"use client";
import React, { useEffect, useState } from "react";
import { fetchAllUsers } from "../service/student.service";
import StudentModal from "./StudentModal";
import ConfirmModal from "./modals/ConfirmModal";
import axiosInstance from "../config/axiosInstance";
import toast from "react-hot-toast";

const AdminClientPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  async function handleDelete(uid) {
    try {
      await axiosInstance.delete(`/admin/user/${uid}`);
      setStudents((prev) => prev.filter((s) => s.uid !== uid));
      toast.success("ဖျက်ပြီးပါပြီ။");
    } catch (err) {
      console.error("Failed to delete:", err);
      toast.error("ဖျက်ခြင်းမအောင်မြင်ပါ။");
    }
  }

  useEffect(() => {
    async function fetchStudents() {
      setLoading(true);
      try {
        const res = await fetchAllUsers();
        console.log(res);
        setStudents(res?.users || []);
      } catch (err) {
        console.error("Failed to fetch students:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchStudents();
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center p-4 sticky-top bg-white shadow-md">
        <p className="text-xl font-semibold">Information Management</p>
        <button
          onClick={() => {
            setModalMode("add");
            setSelectedStudent(null);
            setModalOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Student
        </button>
      </div>

      {/* Scrollable student list */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="grid gap-4">
            {students.map((student, index) => (
              <div
                key={student.uid}
                className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
              >
                <div>
                  <p className="text-sm">
                    <strong>{index + 1}.</strong>{" "}
                    <span className="ml-10">{student["အမည်"]}</span>
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setModalMode("edit");
                      setSelectedStudent(student);
                      setModalOpen(true);
                    }}
                    className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    View/Edit
                  </button>
                  <button
                    onClick={() => setDeleteTarget(student)}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <StudentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
        student={selectedStudent}
        onSuccess={() => window.location.reload()}
      />
      <ConfirmModal
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => handleDelete(deleteTarget.uid)}
        message={`"${deleteTarget?.["အမည်"]}" ကို ဖျက်မှာသေချာပါသလား?`}
      />
    </div>
  );
};

export default AdminClientPage;

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const initialData = [
  { id: 1, name: "Anie", email: "22A91A1234@aec.edu.in", branch: "CSE", company: "TCS", placementstatus: "Placed" },
  { id: 2, name: "Balu", email: "22A91A1234@aec.edu.in", branch: "ECE", company: "Infosys", placementstatus: "Placed" },
  { id: 3, name: "Charan", email: "22A91A1234@aec.edu.in", branch: "EEE", company: "Capgemini", placementstatus: "Not Placed" },
  { id: 4, name: "Divya", email: "22A91A1234@aec.edu.in", branch: "CSE", company: "TCS", placementstatus: "Placed" },
  { id: 5, name: "Hanu", email: "22A91A1234@aec.edu.in", branch: "ECE", company: "Infosys", placementstatus: "Placed" },
  { id: 6, name: "Pavan", email: "22A91A1234@aec.edu.in", branch: "EEE", company: "Capgemini", placementstatus: "Not Placed" },
];

const StudentsTable = () => {
  const [students, setStudents] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Normalize search term once
  const term = searchTerm.trim().toLowerCase();

  // Filter students: check if any field contains the search term (case-insensitive)
  const filteredStudents = students.filter((student) => {
    // Extract all searchable fields, convert to lower case
    const fields = [
      student.name,
      student.email,
      student.branch,
      student.company,
      student.placementstatus,
    ].map((field) => field.toLowerCase());

    // Return true if any field includes the search term
    return fields.some((field) => field.includes(term));
  });

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const handleEditClick = (student) => {
    setEditingStudent(student);
    setEditedData({ ...student });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    setStudents((prev) =>
      prev.map((s) => (s.id === editedData.id ? editedData : s))
    );
    setEditingStudent(null);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Student Placements</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search students..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {["Name", "Email", "Branch", "Company", "Status", "Actions"].map((head) => (
                <th
                  key={head}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <motion.tr
                  key={student.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                          {student.name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-100">{student.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{student.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{student.branch}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{student.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        student.placementstatus.toLowerCase() === "placed"
                          ? "bg-green-800 text-green-100"
                          : "bg-red-800 text-red-100"
                      }`}
                    >
                      {student.placementstatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <button
                      className="text-indigo-400 hover:text-indigo-300 mr-2"
                      onClick={() => handleEditClick(student)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-400 hover:text-red-300"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-400">
                  No matching students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editingStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-96">
            <h2 className="text-lg font-semibold text-gray-100 mb-4">Edit Student</h2>
            <div className="space-y-3">
              <input
                name="name"
                value={editedData.name}
                onChange={handleEditChange}
                placeholder="Name"
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
              <input
                name="email"
                value={editedData.email}
                onChange={handleEditChange}
                placeholder="Email"
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
              <input
                name="branch"
                value={editedData.branch}
                onChange={handleEditChange}
                placeholder="Branch"
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
              <input
                name="company"
                value={editedData.company}
                onChange={handleEditChange}
                placeholder="Company"
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
              <select
                name="placementstatus"
                value={editedData.placementstatus}
                onChange={handleEditChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
              >
                <option value="Placed">Placed</option>
                <option value="Not Placed">Not Placed</option>
              </select>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
                onClick={() => setEditingStudent(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default StudentsTable;

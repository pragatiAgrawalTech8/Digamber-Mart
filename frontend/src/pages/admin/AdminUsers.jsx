import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Edit, Eye, Search } from "lucide-react";
// import UserLogo from "../../user.png";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredUsers = users.filter(
    (user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getAllUsers = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const res = await axios.get(
        `http://localhost:5555/api/v1/user/all-user`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (res.data.success) {
        setUsers(res.data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  // console.log(users);

 return (
  <div className="px-4 py-6 md:px-8 lg:px-10">
    <h1 className="text-2xl md:text-3xl font-bold">User Management</h1>
    <p className="text-gray-600 mt-1">
      View and manage registered users
    </p>

    {/* Search */}
    <div className="relative w-full max-w-sm mt-6">
      <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
      <Input
        className="pl-10"
        placeholder="Search Users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

    {/* Users */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
      {filteredUsers?.map((user) => (
        <div
          key={user._id}
          className="bg-pink-100 rounded-xl p-5 shadow-sm hover:shadow-md transition"
        >
          <div className="flex items-center gap-4">
            <img
              src={user?.profilePic || "/user.png"}
              alt="User"
              className="w-16 h-16 rounded-full object-cover border-2 border-pink-600"
            />

            <div className="min-w-0">
              <h2 className="font-semibold text-lg truncate">
                {user.firstName} {user.lastName}
              </h2>

              <p className="text-sm text-gray-600 break-all">
                {user.email}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() =>
                navigate(`/dashboard/user/${user._id}`)
              }
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>

            <Button
              className="flex-1 bg-pink-600 hover:bg-pink-700"
              onClick={() =>
                navigate(`/dashboard/users/orders/${user._id}`)
              }
            >
              <Eye className="w-4 h-4 mr-2" />
              Orders
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
  
};

export default AdminUsers;

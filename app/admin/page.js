import AdminSideBar from "@/components/AdminSideBar";

const AdminPage = () => {

  return (
    <div className="flex gap-10 ">
      {" "}
      <div className="h-screen">
        <AdminSideBar />
      </div>
      <div className="py-5">
        <h1 className="text-3xl">Welcome To Dashboard</h1>
        <p></p>
      </div>
    </div>
  );
};

export default AdminPage;

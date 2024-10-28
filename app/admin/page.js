import AdminSideBar from "@/components/AdminSideBar";

const page = () => {
  console.log("admin")
  return (
    <div className="flex gap-10 ">
      {" "}
      <div className="h-screen">
        <AdminSideBar />
      </div>
      <div className="py-5">
        <h1 className="text-3xl">Welcome To Dashboard</h1>
      </div>
    </div>
  );
};

export default page;

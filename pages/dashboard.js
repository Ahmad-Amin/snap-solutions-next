import React, { useContext, useEffect } from "react";
import UserContext from "../store/user-context";
import AdminDashboard from "./admin/adminDashboard";
import SuperAdminDashboard from "./superadmin/superAdminDashbaord";
import { useRouter } from "next/router";

const Dashboard = () => {
  const userCtx = useContext(UserContext);
  const user = userCtx.user
  const router = useRouter();
  
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      router.push("/sign-in"); 
    }
  }, [user, router]);

  const DashboardType = userCtx.superAdmin ? (
    <SuperAdminDashboard />
  ) : (
    <AdminDashboard />
  );

  return (
    <div className=" tw-mx-auto tw-container">
      {Object.keys(user).length !== 0 ? DashboardType : null}
    </div>
  );
};

export default Dashboard;

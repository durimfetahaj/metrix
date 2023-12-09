import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Dashboard = () => {
  const { getPermission } = getKindeServerSession();
  const role = getPermission("customer").isGranted ? "customer" : "admin";
  return <div>Hello from dashboard {role}</div>;
};

export default Dashboard;

import "../../styles/globals.css"
import SideBar from "../../components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="w-full h-screen bg-main bg-cover object-cover flex items-center">
        <SideBar/>
        {children}
      </body>
    </html>
  );
}
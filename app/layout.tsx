import "../styles/globals.css"
import SideBar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="w-full h-screen bg-back bg-cover object-cover flex items-center">
        <SideBar/>
        {children}
      </body>
    </html>
  );
}

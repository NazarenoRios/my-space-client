import "../styles/globals.css"
import Navbar from "./Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

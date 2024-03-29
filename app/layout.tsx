import "../styles/globals.css"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="w-full h-screen bg-login bg-cover object-cover flex items-center">
        {children}
      </body>
    </html>
  );
}
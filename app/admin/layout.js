export const metadata = {
  title: "Dashboard",
 
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
``
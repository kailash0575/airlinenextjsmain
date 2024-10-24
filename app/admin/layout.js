export const metadata = {
  title: "Dashboard",
  description:
    "Read the disclaimer of AirportAirlinesTerminal, and understand that we are a third-party travel website, providing details on airport terminals. ",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
``
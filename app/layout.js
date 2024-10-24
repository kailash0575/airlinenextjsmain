import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Details on Airport Airlines Terminals Worldwide",
  description:
    "Review the details of your selected airline’s terminal at AirportAirlinesTerminal, and have a smooth experience at the airport.",
};

<Head>
  <meta
    name="google-site-verification"
    content="e3L87_2a3wUSESrLYCcKHfBP7P2uq1YEhXKY2BngPeU"
  />
  <meta name="msvalidate.01" content="60F0F754CB9C3DB83058009014BC1B8D" />
</Head>;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

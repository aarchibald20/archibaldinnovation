import "./globals.css";

export const metadata = {
  title: "Archibald Innovations",
  description: "Websites & Apps Built to Grow Your Business",
  icons: {
    icon: "/tab.png", // or "/favicon.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

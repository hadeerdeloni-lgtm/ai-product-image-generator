export const metadata = {
  title: "AI Product Image Generator",
  description: "Generate AI product images for e-commerce and ads"
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

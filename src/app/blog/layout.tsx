export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="relative px-24 max-w-4xl mx-auto">{children}</div>;
}

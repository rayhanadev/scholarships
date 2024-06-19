export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[500px] m-auto flex flex-col items-start justify-center">
      {children}
    </div>
  );
}

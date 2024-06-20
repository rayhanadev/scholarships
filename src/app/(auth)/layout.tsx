export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[300px] m-auto flex flex-col items-start justify-center">
      {children}
    </div>
  );
}

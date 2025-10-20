import { Sidebar } from "../icons/Sidebar";

export function Header() {
  return (
    <div className="sticky top-0 z-10 flex h-14 w-full items-center justify-between bg-white p-2 font-semibold text-text-primary dark:bg-gray-800">
      <Sidebar />
      same header here
    </div>
  );
}

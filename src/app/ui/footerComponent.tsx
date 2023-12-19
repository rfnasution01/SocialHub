import Image from "next/image";

export function FooterComponent() {
  return (
    <div>
      <hr className="border-t border-gray-300 my-4 w-full" />
      <footer className="px-8 pb-8 flex items-center justify-center gap-2">
        <Image src="/logo.svg" width={50} height={50} alt="Logo K-Max" />
        <div className="text-justify">
          <h1 className="text-[18px] text-[#7fe230]">K-Max</h1>
          <h6 className="text-[12px] text-[#1094dd]">One World One Currency</h6>
        </div>
      </footer>
    </div>
  );
}

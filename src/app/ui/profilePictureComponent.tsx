import { ShieldCheck } from "lucide-react";
import Image from "next/image";

export function ProfilePictureComponent() {
  return (
    <div className="px-8 pt-8 pb-2 flex flex-col justify-center items-center justify-center">
      <Image
        src="/profile.jpg"
        width={90}
        height={90}
        alt="profile picture"
        className="rounded-full overflow-hidden"
      />
      <div className="flex items-center mt-4 gap-1">
        <h5 className="text-[16px] font-bold">John Chena</h5>
        <span className="text-[#1094dd]">
          <ShieldCheck />
        </span>
      </div>
      <h6 className="text-[12px] text-[#6d7175]">@zhong_xina</h6>
    </div>
  );
}

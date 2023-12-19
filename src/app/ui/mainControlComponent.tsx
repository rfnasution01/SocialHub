import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import {
  FooterComponent,
  MenuMappingComponent,
  ProfilePictureComponent,
} from ".";

export function ControlComponent() {
  return (
    <div className="flex-col justify-between flex w-full h-full">
      {/* Profile Picture  */}
      <div>
        <ProfilePictureComponent />
        <hr className="border-t border-gray-300 my-4 w-full" />
        <MenuMappingComponent />
      </div>
      {/* Footer  */}
      <FooterComponent />
    </div>
  );
}

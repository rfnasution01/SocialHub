import { menuList } from "../lib";

export function MenuMappingComponent() {
  return (
    <div className="px-8 pt-2">
      <h3 className="text-[20px] font-medium">Menu</h3>
      {menuList?.map((item, idx) => (
        <div
          key={idx}
          className="flex gap-3 my-4 p-2 border-l-2 border-[transparent] hover:cursor-pointer hover:border-l-2 hover:border-[#1094DD] hover:bg-[#F2F8FF] hover:text-[#1094DD]"
        >
          <span>{item?.icon}</span>
          <h5>{item?.name}</h5>
        </div>
      ))}
    </div>
  );
}

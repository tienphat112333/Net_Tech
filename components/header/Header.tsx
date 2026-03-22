import React from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
function Header() {
  return (
    <header className="flex justify-between items-center py-6.25 px-15">
      <div className="text-sm md:text-base font-bold lg:text-[32px]">
        <span className="text-primary">Net</span>Tech
      </div>
      <div className="lg:h-12.5">
        <Input
          type="search"
          placeholder="Tìm kiếm linh kiện, Laptop, VGA..."
          className={cn("lg:w-150 h-full")}
        />
        <Button className={cn("lg:w-17.5 h-full text-white")}>Search</Button>
      </div>

      <div className="flex justify-between items-center gap-2 text-base">
        <ShoppingCart />
        <p>Giỏ hàng</p>
      </div>
      <div className="flex justify-between items-center gap-2 lg:h-10">
        <Button className={cn("lg:w-30 h-full text-base text-white")}>
          Đăng nhập
        </Button>
        <Button className={cn("lg:w-30 h-full text-base text-white")}>
          Đăng ký
        </Button>
      </div>
    </header>
  );
}

export default Header;

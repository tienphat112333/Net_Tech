import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section>
      <div className="text-primary bg-[#E0F2FE]">
        <h2>BACK TO SCHOOL</h2>
        <p>Build PC thông minh - Nhận quà cực đỉnh</p>
        <Button className={cn("text-white")}>Xem ngay</Button>
      </div>
      <div>
        <div>RTX 4090 Series</div>
        <div>Gaming Gear</div>
      </div>
    </section>
  );
};

export default HeroSection;

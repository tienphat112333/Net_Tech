import { Pencil, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  {
    id: "1",
    name: "Intel Core i9-14900K",
    sku: "CPU-INT-149",
    category: "Vi xử lý (CPU)",
    price: "14.990.000",
    stock: 50,
    badges: ["Socket: 1700", "TDP: 125W", "DDR5 Support"],
  },
  {
    id: "2",
    name: "Asus ROG Maximus Z790",
    sku: "MB-AS-Z790",
    category: "Mainboard",
    price: "18.500.000",
    stock: 24,
    badges: ["Socket: 1700", "ATX", "DDR5"],
  },
  {
    id: "3",
    name: "Laptop Dell XPS 15 9530",
    sku: "LT-DE-XPS15",
    category: "Laptop",
    price: "55.000.000",
    stock: 2,
    badges: ["CPU: Core i9-13900H"],
  },
];

export function ProductTable() {
  return (
    <div className="rounded-xl bg-white shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs text-slate-500 uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">SẢN PHẨM</th>
              <th className="px-6 py-4 font-semibold">DANH MỤC</th>
              <th className="px-6 py-4 font-semibold">GIÁ BÁN</th>
              <th className="px-6 py-4 font-semibold">TỒN KHO</th>
              <th className="px-6 py-4 font-semibold">THÔNG SỐ BUILD PC (AI)</th>
              <th className="px-6 py-4 font-semibold text-right">HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-slate-100"></div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-blue-600">{product.name}</span>
                      <span className="text-xs text-slate-400">SKU: {product.sku}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600">{product.category}</td>
                <td className="px-6 py-4 font-semibold text-slate-800">{product.price}</td>
                <td className="px-6 py-4">
                  <span
                    className={cn(
                      "font-bold",
                      product.stock > 10 ? "text-green-600" : "text-red-600"
                    )}
                  >
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-500"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-blue-600 transition-colors">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

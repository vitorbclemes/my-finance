import ChartContainer from "@/ui/chart/chart";
import Table from "@/ui/table/table";
import { labelClasses, PieChart } from "@mui/x-charts";

export default function Home() {
  const rows = [
    { Date: "10/05/2025", Category: "Food", Description:"", Cost:"R$ 50,00" },
    { Date: "11/05/2025", Category: "Food", Description:"", Cost:"R$ 50,00" },
    { Date: "12/05/2025", Category: "Food", Description:"", Cost:"R$ 50,00" },
    { Date: "13/05/2025", Category: "Food", Description:"", Cost:"R$ 50,00" },
    { Date: "14/05/2025", Category: "Food", Description:"", Cost:"R$ 50,00" },
    { Date: "15/05/2025", Category: "Food", Description:"", Cost:"R$ 50,00" },
    { Date: "16/05/2025", Category: "Food", Description:"", Cost:"R$ 50,00" },
    { Date: "17/05/2025", Category: "Food", Description:"", Cost:"R$ 50,00" },
    { Date: "18/05/2025", Category: "Food", Description:"", Cost:"R$ 50,00" },
  ];
  const data = [
    { id: 0, value: 500, label: 'Food' },
    { id: 1, value: 12, label: 'Investiments' },
    { id: 2, value: 300, label: 'Life Basics' },
    { id: 3, value: 188, label: 'Study' }
  ]
  const greenPalette = [
    "#f0fdf4", // Green 50
    "#dcfce7", // Green 100
    // "#bbf7d0", // Green 200
    "#86efac", // Green 300
    // "#4ade80", // Green 400
    "#22c55e", // Green 500
    // "#16a34a", // Green 600
    "#15803d", // Green 700
    // "#166534", // Green 800
    "#14532d", // Green 900
  ];
  
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-3 p-2">
          <input type="date" className="w-3xs"/>
          <div className="flex flex-row border px-4 py-2 border-light-gray items-center justify-center cursor-pointer hover:border-gray-700">
            <span className="leading-3">Filters</span>
            <i className="material-symbols-outlined !text-1xl ml-2">filter_list</i>
          </div>
        </div>
        <div className="grid grid-cols-4 p-8">
          <div className="flex flex-col gap-7">
            <span className="text-2xl text-gray-700">Your balance</span>
            <span className="text-5xl">R$10.000,00</span>
          </div>
          <div className="flex flex-col gap-7">
            <span className="text-2xl text-gray-700">Total spent</span>
            <span className="text-5xl">R$1.000,00</span>
          </div>
          <div className="flex flex-col gap-7">
            <span className="text-2xl text-gray-700">Percentage spent</span>
            <span className="text-5xl text-green-700">10%</span>
          </div>
          <div className="flex flex-col gap-7">
            <span className="text-2xl text-gray-700">Your saving goal</span>
            <span className="text-5xl text-green-700">R$2.500,00</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-5 gap-5">
        <Table rows={rows} style="w-1/2" />
        <ChartContainer name="Spents per category" subtitle="Last 30 days">
          <PieChart
            colors={greenPalette.reverse()}
            series={[
              {
                data: data,
                innerRadius: 60,
                outerRadius: 100,
                cornerRadius: 2,
                cx: "25%",
                cy: "50%",
              }
            ]}
            width={400}
            height={500}
          />
        </ChartContainer>
      </div>
    </div>
  );
}
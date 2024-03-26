
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
// import { ResponsiveBar } from "@nivo/bar"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="flex flex-col bg-white h-screen">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <Select>
          <SelectTrigger id="timeframe">
            <SelectValue placeholder="Sep 2023" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="aug-2023">Aug 2023</SelectItem>
            <SelectItem value="oct-2023">Oct 2023</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex space-x-2">
          <Button variant="outline">Income</Button>
          <Button>Expense</Button>
        </div>
      </div>
      <div className="flex justify-center space-x-2 py-2">
        <Button variant="ghost">Weekly</Button>
        <Button variant="ghost">Monthly</Button>
        <Button variant="ghost">Yearly</Button>
        <Button variant="ghost">All</Button>
      </div>
      <div className="flex justify-center py-4">
        <BarChart className="w-[200px] h-[200px]" />
      </div>
      <div className="flex flex-col px-4 space-y-2">
        <div className="flex justify-between">
          <Badge variant="secondary">27%</Badge>
          <span>Education fees</span>
          <span>₹ 25,000</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">23%</Badge>
          <span>Home rent</span>
          <span>₹ 4,500</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">12%</Badge>
          <span>Grocery</span>
          <span>₹ 2,000</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">10%</Badge>
          <span>Formal shirt</span>
          <span>₹ 1,200</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">7%</Badge>
          <span>boat earphone</span>
          <span>₹ 999</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">6%</Badge>
          <span>Food</span>
          <span>₹ 800</span>
        </div>
      </div>
      <div className="mt-auto">
        <div className="flex justify-around items-center py-4 bg-[#F7F7F7]">
          <HomeIcon className="text-gray-700" />
          <BarChartIcon className="text-gray-700" />
          <Button className="rounded-full bg-blue-500 text-white p-4">
            <PlusIcon className="text-white" />
          </Button>
          <SaveIcon className="text-gray-700" />
          <UserIcon className="text-gray-700" />
        </div>
      </div>
    </div>
  )
}

function BarChart(props:any) {
  return (
    <div {...props}>
      {/* <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }:{ id:number }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      /> */}
    </div>
  )
}


function BarChartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function HomeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function PlusIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SaveIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  )
}


function UserIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

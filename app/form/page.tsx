
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="p-10">
        <div className="min-h-screen  max-w-4xl mx-auto bg-white p-4">
      <div className="flex items-center space-x-2">
        <Link href={'http://localhost:3000/'}><ChevronLeftIcon className="text-gray-600" /></Link>
        
        <h1 className="text-xl font-semibold">Expense</h1>
      </div>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="amount">
            Amount
          </label>
          <Input id="amount" placeholder="0.00" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="expense-name">
            Expense Name
          </label>
          <Input id="expense-name" placeholder="Name of expense" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="category">
            Category
          </label>
          <Select>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="food">Food</SelectItem>
              <SelectItem value="transport">Transport</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="date">
            Date
          </label>
          <Input id="date" placeholder="Select date" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description
          </label>
          <Textarea id="description" placeholder="Expense description" />
        </div>
        <Button className="w-full bg-blue-600 text-white">Add Expense</Button>
      </form>
      <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center bg-white py-3 px-4 border-t">
        <HomeIcon className="text-gray-600" />
        <Button className="rounded-full bg-blue-600 p-4">
          <PlusIcon className="text-white" />
        </Button>
        <BarChartIcon className="text-gray-600" />
        <UserIcon className="text-gray-600" />
      </div>
    </div>
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


function ChevronLeftIcon(props:any) {
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
      <path d="m15 18-6-6 6-6" />
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


import Choose from "@/components/Choose"
import { Button } from "@/components/ui/button"

export default function page() {
  return (
   <div className=" w-screen py-10">
    <div className="bg-white mx-auto  p-4 max-w-4xl">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs">Hello !</p>
          <h1 className="text-lg font-bold">Nirmal Kumar</h1>
        </div>
        
      </div>
      <div className="mt-4 bg-[#3f51b5] text-white rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">Total Balance</p>
            <p className="text-2xl font-bold">₹ 34,057</p>
          </div>
          <div className="bg-white rounded-full text-[#3f51b5] p-2">
            <span className="text-xs">40%</span>
            <SaveIcon className="ml-1" />
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-blue-200 rounded-lg p-4">
          <p className="text-sm">Income</p>
          <div className="flex items-center">
            <p className="text-lg font-bold">₹ 50,000</p>
            <PlusIcon className="ml-2 text-blue-600" />
          </div>
        </div>
        <div className="bg-yellow-200 rounded-lg p-4">
          <p className="text-sm">Expense</p>
          <div className="flex items-center">
            <p className="text-lg font-bold">₹ 20,000</p>
            <PlusIcon className="ml-2 text-yellow-600" />
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">
        <GoalIcon className="text-gray-500" />
        <SaveIcon className="text-gray-500" />
        <CurrencyIcon className="text-gray-500" />
        <CreditCardIcon className="text-gray-500" />
      </div>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Recent Expenses</h2>
          <Button className="text-xs" variant="ghost">
            View all
          </Button>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center py-2 border-b">
            <p>Education Fees</p>
            <div className="flex items-center">
              <IndianRupeeIcon className="text-red-500" />
              <p className="text-red-500">- ₹ 25,000</p>
            </div>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <p>Formal shirt</p>
            <div className="flex items-center">
              <IndianRupeeIcon className="text-red-500" />
              <p className="text-red-500">- ₹ 1,200</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b">
            <p>Home rent</p>
            <div className="flex items-center">
              <IndianRupeeIcon className="text-red-500" />
              <p className="text-red-500">- ₹ 4,500</p>
            </div>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <p>Home rent</p>
            <div className="flex items-center">
              <IndianRupeeIcon className="text-red-500" />
              <p className="text-red-500">- ₹ 4,500</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b">
            <p>Home rent</p>
            <div className="flex items-center">
              <IndianRupeeIcon className="text-red-500" />
              <p className="text-red-500">- ₹ 4,500</p>
            </div>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <p>Home rent</p>
            <div className="flex items-center">
              <IndianRupeeIcon className="text-red-500" />
              <p className="text-red-500">- ₹ 4,500</p>
            </div>
          </div>
        </div>
        <Choose/>
      </div>
      <div className="fixed bottom-0 inset-x-0 bg-gray-100 py-2">
        <div className="flex justify-around items-center">
          <HomeIcon className="text-gray-700" />
          <BarChartIcon className="text-gray-700" />
          <Button className="bg-blue-600 text-white rounded-full p-2">
            <PlusIcon className="" />
          </Button>
          <SaveIcon className="text-gray-700" />
          <UserIcon className="text-gray-700" />
        </div>
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


function BatteryFullIcon(props:any) {
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
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
      <line x1="6" x2="6" y1="11" y2="13" />
      <line x1="10" x2="10" y1="11" y2="13" />
      <line x1="14" x2="14" y1="11" y2="13" />
    </svg>
  )
}


function CreditCardIcon(props:any) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function CurrencyIcon(props:any) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}


function GoalIcon(props:any) {
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
      <path d="M12 13V2l8 4-8 4" />
      <path d="M20.55 10.23A9 9 0 1 1 8 4.94" />
      <path d="M8 10a5 5 0 1 0 8.9 2.02" />
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


function IndianRupeeIcon(props:any) {
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
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 8.5 8" />
      <path d="M6 13h3" />
      <path d="M9 13c6.667 0 6.667-10 0-10" />
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


import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
// import { ResponsiveBar } from "@nivo/bar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Choose() {
    return (
       <div className="w-full">
         <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="incomes">Incomes</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
          </TabsList>
          <TabsContent value="incomes">
            <Card>
              <CardHeader>
                <CardTitle>Total Revenues</CardTitle>
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
              </CardHeader>
              
             
            </Card>
          </TabsContent>
          <TabsContent value="expenses">
            <Card>
              <CardHeader>
                <CardTitle>Total Expenses</CardTitle>
                
              </CardHeader>
              <CardContent className="space-y-2">
              
      <div className="flex flex-col px-4 space-y-2">
        <div className="flex justify-between">
          <Badge variant="secondary">27%</Badge>
          <span>Education fees</span>
          <span className="text-red-800" >₹ 25,000</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">23%</Badge>
          <span>Home rent</span>
          <span className="text-red-800">₹ 4,500</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">12%</Badge>
          <span>Grocery</span>
          <span className="text-red-800">₹ 2,000</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">23%</Badge>
          <span>Home rent</span>
          <span className="text-red-800">₹ 4,500</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">12%</Badge>
          <span>Grocery</span>
          <span className="text-red-800">₹ 2,000</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">23%</Badge>
          <span>Home rent</span>
          <span className="text-red-800">₹ 4,500</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">12%</Badge>
          <span>Grocery</span>
          <span className="text-red-800">₹ 2,000</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">10%</Badge>
          <span>Formal shirt</span>
          <span className="text-red-800">₹ 1,200</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">7%</Badge>
          <span>boat earphone</span>
          <span className="text-red-800">₹ 999</span>
        </div>
        <div className="flex justify-between">
          <Badge variant="secondary">6%</Badge>
          <span>Food</span>
          <span className="text-red-800">₹ 800</span>
        </div>
      </div>
              </CardContent>
              
            </Card>
          </TabsContent>
        </Tabs>
       </div>
      )
    }
    
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Car, BatteryChargingIcon, FuelIcon, Building2, MapPin } from 'lucide-react'

interface Option {
  value: string
  label: string
  score: number
}

const mileageOptions: Option[] = [
  { value: "less-10k", label: "小于1万公里", score: 0 },
  { value: "10k-20k", label: "1万-2万公里", score: 1 },
  { value: "20k-30k", label: "2万-3万公里", score: 2 },
  { value: "more-30k", label: "3万以上公里", score: 3 },
]

const chargingOptions: Option[] = [
  { value: "no-charger", label: "家里不���装充电桩", score: 0 },
  { value: "public-charger", label: "通勤地点有公共桩", score: 1 },
  { value: "home-charger", label: "家里能装充电桩", score: 2 },
  { value: "company-charger", label: "公司充电桩免费", score: 3 },
]

const usageOptions: Option[] = [
  { value: "highway", label: "高速为主", score: 0 },
  { value: "mixed", label: "高速市区各一半", score: 1 },
  { value: "city-highway", label: "市区为主偶尔高速", score: 2 },
  { value: "city-only", label: "只跑市区", score: 3 },
]

const cityOptions: Option[] = [
  { value: "remote", label: "新疆西藏不包邮地区", score: 0 },
  { value: "north", label: "东北内蒙西北地区", score: 1 },
  { value: "other", label: "其他非一线城市", score: 2 },
  { value: "tier-1", label: "一线城市", score: 3 },
]

const purchaseOptions: Option[] = [
  { value: "first", label: "首购", score: 1 },
  { value: "replace", label: "换购", score: 2 },
  { value: "additional", label: "增购", score: 3 },
]

export default function CarCalculator() {
  const [scores, setScores] = useState({
    mileage: -1,
    charging: -1,
    usage: -1,
    city: -1,
    purchase: -1,
  })

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0)

  const getRecommendation = (score: number) => {
    if (score <= 6) return { text: "推荐购买油车", color: "text-yellow-600 dark:text-yellow-400" }
    if (score < 11) return { text: "推荐购买电车", color: "text-green-600 dark:text-green-400" }
    return { text: "强烈推荐购买电车", color: "text-blue-600 dark:text-blue-400" }
  }

  const recommendation = getRecommendation(totalScore)

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-5 top-0 text-muted-foreground/20">
          <Car className="w-40 h-40 rotate-12" />
        </div>
        <div className="absolute left-10 bottom-10 text-muted-foreground/20">
          <BatteryChargingIcon className="w-32 h-32 -rotate-12" />
        </div>
        <div className="absolute right-20 bottom-20 text-muted-foreground/20">
          <FuelIcon className="w-24 h-24 rotate-45" />
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8 relative">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">电车还是油车？</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label className="text-lg flex items-center gap-2">
                <Car className="w-5 h-5" />
                年行驶公里数
              </Label>
              <RadioGroup
                onValueChange={(value) => {
                  const option = mileageOptions.find(opt => opt.value === value)
                  setScores(prev => ({ ...prev, mileage: option?.score ?? -1 }))
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                {mileageOptions.map((option) => (
                  <Label
                    key={option.value}
                    className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent"
                  >
                    <RadioGroupItem value={option.value} />
                    <span>{option.label}</span>
                    <span className="ml-auto text-muted-foreground">{option.score}分</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-lg flex items-center gap-2">
                <BatteryChargingIcon className="w-5 h-5" />
                充电条件
              </Label>
              <RadioGroup
                onValueChange={(value) => {
                  const option = chargingOptions.find(opt => opt.value === value)
                  setScores(prev => ({ ...prev, charging: option?.score ?? -1 }))
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                {chargingOptions.map((option) => (
                  <Label
                    key={option.value}
                    className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent"
                  >
                    <RadioGroupItem value={option.value} />
                    <span>{option.label}</span>
                    <span className="ml-auto text-muted-foreground">{option.score}分</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-lg flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                用车场景
              </Label>
              <RadioGroup
                onValueChange={(value) => {
                  const option = usageOptions.find(opt => opt.value === value)
                  setScores(prev => ({ ...prev, usage: option?.score ?? -1 }))
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                {usageOptions.map((option) => (
                  <Label
                    key={option.value}
                    className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent"
                  >
                    <RadioGroupItem value={option.value} />
                    <span>{option.label}</span>
                    <span className="ml-auto text-muted-foreground">{option.score}分</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                用车城市
              </Label>
              <RadioGroup
                onValueChange={(value) => {
                  const option = cityOptions.find(opt => opt.value === value)
                  setScores(prev => ({ ...prev, city: option?.score ?? -1 }))
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                {cityOptions.map((option) => (
                  <Label
                    key={option.value}
                    className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent"
                  >
                    <RadioGroupItem value={option.value} />
                    <span>{option.label}</span>
                    <span className="ml-auto text-muted-foreground">{option.score}分</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-lg flex items-center gap-2">
                <Car className="w-5 h-5" />
                购买方式
              </Label>
              <RadioGroup
                onValueChange={(value) => {
                  const option = purchaseOptions.find(opt => opt.value === value)
                  setScores(prev => ({ ...prev, purchase: option?.score ?? -1 }))
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                {purchaseOptions.map((option) => (
                  <Label
                    key={option.value}
                    className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent"
                  >
                    <RadioGroupItem value={option.value} />
                    <span>{option.label}</span>
                    <span className="ml-auto text-muted-foreground">{option.score}分</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            {totalScore >= 0 && (
              <div className="mt-8 text-center space-y-2">
                <div className="text-lg font-medium">推荐结果</div>
                <div className={`text-2xl font-bold ${recommendation.color}`}>
                  {recommendation.text}
                </div>
                <div className="text-muted-foreground">
                  总分：{totalScore} 分
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <div className="pb-4 text-center text-sm text-muted-foreground">
        Made with v0.dev · Inspired by <a href="https://x.com/Mr_BlackMirror/status/1861060834233135168" rel="nofollow" className="hover:underline">@黑镜先生</a>
      </div>
    </div>
  )
}


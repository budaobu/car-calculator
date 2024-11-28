import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">关于本项目</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              "电车还是油车"计算器是一个帮助用户决定是否购买电动汽车的工具。通过考虑多个因素，如年行驶里程、充电条件、使用场景等，我们为用户提供个性化的建议。
            </p>
            <p className="mb-4">
              本项目的灵感来源于 <a href="https://x.com/Mr_BlackMirror" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 hover:underline">@黑镜先生</a> 在 X 上分享的<a href="https://x.com/Mr_BlackMirror/status/1861060834233135168" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 hover:underline">一条推文</a>。我将这个概念扩展为一个更详细、更易用的在线工具。
            </p>
            <p>
              我们的目标是为消费者提供一个客观、科学的方法来评估他们的具体情况，帮助他们做出更明智的购车决策。
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

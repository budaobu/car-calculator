import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">免责声明与隐私声明</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">免责声明</h2>
            <p className="mb-4">
              本网站提供的"电车还是油车"计算器仅作为一般性参考工具。我们努力确保信息的准确性，但不对结果的准确性或完整性做出任何保证。用户在做出购车决定时，应结合个人具体情况和专业建议。
            </p>
            <h2 className="text-xl font-semibold mb-2">隐私声明</h2>
            <p className="mb-4">
              我们重视您的隐私。本网站不收集、存储或处理任何个人识别信息。所有计算都在您的浏览器中本地进行，不会传输到我们的服务器。
            </p>
            <p>
              我们使用匿名的分析工具来了解网站的使用情况，以改进用户体验。这些工具不会收集任何可以识别个人身份的信息。
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

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
              我们重视您的隐私。本网站使用 Google Analytics 来收集匿名的使用数据，以帮助我们改进用户体验。这些数据不包含任何可以识别个人身份的信息。
            </p>
            <p className="mb-4">
              我们还使用 Google 站长平台来优化网站在搜索引擎中的表现。这可能涉及到收集有关网站访问的一些技术数据。
            </p>
            <p className="mb-4">
              所有的计算和核心功能都在您的浏览器中本地进行，不会传输到我们的服务器。我们不会收集、存储或处理任何您在计算器中输入的个人信息。
            </p>
            <p>
              如果您希望了解更多关于 Google Analytics 的数据收集和使用政策，请访问 <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google 隐私权和条款</a>。
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

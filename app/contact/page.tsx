import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Twitter, Github } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">联系我们</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">如果您有任何问题、建议或反馈，请通过以下方式联系我们：</p>
          <ul className="space-y-4">
            {/* <li>
              <a href="mailto:your.email@example.com" className="flex items-center text-blue-600 hover:underline">
                <Mail className="w-5 h-5 mr-2" />
                your.email@example.com
              </a>
            </li> */}
            <li>
              <a href="https://x.com/lizhaoshui" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                <Twitter className="w-5 h-5 mr-2" />
                @lizhaoshui
              </a>
            </li>
            <li>
              <a href="https://github.com/budaobu/car-calculator" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                <Github className="w-5 h-5 mr-2" />
                GitHub 仓库
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}


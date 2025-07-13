import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Tuesday.so Clone</h1>
          <p className="text-muted-foreground text-lg">Sales Intelligence Platform</p>
        </div>

        {/* Color Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Primary Color</CardTitle>
              <CardDescription>Indigo #6366F1</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Primary Button</Button>
              <div className="h-16 bg-primary rounded-lg"></div>
              <Badge variant="default">Primary Badge</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">Accent Color</CardTitle>
              <CardDescription>Emerald #10B981</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-50">
                Accent Button
              </Button>
              <div className="h-16 bg-emerald-500 rounded-lg"></div>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                Accent Badge
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Background</CardTitle>
              <CardDescription>Light Slate #F8FAFC</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="secondary" className="w-full">Secondary Button</Button>
              <div className="h-16 bg-secondary rounded-lg border-2 border-border"></div>
              <Badge variant="outline">Outline Badge</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Design Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Design System Updated</CardTitle>
            <CardDescription>Colors now match the Tuesday.so design blueprint</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center space-y-2">
                <div className="h-12 w-full bg-primary rounded"></div>
                <p className="text-xs text-muted-foreground">Primary</p>
              </div>
              <div className="text-center space-y-2">
                <div className="h-12 w-full bg-emerald-500 rounded"></div>
                <p className="text-xs text-muted-foreground">Accent</p>
              </div>
              <div className="text-center space-y-2">
                <div className="h-12 w-full bg-secondary border rounded"></div>
                <p className="text-xs text-muted-foreground">Secondary</p>
              </div>
              <div className="text-center space-y-2">
                <div className="h-12 w-full bg-muted rounded"></div>
                <p className="text-xs text-muted-foreground">Muted</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
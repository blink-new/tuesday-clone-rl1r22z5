import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight, Play, Star, Users, Zap, Shield, TrendingUp, BarChart3, UserCheck, Globe, Sparkles } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Tuesday</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Affiliates</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Demo</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm">API</a>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 font-medium text-sm">Log In</button>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium text-sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Y Combinator Badge */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Y</span>
                </div>
                <span className="text-gray-600 font-medium text-sm">Backed by Y Combinator</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Scale <span className="text-pink-500">Personalized</span> outreach
                  <br />
                  with Triple-Verified email and
                  <br />
                  mobile number leads
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                First, build hyper-targeted B2B contact lists without needing any 
                manual verification – we'll verify the leads for you. Then, generate 
                1000s of personalized emails that get you 8x more replies within 
                minutes using AI.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-medium text-lg inline-flex items-center justify-center space-x-2">
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-medium text-lg inline-flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">+</span>
                    </div>
                  </div>
                  <span className="text-gray-600 text-sm">10,000+ users</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-2xl">
                {/* Dashboard Header */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Contact Database</h3>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white">
                        Export
                      </Button>
                    </div>
                  </div>
                  
                  {/* Search Bar */}
                  <div className="relative mb-6">
                    <input
                      type="text"
                      placeholder="Search contacts..."
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>

                  {/* Contact List */}
                  <div className="space-y-3">
                    {/* Contact 1 */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">JS</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">John Smith</p>
                          <p className="text-sm text-gray-600">CEO @ TechCorp</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-green-600 font-medium">Verified</span>
                      </div>
                    </div>

                    {/* Contact 2 */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">SD</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Sarah Davis</p>
                          <p className="text-sm text-gray-600">VP Sales @ StartupXYZ</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-green-600 font-medium">Verified</span>
                      </div>
                    </div>

                    {/* Contact 3 */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">MJ</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Mike Johnson</p>
                          <p className="text-sm text-gray-600">CTO @ InnovateLab</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-green-600 font-medium">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-900">AI Powered</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-900">99.7% Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-8">
            <p className="text-gray-500 font-medium">
              Trusted by leading GTM teams around the world
            </p>

            {/* Company Logos */}
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
              {/* Company logos */}
              <div className="h-8 flex items-center">
                <span className="text-2xl font-bold text-gray-400">notion</span>
              </div>
              <div className="h-8 flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-lg font-semibold text-gray-400">salesforce</span>
              </div>
              <div className="h-8 flex items-center">
                <span className="text-2xl font-bold text-gray-400">stripe</span>
              </div>
              <div className="h-8 flex items-center">
                <div className="w-6 h-6 bg-purple-500 rounded-md mr-2"></div>
                <span className="text-lg font-semibold text-gray-400">monday.com</span>
              </div>
              <div className="h-8 flex items-center">
                <span className="text-2xl font-bold text-red-500">yelp</span>
              </div>
              <div className="h-8 flex items-center">
                <div className="w-6 h-6 bg-green-600 rounded mr-2"></div>
                <span className="text-lg font-semibold text-gray-400">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Everything you need to scale your outreach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop wasting time on manual research and verification. Our AI-powered platform 
              handles everything from lead generation to personalized outreach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Triple-Verified Contacts</h3>
              <p className="text-gray-600">
                Get email addresses and mobile numbers verified through multiple data sources 
                with 99.7% accuracy guarantee.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Personalization</h3>
              <p className="text-gray-600">
                Generate thousands of personalized emails using AI that analyzes prospect 
                data and creates relevant messaging.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">8x Higher Response</h3>
              <p className="text-gray-600">
                Our customers see 8x higher response rates compared to traditional 
                mass email campaigns.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600">
                Track open rates, click rates, and responses with detailed analytics 
                and A/B testing capabilities.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Database</h3>
              <p className="text-gray-600">
                Access over 700M verified business contacts across 200+ countries 
                with real-time data updates.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <UserCheck className="w-6 h-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GDPR Compliant</h3>
              <p className="text-gray-600">
                Fully compliant with GDPR, CCPA, and other privacy regulations 
                to protect your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to scale your outreach?
            </h2>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Join thousands of sales teams who are already using Tuesday to 
              generate more qualified leads and close more deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg">
                Get Started Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pink-500 px-8 py-4 rounded-lg font-medium text-lg">
                See Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-xl font-bold text-white">Tuesday</span>
              </div>
              <p className="text-gray-400">
                Scale personalized outreach with triple-verified leads and AI-powered emails.
              </p>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">GDPR</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Tuesday. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
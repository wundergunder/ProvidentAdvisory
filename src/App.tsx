import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Bot, Hotel, MessageSquare, Mic, Shield, Users, MessageCircle, Phone, Instagram, Facebook, Globe } from 'lucide-react';
import BookDemo from './pages/BookDemo';

function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Load GHL chat widget script
    const script = document.createElement('script');
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '68276685b9e1829b1913d588');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#005B94] text-white py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Provident Advisory Group" className="h-10" />
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#solutions" className="hover:text-[#FF9E1B] transition-colors">Solutions</a>
            <a href="#features" className="hover:text-[#FF9E1B] transition-colors">Features</a>
          </div>
          <button 
            onClick={() => navigate('/book-demo')}
            className="bg-[#FF9E1B] text-white px-6 py-2 rounded-full hover:bg-[#e88c09] transition-colors"
          >
            Get Started
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#005B94] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Transform Guest Experience with AI-Powered Communication
            </h1>
            <p className="text-xl mb-8">
              Elevate your hospitality service with intelligent booking agents that handle guest communications through chat and voice, 24/7.
            </p>
            <button 
              onClick={() => navigate('/book-demo')}
              className="bg-[#FF9E1B] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e88c09] transition-colors"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
            alt="Luxury hotel lobby" 
            className="object-cover w-full h-full opacity-20"
          />
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#005B94]">
            Comprehensive Communication Solutions
          </h2>

          {/* Chat Solution */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#005B94]">
                Omnichannel Chat Support
              </h3>
              <p className="text-gray-600 mb-6">
                Connect with guests wherever they are. Our AI-powered chat solution integrates seamlessly with multiple platforms:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="text-[#FF9E1B]" />
                  <span>WhatsApp</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="text-[#FF9E1B]" />
                  <span>SMS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="text-[#FF9E1B]" />
                  <span>Website Chat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="text-[#FF9E1B]" />
                  <span>Instagram DMs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Facebook className="text-[#FF9E1B]" />
                  <span>Facebook DMs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80" 
                alt="Hotel guest using chat service" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Voice Solution */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="order-2 md:order-1 relative">
              <img 
                src="/operator.jpg" 
                alt="Professional customer service representative with headset" 
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6 text-[#005B94]">
                Intelligent Voice Assistant
              </h3>
              <p className="text-gray-600 mb-6">
                Our AI-powered voice solution handles calls 24/7, providing instant responses to common queries and seamless handoffs to staff when needed.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="text-[#FF9E1B]" />
                  <span>Natural language processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mic className="text-[#FF9E1B]" />
                  <span>Multi-language support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bot className="text-[#FF9E1B]" />
                  <span>Smart call routing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#005B94]">
            Intelligent Solutions for Modern Hospitality
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<MessageSquare className="w-8 h-8 text-[#FF9E1B]" />}
              title="24/7 Chat Support"
              description="AI-powered chat agents handle booking inquiries, answer questions, and provide assistance around the clock."
            />
            <FeatureCard 
              icon={<Mic className="w-8 h-8 text-[#FF9E1B]" />}
              title="Voice Integration"
              description="Natural voice interactions for seamless communication with guests in multiple languages."
            />
            <FeatureCard 
              icon={<Bot className="w-8 h-8 text-[#FF9E1B]" />}
              title="Smart Automation"
              description="Automated booking management and guest service handling with AI intelligence."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#005B94]">
                Why Choose Provident Advisory Group?
              </h2>
              <div className="space-y-6">
                <BenefitItem 
                  icon={<Hotel className="w-6 h-6 text-[#FF9E1B]" />}
                  title="Hospitality Focused"
                  description="Tailored specifically for hotels, resorts, and hospitality businesses."
                />
                <BenefitItem 
                  icon={<Shield className="w-6 h-6 text-[#FF9E1B]" />}
                  title="Enterprise Security"
                  description="Bank-grade security and data protection for peace of mind."
                />
                <BenefitItem 
                  icon={<Users className="w-6 h-6 text-[#FF9E1B]" />}
                  title="Scalable Solution"
                  description="Grows with your business, from boutique hotels to international chains."
                />
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                alt="Modern hotel reception" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#005B94] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Guest Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join leading hotels and resorts already using Provident Advisory Group's AI solutions.
          </p>
          <button 
            onClick={() => navigate('/book-demo')}
            className="bg-[#FF9E1B] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e88c09] transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img src="/logo.png" alt="Provident Advisory Group" className="h-8 mb-4" />
              <p className="text-gray-400">
                Transforming hospitality with intelligent AI solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>AI Booking Agents</li>
                <li>Voice Integration</li>
                <li>Chat Support</li>
                <li>Analytics Dashboard</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Provident Advisory Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-[#005B94]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BenefitItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-[#005B94]/10 rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default App;

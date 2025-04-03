import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function BookDemo() {
  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-[#005B94] hover:text-[#FF9E1B] mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-[#005B94] mb-4">Schedule a Demo</h1>
              <p className="text-gray-600 mb-8">
                See how Provident Advisory Group can transform your guest experience with AI-powered solutions.
              </p>
              
              <div className="mb-8">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/ToOQ56DV5zVWOtXiotmd" 
                  style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                  scrolling="no" 
                  id="ToOQ56DV5zVWOtXiotmd_1743701019707"
                />
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h2 className="text-lg font-semibold text-[#005B94] mb-2">What to Expect</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>30-minute personalized demo</li>
                  <li>Live Q&A session with our product experts</li>
                  <li>Custom pricing proposal for your business</li>
                  <li>Free trial setup assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDemo;
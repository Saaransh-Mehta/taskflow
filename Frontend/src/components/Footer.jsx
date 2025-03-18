import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and social links */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                {/* Replace with your actual logo */}
                <div className="h-8 w-8 rounded bg-indigo-600" />
                <span className="text-xl font-semibold">TaskFlow</span>
              </div>
              <p className="text-sm text-gray-500">Project Management made Simple</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-linkedin h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-facebook h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-twitter h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-youtube h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Email Marketing</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Social Media</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Campaign</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">About us</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of service</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Sell as Collector</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Support@taskflow.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-xs text-gray-500">INLANCE :- Building Solution From 2025</p>
            <p className="text-xs text-gray-500">© 2025 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
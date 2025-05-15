
'use client'
import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <section className="text-center py-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Powerful VPS Hosting
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          Deploy high-performance VPS with full root access and your choice of OS: Ubuntu or Windows.
        </p>
        <button className="bg-blue-600 px-6 py-3 rounded-2xl text-white">Get Started</button>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["4GB", "8GB", "16GB"].map((ram, i) => (
            <motion.div
              key={ram}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{ram} RAM VPS</h3>
              <p className="text-gray-400 mb-4">1vCPU / SSD Storage / Full Root</p>
              <p className="text-2xl font-bold mb-4">${(i + 1) * 5}/mo</p>
              <button className="bg-blue-600 px-4 py-2 rounded-lg w-full">Buy Now</button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Aihoston</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            "Instant Deployment",
            "SSD NVMe Storage",
            "DDoS Protection",
            "Full Root Access"
          ].map((reason, i) => (
            <div key={i} className="bg-gray-700 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">{reason}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Aihoston. All rights reserved.</p>
      </footer>
    </main>
  );
}

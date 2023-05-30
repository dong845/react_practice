import React from 'react'

const PricingContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-20 py-5">
        <div className="flex flex-col border border-white text-center py-4 px-6">
            <p className="text-white text-lg font-bold mb-8">- Basic -</p>
            <p className="text-white mb-10">-----</p>
            <h1 className="text-white text-5xl font-bold mb-8">1 BTC</h1>
            <p className="text-white mb-8">- 3 Days -</p>
            <p className="text-white mb-10">- Views -</p>
        </div>

        <div className="flex flex-col border border-white text-center py-4 px-6">
            <p className="text-white text-lg font-bold mb-8">- Suite -</p>
            <p className="text-white mb-10">-----</p>
            <h1 className="text-white text-5xl font-bold mb-8">2 BTC</h1>
            <p className="text-white mb-8">- 3 Days -</p>
            <p className="text-white mb-10">- Views -</p>
        </div>

        <div className="flex flex-col border border-white text-center py-4 px-6">
            <p className="text-white text-lg font-bold mb-8">- Executive -</p>
            <p className="text-white mb-10">-----</p>
            <h1 className="text-white text-5xl font-bold mb-8">3 BTC</h1>
            <p className="text-white mb-8">- 3 Days -</p>
            <p className="text-white mb-10">- Views -</p>
        </div>
    </div>
  )
}

export default PricingContent
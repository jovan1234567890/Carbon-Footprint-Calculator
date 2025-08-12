import { Apple, Beef, Fish, Leaf } from 'lucide-react';

export function DietSection({ data, onChange }) {
  const meatOptions = [
    { 
      value: 'high', 
      label: 'High', 
      subtitle: 'Daily meat consumption',
      icon: <Beef className="size-5" />,
      color: 'border-red-200 hover:border-red-300 data-[selected=true]:border-red-500 data-[selected=true]:bg-red-50'
    },
    { 
      value: 'medium', 
      label: 'Medium', 
      subtitle: '3-4 times per week',
      icon: <Fish className="size-5" />,
      color: 'border-orange-200 hover:border-orange-300 data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-50'
    },
    { 
      value: 'low', 
      label: 'Low', 
      subtitle: '1-2 times per week',
      icon: <Apple className="size-5" />,
      color: 'border-yellow-200 hover:border-yellow-300 data-[selected=true]:border-yellow-500 data-[selected=true]:bg-yellow-50'
    },
    { 
      value: 'none', 
      label: 'Plant-Based', 
      subtitle: 'Vegetarian or vegan',
      icon: <Leaf className="size-5" />,
      color: 'border-green-200 hover:border-green-300 data-[selected=true]:border-green-500 data-[selected=true]:bg-green-50'
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-emerald-100 rounded-xl mr-4">
          <Apple className="size-7 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Diet & Food</h2>
      </div>
      
      <div className="space-y-8">
        <div>
          <label className="block text-lg font-semibold text-slate-700 mb-4">
            Meat Consumption Level
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {meatOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onChange({ meatConsumption: option.value })}
                data-selected={data.meatConsumption === option.value}
                className={`p-4 rounded-xl border-2 transition-all duration-200 text-left group ${option.color}`}
              >
                <div className="flex items-center mb-2">
                  {option.icon}
                  <span className="ml-3 font-semibold text-slate-800">{option.label}</span>
                </div>
                <p className="text-sm text-slate-600 group-hover:text-slate-700">
                  {option.subtitle}
                </p>
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-lg font-semibold text-slate-700 mb-4">
            Local & Seasonal Food Percentage
          </label>
          <div className="space-y-4">
            <input
              type="range"
              min="0"
              max="100"
              value={data.localFood}
              onChange={(e) => onChange({ localFood: Number(e.target.value) })}
              className="w-full h-3 bg-gradient-to-r from-red-200 via-yellow-200 to-green-200 rounded-full appearance-none cursor-pointer slider accent-emerald-500"
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">0% Local</span>
              <div className="px-4 py-2 bg-emerald-100 rounded-full">
                <span className="font-bold text-emerald-700">{data.localFood}%</span>
              </div>
              <span className="text-sm text-slate-600">100% Local</span>
            </div>
            <p className="text-sm text-slate-600 text-center">
              Local and seasonal foods have lower transportation emissions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
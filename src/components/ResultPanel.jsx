import { TrendingUp, Target, Award, Globe } from 'lucide-react';

export function ResultPanel({ totalEmissions, breakdown }) {
  const globalAverage = 4.8; // tons CO2 per year globally
  const targetEmissions = 2.0; // Paris Agreement target

  const getEmissionLevel = (emissions) => {
    if (emissions <= targetEmissions) return { 
      label: 'Excellent', 
      color: 'text-emerald-700', 
      bg: 'bg-emerald-100',
      ring: 'ring-emerald-200'
    };
    if (emissions <= globalAverage) return { 
      label: 'Good', 
      color: 'text-blue-700', 
      bg: 'bg-blue-100',
      ring: 'ring-blue-200'
    };
    if (emissions <= globalAverage * 1.5) return { 
      label: 'Average', 
      color: 'text-amber-700', 
      bg: 'bg-amber-100',
      ring: 'ring-amber-200'
    };
    return { 
      label: 'High', 
      color: 'text-red-700', 
      bg: 'bg-red-100',
      ring: 'ring-red-200'
    };
  };

  const level = getEmissionLevel(totalEmissions);

  const categories = [
    { 
      name: 'Transportation', 
      value: breakdown.transportation, 
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      lightColor: 'bg-blue-100'
    },
    { 
      name: 'Home Energy', 
      value: breakdown.energy, 
      color: 'bg-gradient-to-r from-amber-500 to-amber-600',
      lightColor: 'bg-amber-100'
    },
    { 
      name: 'Diet & Food', 
      value: breakdown.diet, 
      color: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
      lightColor: 'bg-emerald-100'
    }
  ];

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sticky top-8">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-indigo-100 rounded-xl mr-4">
          <TrendingUp className="size-7 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Your Carbon Footprint</h2>
      </div>

      <div className="text-center mb-8">
        <div className="text-5xl font-bold text-slate-800 mb-3">
          {totalEmissions.toFixed(1)}
          <span className="text-xl font-normal text-slate-600 ml-2">tons CO₂/year</span>
        </div>
        <div className={`inline-flex items-center px-4 py-2 rounded-full ring-2 ${level.bg} ${level.ring}`}>
          <Award className="size-5 mr-2" />
          <span className={`font-bold ${level.color}`}>{level.label}</span>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {categories.map((category) => (
          <div key={category.name} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-700">{category.name}</span>
              <span className="font-bold text-slate-800">{category.value.toFixed(1)} tons</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
              <div 
                className={`h-3 rounded-full transition-all duration-1000 ease-out ${category.color}`}
                style={{ width: `${Math.max((category.value / totalEmissions) * 100, 2)}%` }}
              />
            </div>
            <div className="text-sm text-slate-600">
              {((category.value / totalEmissions) * 100).toFixed(1)}% of total emissions
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex items-center mb-2">
            <Globe className="size-4 text-slate-600 mr-2" />
            <div className="text-sm font-medium text-slate-600">Global Average</div>
          </div>
          <div className="text-xl font-bold text-slate-800">{globalAverage} tons</div>
        </div>
        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
          <div className="flex items-center mb-2">
            <Target className="size-4 text-emerald-600 mr-2" />
            <div className="text-sm font-medium text-emerald-600">Paris Target</div>
          </div>
          <div className="text-xl font-bold text-emerald-800">{targetEmissions} tons</div>
        </div>
      </div>
    </div>
  );
}
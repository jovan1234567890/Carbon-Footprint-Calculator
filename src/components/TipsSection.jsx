import { Lightbulb, ArrowRight, Car, Zap, Leaf, Recycle } from 'lucide-react';

export function TipsSection({ totalEmissions, breakdown }) {
  const getTopTips = () => {
    const tips = [];
    
    if (breakdown.transportation > 2) {
      tips.push({
        category: 'Transportation',
        title: 'Reduce Car Dependency',
        description: 'Try carpooling, public transport, cycling, or working from home',
        impact: 'Save up to 1.2 tons CO₂/year',
        icon: <Car className="size-5" />,
        color: 'bg-blue-100 text-blue-700'
      });
    }
    
    if (breakdown.energy > 2) {
      tips.push({
        category: 'Energy',
        title: 'Improve Home Efficiency',
        description: 'Switch to LED bulbs, improve insulation, use smart thermostats',
        impact: 'Save up to 1.5 tons CO₂/year',
        icon: <Zap className="size-5" />,
        color: 'bg-amber-100 text-amber-700'
      });
    }
    
    if (breakdown.diet > 1.5) {
      tips.push({
        category: 'Diet',
        title: 'Choose Plant-Based Options',
        description: 'Reduce meat consumption and buy local, seasonal produce',
        impact: 'Save up to 0.8 tons CO₂/year',
        icon: <Leaf className="size-5" />,
        color: 'bg-emerald-100 text-emerald-700'
      });
    }
    
    // Always include general tips
    tips.push({
      category: 'Lifestyle',
      title: 'Embrace Circular Economy',
      description: 'Buy less, repair items, choose quality over quantity',
      impact: 'Save up to 0.5 tons CO₂/year',
      icon: <Recycle className="size-5" />,
      color: 'bg-purple-100 text-purple-700'
    });
    
    return tips.slice(0, 4);
  };

  const tips = getTopTips();

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-amber-100 rounded-xl mr-4">
          <Lightbulb className="size-7 text-amber-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Personalized Tips</h2>
      </div>

      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div 
            key={index} 
            className="group border-2 border-slate-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-lg mr-3 ${tip.color}`}>
                    {tip.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    {tip.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-slate-600 mb-3 leading-relaxed">{tip.description}</p>
                <p className="text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full inline-block">
                  {tip.impact}
                </p>
              </div>
              <ArrowRight className="size-6 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
        <h3 className="font-bold text-emerald-800 mb-3 text-lg">Track Your Progress</h3>
        <p className="text-emerald-700 leading-relaxed">
          Small changes compound over time! Even a 20% reduction in your carbon footprint 
          makes a meaningful difference for our planet's future.
        </p>
      </div>
    </div>
  );
}
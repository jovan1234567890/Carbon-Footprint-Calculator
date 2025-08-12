import { Zap, Home, Thermometer } from 'lucide-react';
import { InputField } from './InputField';

export function EnergySection({ data, onChange }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-amber-100 rounded-xl mr-4">
          <Zap className="size-7 text-amber-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Home Energy</h2>
      </div>
      
      <div className="space-y-6">
        <InputField
          label="Monthly Electricity Usage"
          value={data.electricity}
          onChange={(value) => onChange({ electricity: value })}
          icon={<Zap className="size-5" />}
          unit="kWh"
          description="Check your utility bill for kilowatt-hours"
        />
        
        <InputField
          label="Monthly Natural Gas Usage"
          value={data.gas}
          onChange={(value) => onChange({ gas: value })}
          icon={<Home className="size-5" />}
          unit="therms"
          description="Used for heating, cooking, and hot water"
        />
        
        <InputField
          label="Monthly Heating Oil Usage"
          value={data.heating}
          onChange={(value) => onChange({ heating: value })}
          icon={<Thermometer className="size-5" />}
          unit="gallons"
          description="Alternative heating fuel (leave 0 if not applicable)"
        />
      </div>
    </div>
  );
}
import { Car, Plane, Train } from 'lucide-react';
import { InputField } from './InputField';

export function TransportationSection({ data, onChange }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-blue-100 rounded-xl mr-4">
          <Car className="size-7 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Transportation</h2>
      </div>
      
      <div className="space-y-6">
        <InputField
          label="Car Miles per Week"
          value={data.carMiles}
          onChange={(value) => onChange({ carMiles: value })}
          icon={<Car className="size-5" />}
          unit="miles"
          description="Include daily commuting and weekend trips"
        />
        
        <InputField
          label="Flight Hours per Year"
          value={data.flightHours}
          onChange={(value) => onChange({ flightHours: value })}
          icon={<Plane className="size-5" />}
          unit="hours"
          description="Total flight time for business and leisure travel"
        />
        
        <InputField
          label="Public Transport Hours per Week"
          value={data.publicTransport}
          onChange={(value) => onChange({ publicTransport: value })}
          icon={<Train className="size-5" />}
          unit="hours"
          description="Bus, train, subway, and other public transportation"
        />
      </div>
    </div>
  );
}
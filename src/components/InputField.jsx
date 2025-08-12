export function InputField({ label, value, onChange, icon, unit, description }) {
  return (
    <div className="space-y-2">
      <label className="block text-lg font-semibold text-slate-700">
        {label}
      </label>
      {description && (
        <p className="text-sm text-slate-600">{description}</p>
      )}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
          {icon}
        </div>
        <input
          type="number"
          value={value || ''}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="block w-full pl-12 pr-20 py-4 text-lg border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/80"
          placeholder="0"
          min="0"
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
          <span className="text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-lg text-sm">
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
}
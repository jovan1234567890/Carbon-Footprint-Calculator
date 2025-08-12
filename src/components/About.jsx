import React, { useState, useEffect } from "react";
import {
  Target,
  Users,
  Lightbulb,
  Globe,
  Award,
  TrendingUp,
} from "lucide-react";

const AboutMe = () => {
  const [fade, setFade] = useState(true);
  const [missionQuote, setMissionQuote] = useState(
    "We believe that awareness is the first step toward action."
  );

  const methodology = [
    {
      category: "Transportation",
      desc: "Based on EPA emission factors for various vehicle types and fuel consumption rates.",
      factor: "0.404 kg CO₂ per mile (average car)",
    },
    {
      category: "Energy",
      desc: "Uses regional electricity grid emission factors and natural gas combustion data.",
      factor: "0.5 kg CO₂ per kWh (US average)",
    },
    {
      category: "Diet",
      desc: "Incorporates lifecycle emissions from food production, processing, and transportation.",
      factor: "1.5–3.3 tons CO₂ per year (diet dependent)",
    },
  ];

  const sources = [
    "Environmental Protection Agency (EPA)",
    "Intergovernmental Panel on Climate Change (IPCC)",
    "International Energy Agency (IEA)",
    "Food and Agriculture Organization (FAO)",
    "Carbon Trust Research Studies",
  ];

  const handleQuoteChange = () => {
    setFade(true);
    setTimeout(() => {
      setMissionQuote((prev) =>
        prev ===
        "We believe that awareness is the first step toward action."
          ? "Small changes lead to big impacts for the planet."
          : "We believe that awareness is the first step toward action."
      );
      setFade(false);
    }, 500);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="min-h-screen bg-fixed bg-center bg-cover py-12 px-4"
      style={{
        backgroundColor:"white",
      }}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <FadeCard fade={fade}>
          <div className="flex items-center justify-center mb-6">
            <span className="p-4 bg-emerald-100 rounded-2xl mr-4">
              <Globe className="size-12 text-emerald-600" />
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              About Our Calculator
            </h1>
          </div>
          <p className="text-lg text-slate-700 text-center">
            Learn about the science, methodology, and mission behind our carbon
            footprint calculator.
          </p>
        </FadeCard>

        {/* Mission */}
        <FadeCard fade={fade}>
          <div className="flex items-center mb-4">
            <Target className="size-8 text-emerald-600 mr-3" />
            <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
          </div>
          <p
            className={`text-slate-700 text-lg transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {missionQuote}
          </p>
          <button
            onClick={handleQuoteChange}
            className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-600 transition"
          >
            Change Quote
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <SmallCard
              icon={<Users className="size-6 text-emerald-600" />}
              title="Accessible to Everyone"
              color="bg-emerald-50"
            >
              Simple, user-friendly interface that makes carbon tracking
              accessible to all users.
            </SmallCard>
            <SmallCard
              icon={<Award className="size-6 text-blue-600" />}
              title="Science-Based"
              color="bg-blue-50"
            >
              All calculations based on peer-reviewed research and official
              environmental data.
            </SmallCard>
          </div>
        </FadeCard>

        {/* Methodology */}
        <FadeCard fade={fade}>
          <div className="flex items-center mb-4">
            <TrendingUp className="size-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-slate-800">
              Calculation Methodology
            </h2>
          </div>
          {methodology.map((item, i) => (
            <div
              key={i}
              className="border-l-4 border-emerald-500 pl-4 py-3 bg-slate-50 rounded-r-xl mb-4"
            >
              <h3 className="font-bold text-slate-800">{item.category}</h3>
              <p className="text-slate-600">{item.desc}</p>
              <span className="text-sm font-mono bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full inline-block mt-2">
                {item.factor}
              </span>
            </div>
          ))}
        </FadeCard>

        {/* Data Sources */}
        <FadeCard fade={fade}>
          <div className="flex items-center mb-4">
            <Lightbulb className="size-8 text-amber-600 mr-3" />
            <h2 className="text-2xl font-bold text-slate-800">Data Sources</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sources.map((src, i) => (
              <div
                key={i}
                className="flex items-center p-3 bg-slate-50 rounded-xl"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                <span className="text-slate-700">{src}</span>
              </div>
            ))}
          </div>
        </FadeCard>

        {/* Disclaimer */}
        <FadeCard fade={fade}>
          <h3 className="font-bold text-amber-800 text-lg mb-2">
            Important Note
          </h3>
          <p className="text-amber-700">
            This calculator provides estimates based on average emission
            factors and may not reflect individual circumstances perfectly.
            Regional variations, specific technologies, and personal habits can
            affect actual emissions.
          </p>
        </FadeCard>
      </div>
    </div>
  );
};

const FadeCard = ({ fade, children }) => (
  <div
    className={`bg-white bg-opacity-80 border border-black rounded-2xl shadow-2xl p-6 transition-opacity duration-1000 ${
      fade ? "opacity-0" : "opacity-100"
    }`}
  >
    {children}
  </div>
);

const SmallCard = ({ icon, title, color, children }) => (
  <div className={`p-4 rounded-xl ${color}`}>
    {icon}
    <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
    <p className="text-slate-600 text-sm">{children}</p>
  </div>
);

export default AboutMe;

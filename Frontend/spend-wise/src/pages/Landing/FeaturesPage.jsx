import { useNavigate } from "react-router-dom";
import LandingNav from "./LandingNav";
import { FaWallet, FaChartBar, FaExchangeAlt, FaFileExcel, FaTh, FaTag, FaShieldAlt } from "react-icons/fa";

const features = [
  { icon: <FaWallet />,       color: "bg-orange-50 text-orange-500", title: "Track income",               desc: "Log all your income sources with categories and dates. Never lose track of what you earn." },
  { icon: <FaExchangeAlt />,  color: "bg-red-50 text-red-500",       title: "Manage expenses",            desc: "Record every expense with category tagging. See exactly where your money goes." },
  { icon: <FaTh />,           color: "bg-blue-50 text-blue-500",     title: "Interactive dashboard",      desc: "A clean overview of your total income, expenses, and net savings at a glance." },
  { icon: <FaChartBar />,     color: "bg-purple-50 text-purple-500", title: "Charts and analytics",       desc: "Pie, bar and line charts help you understand your financial trends visually." },
  { icon: <FaFileExcel />,    color: "bg-green-50 text-green-500",   title: "Export to Excel",            desc: "Download your income and expense data as a spreadsheet anytime." },
  { icon: <FaShieldAlt />,    color: "bg-slate-50 text-slate-500",   title: "Secure JWT authentication",  desc: "Your account is protected with industry-standard JWT tokens and encrypted passwords." },
];

const FeaturesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LandingNav />

      <section className="flex-1 px-8 sm:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs text-orange-500 font-medium tracking-widest mb-2">FEATURES</p>
          <h1 className="text-center text-3xl font-semibold text-slate-900 mb-3">Everything you need</h1>
          <p className="text-center text-sm text-slate-500 mb-12 max-w-md mx-auto">
            Simple, powerful tools to track, analyse, and grow your finances.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title}
                className="bg-white border border-slate-100 rounded-xl p-6 hover:border-orange-200 hover:shadow-sm transition">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  {f.icon}
                </div>
                <p className="text-sm font-medium text-slate-800 mb-2">{f.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="text-sm text-slate-500 mb-4">Ready to take control of your finances?</p>
            <button onClick={() => navigate("/signup")}
              className="px-8 py-3 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition">
              Get started for free
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 px-8 sm:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs text-slate-400">© 2026 SpendWise. All rights reserved.</span>
        <div className="flex gap-5">
          {["About", "GitHub", "Contact"].map((l) => (
            <span key={l} className="text-xs text-slate-400 cursor-pointer hover:text-slate-600 transition">{l}</span>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default FeaturesPage;
import { useNavigate } from "react-router-dom";
import LandingNav from "./LandingNav";
import { FaUserPlus, FaPlusCircle, FaChartPie, FaDownload } from "react-icons/fa";

const steps = [
  {
    step: "01",
    icon: <FaUserPlus />,
    color: "bg-orange-50 text-orange-500",
    title: "Create an account",
    desc: "Sign up in seconds with your name, email and password. No credit card needed. Upload a profile photo optionally.",
  },
  {
    step: "02",
    icon: <FaPlusCircle />,
    color: "bg-blue-50 text-blue-500",
    title: "Add income and expenses",
    desc: "Log transactions with title, amount, category and date. Edit or delete any entry anytime.",
  },
  {
    step: "03",
    icon: <FaChartPie />,
    color: "bg-purple-50 text-purple-500",
    title: "View insights",
    desc: "Your dashboard shows total income, expenses and net savings. Switch between pie and line charts to understand trends.",
  },
  {
    step: "04",
    icon: <FaDownload />,
    color: "bg-green-50 text-green-500",
    title: "Download reports",
    desc: "Export your income or expense data as an Excel file anytime for your own records or accountant.",
  },
];

const HowItWorksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LandingNav />

      <section className="flex-1 px-8 sm:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs text-orange-500 font-medium tracking-widest mb-2">HOW IT WORKS</p>
          <h1 className="text-center text-3xl font-semibold text-slate-900 mb-3">Up and running in minutes</h1>
          <p className="text-center text-sm text-slate-500 mb-14 max-w-md mx-auto">
            Four simple steps to take full control of your personal finances.
          </p>

          {/* Steps */}
          <div className="flex flex-col gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="flex gap-6 items-start">
                {/* Step number + line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold flex items-center justify-center shrink-0">
                    {s.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-[1px] flex-1 bg-slate-200 mt-2 min-h-[32px]" />
                  )}
                </div>

                {/* Content */}
                <div className="bg-white border border-slate-100 rounded-xl p-5 flex-1 hover:border-orange-200 transition mb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${s.color}`}>
                      {s.icon}
                    </div>
                    <p className="text-sm font-medium text-slate-800">{s.title}</p>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="text-sm text-slate-500 mb-4">Sounds good? Get started in under a minute.</p>
            <button onClick={() => navigate("/signup")}
              className="px-8 py-3 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition">
              Create your account
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

export default HowItWorksPage;
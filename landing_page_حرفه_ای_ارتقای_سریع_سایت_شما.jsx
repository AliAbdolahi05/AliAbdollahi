import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Menu, X, Sparkles, Shield, Zap, Star, Quote } from "lucide-react";

// نکته: این کامپوننت با Tailwind CSS طراحی شده و با هر فریم‌ورک React (Next.js/CRA/Vite) سازگار است.
// اگر shadcn/ui دارید می‌توانیم دکمه‌ها/کارت‌ها را جایگزین کنیم.

export default function ProLanding() {
  const [open, setOpen] = useState(false);

  const features = [
    { icon: <Zap className="w-6 h-6" />, title: "سرعت لود بالا", desc: "بهینه‌سازی تصاویر، lazy loading و کَش هوشمند." },
    { icon: <Shield className="w-6 h-6" />, title: "امنیت قوی", desc: "هدرهای امنیتی، HTTPS، محافظت از فرم‌ها و rate limit." },
    { icon: <Sparkles className="w-6 h-6" />, title: "UI مدرن", desc: "تایپوگرافی خوانا، رنگ‌بندی برند، انیمیشن‌های نرم." },
  ];

  const faqs = [
    { q: "این قالب با وردپرس هم می‌سازد؟", a: "این یک Frontend React است؛ می‌توانیم آن را به عنوان پوسته Headless وصل کنیم یا الگو را به HTML/CSS ساده تبدیل کنیم." },
    { q: "چقدر قابل شخصی‌سازی است؟", a: "همه چیز از پالت رنگ تا ساختار بخش‌ها با چند کلاس Tailwind قابل تغییر است." },
    { q: "SEO چه وضعی دارد؟", a: "ساختار معنایی، meta tags و سرعت بالا پایه‌ی سئوی خوب را فراهم می‌کند." },
  ];

  const nav = [
    { label: "ویژگی‌ها", href: "#features" },
    { label: "نمونه‌ها", href: "#showcase" },
    { label: "سوالات", href: "#faq" },
    { label: "ارتباط", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="size-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400" />
              <span className="font-semibold tracking-tight">YourBrand</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-white/90 text-white/70 transition">{n.label}</a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 hover:border-white/40 transition">
                همکاری <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
            <button className="md:hidden inline-flex items-center" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-4 py-3 space-y-2">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="block px-2 py-2 rounded-xl hover:bg-white/5" onClick={() => setOpen(false)}>{n.label}</a>
              ))}
              <a href="#contact" className="block px-2 py-2 rounded-xl bg-white/10 hover:bg-white/20" onClick={() => setOpen(false)}>همکاری</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute -top-24 -left-24 blur-3xl w-[40rem] h-[40rem] bg-indigo-600/30 rounded-full" />
        <div aria-hidden className="absolute -bottom-24 -right-24 blur-3xl w-[35rem] h-[35rem] bg-cyan-500/20 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Sparkles className="w-4 h-4" /> نسخه حرفه‌ای سایت شما
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
              تبدیل بازدیدکننده به مشتری با یک <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">لندینگ مدرن</span>
            </h1>
            <p className="mt-5 text-white/70 max-w-xl">
              طراحی تمیز، متن قانع‌کننده و سرعت عالی. همین امروز ظاهر سایت‌تان را ارتقا بدهید تا اعتماد و نرخ تبدیل بالاتر برود.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 transition">
                شروع همکاری <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="#showcase" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-white/20 hover:border-white/40 transition">
                دیدن نمونه‌کار
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/70">
              {[
                "بهینه برای موبایل",
                "سئو و ساختار معنایی",
                "انیمیشن‌های سبک",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl">
                <div className="aspect-[16/10] rounded-2xl bg-slate-950 overflow-hidden">
                  {/* Mock Browser */}
                  <div className="h-10 bg-slate-900/80 flex items-center gap-2 px-3 border-b border-white/10">
                    <span className="size-3 rounded-full bg-red-400/70" />
                    <span className="size-3 rounded-full bg-yellow-300/70" />
                    <span className="size-3 rounded-full bg-green-400/70" />
                    <div className="ml-3 text-xs text-white/60 truncate">yourbrand.com</div>
                  </div>
                  <div className="p-6 grid sm:grid-cols-2 gap-6">
                    <div className="h-28 rounded-xl bg-white/5 border border-white/10" />
                    <div className="h-28 rounded-xl bg-white/5 border border-white/10" />
                    <div className="h-28 rounded-xl bg-white/5 border border-white/10" />
                    <div className="h-28 rounded-xl bg-white/5 border border-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} className="rounded-3xl border border-white/10 bg-white/5 p-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/10">{f.icon}</div>
                  <h3 className="font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-white/70 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">نتایج قابل لمس</h2>
            <div className="text-sm text-white/60">+42% افزایش تبدیل · -35% زمان لود</div>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="group relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="aspect-[16/10] bg-slate-900" />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-white/70"><Star className="w-4 h-4" /> پروژه نمونه #{i}</div>
                  <p className="mt-1 text-white/60 text-sm">توضیح کوتاه از چالش و راه‌حل.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-2 text-sm text-white/70"><Quote className="w-4 h-4" /> نظر مشتری</div>
                <p className="mt-3 text-white/80">کیفیت عالی، ارتباط حرفه‌ای و نتیجه ملموس. همکاری با این تیم باعث رشد کسب‌وکار ما شد.</p>
                <div className="mt-4 text-sm text-white/60">— نام مشتری</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold">سوالات پرتکرار</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/5 p-4">
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="font-medium">{f.q}</span>
                </summary>
                <p className="mt-2 text-sm text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl md:text-3xl font-semibold">شروع همکاری</h2>
            <p className="mt-2 text-white/70 text-sm">فرم زیر را پر کنید تا در سریع‌ترین زمان با شما هماهنگ کنیم.</p>
            <form className="mt-6 grid md:grid-cols-2 gap-4">
              <input className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="نام" />
              <input className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="ایمیل" type="email" />
              <input className="md:col-span-2 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="موضوع" />
              <textarea className="md:col-span-2 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 min-h-[120px] outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="توضیحات" />
              <button type="submit" className="md:col-span-2 inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 transition">
                ارسال درخواست <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 text-center text-white/60 text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          © {new Date().getFullYear()} YourBrand — همه حقوق محفوظ است.
        </div>
      </footer>
    </div>
  );
}

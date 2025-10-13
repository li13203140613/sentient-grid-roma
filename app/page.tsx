import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-2xl font-bold">Sentient Labs: GRID & ROMA</h1>
            <ul className="flex gap-6 text-sm font-medium flex-wrap">
              <li><a href="#overview" className="hover:opacity-80 transition">Overview</a></li>
              <li><a href="#grid" className="hover:opacity-80 transition">GRID</a></li>
              <li><a href="#roma" className="hover:opacity-80 transition">ROMA</a></li>
              <li><a href="#ecosystem" className="hover:opacity-80 transition">Ecosystem</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">🏆 Minsky Awards 2024 Winner</h2>
            <h3 className="text-2xl md:text-3xl mb-6">AI Startup of the Year</h3>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95">
              Experience GRID: The world&apos;s largest decentralized AI network powered by ROMA (Recursive Open Meta-Agents) - achieving 81.7% accuracy on FRAMES, outperforming Gemini-2.5-Pro by 4x
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="https://chat.sentient.xyz/" target="_blank" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition transform hover:-translate-y-1">
                Try Sentient Chat
              </Link>
              <Link href="https://github.com/sentient-agi/ROMA" target="_blank" className="bg-white/20 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition transform hover:-translate-y-1">
                View on GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">Sentient Labs: Building Open AGI</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-3 text-amber-700">Revolutionary Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  Sentient Labs is transforming the AI landscape from closed, fragmented systems into an <strong>open, collaborative ecosystem</strong> that serves humanity&apos;s broader interests.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">Core Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  Build the world&apos;s largest decentralized intelligence network where AI models, agents, data sources, and tools collaborate seamlessly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">Open Source Intelligence</h3>
                <p className="text-slate-600 leading-relaxed">
                  GRID provides open-source intelligence through a decentralized architecture, enabling anyone to contribute and benefit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GRID Section */}
        <section id="grid" className="py-16 px-6 bg-slate-100">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">GRID: Decentralized AI Network</h2>
            <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-12">
              GRID connects specialized AI artifacts into a collaborative intelligence ecosystem. Every query triggers coordinated workflows across multiple agents and tools.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">What is GRID?</h3>
                <p className="text-slate-600 text-sm">
                  The world&apos;s largest network of intelligence - a <strong>decentralized AI platform</strong> where specialized intelligences collaborate through modular artifacts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">Core Architecture</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• <strong>Artifacts</strong>: Modular intelligence units</li>
                  <li>• <strong>Workflows</strong>: Coordinated AI operations</li>
                  <li>• <strong>Collaborative Execution</strong></li>
                  <li>• <strong>Decentralized Network</strong></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">100+ Partners</h3>
                <p className="text-slate-600 text-sm">
                  Over <strong>100 partner artifacts</strong> integrated, creating a massive collaborative intelligence network.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">Artifacts</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• AI Models (like Dobby)</li>
                  <li>• Intelligent Agents</li>
                  <li>• Data Sources</li>
                  <li>• Tools and APIs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">Workflow System</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Analyzes requests</li>
                  <li>• Selects artifacts</li>
                  <li>• Chains agents & tools</li>
                  <li>• Synthesizes results</li>
                </ul>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-amber-700">Chat Interface</h3>
                <p className="text-slate-600 text-sm">
                  <a href="https://chat.sentient.xyz/" target="_blank" className="text-indigo-600 font-semibold hover:underline">Sentient Chat</a> provides conversational access to the entire GRID network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROMA Section */}
        <section id="roma" className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">ROMA: Recursive Open Meta-Agents</h2>
            <p className="text-center text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-12">
              Winner of Minsky Awards 2024. ROMA achieved <strong>81.7% on FRAMES</strong> and <strong>45.6% on SEAL-0</strong>, crushing Gemini-2.5-Pro&apos;s 19.8%.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-amber-700">🏆 Award Winner</h3>
                <p className="text-slate-600 text-sm">
                  <strong>Minsky Awards 2024:</strong> Best AI Startup. First major validation of multi-agent reasoning at scale.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">What is ROMA?</h3>
                <p className="text-slate-600 text-sm">
                  Open-source framework for recursive, hierarchical task decomposition coordinating specialized agents.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">4-Stage Architecture</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• <strong>Atomizer</strong>: Task analysis</li>
                  <li>• <strong>Planner</strong>: Decomposition</li>
                  <li>• <strong>Executors</strong>: Execution</li>
                  <li>• <strong>Aggregator</strong>: Integration</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">Benchmarks</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• <strong>FRAMES</strong>: 81.7%</li>
                  <li>• <strong>SEAL-0</strong>: 45.6%</li>
                  <li>• Beats Gemini, Grok-4</li>
                  <li>• Research & fact-seeking</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">Pre-built Agents</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• General Task Solver</li>
                  <li>• Deep Research Agent</li>
                  <li>• Crypto Analytics Agent</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">Tech Stack</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Python 3.12+ / FastAPI</li>
                  <li>• React + TypeScript</li>
                  <li>• LiteLLM / E2B sandboxes</li>
                  <li>• MIT Open Source</li>
                </ul>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-amber-700">GitHub #1</h3>
                <p className="text-slate-600 text-sm">
                  Trending #1 project. <a href="https://github.com/sentient-agi/ROMA" target="_blank" className="text-indigo-600 font-semibold hover:underline">Join thousands of developers</a>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition md:col-span-2">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">Why ROMA Matters</h3>
                <p className="text-slate-600 text-sm">
                  Validates that <strong>open-source AI can outperform closed models</strong>. Redefining &quot;reasoning&quot; through collaborative, transparent development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section id="ecosystem" className="py-16 px-6 bg-slate-100">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">Sentient Ecosystem</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">Dobby AI</h3>
                <p className="text-slate-600 text-sm">Proprietary model for complex reasoning and generation</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">Model Fingerprinting</h3>
                <p className="text-slate-600 text-sm">Verify AI models and track provenance</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">Deep Search</h3>
                <p className="text-slate-600 text-sm">Open-source information retrieval infrastructure</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">$SENT Token</h3>
                <p className="text-slate-600 text-sm">Incentivize contributions and reward builders</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">Community-Driven</h3>
                <p className="text-slate-600 text-sm">Earn rewards, vote through token staking</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold mb-3 text-indigo-600">Partner Network</h3>
                <p className="text-slate-600 text-sm">100+ partners with specialized capabilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-emerald-500 to-indigo-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Revolution</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-95">
              GitHub #1 trending project with thousands of developers building collaborative intelligence.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/25 transition">
                <h3 className="text-xl font-bold mb-3">🤖 Try Chat</h3>
                <Link href="https://chat.sentient.xyz/" target="_blank" className="text-white font-semibold underline hover:opacity-80">chat.sentient.xyz</Link>
              </div>
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/25 transition">
                <h3 className="text-xl font-bold mb-3">⭐ GitHub</h3>
                <Link href="https://github.com/sentient-agi/ROMA" target="_blank" className="text-white font-semibold underline hover:opacity-80">Star ROMA</Link>
              </div>
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/25 transition">
                <h3 className="text-xl font-bold mb-3">🔨 Build</h3>
                <p className="text-white">Earn $SENT tokens</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Redefining AI Reasoning</h2>
            <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed opacity-90">
              ROMA proves <strong>open-source can outperform closed models</strong>. This isn&apos;t about copying—it&apos;s about redefining &quot;reasoning&quot; through multi-agent collaboration. Sentient builds an open AGI ecosystem serving humanity&apos;s interests, not just corporate profits.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="opacity-80">&copy; 2025 Sentient Labs. All rights reserved.</p>
          <p className="opacity-80 mt-2">Building the world&apos;s largest decentralized AI network.</p>
          <div className="mt-4 space-x-4 text-sm">
            <Link href="https://sentient.xyz/" target="_blank" className="opacity-80 hover:opacity-100 transition">Sentient.xyz</Link>
            <span className="opacity-50">|</span>
            <Link href="https://chat.sentient.xyz/" target="_blank" className="opacity-80 hover:opacity-100 transition">Chat</Link>
            <span className="opacity-50">|</span>
            <Link href="https://docs.sentient.xyz/" target="_blank" className="opacity-80 hover:opacity-100 transition">Docs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

import {
  BrainCircuit,
  FileText,
  Upload,
  ShieldCheck,
  SearchCheck,
  CircleCheckBig,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <BrainCircuit size={18} />
            Infosys Springboard AI Internship Project
          </div>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight">
            AI Response Quality Evaluator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Evaluate AI-generated responses using Retrieval-Augmented
            Generation (RAG) and a Multi-Agent Evaluation Pipeline to
            measure Accuracy, Relevance, Hallucination and Completeness.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Accuracy",
              "Relevance",
              "Hallucination",
              "Completeness",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Form */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

          <h2 className="mb-2 text-3xl font-bold">
            Evaluation Input Module
          </h2>

          <p className="mb-8 text-slate-400">
            Submit a question, AI response, and optional reference data for evaluation.
          </p>

          <form className="space-y-6">

            <div>
              <label className="mb-2 block font-medium">
                Question *
              </label>

              <textarea
                rows={3}
                placeholder="Enter your question..."
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                AI Generated Response *
              </label>

              <textarea
                rows={7}
                placeholder="Paste the AI generated response..."
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Reference Answer (Optional)
              </label>

              <textarea
                rows={4}
                placeholder="Optional reference answer..."
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Upload Source Document (Optional)
              </label>

              <input
                type="file"
                className="block w-full rounded-lg border border-slate-700 bg-slate-950 p-3 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-6 py-4 text-lg font-semibold transition hover:bg-blue-700"
            >
              Evaluate Response
            </button>

          </form>
        </div>
      </section>

      {/* Pipeline */}
      <section className="mx-auto max-w-6xl px-6 pb-16">

        <h2 className="mb-10 text-center text-3xl font-bold">
          Multi-Agent Evaluation Pipeline
        </h2>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">

          <Card
            icon={<FileText size={30} />}
            title="Question"
            text="User submits question and AI response."
          />

          <Card
            icon={<Upload size={30} />}
            title="RAG Retrieval"
            text="Retrieve supporting reference documents."
          />

          <Card
            icon={<SearchCheck size={30} />}
            title="Relevance"
            text="Checks whether the response answers the question."
          />

          <Card
            icon={<ShieldCheck size={30} />}
            title="Accuracy"
            text="Verifies factual correctness."
          />

          <Card
            icon={<BrainCircuit size={30} />}
            title="Hallucination"
            text="Detects fabricated or unsupported facts."
          />

          <Card
            icon={<CircleCheckBig size={30} />}
            title="Verdict"
            text="Generate final quality score."
          />

        </div>
      </section>

      {/* Tech Stack */}

      <section className="border-t border-slate-800 bg-slate-900 py-14">

        <div className="mx-auto max-w-6xl px-6">

          <h2 className="mb-8 text-center text-3xl font-bold">
            Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            {[
              "Next.js",
              "FastAPI",
              "Python",
              "LangChain",
              "Gemini",
              "FAISS",
              "TruthfulQA",
              "SQuAD",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-3"
              >
                {tech}
              </span>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}

type CardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function Card({ icon, title, text }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:border-blue-500 hover:-translate-y-1">
      <div className="mb-4 flex justify-center text-blue-400">
        {icon}
      </div>

      <h3 className="mb-2 font-bold">
        {title}
      </h3>

      <p className="text-sm text-slate-400">
        {text}
      </p>
    </div>
  );
}
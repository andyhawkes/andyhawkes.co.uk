---
title: Whose future is it anyway?
description: A long-form essay on AI, engineering judgement, capability, power, and the uneven distribution of the future.
---

# Whose future is it anyway?

## The architecture of the AI transition

### The view from close range

My recent writing about artificial intelligence from the trenches of software delivery has offered a clear, micro-level perspective. It is a view focused on the immediate mechanics of engineering teams: how code assistants alter daily workflows, how copilots shift delivery cadences, and how engineering managers restructure their roadmaps. This micro view treats AI as a tactical tool — an engineering variable to be optimised, integrated, or routed around.

But the deeper we venture into this shift, the harder it becomes to ignore the broader horizon. The exact same forces rewriting the rules of software development are playing out at a much more significant, macro-economic scale. They are cutting across global industries, redefining state power, and fracturing economic frameworks that were fundamentally never designed to move this quickly.

Long before moving into technology, I studied Economics and Politics at university. At the time, that world felt entirely distinct from the deterministic nature of software systems — a landscape of market failures, institutional incentives, governance structures, and raw power dynamics that seemed academically useful but practically abstract. For decades, my professional focus remained fixed on systems on a closer scale: teams, platforms, architectural patterns, and delivery cadences.

Today, those two worlds have violently collided.

AI is not merely another software product; it represents a fundamental realignment of capability, agency, speed, and time. These are no longer just engineering concerns. They are economic, social, and political imperatives. The identical questions we now ask about software teams — *Who holds the capability? Who makes the decisions? Do we have time to adapt?* — apply verbatim to the global stage.

The answers are complex, and the potential outcomes are profoundly unequal. The more closely we examine the vectors of current AI development, the harder it becomes to believe that "the future" is a destination where everyone is invited, let alone equal.

To understand how we navigate this transition, we must trace the line directly from the micro realities of individual human cognition up to the macro structures of global corporate monopoly.

---

### The micro-level disruption

#### 1. From Knowledge to Judgement

For the last few decades, value within the knowledge-work sectors has been built on two foundational criteria: what you know, and how effectively you can apply it. Modern professional services — finance, legal, consulting, and software engineering — have operated as "knowledge pyramids".

AI systematically destroys the commercial value of both poles. Static knowledge is becoming completely compressible, instantly accessible, and infinitely reproducible. Execution — the raw act of translating intent into an artifact, whether that artifact is a legal brief, a marketing copy deck, or a block of JavaScript — is becoming a cheap, metered commodity.

This raises a vital architectural question: *What remains valuable when both knowledge and execution are widely available?*

For me, the answer is **judgement**. Value is migrating away from the act of production and toward the act of evaluation. It rests in framing the problem, deciding what matters, evaluating complex trade-offs, and applying hyper-local context. It is the human capability to know exactly when a model's output is structurally flawed, hallucinated, or subtly misleading.

This shift doesn't make deep expertise irrelevant, but it completely upends its purpose. Knowledge is no longer the destination; it is merely the baseline required to exercise taste and critical evaluation.

#### 2. The Structural Fracturing of Team Architecture

This cognitive migration fundamentally breaks the traditional corporate team structure. Most engineering, legal, and financial firms are built as pyramids:

```text
      ▲
     ▲ ▲     Leadership (Direction & Strategy)
    ▲ ▲ ▲    Seniors (System Design & Trade-offs)
   ▲ ▲ ▲ ▲   Mid-Levels (Translation & Delivery)
  ▲ ▲ ▲ ▲ ▲  Juniors (Execution & Boilerplate Work)

```

The model assumes a steady, high-volume flow of routine, entry-level work. Junior operators justify their headcount by churning through boilerplate tasks, and in doing so, they gain the experience — and scar tissue — necessary to build senior judgement over time.

But boilerplate code, routine data transformations, first-pass document drafting, and systematic analysis are precisely the tasks AI automates most effectively. As this entry-level work is compressed out of the ecosystem, the base of the corporate pyramid collapses.

The emerging alternative is a **diamond-shaped structure**:

```text
     ▲
    ▲ ▲    Leadership
   ▲ ▲ ▲   Seniors
   ▲ ▲ ▲   Highly Capable Core (AI-Augmented)
    ▲ ▲    Small Intake Layer
     ▼

```

In the short term, this diamond model is hyper-efficient. Organisations achieve massive output with a lean, senior-heavy core weaponised by AI leverage. But the structure contains a fatal, systemic pipeline problem: *If you optimise away the base of the pyramid, you destroy the mechanism that produces the very senior operators you still rely on for high-stakes, ambiguous work.*

Junior roles are not merely a mechanism for delivery; they are an educational incubator. The industry is currently optimising for immediate quarterly throughput at the direct expense of future systemic resilience.

#### 3. Individual Capability: The Multi-Pillar Model

As team structures warp, the individual model of professional capability must evolve in parallel. For years, the gold standard was the "T-shaped" individual: broad general, cross-domain literacy paired with a single, deep spike of domain expertise.

In an AI-native landscape, both dimensions of the "T" are under severe pressure. General breadth is trivial to simulate because models provide instantaneous, conversational access to adjacent fields of knowledge. Conversely, shallow or highly specialised linear depth is highly vulnerable to automation.

The individual profile must shift from a single "T" to a **multi-pillar model**. True resilience requires multiple deep pillars of distinct domain expertise, bound together by a highly flexible, adaptive layer of systemic understanding.

Human leverage no longer comes from executing a single repetitive skill deeply, but from synthesised interdisciplinary thinking — connecting separate domains where problems remain ambiguous and poorly defined.

---

### The Temporal Friction Matrix

This micro-level friction between individual capability and team structure is driven by a deeper, structural phenomenon: **the divergence of time**.

Time is no longer behaving consistently across modern organisations. Instead, we are operating within an environment where different system layers experience time at fundamentally incompatible rates.

We can map this divergence across four distinct speeds:

```text
   ┌────────────────────────────────────────────────────────┐
   │  TOOLING LAYER (AI models, framework updates)          │  ► FAST TIME (Weeks/Months)
   └────────────────────────────────────────────────────────┘
         ▼
   ┌────────────────────────────────────────────────────────┐
   │  DELIVERY LAYER (Sprints, product iterations)          │  ► MEDIUM TIME (Quarters)
   └────────────────────────────────────────────────────────┘
         ▼
   ┌────────────────────────────────────────────────────────┐
   │  CAPABILITY LAYER (Skill development, career paths)    │  ► SLOW TIME (Years)
   └────────────────────────────────────────────────────────┘
         ▼
   ┌────────────────────────────────────────────────────────┐
   │  STRATEGY LAYER (Corporate planning, governance)       │  ► VERY SLOW TIME (Episodic)
   └────────────────────────────────────────────────────────┘

```

Historically, the temporal distances between these layers were close enough that corporate planning cycles could easily hold the system together. Today, they are violently tearing apart.

This temporal divergence triggers four specific institutional failure modes:

1. **Strategy Drift**: Executive boards formulate strategy on episodic, annualised cadences. But because the tooling layer is evolving on a continuous weekly cycle, the fundamental technical and economic assumptions underpinning a strategy are frequently obsolete before the strategic plan is even printed.

2. **Capability Mismatch**: Organisations spend years cultivating long-term corporate skill sets, only to discover that the specific execution profiles they have built have been entirely automated out of relevance by rapid shifts in the tooling layer.

3. **The Delivery Illusion**: Because AI vastly increases short-term delivery velocity, metric dashboards show green light across the board. Teams are shipping code, copy, and analysis faster than ever before. However, because macro planning cycles are lagging, the organisation is frequently just sprinting in the wrong direction. Speed increases, while structural alignment collapses.

4. **Organisational Lag**: Individual human operators adapt to new tools and cognitive workflows within weeks, but the overarching corporate management, legal, compliance, and compensation structures take quarters or years to adjust. The individual outpaces the system.

To survive this environment, corporate governance must pivot completely from **linear planning to real-time recalibration**. Planning assumes a stable, static target; recalibration assumes the target is moving continuously. The fundamental question of corporate execution is no longer *"Did we deliver the plan?"* but rather *"Are we still aiming at the correct reality?"*

---

### The Macro-Level Realignment

When we take these micro-level phenomena — the hollowing out of cognitive labour, the collapse of junior talent pipelines, and the structural misalignment of corporate time — and extrapolate them across society, we witness the transition from an engineering challenge to a macro-economic crisis.

#### 1. The Concentration of Intelligence

This technological shift doesn't deploy onto a flat, equal world. At the macro-level, machine intelligence is highly localised. The frontier models that dictate global productivity are built by an exceptionally small cluster of private corporate entities based almost exclusively within two sovereign jurisdictions: the United States and China.

These entities are protected by almost insurmountable barriers to entry:

* **Astronomical Capital Requirements**: The financial runway required to train frontier models now scales into billions of pounds.

* **Physical Compute Monopolies**: Access to advanced silicon hardware is gatekept by highly concentrated supply chains and national export controls.

* **Data Hegemony**: Capturing the necessary data loops to continuously improve models requires existing, ubiquitous consumer and corporate platform scale.

If artificial intelligence is becoming the fundamental infrastructure of global knowledge work, then access to frontier capability is no longer an optional technical tool. It is the ultimate determinant of economic sovereignty.

#### 2. Kicking Away the Global Development Ladder

For decades, developing economies — particularly across the Global South — depended on a legible, well-trodden blueprint for growth: industrialisation, followed by service-sector integration into global markets through labour arbitrage. Emerging markets built economic stability by offering lower-cost human capital for call centres, back-office data processing, customer support, routine financial accounting, and software testing.

This entire developmental ladder is being systematically dismantled. Because AI automates these exact transactional knowledge tasks within western and Chinese data centres, the entry-level rungs for developing countries are simply vanishing.

This causes **displacement without transition** on a geopolitical scale. The timeline for economic adaptation is compressed so drastically that national labour markets are being disrupted far faster than domestic institutions can realistically respond. The risk is a brutal bifurcated global economy, where high-value, generative reasoning systems are entirely owned by a handful of corporate boardrooms in San Francisco, Seattle, and Beijing, while developing populations are pushed down into hyper-commoditised, precarious physical labour monitored by automated platforms.

#### 3. From Tool to Interface Control: The Illusion of Democratisation

We hear a constant corporate narrative celebrating the "democratisation of technology". The argument posits that because anyone with an internet connection can prompt an LLM, power has been distributed to the masses.

This is a profound misunderstanding of platform economics. The immediate allure of AI is the intoxicating leverage it offers individual builders — enabling a single engineer to build an app over a weekend. But that leverage is entirely borrowed. It is tethered to closed APIs, opaque model weights, and concentrated cloud infrastructure.

The reality is stark: **You are not using AI. You are renting someone else’s intelligence.**

This represents a radical, predatory shift from an open paradigm to one of *explicitly commercialised access*. For decades, the ultimate beauty of software engineering was that its barriers to entry were practically zero. I am entirely self-taught. When I began, all that was required to learn to build software was an open-source documentation file and an unmetered, low-spec computer. Your productivity was bounded only by your own labour and intellect.

The modern AI landscape turns this open paradigm on its head. Free tiers of frontier models are systematically throttled or degraded under load. Monetisation is shifting aggressively toward metered usage as corporate providers attempt to manufacture profitability out of venture-subsidised growth.

If an engineer attempts to swerve this corporate gatekeeping by running open-weights models locally, the barrier to entry is no longer zero. It requires highly specialised, capital-intensive hardware that features multiple zeroes before the decimal point in the proce tag. Access is democratised only for those who possess the capital to pay the toll.

We are watching a classic platform lock-in strategy unfold at an unprecedented tempo:

1. **Captivate**: Flood the market with cheap, subsidised, hyper-enabling tools to hook the developer ecosystem.

2. **Institutionalise**: Induce deep behavioral and structural dependency within engineering teams, workflows, and enterprise architectures.

3. **Monetise**: Tighten API terms, escalate metering costs, restrict alternatives, and extract maximum rent.

Corey Doctorow gave it a simpler name: enshitification.

As AI systems evolve from surface-level software utilities into the primary interface to all human knowledge and corporate decision-making, the platform owners capture the ultimate control surface of the global economy. The question transforms from *"What can you build?"* to *"What are you permitted to build, and on whose corporate terms?"*

---

### ACE: Asymmetric Corporate Expansion

When micro-level dependency, temporal misalignment, and macro-level resource concentration converge, they trigger a distinct economic dynamic: **ACE — Asymmetric Corporate Expansion**.

* **Asymmetric**: The technological advantages compound unevenly. The gap between the platform owners and the platform dependents widens exponentially rather than linearly.

* **Corporate**: The entities capturing, training, and orchestrating this intelligence are private, multinational corporations — not nation-states, democratic institutions, or public communities.

* **Expansion**: Once an operational lead is secured in foundational capability, it scales instantly and ruthlessly across traditional industry silos, regulatory boundaries, and geographic markets.

The builders of frontier models benefit from an aggressive, self-reinforcing flywheel:

```text
   ┌────────────────────────────────────────────────────────┐
   │                                                        │
   ▼                                                        │
More Model Capability ──► More Users ──► More Live Telemetry│
         │                                                  │
         ▼                                                  │
More Capital Allocation ──► More Compute Procurement ───────┘

```

This dynamic is structurally different from previous technology waves. First-mover advantage has always existed, but AI changes the velocity at which that advantage compounds. A lead in model capability translates instantly into a lead in market capitalisation, which translates directly into the exclusive acquisition of scarce compute hardware and elite talent. The lead compounds faster than competitors can pivot, faster than markets can rebalance, and faster than democratic regulators can realistically draft a response.

We are actively designing a future where a handful of private boardrooms dictate global productivity. These entities are no longer mere participants within a market system; they are shaping the system itself. They dictate what is technically possible, what is socially permitted, and what remains economically viable. They are the new, permanent infrastructure of thought.

It is tempting to look at these massive corporate actors and buy into their PR messaging of "ethical alignment" and public interest, but that alignment is a myth when exposed to market realities. Look closely at the frontier leaders: they openly debate safety, yet diverge wildly on military usage, national intelligence partnerships, and deployment constraints. These differences reflect funding structures, governance struggles, and legislative leverage. They are hyper-competitive entities operating within ruthless economic frameworks, and they are not insulated from the demands of venture capital or state geopolitical interests.

The existential risk of AI is completely misunderstood by mainstream commentary. It is routinely framed as science fiction — autonomous, runaway systems; sentient synthetic overlords; Cyberdyne with cleaner branding. This doomerism is a brilliant corporate distraction from the immediate reality.

> We do not require AI to become sentient to create a systemic crisis; we merely need it to remain concentrated and shaped by raw commercial incentives.

AI systems are deeply subjective. They reflect the curated data they are trained on, the commercial objectives they are optimised for, and the strategic constraints imposed by their corporate owners. The interfaces we interact with are not raw, objective intelligence; they are deliberately steered, guided, and fenced products.

Occasionally, the curtain slips. Leaks and reverse engineering reveal the dense layers of system prompts, heuristics, and hidden policies sandwiched between the user and the model weights. These guardrails reflect market incentives. If those incentives value engagement over truth, breakneck velocity over accuracy, or corporate dominance over the public good, those priorities become permanently hardcoded into the infrastructure of global information.

At that point, it is no longer "just" technology. It’s real-world influence, embedded in software.

---

### The Narrow Path to Prosperity

What I see at the heart of this entire trajectory is an architecture profoundly out of balance. The core components of our technological transition are fundamentally misaligned:

* **Capability** is accelerating exponentially.

* **Agency** is concentrating corporately.

* **Speed** is increasing relentlessly.

* **Time** for structural adaptation is shrinking drastically.

This architecture is inherently unstable. It breeds fragile socio-economic environments, highly skewed incentives, and completely misaligned, poorly distributed risks.

The concept of Mutually Assured Prosperity (MAP) is an attractive corporate talking point, implying that as technological capability scales, its dividends naturally distribute. History says otherwise. Left unchecked, the structural incentives of the AI market resolve towards monopoly, deeper asymmetry, and speed without systemic guardrails.

Mutually Assured Prosperity is not a destination we can arrive at by default. If we genuinely wish to steer away from corporate hegemony and toward shared prosperity, we must consciously rewrite the incentives across all four dynamics of the temporal matrix. We must stop treating AI as a suite of software applications and start managing it as critical civil infrastructure.

#### 1. Capability Must Be Decentralised

We must move entirely beyond the model of metered, proprietary APIs managed by a closed cartel. This demands serious sovereign and cooperative international investment in open-weights models and, crucially, the public compute infrastructure required to host and run them. A significant portion of this must happen at the national and cooperative, international level if we want to avoid corporate hegemony. If open alternatives lack the raw hardware to execute at scale without paying a permanent toll to the tech giants, decentralisation is dead on arrival.

#### 2. Agency Must Be Reclaimed

We cannot audit or trust systems we are legally or technically barred from inspecting. True agency requires absolute, uncompromised transparency into how these models are steered. This means demanding public, verifiable documentation of the system prompts, safety heuristics, filtering layers, and training criteria that sit between human inquiry and model weights.

#### 3. Speed Must Be Matched by Structural Resilience

The current venture-backed landscape heavily penalises caution, rewarding those who ship features faster than they can be safely understood or moderated. We must introduce structural counterweights — whether through strict legislative liability for systemic algorithmic failures, or collective, binding professional standards for engineers — that penalise platforms when errors scale faster than human systems can remediate them.

#### 4. Time Must Be Intentionally Carved Out

Human labour markets, legal structures, and psychological frameworks cannot absorb immediate, unbuffered displacement without total systemic failure. We must design intentional economic buffer zones. This requires proactive policy interventions that allow our social institutions the temporal space to stabilise, adapt, and transition people before entry-level pathways are entirely erased. Failure to do so will spark social shocks of a wholly different order to any we have navigated before.

---

### Conclusion: The Core Question

None of this structural re-engineering is currently taking place.

The reason is simple: our current economic architecture rewards the exact opposite behaviours. The market systematically worships velocity over safety, explosive growth over equilibrium, and vendor lock-in over distributed capability.

Even when the architecture of the problem is diagnosed with perfect clarity, changing its momentum requires introducing intentional, coordinated friction across corporate, industrial, and national boundaries. And these entities are structurally, financially, and geopolitically disincentivised to cooperate.

The path to a stable, prosperous, and truly distributed future exists, but it is exceptionally narrow.

It requires a profound, deliberate willingness to sacrifice short-term market dominance and quarterly equity returns in exchange for long-term systemic stability. 

It means legally defining foundational machine intelligence as a public utility rather than a proprietary corporate control surface.

Sadly, that is not how dominant economic systems evolve by default.

Which brings us back to the foundational question of this entire piece:

> Whose future is it anyway?

The answer is not an unalterable historical certainty, but right now, as the code is being committed and the compute clusters are being provisioned, the future is not being evenly shared. Not today, and most definitely not by default tomorrow.

The future is not a destination that miraculously arrives out of thin air — it is designed, funded, and deployed.

The real question is no longer whether AI will change our world; that battle is over. It already has.

The ultimate question is whether we possess the collective will to exert intentional pressure and structural friction on how and how fast that change plays out.

If we choose to remain passive, compliant participants, the final architecture won't be neutral — it will simply reflect the raw, unchecked incentives of the forces that moved the fastest.

And the corporations that owned them.

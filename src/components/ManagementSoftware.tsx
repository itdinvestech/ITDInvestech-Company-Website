import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { GraduationCap, Stethoscope, Store, Building2, Check, ArrowRight, Users, BookOpen, Calendar, MessageSquare, FileText, DollarSign, ClipboardList, BarChart3, Package, ShoppingCart, TrendingUp, Home, Key, Wrench, Receipt, UserSearch, Briefcase, Target, ClipboardCheck, Sparkles, FileSearch, ExternalLink } from "lucide-react"
import { useState } from "react"
import { scrollToSection } from "@/lib/utils"
import { SitePreview } from "@/components/SitePreview"
import { LoopCarousel } from "@/components/LoopCarousel"

export function ManagementSoftware() {
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null)

  const solutions = [
    {
      icon: GraduationCap,
      title: "AI-Powered LMS",
      subtitle: "Quizzes, lectures, analysis, and video — inside the course",
      description: "The LMS is where our AI is most visible. It generates quizzes for students, authors lectures for teaching staff, returns weakness and improvement reports, fetches the right videos, and hands packs to rendering software — while still running enrolment, grades, and the school.",
      longDescription: "This is a full school and LMS platform with AI sitting in the teaching loop. Lecturers start from a topic or week plan; the system drafts assessments and lectures, maps student gaps after they write, pulls supporting video, and can publish into production/rendering tools. Administration — students, attendance, fees, parent comms — stays in the same product.",
      benefits: [
        "AI-generated quizzes mapped to lesson outcomes",
        "Lecture drafts, slides, and student recaps from a brief",
        "Analysis reports on weaknesses and where to improve",
        "Topic-matched videos fetched onto the lesson timeline",
        "Exports into rendering and production software",
        "Still a full SIS: enrolment, grades, attendance, fees"
      ],
      features: [
        {
          icon: Sparkles,
          name: "AI quiz generation",
          details: "Generate graded quizzes and practice sets from a lecture, chapter, or outcome. Lecturers review, edit, and publish. Items stay mapped to the week so analysis later is useful."
        },
        {
          icon: BookOpen,
          name: "AI lecture authoring",
          details: "Turn a brief into a structured lecture: outline, talking points, slides, and student-facing summaries. Teaching staff stay in control of what ships."
        },
        {
          icon: BarChart3,
          name: "Weakness & improvement reports",
          details: "After assessments, AI returns class heatmaps and per-student reports: where they struggle, what to practise next, and which follow-up quiz to assign."
        },
        {
          icon: FileText,
          name: "Video fetching for lessons",
          details: "Fetch supporting and lecture videos for students and lecturers, filtered by topic and length, then pin them on the lesson instead of a shared drive."
        },
        {
          icon: Users,
          name: "Student Information System",
          details: "Comprehensive student profiles including personal information, academic history, medical records, emergency contacts, photographs, enrollment status, and behavioral tracking. Import and export student data with ease."
        },
        {
          icon: BookOpen,
          name: "Grade & Assessment Management",
          details: "Automated grading system with customizable grading scales, report card generation, progress tracking, continuous assessment, exam management, standardized test score recording, and grade analytics with parent portal access."
        },
        {
          icon: Calendar,
          name: "Attendance & Scheduling",
          details: "Real-time attendance tracking with biometric integration support, class timetable management, period-wise attendance, leave management, automated absence notifications to parents via SMS/email, and attendance analytics."
        },
        {
          icon: MessageSquare,
          name: "Parent Communication Portal",
          details: "Dedicated parent portal with two-way messaging, event notifications, academic progress reports, homework assignments, fee payment tracking, online fee payment integration, school announcements, and photo gallery access."
        },
        {
          icon: FileText,
          name: "Staff & rendering pipeline",
          details: "Teacher and staff records, plus a publish path so generated lectures and media can move into rendering software and stay in sync with the LMS."
        },
        {
          icon: DollarSign,
          name: "Fee Management",
          details: "Comprehensive fee collection system with online payment gateway integration, fee structure management, installment tracking, receipts generation, fee defaulter reports, and automated reminder notifications."
        }
      ],
      color: "from-blue-500/20 to-indigo-500/20",
      accentColor: "blue",
      url: "https://lms-demo.itdinvestech.co.za/",
      image: "/previews/lms.png",
    },
    {
      icon: Stethoscope,
      title: "Medical Practice Management Software",
      subtitle: "Complete Healthcare Practice Solution",
      description: "A live practice website and patient platform — booking, records, and the public face of the clinic. See it in production for Dr Metuse in Sandton, and the same stack behind other doctors’ offices.",
      longDescription: "Our Medical Practice Management Software is specifically designed for healthcare professionals who want to focus on patient care rather than administrative tasks. Successfully implemented across multiple medical practices, our system is compliant with healthcare regulations and provides secure, efficient management of all practice operations.",
      benefits: [
        "Reduce patient wait times with efficient appointment scheduling",
        "Eliminate paper records with secure digital health records",
        "Improve revenue cycle with automated billing and claims processing",
        "Enhance patient satisfaction with online booking and portal access",
        "Ensure compliance with healthcare data protection regulations"
      ],
      features: [
        {
          icon: ClipboardList,
          name: "Electronic Health Records (EHR)",
          details: "Complete digital patient records including medical history, diagnoses, treatment plans, medications, allergies, immunizations, lab results, imaging reports, vital signs tracking, and progress notes with version history."
        },
        {
          icon: Calendar,
          name: "Appointment Management",
          details: "Intelligent scheduling system with drag-and-drop calendar, recurring appointments, automated SMS/email reminders, waitlist management, online booking portal, multi-provider calendars, and no-show tracking."
        },
        {
          icon: DollarSign,
          name: "Billing & Insurance",
          details: "Comprehensive billing system with automated invoicing, insurance claims submission, payment tracking, co-pay collection, claim status tracking, rejection management, financial reporting, and revenue analytics."
        },
        {
          icon: FileText,
          name: "Prescription Management",
          details: "Digital prescription creation with drug database integration, dosage calculators, drug interaction alerts, allergy warnings, prescription history, refill management, and direct pharmacy integration for e-prescribing."
        },
        {
          icon: Users,
          name: "Patient Portal",
          details: "Secure patient portal for viewing medical records, lab results, prescription history, appointment booking, bill payment, messaging with healthcare providers, downloading reports, and health information access."
        },
        {
          icon: BarChart3,
          name: "Reporting & Analytics",
          details: "Comprehensive reporting suite including patient demographics, appointment statistics, revenue reports, insurance claims analysis, provider productivity, practice performance metrics, and custom report builder."
        }
      ],
      color: "from-green-500/20 to-emerald-500/20",
      accentColor: "green",
      url: "https://drmetuseplasticsurgeon.co.za/",
      image: "/previews/medical.png",
    },
    {
      icon: Store,
      title: "Store & Inventory Management System",
      subtitle: "Complete Retail Operations Platform",
      description: "Take control of your retail operations with our powerful inventory and store management system. From small boutiques to multi-location chains, our solution scales with your business needs.",
      longDescription: "Our Store & Inventory Management System provides end-to-end control over your retail operations. Whether you run a single store or manage multiple locations, our system helps you track inventory, process sales, manage suppliers, and gain valuable insights into your business performance. Built to handle high-volume transactions while maintaining accuracy.",
      benefits: [
        "Never run out of stock with automated reorder alerts",
        "Reduce shrinkage and theft with accurate inventory tracking",
        "Speed up checkout and improve customer experience",
        "Make data-driven decisions with comprehensive sales analytics",
        "Manage multiple store locations from a single dashboard"
      ],
      features: [
        {
          icon: Package,
          name: "Real-Time Inventory Tracking",
          details: "Multi-location stock monitoring with real-time updates, automated reorder points, low stock alerts, barcode/QR code scanning, batch tracking, serial number management, expiry date tracking, and inventory valuation reports."
        },
        {
          icon: ShoppingCart,
          name: "Point of Sale (POS)",
          details: "Fast and intuitive checkout interface, multiple payment methods (cash, card, mobile), split payments, receipt printing/email, refunds and exchanges, customer loyalty programs, discount management, and offline mode capability."
        },
        {
          icon: Users,
          name: "Supplier & Purchase Management",
          details: "Complete vendor database with contact details, purchase order creation and approval workflow, delivery tracking, goods received notes, supplier performance metrics, payment tracking, and vendor statement reconciliation."
        },
        {
          icon: TrendingUp,
          name: "Sales Analytics & Reporting",
          details: "Comprehensive dashboards with real-time sales data, profit margin analysis, product performance reports, bestseller and slow-moving item identification, sales trend forecasting, customer purchase patterns, and customizable reports."
        },
        {
          icon: Store,
          name: "Multi-Store Management",
          details: "Centralized inventory control across locations, inter-store transfers, location-wise sales reports, unified customer database, role-based access for each store, consolidated financial reporting, and real-time synchronization."
        },
        {
          icon: BarChart3,
          name: "Customer Management",
          details: "Customer database with purchase history, loyalty points tracking, targeted promotions, customer segmentation, purchase analytics, credit management for B2B customers, and customer feedback collection."
        }
      ],
      color: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple"
    },
    {
      icon: Building2,
      title: "Real Estate Management Software",
      subtitle: "Complete Property Management Solution",
      description: "Simplify property management with our comprehensive solution for real estate agencies, landlords, property managers, and real estate investors. Manage properties, tenants, leases, and finances all in one platform.",
      longDescription: "Our Real Estate Management Software streamlines every aspect of property management from listing to maintenance. Whether you're managing residential properties, commercial spaces, or mixed portfolios, our system provides the tools you need to maximize occupancy, ensure timely rent collection, and maintain properties efficiently while keeping both property owners and tenants satisfied.",
      benefits: [
        "Maximize occupancy with efficient property marketing and tenant placement",
        "Automate rent collection and reduce late payments",
        "Track maintenance issues and ensure timely resolution",
        "Generate detailed financial reports for property owners",
        "Manage multiple properties and portfolios from one dashboard"
      ],
      features: [
        {
          icon: Home,
          name: "Property Portfolio Management",
          details: "Complete property database with detailed profiles, photo galleries, floor plans, property documents, ownership details, valuation history, market analysis, vacancy tracking, property comparison tools, and document management."
        },
        {
          icon: Key,
          name: "Tenant & Lease Management",
          details: "Tenant application and screening, lease agreement creation and e-signatures, rent amount and payment schedule tracking, lease renewal reminders, security deposit management, tenant move-in/move-out checklists, and tenant history records."
        },
        {
          icon: Wrench,
          name: "Maintenance & Work Orders",
          details: "Online maintenance request submission, work order creation and assignment, contractor database and scheduling, preventive maintenance scheduling, maintenance cost tracking, vendor invoice management, issue priority levels, and completion tracking."
        },
        {
          icon: Receipt,
          name: "Financial Management",
          details: "Automated rent collection with payment reminders, online payment gateway integration, late fee calculation, expense tracking by property, vendor payment management, owner disbursements, profit and loss reports, tax document generation, and budget forecasting."
        },
        {
          icon: Users,
          name: "Tenant Portal",
          details: "Secure tenant login with online rent payment, maintenance request submission, lease document access, payment history viewing, community announcements, messaging with property manager, move-out notice submission, and renewal requests."
        },
        {
          icon: BarChart3,
          name: "Reporting & Analytics",
          details: "Occupancy rates and trends, rent roll reports, property income statements, expense analysis, maintenance cost tracking, tenant turnover analytics, property performance comparisons, owner statements, and custom report generation."
        }
      ],
      color: "from-orange-500/20 to-red-500/20",
      accentColor: "orange"
    },
    {
      icon: UserSearch,
      title: "SearchBox — Recruitment & Talent",
      subtitle: "Live hiring platform · AI CV scoring",
      description: "SearchBox is live: candidates, recruiters, and hiring managers on one workspace. AI reviews CVs, rewrites them for an advert, and screens applicants — while people still run the pipeline.",
      longDescription: "Our Recruitment & Talent Platform uses AI to take the heavy lifting out of hiring. Upload CVs and the system scores them against role requirements, ranks candidates by fit, and surfaces the strongest matches with clear explanations. Recruiters still stay in control — posting roles or activities, reviewing AI shortlists, scheduling interviews, and moving candidates through structured pipelines from first application to signed offer.",
      benefits: [
        "Score and rank CVs automatically against each role’s requirements",
        "Cut screening time with AI shortlists and fit explanations you can trust",
        "Match candidates to jobs using skills, experience, and availability signals",
        "Reduce bias and missed talent with consistent, data-driven evaluation",
        "Staff permanent roles, projects, and short-term activities from one AI-assisted pipeline"
      ],
      features: [
        {
          icon: Sparkles,
          name: "AI CV Scoring & Ranking",
          details: "Automatically analyse uploaded CVs and portfolios against job criteria, score candidates on skills, experience, and role fit, highlight strengths and gaps, and generate ranked shortlists so recruiters focus on the strongest applicants first."
        },
        {
          icon: FileSearch,
          name: "Intelligent CV Parsing",
          details: "Extract skills, work history, education, certifications, and contact details from CVs in seconds, normalise profiles into a searchable talent database, and keep candidate records accurate without manual data entry."
        },
        {
          icon: Target,
          name: "AI Candidate Matching",
          details: "Match candidates to openings using AI-driven skills and experience signals, with ranked recommendations, match-score explanations, suggested candidates for each posting, and recommended openings for people already in your talent pool."
        },
        {
          icon: Briefcase,
          name: "Job & Activity Postings",
          details: "Create postings for permanent roles, contract work, projects, events, and short-term activities with role requirements that feed the AI scoring engine, screening questions, salary or rate ranges, deadlines, and reusable templates."
        },
        {
          icon: ClipboardCheck,
          name: "Application Tracking",
          details: "Configurable hiring pipelines with drag-and-drop stages, AI-assisted screening scores alongside recruiter feedback, interview scorecards, collaborative notes, rejection and offer workflows, and full activity history per candidate."
        },
        {
          icon: BarChart3,
          name: "Recruiter Dashboards & Analytics",
          details: "Dashboards for open roles, pipeline health, time-to-hire, AI screening throughput, source effectiveness, conversion by stage, recruiter performance, and exportable reports for clients and stakeholders."
        }
      ],
      color: "from-cyan-500/20 to-teal-500/20",
      accentColor: "cyan",
      url: "https://searchbox.itdinvestech.co.za/",
      image: "/previews/searchbox.png",
    },
  ]

  return (
    <section id="solutions" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-primary/[0.04]" />
        <div className="absolute inset-0 grid-pattern opacity-20 dark:opacity-10" />
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="section-intro mb-10 sm:mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            What we offer
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Platforms we ship and host
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            These are products in production. The LMS, the clinic site, and SearchBox are live —
            open a preview to visit them.
          </p>
        </div>

        <LoopCarousel speed={28} gap={24}>
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card
                key={solution.title}
                className="group relative flex h-full flex-col overflow-hidden border border-border/80 bg-card transition-colors duration-300 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <CardHeader className="relative z-10 flex-1 space-y-4 p-5 sm:p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base transition-colors group-hover:text-primary sm:text-lg">
                      {solution.title}
                    </CardTitle>
                    <Badge variant="secondary" className="mt-2 text-xs font-normal">
                      {solution.subtitle}
                    </Badge>
                  </div>
                  <SitePreview
                    title={solution.title}
                    url={'url' in solution ? solution.url : undefined}
                    image={'image' in solution ? solution.image : undefined}
                    live={'live' in solution ? Boolean(solution.live) : false}
                  />
                  <CardDescription className="line-clamp-3 text-sm leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 pt-0 pb-5 sm:pb-6">
                  <Button
                    onClick={() => setSelectedSolution(index)}
                    className="w-full group/btn"
                    size="sm"
                  >
                    More Info
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </LoopCarousel>

        <Dialog open={selectedSolution !== null} onOpenChange={() => setSelectedSolution(null)}>
          <DialogContent>
            {selectedSolution !== null && (
              <>
                <DialogHeader>
                  <div className="mb-3 flex items-start gap-3 sm:mb-4 sm:items-center sm:gap-4">
                    {(() => {
                      const Icon = solutions[selectedSolution].icon
                      return (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm sm:h-14 sm:w-14">
                          <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                        </div>
                      )
                    })()}
                    <div className="min-w-0 pr-6 text-left">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {solutions[selectedSolution].subtitle}
                      </Badge>
                      <DialogTitle className="text-xl text-foreground sm:text-2xl lg:text-3xl">
                        {solutions[selectedSolution].title}
                      </DialogTitle>
                    </div>
                  </div>
                  <p className="text-left text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {solutions[selectedSolution].description}
                  </p>
                  {'url' in solutions[selectedSolution] && solutions[selectedSolution].url && (
                    <div className="mt-4">
                      <SitePreview
                        title={solutions[selectedSolution].title}
                        url={solutions[selectedSolution].url}
                        image={'image' in solutions[selectedSolution] ? solutions[selectedSolution].image : undefined}
                        live={'live' in solutions[selectedSolution] ? Boolean(solutions[selectedSolution].live) : false}
                      />
                    </div>
                  )}
                  <p className="mt-2 text-left text-sm leading-relaxed text-foreground/90 sm:text-base">
                    {solutions[selectedSolution].longDescription}
                  </p>
                </DialogHeader>

                <div className="mt-4 sm:mt-6">
                  <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:mb-8 sm:p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary sm:mb-4 sm:text-xl">
                      <Check className="h-5 w-5 shrink-0" />
                      Key Benefits
                    </h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {solutions[selectedSolution].benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                          <span className="text-sm leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h3 className="mb-4 text-lg font-bold sm:mb-6 sm:text-xl">Comprehensive Features</h3>
                    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                      {solutions[selectedSolution].features.map((feature) => {
                        const FeatureIcon = feature.icon
                        return (
                          <div
                            key={feature.name}
                            className="rounded-xl border border-border bg-card p-4"
                          >
                            <div className="mb-2 flex items-center gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground sm:h-10 sm:w-10">
                                <FeatureIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                              </div>
                              <h4 className="text-sm font-semibold">{feature.name}</h4>
                            </div>
                            <p className="text-xs leading-relaxed text-muted-foreground">
                              {feature.details}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row sm:pt-4">
                    {'url' in solutions[selectedSolution] && solutions[selectedSolution].url && (
                      <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                        <a
                          href={solutions[selectedSolution].url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit live site
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    <Button
                      onClick={() => {
                        setSelectedSolution(null)
                        scrollToSection('contact')
                      }}
                      size="lg"
                      className="w-full group/btn sm:w-auto"
                    >
                      Request a Demo
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}


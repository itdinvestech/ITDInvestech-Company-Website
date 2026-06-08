import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { GraduationCap, Stethoscope, Store, Building2, Check, ArrowRight, Users, BookOpen, Calendar, MessageSquare, FileText, DollarSign, ClipboardList, BarChart3, Package, ShoppingCart, TrendingUp, Home, Key, Wrench, Receipt } from "lucide-react"
import { useState } from "react"

export function ManagementSoftware() {
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null)

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const headerOffset = 64 // Height of sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const solutions = [
    {
      icon: GraduationCap,
      title: "School Management System",
      subtitle: "Complete Educational Institution Management",
      description: "Transform your educational institution with our comprehensive school management platform. Built from real-world experience working with multiple schools, our system handles everything from student enrollment to graduation.",
      longDescription: "Our School Management System is a complete end-to-end solution designed to streamline all aspects of school administration. We've successfully deployed this system across multiple educational institutions, helping them modernize their operations, improve parent-teacher communication, and enhance student outcomes through data-driven insights.",
      benefits: [
        "Reduce administrative workload by 60% with automated processes",
        "Improve parent engagement with real-time updates and communication",
        "Track student performance and identify areas needing attention",
        "Generate comprehensive reports for stakeholders in seconds",
        "Secure cloud-based system accessible from anywhere, anytime"
      ],
      features: [
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
          name: "Staff Management",
          details: "Complete teacher and staff management including profiles, qualifications, assignments, subject allocation, performance tracking, leave management, payroll integration, and attendance monitoring."
        },
        {
          icon: DollarSign,
          name: "Fee Management",
          details: "Comprehensive fee collection system with online payment gateway integration, fee structure management, installment tracking, receipts generation, fee defaulter reports, and automated reminder notifications."
        }
      ],
      color: "from-blue-500/20 to-indigo-500/20",
      accentColor: "blue"
    },
    {
      icon: Stethoscope,
      title: "Medical Practice Management Software",
      subtitle: "Complete Healthcare Practice Solution",
      description: "Streamline your medical practice with our proven software solution, successfully deployed across multiple doctors' offices and clinics. Manage patients, appointments, billing, and medical records all in one secure platform.",
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
      accentColor: "green"
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
    }
  ]

  return (
    <section id="solutions" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Vibrant animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/80 via-purple-100/60 to-pink-100/80 dark:from-indigo-950/30 dark:via-purple-950/20 dark:to-pink-950/30" />
        <div className="absolute inset-0 mesh-gradient-subtle opacity-60" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Dynamic gradient orbs */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/25 via-indigo-400/15 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 via-pink-400/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Floating geometric accents */}
        <div className="absolute top-40 right-1/4 w-40 h-40 border border-primary/10 rounded-full animate-float-slow" />
        <div className="absolute bottom-40 left-1/3 w-32 h-32 border border-purple-500/10 rotate-45 animate-float-slower" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <Badge className="mb-4 bg-primary text-primary-foreground px-6 py-2 text-base">
            ⭐ Our Core Specialization
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Management Software <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We specialize in creating powerful, custom management software tailored to your industry's unique needs. 
            Our proven solutions are already transforming businesses across education, healthcare, retail, and real estate sectors.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card 
                key={index} 
                className="bg-white border-2 border-blue-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 overflow-hidden group flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <CardHeader className="relative z-10 text-center flex-1">
                  <div className="relative inline-block mx-auto mb-4">
                    <div className="absolute inset-0 bg-blue-400/40 blur-3xl rounded-full animate-pulse-slow" />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center border-2 border-blue-400 transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                    {solution.title}
                  </CardTitle>
                  <Badge variant="secondary" className="mb-3 text-xs">{solution.subtitle}</Badge>
                  <CardDescription className="text-sm leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0 pb-6">
                  <Button 
                    onClick={() => setSelectedSolution(index)}
                    className="w-full group/btn bg-blue-600 hover:bg-blue-700"
                    size="sm"
                  >
                    More Info
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Modal Dialog */}
        <Dialog open={selectedSolution !== null} onOpenChange={() => setSelectedSolution(null)}>
          <DialogContent className="bg-white">
            {selectedSolution !== null && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {(() => {
                      const Icon = solutions[selectedSolution].icon
                      return (
                        <div className="relative">
                          <div className="absolute inset-0 bg-blue-400/40 blur-3xl rounded-full" />
                          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center border-2 border-blue-400 shadow-lg">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      )
                    })()}
                    <div>
                      <Badge variant="secondary" className="mb-2">{solutions[selectedSolution].subtitle}</Badge>
                      <DialogTitle className="text-3xl text-blue-600">{solutions[selectedSolution].title}</DialogTitle>
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {solutions[selectedSolution].description}
                  </p>
                  <p className="text-base text-foreground/80 leading-relaxed mt-2">
                    {solutions[selectedSolution].longDescription}
                  </p>
                </DialogHeader>

                <div className="mt-6">
                  {/* Key Benefits */}
                  <div className="mb-8 p-6 rounded-xl bg-blue-50 border-2 border-blue-200">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-600">
                      <Check className="h-5 w-5 text-blue-600" />
                      Key Benefits
                    </h3>
                    <ul className="grid gap-3 md:grid-cols-2">
                      {solutions[selectedSolution].benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features Grid */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-6">Comprehensive Features</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {solutions[selectedSolution].features.map((feature, i) => {
                        const FeatureIcon = feature.icon
                        return (
                          <div 
                            key={i}
                            className="p-4 rounded-xl bg-white border-2 border-blue-200"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                                <FeatureIcon className="h-5 w-5 text-white" />
                              </div>
                              <h4 className="font-semibold text-sm">
                                {feature.name}
                              </h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {feature.details}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex justify-center pt-4">
                    <Button 
                      onClick={() => {
                        setSelectedSolution(null)
                        scrollToContact()
                      }}
                      size="lg"
                      className="group/btn"
                    >
                      Request a Demo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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


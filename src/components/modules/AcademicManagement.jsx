import AcedemicImg from "../../assets/academic-structure.png";


function AcademicStructure() {
  return (        
  <>

{/* HERO SECTION */}
<section className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
  <div className="max-w-7xl mx-auto px-6 py-20">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div>
        <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
          Academic Structure Module
        </span>

        <h1 className="text-5xl font-bold mt-6 leading-tight">
          Manage Classes & Sections
          <span className="block text-indigo-300">
            From One Dashboard
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-300 leading-8">
          Create and manage classes, sections, student allocation,
          teacher assignments and academic sessions from a centralized
          platform.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold">
            Request Demo
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-xl">
            Explore Features
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-slate-400">Classes</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-slate-400">Sections</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">1000+</h3>
            <p className="text-slate-400">Students</p>
          </div>
        </div>
      </div>

      <div className="mt-10   w-full flex justify-center">
        <img
          src={AcedemicImg}
          alt="Academic Dashboard"
          className="rounded-3xl shadow-2xl"
        />
      </div>

    </div>
  </div>
</section>
{/* FEATURES */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-slate-900">
        Academic Structure Features
      </h2>

      <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
        Manage classes, sections, teachers and student allocation
        with a centralized academic structure system.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-slate-50 p-8 rounded-3xl border">
        <h3 className="font-bold text-xl mb-3">
          Class Management
        </h3>
        <p className="text-slate-600">
          Create and organize classes for every academic session.
        </p>
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl border">
        <h3 className="font-bold text-xl mb-3">
          Section Management
        </h3>
        <p className="text-slate-600">
          Add, update and remove sections anytime.
        </p>
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl border">
        <h3 className="font-bold text-xl mb-3">
          Teacher Assignment
        </h3>
        <p className="text-slate-600">
          Assign class teachers and section in-charges.
        </p>
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl border">
        <h3 className="font-bold text-xl mb-3">
          Student Allocation
        </h3>
        <p className="text-slate-600">
          Manage section-wise student distribution.
        </p>
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl border">
        <h3 className="font-bold text-xl mb-3">
          Session Sync
        </h3>
        <p className="text-slate-600">
          Copy previous session structure instantly.
        </p>
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl border">
        <h3 className="font-bold text-xl mb-3">
          Search & Filter
        </h3>
        <p className="text-slate-600">
          Find classes and sections quickly.
        </p>
      </div>

    </div>
  </div>
</section>
{/* OVERVIEW */}
<section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <h2 className="text-4xl font-bold mb-6">
          Complete Academic Structure Management
        </h2>

        <p className="text-slate-600 leading-8">
          Academic Structure Management enables institutions
          to create and maintain classes, sections and
          academic hierarchy through a centralized dashboard.
        </p>

        <p className="text-slate-600 leading-8 mt-4">
          Administrators can assign teachers, manage
          student allocations, synchronize sessions and
          monitor capacity utilization efficiently.
        </p>
      </div>

      <div>
        <img
          src="/images/academic-dashboard.png"
          alt=""
          className="rounded-3xl shadow-xl"
        />
      </div>

    </div>

  </div>
</section>
{/* BENEFITS */}
<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">
        Benefits
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="border rounded-3xl p-8">
        <h3 className="font-bold text-xl mb-3">
          Better Organization
        </h3>
        <p>
          Maintain a clear academic hierarchy.
        </p>
      </div>

      <div className="border rounded-3xl p-8">
        <h3 className="font-bold text-xl mb-3">
          Centralized Control
        </h3>
        <p>
          Manage everything from one dashboard.
        </p>
      </div>

      <div className="border rounded-3xl p-8">
        <h3 className="font-bold text-xl mb-3">
          Faster Administration
        </h3>
        <p>
          Reduce manual management efforts.
        </p>
      </div>

      <div className="border rounded-3xl p-8">
        <h3 className="font-bold text-xl mb-3">
          Accurate Allocation
        </h3>
        <p>
          Assign teachers and students effectively.
        </p>
      </div>

      <div className="border rounded-3xl p-8">
        <h3 className="font-bold text-xl mb-3">
          Session Continuity
        </h3>
        <p>
          Sync academic structure across sessions.
        </p>
      </div>

      <div className="border rounded-3xl p-8">
        <h3 className="font-bold text-xl mb-3">
          Capacity Tracking
        </h3>
        <p>
          Monitor section occupancy in real time.
        </p>
      </div>

    </div>

  </div>

</section>
{/* WORKFLOW */}
<section className="py-20 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-center text-4xl font-bold mb-16">
      Academic Workflow
    </h2>

    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

      {[
        "Create Session",
        "Create Classes",
        "Create Sections",
        "Assign Teachers",
        "Allocate Students",
        "Monitor Capacity",
      ].map((item) => (
        <div
          key={item}
          className="bg-white border rounded-3xl p-6 text-center shadow-sm"
        >
          <h3 className="font-semibold">
            {item}
          </h3>
        </div>
      ))}

    </div>

  </div>

</section>
{/* STATS */}
<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-indigo-50 p-8 rounded-3xl text-center">
        <h3 className="text-5xl font-bold text-indigo-600">
          17
        </h3>
        <p className="mt-2">
          Total Classes
        </p>
      </div>

      <div className="bg-indigo-50 p-8 rounded-3xl text-center">
        <h3 className="text-5xl font-bold text-indigo-600">
          42
        </h3>
        <p className="mt-2">
          Total Sections
        </p>
      </div>

      <div className="bg-indigo-50 p-8 rounded-3xl text-center">
        <h3 className="text-5xl font-bold text-indigo-600">
          38
        </h3>
        <p className="mt-2">
          Teachers Assigned
        </p>
      </div>

      <div className="bg-indigo-50 p-8 rounded-3xl text-center">
        <h3 className="text-5xl font-bold text-indigo-600">
          1250
        </h3>
        <p className="mt-2">
          Students Enrolled
        </p>
      </div>

    </div>

  </div>

</section>
{/* CTA */}
<section className="py-20 bg-slate-900 text-white">

  <div className="max-w-4xl mx-auto text-center px-6">

    <h2 className="text-5xl font-bold">
      Ready To Streamline Academic Structure Management?
    </h2>

    <p className="mt-6 text-slate-300 text-lg">
      Manage classes, sections, teachers and students
      through a single academic dashboard.
    </p>

    <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl font-semibold">
      Request Demo
    </button>

  </div>

</section>
  </>
  )
  }
  
  export default AcademicStructure;

import { useEffect } from "react";
import StudentOverviewImg from "../../assets/StudentManagement.png";
function StudentManagement() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
                Student Management Module
              </span>

              <h1 className="text-5xl font-bold mt-6 leading-tight">
                Manage Students &
                <span className="block text-indigo-300">
                  Academic Progress
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-300 leading-8">
                Manage student admissions, registrations, promotions,
                class allocation, alumni records and dropout tracking
                from a centralized dashboard.
              </p>

              <div className="flex gap-4 mt-8">
                <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold">
                  Request Demo
                </button>

                <button className="border border-white/20 px-6 py-3 rounded-xl">
                  Explore Features
                </button>
              </div>

              <div className="grid grid-cols-4 gap-6 mt-10">
                <div>
                  <h3 className="text-3xl font-bold">1250+</h3>
                  <p className="text-slate-400">Students</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">17</h3>
                  <p className="text-slate-400">Classes</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">52</h3>
                  <p className="text-slate-400">Alumni</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">98%</h3>
                  <p className="text-slate-400">Retention</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={StudentOverviewImg}
                alt="Student Management"
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
              Student Management Features
            </h2>

            <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
              Maintain complete student records, manage promotions,
              alumni tracking and perform bulk student operations
              efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-slate-50 p-8 rounded-3xl border">
              <h3 className="font-bold text-xl mb-3">
                Student Registration
              </h3>
              <p className="text-slate-600">
                Add and manage student admission records with complete details.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border">
              <h3 className="font-bold text-xl mb-3">
                Student Promotion
              </h3>
              <p className="text-slate-600">
                Promote students individually or in bulk to the next class.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border">
              <h3 className="font-bold text-xl mb-3">
                Status Management
              </h3>
              <p className="text-slate-600">
                Track Active, Alumni, Dropout and Transfer students.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border">
              <h3 className="font-bold text-xl mb-3">
                Class Allocation
              </h3>
              <p className="text-slate-600">
                Allocate students to classes and sections seamlessly.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border">
              <h3 className="font-bold text-xl mb-3">
                Search & Filters
              </h3>
              <p className="text-slate-600">
                Filter students by Academic Year, Status and Class.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border">
              <h3 className="font-bold text-xl mb-3">
                Bulk Operations
              </h3>
              <p className="text-slate-600">
                Bulk Promote, Delete, Export and Update student records.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      {/* OVERVIEW */}
<section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <h2 className="text-4xl font-bold mb-6">
          Complete Student Management System
        </h2>

        <p className="text-slate-600 leading-8">
          Student Management enables educational institutions to
          maintain comprehensive student records from admission to
          graduation. Administrators can manage personal details,
          academic history, attendance records, documents and class
          allocations through a centralized platform.
        </p>

        <p className="text-slate-600 leading-8 mt-4">
          The module provides powerful filtering capabilities based
          on academic year, student status and class. Schools can
          quickly locate student information and perform bulk
          administrative actions with minimal effort.
        </p>

        <p className="text-slate-600 leading-8 mt-4">
          With student promotion, alumni tracking, dropout
          management and bulk operations, institutions can improve
          administrative efficiency while ensuring data accuracy
          and transparency.
        </p>
      </div>

      <div>
        <img
          src={StudentOverviewImg}
          alt="Student Management"
          className="rounded-3xl shadow-xl"
        />

        <div className="grid grid-cols-2 gap-4 mt-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-3xl font-bold text-indigo-600">
              1250+
            </h3>
            <p className="text-slate-500 mt-2">
              Active Students
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-3xl font-bold text-green-600">
              98%
            </h3>
            <p className="text-slate-500 mt-2">
              Promotion Rate
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-3xl font-bold text-purple-600">
              17
            </h3>
            <p className="text-slate-500 mt-2">
              Classes Managed
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-3xl font-bold text-orange-600">
              42
            </h3>
            <p className="text-slate-500 mt-2">
              Sections
            </p>
          </div>

        </div>
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
          Centralized Student Records
        </h3>
        <p>
          Access complete student information from one platform.
        </p>
      </div>

      <div className="border rounded-3xl p-8">
        <h3 className="font-bold text-xl mb-3">
          Bulk Promotion
        </h3>
        <p>
          Promote multiple students to the next class instantly.
        </p>
      </div>

      <div className="border rounded-3xl p-8">
        <h3 className="font-bold text-xl mb-3">
          Easy Filtering
        </h3>
        <p>
          Search students by year, class and status.
        </p>
      </div>

      <div className="border rounded-3xl p-8">
        <h3 className="font-bold text-xl mb-3">
          Alumni Tracking
        </h3>
        <p>
          Maintain records of graduated students.
        </p>
      </div>

      <div className="border rounded-3xl p-8">
        <h3 className="font-bold text-xl mb-3">
          Faster Administration
        </h3>
        <p>
          Reduce manual paperwork and administrative workload.
        </p>
      </div>

      <div className="border rounded-3xl p-8">
        <h3 className="font-bold text-xl mb-3">
          Better Data Accuracy
        </h3>
        <p>
          Ensure accurate and updated student records.
        </p>
      </div>

    </div>

  </div>

</section>

{/* WORKFLOW */}
<section className="py-20 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-center text-4xl font-bold mb-16">
      Student Management Workflow
    </h2>

    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

      {[
        "Register Student",
        "Assign Class",
        "Update Profile",
        "Track Progress",
        "Promote Student",
        "Archive Alumni",
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

      <div className="bg-blue-50 p-8 rounded-3xl text-center">
        <h3 className="text-5xl font-bold text-blue-600">
          1250
        </h3>
        <p className="mt-2">
          Active Students
        </p>
      </div>

      <div className="bg-green-50 p-8 rounded-3xl text-center">
        <h3 className="text-5xl font-bold text-green-600">
          210
        </h3>
        <p className="mt-2">
          New Admissions
        </p>
      </div>

      <div className="bg-purple-50 p-8 rounded-3xl text-center">
        <h3 className="text-5xl font-bold text-purple-600">
          95%
        </h3>
        <p className="mt-2">
          Promotion Rate
        </p>
      </div>

      <div className="bg-orange-50 p-8 rounded-3xl text-center">
        <h3 className="text-5xl font-bold text-orange-600">
          320
        </h3>
        <p className="mt-2">
          Alumni Records
        </p>
      </div>

    </div>

  </div>

</section>

{/* CTA */}
<section className="py-20 bg-slate-900 text-white">

  <div className="max-w-4xl mx-auto text-center px-6">

    <h2 className="text-5xl font-bold">
      Ready To Simplify Student Management?
    </h2>

    <p className="mt-6 text-slate-300 text-lg">
      Manage admissions, promotions, alumni records and
      student information through a single centralized
      dashboard.
    </p>

    <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl font-semibold">
      Request Demo
    </button>

  </div>

</section>
    </>
  );
}

export default StudentManagement;
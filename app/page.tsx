import { StatCard } from "@/components/stat-card";
import { ReloadDataButton } from "@/components/reload-data-button";
import {
  IconBodyScan,
  IconDental,
  IconDisabled,
  IconMassage,
} from "@tabler/icons-react";
import {
  Ambulance,
  CircleAlert,
  Bed,
  Bone,
  FlaskConical,
  Pill,
  Siren,
  Stethoscope,
} from "lucide-react";

type OverviewResponse = Awaited<ReturnType<typeof fetchOverviewData>>;

async function fetchOverviewData() {
  const res = await fetch("http://localhost:3000/api/v1/dashboard/overview", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default async function Home() {
  const todayLabel = new Intl.DateTimeFormat("th-TH-u-ca-buddhist", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Bangkok",
  }).format(new Date());

  let overview: OverviewResponse | null = null;

  try {
    overview = await fetchOverviewData();
  } catch (error) {
    const detail =
      error instanceof Error ? error.message : "Unknown connection error";

    return (
      <main className="bg-linear-to-br from-slate-50 to-purple-50/30 p-6">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium">{todayLabel}</h1>
          <ReloadDataButton />
        </header>

        <section className="flex min-h-[calc(100vh-10rem)] items-center justify-center">
          <div className="w-full max-w-2xl rounded-3xl border border-rose-200 bg-white/90 p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-4 text-rose-600">
              <div className="rounded-2xl bg-rose-50 p-3">
                <CircleAlert className="size-8" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  API ไม่พร้อมใช้งาน
                </h2>
                <p className="text-sm text-muted-foreground">
                  ไม่สามารถโหลดข้อมูล dashboard ได้ในขณะนี้
                </p>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl bg-rose-50/70 p-4 text-sm">
              {/* <p className="font-medium text-foreground">
                ระบบจะแสดงหน้านี้แทนเพื่อป้องกัน error จากการดึงข้อมูลไม่สำเร็จ
              </p> */}
              <p className="text-muted-foreground">
                กรุณาตรวจสอบการเชื่อมต่อ API หรือกดปุ่ม <span className="font-medium text-foreground">Reload Data</span> เพื่อลองใหม่
              </p>
              <p className="text-xs text-muted-foreground">
                Error detail: {detail}
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const {
    data: { opd, er, ipd, referOut, lab, xray, phy, dent, ttm, med },
  } = overview;
  return (
    <main className="bg-linear-to-br from-slate-50 to-purple-50/30 p-6">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium">{todayLabel}</h1>
        <ReloadDataButton />
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Row 1 - Core patient flow */}
        <StatCard
          mainValue={opd.patient_today.toLocaleString()}
          label="OPD วันนี้ (ครั้ง)"
          monthlyStats={`เดือนนี้ ${opd.patient_month.toLocaleString()} คน / ${opd.visit_month.toLocaleString()} ครั้ง`}
          variant="core"
          icon={Stethoscope}
        />
        <StatCard
          mainValue={er.visit_today.toLocaleString()}
          label="ER วันนี้ (ครั้ง)"
          monthlyStats={`เดือนนี้ ${er.patient_month.toLocaleString()} คน / ${er.visit_month.toLocaleString()} ครั้ง`}
          variant="core"
          icon={Siren}
        />
        <StatCard
          mainValue={
            ipd.admit_today.toLocaleString() +
            " / " +
            ipd.discharge_today.toLocaleString()
          }
          label="IPD Admit / Discharge (คน)"
          monthlyStats={`เดือนนี้ Admit ${ipd.admit_month.toLocaleString()} / Discharge ${ipd.discharge_month.toLocaleString()}`}
          variant="core"
          icon={Bed}
        />
        <StatCard
          mainValue={
            referOut.opd_today.toLocaleString() +
            " / " +
            referOut.ipd_today.toLocaleString()
          }
          icon={Ambulance}
          label="Refer out OPD/IPD วันนี้(ครั้ง)"
          monthlyStats={`เดือนนี้ OPD ${referOut.opd_month.toLocaleString()} / IPD ${referOut.ipd_month.toLocaleString()}`}
          variant="transfer"
        />

        {/* Row 2 - Diagnostics and treatment support */}
        <StatCard
          icon={FlaskConical}
          mainValue={lab.lab_today.toLocaleString()}
          label="Lab วันนี้(Request)"
          monthlyStats={`เดือนนี้ ${lab.patient_month.toLocaleString()} คน / ${lab.lab_month.toLocaleString()} Request`}
          variant="diagnostics"
        />
        <StatCard
          mainValue={xray.xray_xn_today.toLocaleString()}
          label="X-ray วันนี้(ครั้ง)"
          monthlyStats={`เดือนนี้(คน/ครั้ง) ${xray.xray_patient_month.toLocaleString()}/${xray.xray_xn_month.toLocaleString()}`}
          variant="diagnostics"
          icon={Bone}
        />
        <StatCard
          mainValue={xray.ct_xn_today.toLocaleString()}
          label="CT วันนี้(ครั้ง)"
          monthlyStats={`เดือนนี้(คน/ครั้ง) ${xray.ct_patient_month.toLocaleString()}/${xray.ct_xn_month.toLocaleString()}`}
          variant="diagnostics"
          icon={IconBodyScan}
        />
        <StatCard
          mainValue={med.order_today.toLocaleString()}
          icon={Pill}
          label="ใบสั่งยา วันนี้(ครั้ง)"
          monthlyStats={`เดือนนี้ ${med.patient_month.toLocaleString()} คน / ${med.order_month.toLocaleString()} ครั้ง`}
          variant="diagnostics"
        />

        {/* Row 3 - Specialty clinics */}
        <StatCard
          mainValue={phy.visit_today.toLocaleString()}
          label="กายภาพ วันนี้(ครั้ง)"
          monthlyStats={`เดือนนี้ ${phy.patient_month.toLocaleString()} คน / ${phy.visit_month.toLocaleString()} ครั้ง`}
          variant="specialty"
          icon={IconDisabled}
        />
        <StatCard
          mainValue={dent.visit_today.toLocaleString()}
          label="ทันตกรรม วันนี้(ครั้ง)"
          monthlyStats={`เดือนนี้(คน/ครั้ง) ${dent.patient_month.toLocaleString()}/${dent.visit_month.toLocaleString()}`}
          variant="specialty"
          icon={IconDental}
        />
        <StatCard
          mainValue={ttm.visit_today.toLocaleString()}
          label="แผนไทย วันนี้(ครั้ง)"
          monthlyStats={`เดือนนี้(คน/ครั้ง) ${ttm.patient_month.toLocaleString()}/${ttm.visit_month.toLocaleString()}`}
          variant="specialty"
          icon={IconMassage}
        />
      </div>
    </main>
  );
}

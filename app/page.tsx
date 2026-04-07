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
  Bed,
  Bone,
  FlaskConical,
  Pill,
  Siren,
  Stethoscope,
} from "lucide-react";

async function getOverviewData() {
  const res = await fetch("http://localhost:3000/api/v1/dashboard/overview", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default async function Home() {
  const {
    data: { opd, er, ipd, referOut, lab, xray, phy, dent, ttm },
  } = await getOverviewData();
  console.log(opd.patient_today);
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-purple-50/30 p-6">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium">วันอังคารที่ 17 มีนาคม 2569</h1>
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
          mainValue={ipd.admit_today.toLocaleString() + " / " + ipd.discharge_today.toLocaleString()}
          label="IPD Admit / Discharge (คน)"
          monthlyStats={`เดือนนี้ Admit ${ipd.admit_month.toLocaleString()} / Discharge ${ipd.discharge_month.toLocaleString()}`}
          variant="core"
          icon={Bed}
        />
        <StatCard
          mainValue={referOut.opd_today.toLocaleString() + " / " + referOut.ipd_today.toLocaleString()}
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
        {/* <StatCard
          mainValue="273"
          icon={Pill}
          label="ใบสั่งยา วันนี้(ครั้ง)"
          monthlyStats="เดือนนี้ 7,715 คน / 8,972 ครั้ง"
          variant="diagnostics"
        /> */}

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

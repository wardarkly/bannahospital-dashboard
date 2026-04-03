import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
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

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-purple-50/30 p-6">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium">วันอังคารที่ 17 มีนาคม 2569</h1>
        <Button
          // onClick={toggleLoading}
          variant="outline"
          size="sm"
          className="text-primary-foreground bg-primary"
        >
          Reload Data
        </Button>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Row 1 - Core patient flow */}
        <StatCard
          mainValue="1,661"
          label="OPD วันนี้ (ครั้ง)"
          monthlyStats="เดือนนี้ 12,299 คน / 17,857 ครั้ง"
          variant="core"
          icon={Stethoscope}
        />
        <StatCard
          mainValue="34"
          label="ER วันนี้ (ครั้ง)"
          monthlyStats="เดือนนี้ 1,706 คน / 1,935 ครั้ง"
          variant="core"
          icon={Siren}
        />
        <StatCard
          mainValue="34 / 3"
          label="IPD Admit / Discharge (คน)"
          monthlyStats="เดือนนี้ Admit 749 / Discharge 725"
          variant="core"
          icon={Bed}
        />
        <StatCard
          mainValue="2/1"
          icon={Ambulance}
          label="Refer out OPD/IPD วันนี้(ครั้ง)"
          monthlyStats="เดือนนี้ OPD 120 / IPD 5"
          variant="transfer"
        />

        {/* Row 2 - Diagnostics and treatment support */}
        <StatCard
          icon={FlaskConical}
          mainValue="1,476"
          label="Lab วันนี้(Request)"
          monthlyStats="เดือนนี้ 7,168 คน / 20,618 Request"
          variant="diagnostics"
        />
        <StatCard
          mainValue="11"
          label="X-ray วันนี้(ครั้ง)"
          monthlyStats={"เดือนนี้(คน/ครั้ง) 323/445"}
          variant="diagnostics"
          icon={Bone}
        />
        <StatCard
          mainValue="11"
          label="CT วันนี้(ครั้ง)"
          monthlyStats={"เดือนนี้(คน/ครั้ง) 323/445"}
          variant="diagnostics"
          icon={IconBodyScan}
        />
        <StatCard
          mainValue="273"
          icon={Pill}
          label="ใบสั่งยา วันนี้(ครั้ง)"
          monthlyStats="เดือนนี้ 7,715 คน / 8,972 ครั้ง"
          variant="diagnostics"
        />

        {/* Row 3 - Specialty clinics */}
        <StatCard
          mainValue="48"
          label="กายภาพ วันนี้(ครั้ง)"
          monthlyStats="เดือนนี้ 177 คน / 452ครั้ง"
          variant="specialty"
          icon={IconDisabled}
        />
        <StatCard
          mainValue="82"
          label="ทันตกรรม วันนี้(ครั้ง)"
          monthlyStats={"เดือนนี้(คน/ครั้ง) รพ.1,067/1,201"}
          variant="specialty"
          icon={IconDental}
        />
        <StatCard
          mainValue="44"
          label="แผนไทย วันนี้(ครั้ง)"
          monthlyStats={"เดือนนี้(คน/ครั้ง) 714/1,018"}
          variant="specialty"
          icon={IconMassage}
        />

        {/* <StatCard
          mainValue="38/0"
          icon={Stethoscope}
          label="Refer in OPD/IPD วันนี้(ครั้ง)"
          monthlyStats="เดือนนี้ OPD 110 / IPD 12"
          variant="transfer"
        /> */}
        {/* <StatCard
          mainValue="0/0"
          icon={Stethoscope}
          label="Refer back OPD/IPD วันนี้(ครั้ง)"
          monthlyStats="เดือนนี้ OPD 0 / IPD 0"
          variant="transfer"
        /> */}
        {/* <StatCard
          mainValue="0/0"
          icon={Stethoscope}
          label="Health Rider วันนี้(order/ส่งแล้ว)"
          monthlyStats="เดือนนี้ 431 / 450"
          variant="diagnostics"
        /> */}
      </div>
    </main>
  );
}

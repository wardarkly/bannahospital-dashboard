import { MultiLineStatCard } from "@/components/multi-line-stat-card";
import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { Stethoscope, StethoscopeIcon } from "lucide-react";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Row 1 - Main Stats with Details */}
        <>
          <StatCard
            mainValue="1,661"
            label="OPD วันนี้ (ครั้ง)"
            monthlyStats="เดือนนี้ 12,299 คน / 17,857 ครั้ง"
            variant="purple"
            icon={Stethoscope}
            showDetails
          />
          <StatCard
            mainValue="34"
            label="ER วันนี้ (ครั้ง)"
            monthlyStats="เดือนนี้ 1,706 คน / 1,935 ครั้ง"
            variant="purple"
            icon={Stethoscope}
            showDetails
          />
          <StatCard
            mainValue="34/3"
            label="IPD Admit/Discharge (คน)"
            monthlyStats="เดือนนี้ Admit 749 / Discharge 725"
            variant="purple"
            icon={Stethoscope}
            showDetails
          />
          <StatCard
            mainValue="7/5"
            label="OR วันนี้(ครั้ง)"
            monthlyStats="Major 264 ครั้ง / Minor 123 ครั้ง"
            icon={Stethoscope}
            variant="pink"
          />
        </>

        <>
          <StatCard
            mainValue="48"
            label="กายภาพ วันนี้(ครั้ง)"
            monthlyStats="เดือนนี้ 177 คน / 452ครั้ง"
            variant="light-purple"
            icon={Stethoscope}
          />
          <StatCard
            mainValue="41"
            label="ศสม. วันนี้(ครั้ง)"
            monthlyStats="เดือนนี้ 467 คน / 544 ครั้ง"
            variant="light-purple"
            icon={Stethoscope}
          />
          <MultiLineStatCard
            mainValue="82/8"
            label="ทันตกรรม/ศสม. วันนี้(ครั้ง)"
            lines={["เดือนนี้(คน/ครั้ง)", "รพ.1,067/1,201 ศสม.44/49"]}
            variant="light-purple"
          />
          <MultiLineStatCard
            mainValue="44/24"
            label="แผนไทย/ศสม. วันนี้(ครั้ง)"
            lines={["เดือนนี้(คน/ครั้ง)", "รพ.714/1,018 ศสม.488/781"]}
            variant="light-purple"
          />
        </>

        <>
          <StatCard
            mainValue="3"
            icon={Stethoscope}
            label="ODS วันนี้(ครั้ง)"
            monthlyStats="เดือนนี้ 22 คน / 22 ครั้ง"
            variant="light-purple"
          />
          <StatCard
            mainValue="51"
            icon={Stethoscope}
            label="HD วันนี้(ครั้ง)"
            monthlyStats="เดือนนี้ 127 คน / 717 ครั้ง"
            variant="light-purple"
          />
          <MultiLineStatCard
            mainValue="11/0"
            label="X-ray วันนี้(ครั้ง) CT/MRI"
            lines={["เดือนนี้(คน/ครั้ง)", "CT 323/445 MRI 30/54"]}
            variant="light-purple"
          />
          <StatCard
            icon={Stethoscope}
            mainValue="1,476"
            label="Lab วันนี้(Request)"
            monthlyStats="เดือนนี้ 7,168 คน / 20,618 Request"
            variant="light-pink"
          />
        </>

        <>
          <StatCard
            mainValue="38/0"
            icon={Stethoscope}
            label="Refer in OPD/IPD วันนี้(ครั้ง)"
            monthlyStats="เดือนนี้ OPD 110 / IPD 12"
            variant="pink"
          />
          <StatCard
            mainValue="2/1"
            icon={Stethoscope}
            label="Refer out OPD/IPD วันนี้(ครั้ง)"
            monthlyStats="เดือนนี้ OPD 120 / IPD 5"
            variant="pink"
          />
          <StatCard
            mainValue="0/0"
            icon={Stethoscope}
            label="Refer back OPD/IPD วันนี้(ครั้ง)"
            monthlyStats="เดือนนี้ OPD 0 / IPD 0"
            variant="pink"
          />
          <StatCard
            mainValue="0"
            icon={Stethoscope}
            label="ฉบยา วันนี้(ครั้ง)"
            monthlyStats="เดือนนี้ 39 คน / 79 ครั้ง"
            variant="pink"
          />
        </>

        <>
          <StatCard
            mainValue="0/0"
            icon={Stethoscope}
            label="Health Rider วันนี้(order/ส่งแล้ว)"
            monthlyStats="เดือนนี้ 431 / 450"
            variant="light-pink"
          />
          <StatCard
            mainValue="273"
            icon={Stethoscope}
            label="ใบสั่งยา วันนี้(ครั้ง)"
            monthlyStats="เดือนนี้ 7,715 คน / 8,972 ครั้ง"
            variant="light-pink"
          />
        </>
      </div>
    </main>
  );
}

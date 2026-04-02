"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Stethoscope,
  BedDouble,
  HeartPulse,
  Microscope,
  Pill,
} from "lucide-react";

// 🔥 mock data (เปลี่ยนเป็น fetch API จริงได้เลย)
const data = {
  opd: {
    today: { person: 120, visit: 150 },
    month: { person: 2000, visit: 2500 },
  },
  er: { today: { person: 40 }, month: { person: 900, visit: 1100 } },
  ipd: {
    today: { admit: 10, discharge: 8 },
    month: { admit: 200, discharge: 180 },
  },
  support: {
    physical: { today: 30, month: 500 },
    dental: { today: 25, month: 400 },
    thai: { today: 20, month: 300 },
  },
  radiology: {
    xray: { today: 80, month: 1200 },
    ct: { today: 10, month: 200 },
  },
  lab: { today_order: 300, month_person: 1000, month_order: 5000 },
  pharmacy: { today_visit: 200, month_person: 1500, month_visit: 2500 },
};

const sections = [
  {
    title: "OPD",
    desc: `วันนี้ ${data.opd.today.person} คน (${data.opd.today.visit} ครั้ง)\nเดือนนี้ ${data.opd.month.person} คน (${data.opd.month.visit} ครั้ง)`,
    href: "/dashboard/opd",
    icon: Stethoscope,
    color: "bg-green-500",
  },
  {
    title: "ER",
    desc: `วันนี้ ${data.er.today.person} คน\nเดือนนี้ ${data.er.month.person} คน (${data.er.month.visit} ครั้ง)`,
    href: "/dashboard/er",
    icon: Activity,
    color: "bg-red-500",
  },
  {
    title: "IPD",
    desc: `Admit วันนี้ ${data.ipd.today.admit}\nDischarge วันนี้ ${data.ipd.today.discharge}\nเดือนนี้ A:${data.ipd.month.admit} D:${data.ipd.month.discharge}`,
    href: "/dashboard/ipd",
    icon: BedDouble,
    color: "bg-blue-500",
  },
  {
    title: "Support",
    desc: `กายภาพ ${data.support.physical.today}\nทันต ${data.support.dental.today}\nแผนไทย ${data.support.thai.today}`,
    href: "/dashboard/support",
    icon: HeartPulse,
    color: "bg-purple-500",
  },
  {
    title: "Radiology",
    desc: `X-ray ${data.radiology.xray.today}\nCT ${data.radiology.ct.today}`,
    href: "/dashboard/radiology",
    icon: Activity,
    color: "bg-indigo-500",
  },
  {
    title: "LAB",
    desc: `Order วันนี้ ${data.lab.today_order}\nเดือนนี้ ${data.lab.month_order}`,
    href: "/dashboard/lab",
    icon: Microscope,
    color: "bg-yellow-500",
  },
  {
    title: "Pharmacy",
    desc: `วันนี้ ${data.pharmacy.today_visit} ครั้ง\nเดือนนี้ ${data.pharmacy.month_person} คน`,
    href: "/dashboard/pharmacy",
    icon: Pill,
    color: "bg-pink-500",
  },
];

export default function HomeDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">🏥 โรงพยาบาลบ้านนา</h1>
          <p className="text-muted-foreground">Dashboard ภาพรวมระบบบริการ</p>
        </div>
        <Badge variant="outline" className="text-sm">
          Live Data
        </Badge>
      </div>

      {/* Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sections.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.title} href={item.href}>
              <Card className="hover:shadow-xl transition-all cursor-pointer border hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-semibold">
                    {item.title}
                  </CardTitle>
                  <div className={`p-2 rounded-xl text-white ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="text-sm text-muted-foreground whitespace-pre-line">
                    {item.desc}
                  </div>

                  <div className="mt-4 text-xs text-muted-foreground">
                    คลิกเพื่อดูรายละเอียด →
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-muted-foreground pt-6">
        © {new Date().getFullYear()} Ban Na Hospital Dashboard
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

async function getWard() {
  const res = await fetch("http://localhost:3000/api/v1/ipd/ward", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default async function Page() {
  const result = await getWard();
  const wards = result.data;
  const wardsActiveList = wards.filter((ward: any) => ward.ward_active === true || ward.ward_active === "Y");
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Ward Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wardsActiveList.map((ward: any) => (
          <Card key={ward.ward}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {ward.name}
                <Badge
                  variant={ward.ward_active === "Y" ? "default" : "destructive"}
                >
                  {ward.ward_active === "Y" ? "Active" : "Inactive"}
                </Badge>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2 text-sm">
              <div>
                <span className="font-medium">Ward Code:</span> {ward.ward}
              </div>

              <div>
                <span className="font-medium">Specialty:</span> {ward.spclty}
              </div>

              <div>
                <span className="font-medium">Bed Count:</span>{" "}
                {ward.bedcount ?? "-"}
              </div>

              <div>
                <span className="font-medium">Real Bed:</span>{" "}
                {ward.real_bedcount ?? "-"}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

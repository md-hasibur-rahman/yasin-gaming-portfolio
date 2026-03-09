import { fetchEducation } from "@/lib/data";
import { EducationCreateForm } from "@/components/admin/education-create-form";
import { EducationItemForm } from "@/components/admin/education-item-form";

export default async function AdminEducationPage() {
  const items = await fetchEducation();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Education</h1>
      <EducationCreateForm />
      <div className="grid gap-4">
        {items.map((e) => (
          <EducationItemForm key={e.id} item={e} />
        ))}
        {items.length === 0 && <div className="text-zinc-400">No records yet.</div>}
      </div>
    </div>
  );
}

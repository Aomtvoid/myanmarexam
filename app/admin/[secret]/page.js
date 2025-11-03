import AdminClientPage from "@/app/components/AdminClientPage";

export default async function AdminPage({ params }) {
  const { secret } = await params;

  if (secret !== process.env.ADMIN_SECRET) {
    return <div>404 | Page Not Found</div>;
  }  

  return (
    <AdminClientPage />
  );
}

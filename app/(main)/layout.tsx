import { UIHeader } from "../../components/UIHeader"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <UIHeader />
      <div className="p-4">{children}</div>
    </>
  )
}

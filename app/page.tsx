import AppMap from '@/components/app-map'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold font-sans">HEYo</h1>
        <AppMap />
      </main>
    </div>
  );
}

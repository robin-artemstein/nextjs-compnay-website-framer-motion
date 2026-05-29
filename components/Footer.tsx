export default function Footer() {
  return (
    <footer className="bg-orange-300 text-black p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  )
}
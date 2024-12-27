import './globals.css'

export const metadata = {
  title: 'BPA Analytics Dashboard',
  description: 'Analytics and mapping interface for Black Political Engagement',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfZi7WEoYyMDgZnn2tvqIc-dTrfmr-cMU" async defer></script>
      </head>
      <body>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
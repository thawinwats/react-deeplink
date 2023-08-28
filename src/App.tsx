import { useEffect } from "react"
import { isMobile, isIOS } from "react-device-detect"

const appScheme = "satangpro://login?" // Replace with your app's deep link URL
const appStoreUrls = {
  ios: "https://apps.apple.com/us/app/satang-pro/id1513155132", // Replace with your app's App Store URL for iOS
  android: "https://play.google.com/store/apps/details?id=com.satang.pro", // Replace with your app's Google Play Store URL for Android
}

function App() {
  useEffect(() => {
    const redirectToAppOrStore = () => {
      const timeout = setTimeout(() => {
        redirectToStore()
      }, 3000) // Wait for 3 seconds before redirecting to the app store

      window.location.href = appScheme

      // Clear the timeout if the deep link successfully opens the app
      window.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          clearTimeout(timeout)
        }
      })
    }

    if (isMobile) {
      redirectToAppOrStore()
    }
  }, [])

  const redirectToStore = () => {
    const storeLink = isIOS ? appStoreUrls.ios : appStoreUrls.android
    window.location.href = storeLink
  }

  return (
    <div className="bg-slate-950 flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

export default App

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Shield, Lock, Eye, Database, Mail, Globe } from 'lucide-react'
import { Card } from '@/components/ui/card'

export const metadata = {
  title: 'Privacy Policy — Umi',
  description: 'Privacy Policy for Umi birthday reminder app',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/umi"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Umi
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b bg-card/30">
        <div className="container mx-auto px-4 py-16 md:py-20 max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 p-0.5">
              <div className="w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src="/images/umi/logo.png"
                  alt="Umi"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground mb-2">Umi</p>
          <p className="text-sm text-muted-foreground">Last Updated: January 28, 2026</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">

        {/* Introduction Card */}
        <Card className="p-6 md:p-8 mb-8">
          <p className="text-lg leading-relaxed">
            This Privacy Policy describes how Umi (&quot;the App&quot;), developed by <strong>Pau Pidelaserra</strong> (&quot;Developer&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), handles your information. We are committed to protecting your privacy and being transparent about our data practices.
          </p>
        </Card>

        {/* Sections */}
        <div className="space-y-8">

          {/* Section 1 - Overview */}
          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed">
              Umi is a birthday reminder and management application. The App is designed with a <strong>privacy-first approach</strong>: all personal data is stored locally on your device and is not transmitted to our servers. We do not collect, store, or have access to your personal information.
            </p>
          </Card>

          {/* Section 2 */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">2.1 Information You Provide Directly</h3>
                <p className="text-foreground/90 mb-3">When using the App, you may voluntarily enter the following information, which is stored <strong>exclusively on your device</strong>:</p>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Names of contacts whose birthdays you wish to track.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Birthday dates and optional birth years.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Relationship categories (e.g., Friend, Family, Work, Partner).</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Gift ideas and personal notes.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Custom avatar images selected from your photo library.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Your own name and birthday (during onboarding).</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2.2 Information Imported from Device Services</h3>
                <p className="text-foreground/90 mb-3">With your explicit permission, the App may access:</p>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span><strong>Contacts:</strong> The App reads contact names (given and family name), birthday dates, and contact identifiers from your device&apos;s Contacts app. This data is used solely to allow you to import birthday information into the App. Contact data is processed locally and is not sent to any external server.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span><strong>Calendar:</strong> The App reads calendar event titles and dates to identify birthday-related events. This data is processed locally and is not transmitted externally.</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2.3 Information We Do NOT Collect</h3>
                <p className="text-foreground/90 mb-3">We do <strong>not</strong> collect:</p>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Email addresses, phone numbers, or physical addresses.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Location data.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Device identifiers or advertising identifiers.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Browsing history or usage analytics.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Health or fitness data.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Financial or payment information (payments are handled entirely by Apple).</span></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Section 3 - Permissions */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">3. Device Permissions</h2>
            <p className="text-foreground/90 mb-4">The App may request the following device permissions, each requiring your explicit consent:</p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="border rounded-lg p-4 bg-secondary/30">
                <p className="font-semibold mb-2">Contacts</p>
                <p className="text-sm text-foreground/80">To import birthday dates and names from your device contacts.</p>
              </div>
              <div className="border rounded-lg p-4 bg-secondary/30">
                <p className="font-semibold mb-2">Calendar</p>
                <p className="text-sm text-foreground/80">To import birthday events from your Apple Calendar.</p>
              </div>
              <div className="border rounded-lg p-4 bg-secondary/30">
                <p className="font-semibold mb-2">Notifications</p>
                <p className="text-sm text-foreground/80">To send you birthday reminder notifications at your chosen times.</p>
              </div>
              <div className="border rounded-lg p-4 bg-secondary/30">
                <p className="font-semibold mb-2">Photo Library</p>
                <p className="text-sm text-foreground/80">To allow you to select custom avatar images for your contacts.</p>
              </div>
            </div>

            <p className="text-foreground/90 mt-4 text-sm">
              You can revoke any of these permissions at any time through your device&apos;s Settings app. Revoking permissions may limit certain App features but will not affect previously stored data.
            </p>
          </Card>

          {/* Section 4 */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
              </div>
            </div>

            <p className="text-foreground/90 mb-3">All information you provide is used <strong>solely for the following purposes</strong>:</p>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Displaying and managing your birthday list.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Scheduling local notification reminders for upcoming birthdays.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Displaying birthday countdowns and calendar views.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Enabling the birthday memory game with your saved contacts.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Allowing you to organize contacts by relationship groups.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Storing your notification and display preferences.</span></li>
            </ul>
            <p className="text-foreground/90 mt-4 leading-relaxed">
              We do <strong>not</strong> use your data for advertising, profiling, marketing, or any purpose unrelated to the core functionality of the App.
            </p>
          </Card>

          {/* Section 5 */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">5. Data Storage and Security</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">5.1 Local Storage</h3>
                <p className="text-foreground/90 leading-relaxed">
                  All user data is stored locally on your device using the iOS standard storage mechanisms. No data is stored on external servers, cloud services, or databases controlled by us.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">5.2 No Cloud Synchronization</h3>
                <p className="text-foreground/90 leading-relaxed">
                  The App does not offer cloud backup or synchronization. If you delete the App or change devices, your data will not be automatically transferred.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">5.3 Security</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Your data benefits from the security protections built into the iOS operating system, including device encryption when a passcode is enabled. We do not implement additional encryption beyond what the operating system provides.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 6 - Third Party */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
            <p className="text-foreground/90 mb-4">The App integrates with the following third-party services, which have their own privacy practices:</p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold mb-2">RevenueCat</h3>
                <p className="text-sm text-foreground/90 mb-2"><strong>Purpose:</strong> Managing in-app subscriptions and purchases.</p>
                <p className="text-sm text-foreground/90 mb-2"><strong>Data Processed:</strong> Anonymous purchase and subscription status data. RevenueCat does not receive your birthday data, contact information, or other personal content stored in the App.</p>
                <p className="text-sm">
                  <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy →</a>
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold mb-2">Giphy</h3>
                <p className="text-sm text-foreground/90 mb-2"><strong>Purpose:</strong> Providing birthday-themed GIF search and sharing functionality.</p>
                <p className="text-sm text-foreground/90 mb-2"><strong>Data Processed:</strong> Search queries you enter when looking for GIFs. Giphy does not receive your birthday data or contact information.</p>
                <p className="text-sm text-foreground/90 mb-2"><strong>Content Rating:</strong> All GIF content is filtered to &quot;G&quot; (General Audiences) rating.</p>
                <p className="text-sm">
                  <a href="https://giphy.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy →</a>
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold mb-2">Apple Services</h3>
                <p className="text-sm text-foreground/90 mb-2"><strong>App Store:</strong> Handles all payment processing for subscriptions and purchases. We do not have access to your payment information.</p>
                <p className="text-sm text-foreground/90"><strong>Apple Push Notification Service (APNs):</strong> Used for delivering local birthday reminder notifications scheduled by the App.</p>
              </div>
            </div>
          </Card>

          {/* Section 7 */}
          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-primary/10">
            <h2 className="text-2xl font-semibold mb-4">7. Data Sharing</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We do <strong>not</strong> sell, trade, rent, or share your personal data with any third parties.
            </p>
            <p className="text-foreground/90 mb-3">The only data transmitted outside your device is:</p>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span><strong>GIF search queries</strong> sent to Giphy when you use the GIF search feature.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span><strong>Anonymous subscription data</strong> sent to RevenueCat for purchase management.</span></li>
            </ul>
            <p className="text-foreground/90 mt-4 leading-relaxed font-medium">
              No birthday data, contact names, dates, or personal notes are ever transmitted outside your device.
            </p>
          </Card>

          {/* Section 8 */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-foreground/90 leading-relaxed mb-3">
              The App does not knowingly collect personal information from children under the age of 13 (or the applicable age in your jurisdiction). The App does not include targeted advertising, third-party analytics, or social features that would raise concerns under the Children&apos;s Online Privacy Protection Act (COPPA) or similar regulations.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Since all data is stored locally on the device and we do not collect any data on our servers, there is no server-side data collection from any user, including children. Parents and guardians are encouraged to monitor their children&apos;s app usage.
            </p>
          </Card>

          {/* Section 9 */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">9. Your Rights and Choices</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">9.1 Access and Control</h3>
                <p className="text-foreground/90 mb-3">Since all data is stored locally on your device, you have full control over your data at all times:</p>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span><strong>View:</strong> You can view all stored data directly within the App.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span><strong>Edit:</strong> You can modify any birthday entry, note, or preference at any time.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span><strong>Delete Individual Entries:</strong> You can delete any individual birthday entry from the App.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span><strong>Delete All Data:</strong> You can delete all stored data at once using the &quot;Delete All Data&quot; option in Settings.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span><strong>Uninstall:</strong> Uninstalling the App will permanently remove all associated data from your device.</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">9.2 Manage Permissions</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You can manage or revoke device permissions (Contacts, Calendar, Notifications, Photos) at any time through your device&apos;s Settings &gt; Umi.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">9.3 Manage Subscriptions</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You can manage or cancel your subscription through Settings &gt; Apple ID &gt; Subscriptions on your device.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 10 */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">10. Data Retention</h2>
            <p className="text-foreground/90 mb-3 leading-relaxed">
              We do not retain any of your data as all data is stored locally on your device. Your data persists on your device until you:
            </p>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Delete individual entries within the App.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Use the &quot;Delete All Data&quot; feature in Settings.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Uninstall the App from your device.</span></li>
            </ul>
          </Card>

          {/* Section 11 */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">11. International Users</h2>
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed">
              The App is available in multiple languages (Spanish, English, French, German, Italian, Portuguese, Russian, Japanese, Chinese, Korean, Arabic, Hindi, Thai, and Turkish). Regardless of your location, all data remains stored locally on your device. No data is transferred across international borders by the App.
            </p>
          </Card>

          {/* Section 12 */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">12. Analytics and Tracking</h2>
            <p className="text-foreground/90 mb-3">The App does <strong>not</strong> use:</p>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Analytics frameworks or SDKs.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Crash reporting tools.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Advertising networks or ad tracking.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>User behavior tracking.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Device fingerprinting.</span></li>
            </ul>
            <p className="text-foreground/90 mt-4 font-medium">We do not track your App usage in any way.</p>
          </Card>

          {/* Sections 13-17 */}
          <Card className="p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">13. Changes to This Privacy Policy</h2>
                <p className="text-foreground/90 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be reflected by updating the &quot;Last Updated&quot; date at the top of this document. We encourage you to review this Privacy Policy periodically. Your continued use of the App after any changes constitutes acceptance of the updated Privacy Policy.
                </p>
              </div>

              <div className="pt-6 border-t">
                <h2 className="text-2xl font-semibold mb-4">14. California Privacy Rights (CCPA)</h2>
                <p className="text-foreground/90 mb-3">If you are a California resident, you have the right to:</p>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Know what personal data is collected about you.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Request deletion of your personal data.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Not be discriminated against for exercising your privacy rights.</span></li>
                </ul>
                <p className="text-foreground/90 mt-3 leading-relaxed">
                  Since all data is stored locally on your device and we do not collect personal data on our servers, these rights are inherently fulfilled by the App&apos;s design.
                </p>
              </div>

              <div className="pt-6 border-t">
                <h2 className="text-2xl font-semibold mb-4">15. European Privacy Rights (GDPR)</h2>
                <p className="text-foreground/90 leading-relaxed mb-3">
                  If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including the rights to access, rectify, erase, restrict processing, and port your data. Since we do not collect or process your personal data on any server, these rights are inherently satisfied by the App&apos;s local-only storage model.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  The legal basis for processing any data within the App is your explicit consent, provided when you enter data or grant device permissions.
                </p>
              </div>

              <div className="pt-6 border-t">
                <h2 className="text-2xl font-semibold mb-4">16. App Tracking Transparency</h2>
                <p className="text-foreground/90 leading-relaxed">
                  The App does <strong>not</strong> track you across other companies&apos; apps and websites. The App does not request the App Tracking Transparency (ATT) permission because no tracking occurs.
                </p>
              </div>
            </div>
          </Card>

          {/* Contact Section */}
          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">17. Contact Us</h2>
              </div>
            </div>
            <p className="text-foreground/90 mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <strong>Email:</strong>
                <a href="mailto:ppidelaserra2@gmail.com" className="text-primary hover:underline">ppidelaserra2@gmail.com</a>
              </p>
              <p><strong>Developer:</strong> Pau Pidelaserra</p>
            </div>
          </Card>

        </div>

        {/* Footer note */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>This Privacy Policy is effective as of January 28, 2026.</p>
        </div>
      </div>
    </div>
  )
}

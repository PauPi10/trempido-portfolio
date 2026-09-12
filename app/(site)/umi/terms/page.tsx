import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Shield, CreditCard, FileText, Mail } from 'lucide-react'
import { Card } from '@/components/ui/card'

export const metadata = {
  title: 'Terms of Use — Umi',
  description: 'Terms of Use for Umi birthday reminder app',
}

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Terms of Use</h1>
          <p className="text-lg text-muted-foreground mb-2">Umi</p>
          <p className="text-sm text-muted-foreground">Last Updated: January 28, 2026</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">

        {/* Introduction Card */}
        <Card className="p-6 md:p-8 mb-8">
          <p className="text-lg leading-relaxed">
            Welcome to Umi (&quot;the App&quot;), a birthday reminder and management application developed by <strong>Pau Pidelaserra</strong> (&quot;Developer&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By downloading, installing, or using the App, you agree to be bound by these Terms of Use (&quot;Terms&quot;). If you do not agree with these Terms, please do not use the App.
          </p>
        </Card>

        {/* Sections */}
        <div className="space-y-8">

          {/* Section 1 */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">1. Description of the Service</h2>
              </div>
            </div>
            <p className="text-foreground/90 mb-4">Umi is a mobile application for iOS that allows users to:</p>
            <ul className="space-y-2 text-foreground/90 ml-4">
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Add and manage birthday dates of friends, family, and other contacts.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Import birthday information from the device&apos;s Contacts and Calendar apps.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Set customizable reminder notifications for upcoming birthdays.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Add gift ideas and personalized notes for each contact.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Search and share birthday-themed GIFs.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Play a memory game to help memorize birthdays.</span></li>
              <li className="flex gap-2"><span className="text-primary">&bull;</span><span>View a calendar with upcoming birthday events.</span></li>
            </ul>
          </Card>

          {/* Section 2 */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p className="text-foreground/90 leading-relaxed">
              The App is intended for users of all ages. By using the App, you confirm that you have the legal capacity to enter into these Terms, or, if you are under the age of legal consent in your jurisdiction, that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.
            </p>
          </Card>

          {/* Section 3 */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Account</h2>
            <p className="text-foreground/90 leading-relaxed">
              The App does not require the creation of a user account. All data is stored locally on your device. We do not collect or store personal credentials.
            </p>
          </Card>

          {/* Section 4 - Subscription */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">4. Subscription Plans and In-App Purchases</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">4.1 Free Version</h3>
                <p className="text-foreground/90 leading-relaxed">
                  The App offers a free version with limited functionality. Free users may save up to five (5) birthday entries.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4.2 Premium Subscription</h3>
                <p className="text-foreground/90 mb-4">The App offers the following premium subscription options:</p>
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="border rounded-lg p-4 bg-secondary/50">
                    <p className="font-semibold mb-1">Monthly Plan</p>
                    <p className="text-2xl font-bold mb-2">$3.99 <span className="text-sm font-normal text-muted-foreground">USD/month</span></p>
                    <p className="text-sm text-muted-foreground">Auto-renewable</p>
                  </div>
                  <div className="border rounded-lg p-4 bg-secondary/50">
                    <p className="font-semibold mb-1">Annual Plan</p>
                    <p className="text-2xl font-bold mb-2">$9.99 <span className="text-sm font-normal text-muted-foreground">USD/year</span></p>
                    <p className="text-sm text-muted-foreground">3-day free trial</p>
                  </div>
                  <div className="border rounded-lg p-4 bg-secondary/50">
                    <p className="font-semibold mb-1">Lifetime Plan</p>
                    <p className="text-2xl font-bold mb-2">$19.99 <span className="text-sm font-normal text-muted-foreground">USD</span></p>
                    <p className="text-sm text-muted-foreground">One-time purchase</p>
                  </div>
                </div>
                <p className="text-foreground/90 mt-4 leading-relaxed">
                  Premium features include unlimited birthday contacts, smart reminders with advanced scheduling, and the memory game.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4.3 Payment and Billing</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>All purchases are processed through the Apple App Store and are subject to Apple&apos;s terms and conditions.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Subscription payments are charged to your Apple ID account upon confirmation of purchase.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Auto-renewable subscriptions will automatically renew unless cancelled at least 24 hours before the end of the current billing period.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Your account will be charged for renewal within 24 hours prior to the end of the current period at the subscription rate.</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4.4 Free Trial</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>The Annual Plan includes a 3-day free trial. If you do not cancel before the trial period ends, your subscription will automatically begin and you will be charged.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Free trials are available once per Apple ID.</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4.5 Cancellation</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>You may cancel your subscription at any time through your Apple ID account settings.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Cancellation takes effect at the end of the current billing period. No refunds will be issued for partial billing periods.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>For refund requests, please contact Apple Support directly.</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4.6 Restore Purchases</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You can restore previous purchases at any time through the &quot;Restore Purchases&quot; option in the App settings.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 5 */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">5.1 Content You Provide</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You may create and store the following content within the App: names, birthday dates, relationship categories, gift ideas, notes, and custom avatar images. You retain full ownership of any content you create.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">5.2 Responsibility</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You are solely responsible for the content you add to the App, including ensuring that you have the right to use and store any information entered (e.g., contact names and dates).
                </p>
              </div>
            </div>
          </Card>

          {/* Section 6 */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">6.1 Giphy</h3>
                <p className="text-foreground/90 leading-relaxed">
                  The App uses the Giphy API to provide birthday-themed GIF search and sharing functionality. By using this feature, you also agree to Giphy&apos;s{' '}
                  <a href="https://giphy.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Terms of Service</a>{' '}
                  and{' '}
                  <a href="https://giphy.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy</a>.
                  GIF content is filtered to General Audiences (&quot;G&quot;) rating.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">6.2 RevenueCat</h3>
                <p className="text-foreground/90 leading-relaxed">
                  The App uses RevenueCat to manage in-app subscriptions. RevenueCat processes purchase-related data in accordance with its{' '}
                  <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">6.3 Apple Services</h3>
                <p className="text-foreground/90 leading-relaxed">
                  The App integrates with Apple Contacts, Apple Calendar, Apple Notifications, and Apple Photos. Use of these services is governed by Apple&apos;s Terms and Conditions.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 7 */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">7.1 App Ownership</h3>
                <p className="text-foreground/90 leading-relaxed">
                  The App, including its design, code, features, and original content, is the property of the Developer and is protected by applicable intellectual property laws.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">7.2 License</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes in accordance with these Terms.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">7.3 Restrictions</h3>
                <p className="text-foreground/90 mb-3">You may not:</p>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Copy, modify, distribute, sell, or lease any part of the App.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Reverse-engineer, decompile, or disassemble the App.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Use the App for any unlawful purpose.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Attempt to extract the source code of the App.</span></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Sections 8-10 */}
          <Card className="p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">8. Privacy</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Your privacy is important to us. Please review our <Link href="/umi/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which describes how we handle your data. The Privacy Policy is incorporated into and forms part of these Terms.
                </p>
              </div>

              <div className="pt-6 border-t">
                <h2 className="text-2xl font-semibold mb-4">9. Data Storage and Loss</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">9.1 Local Storage</h3>
                    <p className="text-foreground/90 leading-relaxed">
                      All user data is stored locally on your device. We do not provide cloud backup, synchronization, or remote storage of your data.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">9.2 Data Loss</h3>
                    <p className="text-foreground/90 leading-relaxed">
                      We are not responsible for any loss of data resulting from device malfunction, operating system updates, app deletion, or any other cause. We recommend that you maintain regular backups of your device.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h2 className="text-2xl font-semibold mb-4">10. Disclaimer of Warranties</h2>
                <p className="text-foreground/90 leading-relaxed mb-3">
                  THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-foreground/90 mb-3">We do not guarantee that:</p>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>The App will be available at all times or function without interruption.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Notifications will be delivered at the exact scheduled times.</span></li>
                  <li className="flex gap-2"><span className="text-primary">&bull;</span><span>The App will be free of errors or bugs.</span></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Sections 11-16 */}
          <Card className="p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
                <p className="text-foreground/90 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF GOODWILL, OR ANY DAMAGES ARISING FROM THE USE OR INABILITY TO USE THE APP.
                </p>
              </div>

              <div className="pt-6 border-t">
                <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
                <p className="text-foreground/90 leading-relaxed">
                  You agree to indemnify and hold harmless the Developer from and against any claims, liabilities, damages, losses, and expenses arising out of or related to your use of the App or violation of these Terms.
                </p>
              </div>

              <div className="pt-6 border-t">
                <h2 className="text-2xl font-semibold mb-4">13. Modifications to the Terms</h2>
                <p className="text-foreground/90 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Updated Terms will be posted within the App or on our support page with the updated &quot;Last Updated&quot; date. Your continued use of the App after such changes constitutes acceptance of the new Terms.
                </p>
              </div>

              <div className="pt-6 border-t">
                <h2 className="text-2xl font-semibold mb-4">14. Termination</h2>
                <p className="text-foreground/90 leading-relaxed">
                  We reserve the right to suspend or terminate your access to the App at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </p>
              </div>

              <div className="pt-6 border-t">
                <h2 className="text-2xl font-semibold mb-4">15. Governing Law</h2>
                <p className="text-foreground/90 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Spain, without regard to its conflict of law principles.
                </p>
              </div>

              <div className="pt-6 border-t">
                <h2 className="text-2xl font-semibold mb-4">16. Severability</h2>
                <p className="text-foreground/90 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
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
                <h2 className="text-2xl font-semibold mb-4">17. Contact Information</h2>
              </div>
            </div>
            <p className="text-foreground/90 mb-4">If you have any questions about these Terms, please contact us at:</p>
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
          <p>These Terms of Use are effective as of January 28, 2026.</p>
        </div>
      </div>
    </div>
  )
}

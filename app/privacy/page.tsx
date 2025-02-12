import React from 'react';

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen py-20 mt-10">
      <div className="container mx-auto px-4 py-12 bg-white shadow-md rounded-lg max-w-3xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Privacy Policy</h2>
        <p className="mb-4">Effective Date: 10/02/2025</p>

        <p className="mb-6 leading-relaxed">
          At Career Forge, we are committed to protecting and respecting your
          privacy. This Privacy Policy outlines the types of personal
          information we collect, how we use it, and the measures we take to
          safeguard your data.
        </p>

        {/* 1. Information We Collect */}
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">1. Information We Collect</h3>
        <p className="mb-6 leading-relaxed">We collect personal information when you use our services, including but not limited to:</p>
        <ul className="list-disc pl-6 mb-6 leading-relaxed">
          <li><b>Personal Identification Information:</b> Name, email address, phone number, educational background, resume, work experience, etc.</li>
          <li><b>Usage Data:</b> Information on how you interact with our website, training modules, and placement resources (e.g., IP address, browser type, time spent on the platform).</li>
          <li><b>Payment Information:</b> If you sign up for paid services, we may collect payment details (credit card information, billing address).</li>
        </ul>

        {/* 2. How We Use Your Information */}
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">2. How We Use Your Information</h3>
        <p className="mb-6 leading-relaxed">We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-6 mb-6 leading-relaxed">
          <li>To provide and improve our training and placement services.</li>
          <li>To communicate with you about your account, training progress, placement opportunities, and related services.</li>
          <li>To process payments and deliver the requested services.</li>
          <li>To personalize your experience on our platform.</li>
          <li>To send you promotional emails (with your consent), updates, and offers related to your career development.</li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>

        {/* 3. Data Sharing and Disclosure */}
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">3. Data Sharing and Disclosure</h3>
        <p className="mb-6 leading-relaxed">We respect your privacy and do not sell, rent, or trade your personal information. However, we may share your information in the following circumstances:</p>
        <ul className="list-disc pl-6 mb-6 leading-relaxed">
          <li><b>Service Providers:</b> We may share data with third-party service providers that help us deliver our services, such as payment processors, email services, or technical support.</li>
          <li><b>Legal Compliance:</b> If required by law, we may disclose your information to government authorities or legal entities.</li>
          <li><b>Partners:</b> We may share relevant information with placement partners or employers for job matching purposes, but only with your consent.</li>
        </ul>

        {/* 4. Data Security */}
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">4. Data Security</h3>
        <p className="mb-6 leading-relaxed">We implement industry-standard security measures to protect your personal data, including encryption, secure servers, and regular security audits. However, please note that no method of transmission over the Internet is 100% secure, and we cannot guarantee the absolute security of your information.</p>

        {/* 5. Your Data Protection Rights */}
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">5. Your Data Protection Rights</h3>
        <p className="mb-6 leading-relaxed">Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul className="list-disc pl-6 mb-6 leading-relaxed">
          <li><b>Access:</b> You can request a copy of the personal data we hold about you.</li>
          <li><b>Correction:</b> You can request corrections to any inaccurate or incomplete information.</li>
          <li><b>Deletion:</b> You can request to delete your personal data, subject to any legal or contractual obligations.</li>
          <li><b>Opt-out:</b> You can opt-out of receiving promotional emails or marketing communications at any time by following the unsubscribe instructions.</li>
        </ul>
        <p className="mb-6 leading-relaxed">To exercise these rights, please contact us at +91 6379304297 or careerforge2024@gmail.com</p>

        {/* 6. Cookies and Tracking Technologies */}
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">6. Cookies and Tracking Technologies</h3>
        <p className="mb-6 leading-relaxed">We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us remember your preferences, analyse site traffic, and improve our services.</p>
        <p className="mb-6 leading-relaxed">You can manage cookie settings in your browser, but disabling cookies may affect your experience on our platform.</p>

        {/* 7. Third-Party Links */}
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">7. Third-Party Links</h3>
        <p className="mb-6 leading-relaxed">Our website or services may contain links to third-party websites, applications, or services. We are not responsible for the privacy practices or content of these external sites. Please review their privacy policies before sharing any personal information.</p>

        {/* 8. Children’s Privacy */}
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">8. Children’s Privacy</h3>
        <p className="mb-6 leading-relaxed">Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately, and we will take steps to delete it.</p>

        {/* 9. Changes to This Privacy Policy */}
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">9. Changes to This Privacy Policy</h3>
        <p className="mb-6 leading-relaxed">Career Forge reserves the right to update or modify this Privacy Policy at any time. We will notify you of any significant changes by posting the updated policy on our website, along with the effective date.</p>

        {/* 10. Contact Us */}
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">10. Contact Us</h3>
        <p className="mb-6 leading-relaxed">If you have any questions or concerns about this Privacy Policy or how we handle your personal data, please contact us at:</p>
        <p className="leading-relaxed">
          Email: <a href="mailto:careerforge2024@gmail.com" className="text-blue-700 hover:underline">careerforge2024@gmail.com</a><br />
          Email: <a href="mailto:info@careerforge.co.in" className="text-blue-700 hover:underline">info@careerforge.co.in</a><br />
          Phone: +91 6379304297<br />
          Address: Chennai, Tamil Nadu, India.
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
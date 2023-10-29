<template>
  <div class="min-h-[calc(100vh-239.5px)] my-20">
    <div class="h-full flex justify-center items-center">
      <MiscCardBase class="w-[95%] lg:w-[55%] p-10">
        <!-- Header -->
        <h1 class="text-2xl font-extrabold text-black">
          Trivenly Terms & Conditions
        </h1>
        <!-- Body -->
        <div 
          v-for="(list, index) in term"
          :key="index"
          class="flex flex-col mt-5 gap-y-5"
        >
          <div class="flex flex-col">
            <h1 class="text-base font-semibold text-black">
              {{ index + 1 }}. {{ list.title }}
            </h1>
            <div v-if="typeof list.content === 'object'">
              <ul class="text-base font-medium text-[#636363]">
                <li
                  v-for="(content, idx) in list.content"
                  :key="idx"
                  class="list-disc ml-10"
                >
                  {{ content }}
                </li>
              </ul>
            </div>
            <p
              v-else
              class="text-base font-medium text-[#636363]"
            >
              {{ list.content }}
            </p>
          </div>
        </div>
        <!-- Footer -->
        <p class="text-base font-medium text-[#636363] mt-5">
          {{ term.updatedAt }}
        </p>
      </MiscCardBase>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      term: [
        {
          title: 'Introduction',
          content: 'Welcome to Trivenly! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.'
        },
        {
          title: 'Information We Collect',
          content: [
            'Personal Information: When you create an account or make a booking, we collect personal information such as your name, email address, and payment details.',
            'Usage Information: We gather information about how you interact with our platform, including pages viewed, search queries, and device information.',
            'Cookies: Trivenly uses cookies to enhance user experience. You can control cookie preferences through your browser settings.'
          ]
        },
        {
          title: 'How We Use Your Information',
          content: [
            'Booking and Transaction: We use your information to facilitate bookings, process payments, and provide customer support.',
            'Communication: We may send you transactional emails, service-related announcements, and marketing communications. You can opt-out of marketing communications at any time.',
            'Improvement of Services: We analyze user behavior to improve our services, enhance user experience, and customize content.'
          ]
        },
        {
          title: 'Information Sharing',
          content: [
            'Third-Party Providers: We share necessary information with third-party providers involved in the fulfillment of trip packages. These providers are required to adhere to privacy and security standards.',
            'Legal Compliance: We may disclose information to comply with legal obligations, protect our rights, or respond to legal requests.'
          ]
        },
        {
          title: 'Security Measures',
          content: 'Trivenly employs industry-standard security measures to protect your information. However, no method of transmission over the internet or electronic storage is completely secure.'
        },
        {
          title: 'Your Choices',
          content: 'You have the right to access, update, and delete your personal information. You can manage your communication preferences and cookie settings.'
        },
        {
          title: 'Children\'s Privacy',
          content: 'Trivenly is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children'
        },
        {
          title: 'Termination',
          content: 'Trivenly reserves the right to terminate or suspend user accounts at its discretion, without notice, for any reason, including but not limited to a violation of these Terms and Conditions.'
        },
        {
          title: 'Changes to Terms',
          content: 'Trivenly may update these Terms and Conditions from time to time. Users will be notified of any changes, and continued use of the platform constitutes acceptance of the updated terms.'
        },
        {
          title: 'Changes to the Privacy Policy',
          content: 'Trivenly may update this Privacy Policy. Users will be notified of any changes, and continued use of the platform constitutes acceptance of the updated policy.'
        }
      ]
    };
  },
}
</script>
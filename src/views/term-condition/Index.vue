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
          v-for="(list, index) in term.lists"
          :key="index"
          class="flex flex-col mt-5 gap-y-5"
        >
          <div class="flex flex-col">
            <h1 class="text-base font-semibold text-black">
              {{ index + 1}}. {{ list.title }}
            </h1>
            <p class="text-base font-medium text-[#636363]">
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
      term: {
        updatedAt: 'Last updated: 21 October 2023',
        lists: [
          {
            title: 'Acceptance of Terms',
            content: 'Welcome to Trivenly! By accessing or using our website ("the platform"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.'
          },
          {
            title: 'Trip Packages',
            content: 'Trivenly is a marketplace that connects users with trip package providers. We facilitate the booking process, but the actual trip packages are offered by third-party providers. Trivenly is not responsible for the quality, safety, or any issues related to the trip packages. Users are advised to review and agree to the terms of each trip package provider before making a booking.'
          },
          {
            title: 'User Responsibilities',
            content: 'Users are responsible for maintaining the confidentiality of their account information, including passwords. You agree to notify Trivenly immediately of any unauthorized use of your account.'
          },
          {
            title: 'Booking and Payments',
            content: 'All bookings made through Trivenly are subject to availability. Users agree to pay the specified amount for the trip package, including any applicable taxes and fees. Payments are processed securely through our platform.'
          },
          {
            title: 'Cancellations and Refunds',
            content: 'Cancellation policies vary by trip package provider. Users are responsible for reviewing and understanding the cancellation policy of each trip package before making a booking. Trivenly is not responsible for refunds or disputes between users and trip package providers.'
          },
          {
            title: 'User Conduct',
            content: 'Users agree to use Trivenly for lawful purposes only. Prohibited activities include, but are not limited to, violating laws, infringing on intellectual property rights, and engaging in fraudulent or malicious behavior.'
          },
          {
            title: 'Intellectual Property',
            content: 'Trivenly and its logo are the property of Trivenly and are protected by intellectual property laws. Users agree not to use, reproduce, or distribute any content from the platform without our written permission.'
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
            title: 'Governing Law',
            content: 'These Terms and Conditions are governed by and construed in accordance with the laws of Indonesia. By using Trivenly, you agree to these terms and conditions.'
          }
        ]
      }
    };
  },
}
</script>
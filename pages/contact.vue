<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "54F Valencia St. Quezon City, New Manila 1112",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "karlbaldelomar.official@gmail.com",
          icon: "mail",
        },
        {
          id: 3,
          name: "+63 956 994 2357",
          icon: "phone",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>

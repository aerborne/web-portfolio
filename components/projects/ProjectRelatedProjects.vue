<script>
export default {
  data: () => {
    return {
      relatedProject: {
        relatedProjectsHeading: "Related Projects",
        relatedProjects: [
          {
            id: 1,
            title: "Q2 UI",
            img: require("@/static/images/q2/index.png"),
          },
          {
            id: 2,
            title: "VostroNet",
            img: require("@/static/images/vostronet/index.png"),
          },
          {
            id: 3,
            title: "Canvass",
            img: require("@/static/images/canvass/index.webp"),
          },
          {
            id: 4,
            title: "SONA 2022 UI",
            img: require("@/static/images/sona2022/index.webp"),
          },
        ],
      },
    };
  },
};
</script>

<template>
  <div
    class="
      mt-10
      pt-10
      sm:pt-14 sm:mt-20
      border-t-2 border-primary-light
      dark:border-secondary-dark
    "
  >
    <p
      class="
        font-general-regular
        text-primary-dark
        dark:text-primary-light
        text-3xl
        font-bold
        mb-10
        sm:mb-14
        text-left
      "
    >
      {{ relatedProject.relatedProjectsHeading }}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
      <div v-for="item in relatedProject.relatedProjects" :key="item.id">
        <img
          :src="item.img"
          class="rounded-xl cursor-pointer"
          :alt="item.title"
        />
      </div>
    </div>
  </div>
</template>

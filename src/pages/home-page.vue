<template>
  <div class="root">
    <!--Entry Image-->
    <div class="main-info-section">
      <div class="blur">
        <div class="shade"></div>
        <div class="motto">
          <h1>Salve! Quis Agis?</h1>
        </div>
      </div>
    </div>
    <section-title title="Reading List" sub-title="Drinking darkness and pouring out light"></section-title>
    <horizontal-gallery :images="galleryImages"></horizontal-gallery>
    <section-title title="Current Projects" sub-title="Acta Non Verba"></section-title>
    <div class="projects">
      <div class="project" v-for="activity in activities" :key="activity.id"
           :style="{'backgroundImage': `url('${getImagePath(activity.imageFileName)}')`}">
        <div class="activity-promotion">
          <div class="activity-dash"></div>
          <div class="activity-flag">{{ activity.titleFlag }}</div>
          <div class="activity-title">{{ activity.title }}</div>
          <div class="activity-description">{{ activity.description }}</div>
          <RedButton destination="/" text="View Github" background-color="#b10000"
                     style="width: 150px; height: 50px; margin-top: 20px"></RedButton>
        </div>
      </div>
    </div>
    <section-title title="A Small Planet" sub-title="Drag it!"></section-title>
  </div>
</template>

<script>

// Local imports

import SectionTitle from "@/components/section-title";
import HorizontalGallery from "@/components/horizontal-gallery";
import RedButton from "@/components/button";

export default {
  name: "home-page",
  components: {RedButton, HorizontalGallery, SectionTitle},
  data: function () {
    return {
      galleryImages: [
        {
          fileName: "introduction_to_algorithms.jpg",
          title: "Introduction to Algorithms",
          description: "In progress",
          id: 1
        },
        {
          fileName: "20000_leagues_under_the_sea.jpg",
          title: "20000 Leagues under the Sea",
          description: "In progress",
          id: 2
        },
        {fileName: "war_and_peace.jpg", title: "War and Peace", description: "In progress", id: 3},
        {fileName: "latin_language.jpg", title: "Oxford Latin Course", description: "In progress", id: 4},
        {fileName: "song_history.jpg", title: "History of Song", description: "Scheduled", id: 5},
        {fileName: "child_labor_history.jpg", title: "History of Child Labor", description: "Scheduled", id: 6},
        {fileName: "kyoto_art.jpg", title: "Kyoto", description: "Scheduled", id: 7},
      ],
      activities: [
        {
          imageFileName: "LeetCode500.png",
          titleFlag: "Per Aspera Ad Astra",
          title: "Ace Interview!",
          description: "Complete 500 questions on LeetCode.",
          id: 1
        },
        {
          imageFileName: "django_development.png",
          titleFlag: "I LIKE THE WAY YOU DIE, BOY",
          title: "Software development",
          description: "Turn ideas into numbers",
          id: 2
        },
        {
          imageFileName: "ml_goal.jpg",
          titleFlag: "The real 'Homo clusus?'",
          title: "Embrace the Age of AI",
          description: "Computer Vision, NLP, et cetera",
          id: 3
        },
      ]
    };
  },
  methods: {
    getImagePath: function (imageFileName) {
      return require(`.././assets/img/${imageFileName}`)
    }
  },
  created() {
    // Get business information.
    let businessInfo = {
      businessName: "McGill Repair Shop",
      businessAddress: "6666 Rue Mcgill Montreal Canada.",
      businessPhoneNo: "1234567899"
    }

    localStorage.setItem('businessInfo', JSON.stringify(businessInfo))
  }
}
</script>

<style scoped>

.main-info-section {
  height: 90vh;
  width: 100%;
  background-image: url(".././assets/Raphael_School_of_Athens.jpg");

  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.blur {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(1px);
  margin-top: 300px;
  height: max-content;
  width: max-content;
}

.motto {
  margin-top: 0;
  font-size: 35px;
  font-family: "Times New Roman", sans-serif;
  color: white;
}

.projects {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  overflow: hidden;
}

.project {
  width: 100%;
  height: 500px;
  position: relative;

  background-size: cover;
  background-position: center;
  filter: sepia(50%);
  transition: 0.4s ease;
}

.project:hover {
  filter: sepia(0);
  transition: 0.8s ease;
}

.activity-promotion {
  width: 30%;
  height: 100%;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.activity-dash {
  background: #b10000;
  height: 3px;
  margin-bottom: 10px;
  width: 30px
}

.activity-flag, .activity-title, .activity-description {
  color: white;
}

.activity-flag, .activity-description {
  font-family: Roboto, sans-serif;
}

.activity-flag {
  font-size: 35px;
}

.activity-description {
  font-size: 40px;
}

.activity-title {
  font-size: 50px;
  font-family: "Playfair Display SC", serif;
  font-weight: 600;
}

</style>
import { createStore } from "vuex";
import imageVueCoach from "./../../public/assets/vue coach.jpg";
import imageArchive from "./../../public/assets/archive.png";
import imageTpi from "./../../public/assets/tpi.png";
import imageVtubersWeb from "./../../public/assets/vtubers.jpg";
import imageNo15polariod from "./../../public/assets/no15polariod.jpg";
import imagePersonalWeb from "./../../public/assets/personal web.jpg";
import imageHtml5 from "./../../public/assets/html5.png";
import imageCss from "./../../public/assets/css.png";
import imageJavascript from "./../../public/assets/javascript.png";
import imageBootstrap from "./../../public/assets/bootstrap.png";
import imageVue from "./../../public/assets/vue.png";
import imageVuetify from "./../../public/assets/vuetify.png";
import imageGit from "./../../public/assets/git.png";

import imagePs from "./../../public/assets/ps.png";
import imageAi from "./../../public/assets/ai.png";
import imagePr from "./../../public/assets/pr.png";
import imageAe from "./../../public/assets/ae.png";
import imageAu from "./../../public/assets/au.png";
import imageGept from "./../../public/assets/gept.png";

export default createStore({
  state: {
    sectionElements: {
      top: "",
      experience: "",
      skill: "",
      portfolio: "",
      biography: "",
    },
    currentSection: "",
    currentIndex: 0,
    data: {},
    dataCh: {
      headline: {
        about: "關於",
        experience: "學經歷",
        skills: "技能",
        portfolio: "作品集",
        biography: "自傳",
        contact: "聯絡方式",
        history: { education: "學歷", jobs: "工作經歷" },
        abilities: {
          programming: "程式設計",
          multimedia: "多媒體編輯",
          english: "英語認證",
        },
        biographyBtn: "查看自傳內容",
      },
      name: "陳 緯 僑",
      about: `目前擔任昕力資訊前端工程師，以Vue框架開發為主，過去亦有平面設計、個人接案的實務經驗。期望自己能在專案開發中，持續精進，成為一位專業優質的工程師`,
      education: [
        "國立交通大學 傳播系 (2018畢)",
        "比利時布魯塞爾自由大學 交換生",
        "國立台中第一高級中學",
      ],
      jobs: [
        { job: "昕力資訊前端工程師", period: "(2022 3月~ )" },
        {
          job: "自學前端程式+文案圖卡設計接案",
          period: "(2021 5月~2021 12月)",
        },
        { job: "新竹市議員服務處 影音製作與攝影師", period: "(2020~2021)" },
        { job: "中壢資策會(緯育Tibame)", period: "(2020)" },
        { job: "SOHO接案設計師", period: "(2019~2020)" },
      ],
      skills: {
        programming: [
          imageVue,
          imageVuetify,
          imageHtml5,
          imageCss,
          imageJavascript,
          imageBootstrap,
          imageGit,
        ],
        design: [imagePs, imageAi, imagePr, imageAe, imageAu],
        english: [imageGept],
      },
      portfolio: [
        {
          image: imageArchive,
          title: "國發會檔案局-機關檔案管理資訊系統",
          caption:
            "提供檔案局與各機關，可對上傳的文件目錄進行審查、歸檔、上下載與管理",
          link: false,
        },
        {
          image: imageTpi,
          title: "昕力資產管理系統開發",
          caption:
            "供內部員工申請租借、轉租公司之軟硬體資產，以及讓管理者審批、管理、授權，以及處置公司資產。",
          link: false,
        },
        {
          image: imageNo15polariod,
          title: "15號拍立得產生器",
          caption: "讓粉絲們能快速設計，並合成Vtuber 15號的拍立得與梗圖。",
          link: "https://serser322.github.io/no15-polaroid/",
        },
        {
          image: imagePersonalWeb,
          title: "個人網站",
          caption: "自己的個人網站，展示個人履歷、作品集與自傳。",
          link: "#",
        },
      ],
      biography: `我是陳緯僑，台中人，目前住在新竹市，已在昕力資訊擔任前端工程師一年。

      過去從事行銷與文案設計相關工作。曾擔任影音攝影助理，也曾做過接案SOHO族，接案內容包括文案設計、圖文創作、影片製作等等；工作中，除了專業本身，我也常需身兼業務，親自與客戶開會溝通討論，以了解對方需求，製作出符合期待的作品。

      隨著工作經歷與疫情影響，我發覺文案與圖卡設計的專業發展有限，因此決定學習程式，並結合自身之設計與行銷經驗，轉職軟體工程師，提高自身專業與未來發展性。

      因此，我在去年參加中壢資策會(現緯育Tibame)的「JAVA軟體工程師就業養成班」，半年密集式學習程式。在學習和專題開發的過程中，我發覺相較於後端功能，自己對於前端的畫面反而較有興趣，也較為擅長，因此在結訓後，決定以前端工程師為職涯發展。

      後來在家自學前端程式設計，包括Javascript與Vue框架，並結合自己的興趣，製作了「15號拍立得產生器」、「個人網站」等side project，其中「15號拍立得產生器」更上傳到個人Twitter與15號Vtuber的Discord，分享給其他粉絲使用，快速製作回覆用梗圖，受到不少人歡迎。

      隨後，我進入昕力資訊擔任前端工程師。我主要以Vue框架進行開發，先後參與了「國發會檔案局-機關檔案管理資訊系統」、「昕力資產管理系統」等專案。藉由在團隊合作中，以及大型專案的實務開發裡，我從中學到了許多技術、開發工具、解決問題的方式，並累積了不少經驗，也從中感受到了自己技術的提升，但同時也仍感受到自己的不足之處，須保持學習，持續精進自己。

      期許自己在未來，能發揮自己原有專長與所學，精進不輟，創造價值，成為一名優秀的前端工程師！`,
      contact: [
        { icon: "lni-envelope", content: "www322.joe@gmail.com" },
        {
          icon: "lni-github-original",
          content: "https://github.com/serser322",
        },
      ],
    },
    dataEn: {
      headline: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        portfolio: "Portfolio",
        biography: "Biography",
        contact: "Contact",
        history: { education: "Education", jobs: "Jobs experience" },
        abilities: {
          programming: "Programming",
          multimedia: "Multimedia editting",
          english: "English",
        },
        biographyBtn: ">> Read biography",
      },
      name: "Chen Wei-Chiao",
      about: `I used to study mass communication in NCTU. To get a better career achievement, I decided to learned programming. Besides learnd Java at tutoring center and front-end programming on Udemy, I also builded some webs by myself. I wish I can be a professional front-end developer in the future.`,
      education: [
        "National Chiao Tung University of Mass Communication (2018)",
        "Exchange study at Free University of Brussels",
        "National Taichung First Senior High School",
      ],
      jobs: [
        {
          job: "Learning js & Vue.js / Freelance designer",
          period: "(2021 Jun. ~ now)",
        },
        {
          job: "Photography and personal assistant for mayor candidate of Hsinchu city",
          period: "(2020 ~ 2021)",
        },
        {
          job: "Learning programming (JAVA) at Institute for Information Industry",
          period: "(2020)",
        },
        {
          job: "Social media images & videos Designer Freelancer",
          period: "(2019~2020)",
        },
      ],
      skills: {
        programming: [
          imageHtml5,
          imageCss,
          imageJavascript,
          imageBootstrap,
          imageVue,
          imageGit,
        ],
        design: [imagePs, imageAi, imagePr, imageAe, imageAu],
        english: [imageGept],
      },
      portfolio: [
        {
          image: imageVueCoach,
          title: "Vue Coach App (course practice)",
          caption:
            "User can check couches' information, and contact with the couch.",
          link: "https://serser322.github.io/vue-coach/",
        },
        {
          image: imageVtubersWeb,
          title: "SpringFish Vtubers web",
          caption:
            "User can get interest information of SpringFish studio's vtubers",
          link: "https://serser322.github.io/TheVtubers/",
        },
        {
          image: imageNo15polariod,
          title: "Vtuber No.15 polariod generator",
          caption:
            "User can quickly design and combine no.15's polariod and meme picture by themselves.",
          link: "https://serser322.github.io/no15-polaroid/",
        },
        {
          image: imagePersonalWeb,
          title: "Personal web",
          caption:
            "My personal website. Display my resume, portfolio and biography.",
          link: "#",
        },
      ],
      biography: `My name is Wei Chiao Chen, I come from Taichung, and live in Hsinchu city now.

    I used to work as a photographer and personal asistant, taking and editing photos for my boss. I also worked as a freelancer 2 years ago, taking the cases about designing social media articles, making post images, and making short videos. In addition to the works of design, being a freelancer, I also had to frequently contact with customers, even joined their meeting and discussion, to actually understand what they need.

    After working for a few years, I found that if I want to have a better career achievement, I have to learn more skills. So, I decided to learn programming, learn how to build a website. Programming are not only useful and powerful skills nowadays, but also can combine with my graphic design experience.

    Therefore, I enrolled in Institute for Information Industry (III) to learn JAVA programming and build structure coding knowledge. After more than 6 months intensive training, I built a final project (shopping website) with my class teammates. Although that website is not much perfect, it’s my first time building a website, this achievement really made me excited and inspired me.

    In addition to coding JAVA in III, I also learned front-end languages from Udemy course, including html, css, javascript and vue 3. Out of fun, I built 2 side projects: “No.15 vtuber polaroid generator” and “Spring-fish Vtubers Web” for my favorite vtubers. And I also shared “No.15 vtuber polaroid generator” to the vtuber and thier fans, many fans used this web to create meme images. it's very interesting.

    Hope after I switch the job, I can contribute my coding ability and design knowlege to the products. And continue learning, enjoy programming.`,
      contact: [
        { icon: "lni-phone", content: "0938-110675" },
        {
          icon: "lni-map-marker",
          content:
            "No. 163, Zhulian St., East Dist., Hsinchu City 300 , Taiwan",
        },
        { icon: "lni-envelope", content: "joess.cts02@g2.nctu.edu.tw" },
        {
          icon: "lni-github-original",
          content: "https://github.com/serser322",
        },
      ],
    },
  },
  getters: {
    sectionElements: (state) => state.sectionElements,
    elements: (_, getters) => {
      let elements = [];
      for (const element of Object.keys(getters.sectionElements)) {
        elements.push(element);
      }
      return elements;
    },
    currentSection: (state) => state.currentSection,
    currentIndex: (state) => state.currentIndex,
    dataCh: (state) => state.dataCh,
    data: (state) => state.data,
  },
  mutations: {
    toSection(state, payloadObj) {
      const targetElement = payloadObj.payload;
      state.currentSection = targetElement;
      state.currentIndex = payloadObj.elements.indexOf(targetElement);
      state.sectionElements[targetElement].scrollIntoView({
        behavior: "smooth",
      });
    },
    toggleLanguage(state, payload) {
      if (payload === "ch") state.data = state.dataCh;
      if (payload === "en") state.data = state.dataEn;
    },
  },
  actions: {
    toSection(context, payload) {
      const elements = context.getters.elements;
      context.commit("toSection", { payload, elements });
    },
    toggleLanguage(context, payload) {
      context.commit("toggleLanguage", payload);
    },
  },
});

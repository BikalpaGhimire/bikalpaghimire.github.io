// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "some topics of interest I have been working on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-successfully-defended-my-doctoral-thesis-titled-mechanistic-investigation-of-motion-segmentation",
          title: 'Successfully defended my doctoral thesis titled “Mechanistic investigation of motion segmentation”!',
          description: "",
          section: "News",},{id: "news-collaboration-paper-titled-mechanisms-of-neural-representation-and-segregation-of-multiple-spatially-separated-visual-stimuli-is-now-out-in-biorxiv",
          title: 'Collaboration paper titled “Mechanisms of Neural Representation and Segregation of Multiple Spatially Separated...',
          description: "",
          section: "News",},{id: "news-deposited-my-thesis-to-proquest",
          title: 'Deposited my thesis to ProQuest.',
          description: "",
          section: "News",},{id: "news-psychophysics-work-from-my-thesis-titled-critical-spatial-separation-at-the-scale-of-v1-receptive-fields-determines-motion-segmentation-is-now-out-in-biorxiv",
          title: 'Psychophysics work from my thesis titled “Critical spatial separation at the scale of...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%67%68%69%6D%69%72%65%32@%77%69%73%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bghimire", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bikalpa-ghimire", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

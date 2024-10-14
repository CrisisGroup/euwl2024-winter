var config = {
  style: "mapbox://styles/daltonwb/clwj9hw5f00jw01qxhijy3f9f",
  accessToken:
    "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  inset: false,
  theme: "light",
  projection: "globe",
  use3dTerrain: false,
  title:
    '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>EU Watch List 2024 – Autumn Update</h1><p class="hedp">Each year, Crisis Group publishes two updates to the EU Watch List identifying where the EU and its member states can enhance prospects for peace. This update includes entries on Myanmar, Israel and Palestine, Georgia, Haiti and Venezuela.</p>' +
    '<a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a>',
  subtitle: "",
  byline: "",
  footer:
    '<h4>Credits</h4><strong>Lead Contributors</strong>: Regional Program staff, the EU Research and Advocacy Team, the Policy Team and colleagues working on cross-cutting issues.<br /><strong>Visualisation & Design</strong>: Paul Franz, Claire Boccon-Gibod and Michelle Malaney <br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
  chapters: [
    {
      id: "INTRO",
      alignment: "center",
      hidden: false,
      title: "INTRODUCTION",
      image: "",
      description:
        "Lorem ipsum dolor amet, intro to issues goes here." +
        '<br /><br /><a href="https://www.crisisgroup.org/global/watch-list-2024-spring-update#intro" target="_blank">&#8594; [Read more]</a>' +
        "<br /><br />" +
        "<strong>Scroll down to continue. &#8595;</strong>",
      location: {
        center: [-35.07977, 21.55533],
        zoom: 2.25,
        pitch: 16,
        bearing: 7.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "MYANMAR",
      alignment: "left",
      hidden: false,
      title: "Myanmar: The Violent Death Throes of Min Aung Hlaing’s Regime",
      image: "",
      description:
        "The European Union (EU) and its member states can help address the crisis in Myanmar by: <ul><li>Maintaining and expanding targeted sanctions on the regime, the military and their business interests, and ensuring they are rigorously enforced, while avoiding actions that would mainly affect ordinary people or cause systemic damage to the economy. In particular, Myanmar’s access to the Everything But Arms (EBA) trade preferences scheme, which supports the jobs of hundreds of thousands of mainly female garment workers but provides little benefit to the regime, should not be revoked;</li><li>Continuing to leverage its presence in Myanmar and its influence within the International Labour Organisation to help ensure that the threat of ILO measures against Myanmar under Article 33 is translated into concrete actions by the regime to address the worst freedom of association violations, including imprisonment of trade unionists. If the ILO does adopt Article 33 measures, these should not be seen as a justification for revoking EBA preferences, as such action is unlikely to influence the regime’s behaviour on labour rights.</li><li>Providing greater support to the people of Myanmar. Beyond humanitarian aid, which remains essential, the large cuts to its development assistance to Myanmar have left the EU with diminished diplomatic relevance and reduced the EU’s capacity to support essential longer term needs including heath, education, livelihoods and governance programs. These cuts should be reversed, including for programming in areas outside regime control. Support to Rohingya communities in Myanmar and neighbouring Bangladesh who face increased livelihoods difficulties and human rights abuses at this time is particularly important;</li><li>Using its influence with neighbouring states, particularly Thailand, Bangladesh and India, to encourage them to adopt more realistic policies that reflect the military’s loss of control in border areas and the needs of populations in ethnic armed group-controlled parts Myanmar;</li><li>Using its influence within the United Nations, via its member states, to push for the appointment of an experienced permanent in-country Resident and Humanitarian Coordinator;</li></ul>" +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/watch-list-2024-spring-update#israel" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [35.08351, 32.23019],
        zoom: 7.5,
        pitch: 0,
        bearing: 0,
        speed: 0.4,
        bbox: [
          [82.50948, 11.57362],
          [108.28593, 29.35151],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [

      ],
    },
    {
      id: "ISRAEL",
      alignment: "left",
      hidden: false,
      title: "Israeli settlements and settler violence in West Bank",
      image: "",
      description:
        "<ul><li>Push for a ceasefire in Gaza and a hostage deal, which will immediately save lives of Gazans and Israelis, and potentially contribute to a calming of tensions in the West Bank, as well as other fronts throughout region.</li><li>Consider expanding sanctions to include far-right settler ministers, as well as the organisations and groups that perpetuate settler violence and expansion, such as Amana, Hashomer Yosh, and Regavim, something Canada and the U.S. have started doing, respectively.</li><li>Implement the EU's existing differentiation policy more robustly and consistently to ensure that agreements and cooperation programs with Israel do not apply to occupied territories.</li><li>Review whether Israel is complying with its obligations on human rights and democratic principles under the EU-Israel Association Agreement, and suspend the accord (or parts of it) if it finds Israel to be in breach. The agreement, which entered into force in 2000, fosters closer economic, political and cultural ties between Israel and the EU. The deal provides Israel with beneficial trade terms that have significantly boosted Israel’s exports to the bloc, one of its largest trading partners. It also gives Israel access to valuable cooperation projects in various fields from research to energy, including the EU funding program for research and innovation, Horizon Europe, with an overall budget of €95.5 billion. Suspending access to this program, for example, would impose a cost on Israel.</li><li>Adhere closely to the EU’s arms control policy, especially when it comes to equipment that risks being used for repression in the occupied territories. </li></ul>" +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/watch-list-2024-spring-update#sudan" target="_blank">&#8594; [Read more]</a>',
        location: {
          center: [35.08351, 32.23019],
          zoom: 7.5,
          pitch: 0,
          bearing: 0,
          speed: 0.4,
          bbox: [
            [28.06034, 29.49946],
            [42.2118, 34.85895],
          ],
        },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "roadDraw",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "GEORGIA",
      alignment: "left",
      hidden: false,
      title: "The EU’s critical diplomatic and monitoring role",
      image: "",
      description:
        "The UN has an opportunity to step in to bolster measures to protect women, drawing on its mandate to support the existing 2016 peace agreement and to accompany new talks with armed and criminal groups. At the same time, the organisation should seek to revitalise existing commitments to bolster women’s participation in politics and peacebuilding, which have flagged over recent years but remain critical to rectifying historic exclusion of marginalised groups and achieving equitable peace.",
      location: {
        center: [27.75505, 15.19553],
        zoom: 5,
        pitch: 16,
        bearing: 7.2,
        speed: 0.6,
        bbox: [
        [40.52073, 39.76837],
        [47.05622, 43.41350],
      ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [

      ],
    },
    {
      id: "HAITI",
      alignment: "left",
      hidden: false,
      title: "Navigating insecurity in Haiti",
      image: "",
      description:
        "The most pressing question for Haiti revolves around the Multinational Security Support Mission (MSS)’ operational profile, funding and future. Once sufficiently equipped and staffed, police and mission personnel should endeavour to protect the capital’s critical infrastructure and step up operations against gang strongholds, with a view both to tempering the country’s humanitarian crisis and providing a safe environment to hold elections." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/watch-list-2024-spring-update#philippines" target="_blank">&#8594; [Read more]</a>',
        location: {
          center: [-72.74457, 18.92369],
          zoom: 8.5,
          pitch: 0,
          bearing: 0,
          speed: 0.6,
        },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "VZ",
      alignment: "left",
      hidden: false,
      title: "Venezuela: Can the Slide into Outright Dictatorship Be Reversed?",
      image: "",
      description:
        "In these circumstances the EU and its member states should: <ul><li>Maintain their refusal to recognise a Maduro victory in the absence of authentic documentation to support it</li><li>Avoid a repetition of the flawed policy of recognising a president (in this case Edmundo González) with no effective control over the country</li><li>Retain and extend individual sanctions against civilian and military officials in Venezuela responsible for human rights violations and acts of corruption</li><li>Support Venezuelan civil society in its efforts to push back against restrictions of the civic and political space</li><li></li></ul>" +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/watch-list-2024-spring-update#bosnia" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-65.82234, 6.66563],
        zoom: 6,
        pitch: 0,
        bearing: 0,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "END",
      alignment: "center",
      hidden: false,
      title: "",
      image: "",
      description: "",
      location: {
        center: [-35.07977, 21.55533],
        zoom: 2.25,
        pitch: 16,
        bearing: 7.2,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
  ],
};

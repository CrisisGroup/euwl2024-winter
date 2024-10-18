var config = {
  style: "mapbox://styles/daltonwb/cm2c1gpic001501qucq7cfci9",
  accessToken:
    "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  inset: false,
  theme: "light",
  projection: "globe",
  use3dTerrain: false,
  title:
    '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>EU Watch List 2024 – Autumn Update</h1><p class="hedp">Each year, Crisis Group publishes two updates to the EU Watch List identifying where the EU and its member states can enhance prospects for peace. This update includes entries on the Central African Republic, Georgia, Myanmar, Venezuela and the Israeli-occupied West Bank.</p>' +
    '<a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a>',
  subtitle: "",
  byline: "",
  footer:
    '<h4>Credits</h4><strong>Lead Contributors</strong>: Regional Program staff, the EU Research and Advocacy Team, the Policy Team and colleagues working on cross-cutting issues.<br /><strong>Visualisation & Design</strong>: Paul Franz, Claire Boccon-Gibod and Michelle Malaney <br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a><br /><br /><strong>Photo credits:</strong>&nbsp; REUTERS/Maxwell Briceno, AFP, CRISIS GROUP/Julie David de Lossy, Jorge Gutierrez Lucena, Elissa Jobson.</div>',
  chapters: [
    {
      id: "INTRO",
      alignment: "center",
      hidden: false,
      title: "INTRODUCTION",
      image: "",
      description:
        "With Brussels immersed in the EU’s own transition and watching anxiously as the U.S. prepares to vote, conflicts and crises around the globe continue unabated." + "<div class='spacer'></div>" + "This Watch List update provides a non-exhaustive roster of some situations where the EU can play an important part. As always, it attempts to strike a balance between crises high on the EU’s radar and those easily forgotten. In this edition, we focus on Israeli settler violence in the occupied West Bank; Georgia’s democratic backsliding; conflicts in the Central African Republic and Myanmar; and the political crisis in Venezuela." + "<div class='spacer'></div>" + "Not all are top political priorities for the EU and member states, but in all their continued work remains critical. From humanitarian aid to long-term assistance, political pressure and continued engagement, Europe can contribute to peace and security in all these places, making a difference for vulnerable people on the ground." +
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
      id: "ISRAEL",
      alignment: "left",
      hidden: false,
      title: "Occupied West Bank: Curb Israeli Settler Violence and Settlement Expansion",
      image: "",
      description:
        "The EU and its member states should: <ul><li>Keep pushing for a ceasefire and a hostage deal in Gaza, as well as for unfettered humanitarian access throughout the occupied territories. These measures might also calm tensions in the West Bank.</li><li>Consider expanding sanctions to include far-right ministers, as well as the organizations and groups that perpetuate settler violence and expansion.</li><li>Enforce the EU’s differentiation policy more robustly and consistently so that agreements and cooperation programs with Israel do not apply to the occupied territories.</li><li>Review whether Israel is complying with human rights and democratic principles iterated in the EU-Israel Association Agreement.</li><li>Apply a more restrictive interpretation of the EU’s arms control policy.</li></ul>" + "This map shows the establishment of Israeli settlements and outposts from 1967 to 2020. <strong>Settlements</strong> in the West Bank that were officially established by the government (East Jerusalem excluded). <strong style='color: #c88589;'>Outposts</strong> are settlements that were established since the 1990's without government approval and are considered illegal according to Israeli law.<br /><br />" + '<a href="https://www.crisisgroup.org/global/watch-list-2024-autumn-update#palestine" target="_blank">&#8594; [Read more]</a>',
        location: {
          center: [35.08351, 32.23019],
          zoom: 7.5,
          pitch: 0,
          bearing: 0,
          speed: 0.4,
          bbox: [
            [33.80482, 31.23232],
            [36.47560, 32.63047],
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
        {
          layer: "tel-aviv_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "beirut_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "golan-label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "damascus_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "gaza_strip",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "ISRAEL",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "LEBANON",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "west_bank",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "settlements",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "special-areas",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "west-bank-fill",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "tel-aviv",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "beirut",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "golan_heights",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "israel-fill",
          duration: 2000,
          opacity: .7,
        },
        {
          layer: "palestine",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "tel-aviv_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "beirut_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "golan-label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "damascus_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "gaza_strip",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "ISRAEL",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "LEBANON",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "west_bank",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "settlements",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "special-areas",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "west-bank-fill",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "tel-aviv",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "beirut",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "golan_heights",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "israel-fill",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "palestine",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "GEORGIA",
      alignment: "center",
      hidden: false,
      title: "Georgia: How to Tread Carefully and Preserve the EU’s Diplomatic Role",
      image: "",
      description:
        "The EU and its member states should:<ul><li>Offer mediation services if the October elections are contested or lead to political turmoil.</li><li>After the vote, craft responses to democratic backsliding that target those responsible, while avoiding measures that punish ordinary citizens.</li><li>Redouble efforts to counter disinformation about EU policies and promote independent media.</li><li>Intensify EU monitoring and mediation with regard to South Ossetia and Abkhazia.</li></ul>" + '<a href="https://www.crisisgroup.org/global/watch-list-2024-autumn-update#georgia" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + "<img src='images/georgia.jpg' /><p class='photocaption'>People walk past graffiti on a wall next to the parliament building on Shota Rustaveli Avenue in Tbilisi, Georgia. July 2024. CRISIS GROUP / Elissa Jobson</p>",
      location: {
        center: [27.75505, 15.19553],
        zoom: 5,
        pitch: 16,
        bearing: 7.2,
        speed: 0.6,
        bbox: [[40.21383, 40.57490],[46.98409, 43.41894]],
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
          layer: "tblisi-label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "tblisi",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "georgia_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "georgia",
          duration: 2000,
          opacity: .6,
        },
      ],
      onChapterExit: [
        {
          layer: "tblisi-label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "tblisi",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "georgia_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "georgia",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "CAR",
      alignment: "center",
      hidden: false,
      title: "Bringing Lasting Peace to the Central African Republic",
      image: "",
      description:
        "The EU and its member states should: <ul><li>Continue to avoid approaching CAR’s government solely from the perspective of geopolitical competition with Russia.</li><li>Maintain humanitarian assistance while beginning to implement plans to support the country’s development.</li><li>Strengthen prospects for young men and women by supporting employment and training projects and encouraging their political participation.</li><li>Reinforce efforts to promote a culture of inclusiveness, respect for human rights and accountability in the security sector.</li></ul>" + '<a href="https://www.crisisgroup.org/global/watch-list-2024-autumn-update#car" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + "<img src='images/car.jpg' /><p class='photocaption'>A sign reads “bel avenir” (bright future) at the Ministry of Youth and Sport in Bangui. November 2019. CRISIS GROUP / Julie David de Lossy</p>",
        location: {
          center: [19.65155, 6.49910],
          zoom: 6.5,
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
        {
          layer: "bangui",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "bangui_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "car_country",
          duration: 2000,
          opacity: .6,
        },
        {
          layer: "CAR",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "CAR",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "car_country",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "bangui",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "bangui_label",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "VZ",
      alignment: "center",
      hidden: false,
      title: "Venezuela: Reversing the Slide into Dictatorship",
      image: "",
      description:
        "The EU and its member states should: <ul><li>Continue non-recognition of President Nicolás Maduro’s claim to have won re-election in the absence of evidence, but avoid recognising a president (in this case Edmundo González) with no effective control of the country.</li><li>Push for a return to negotiations, conditioned on Maduro agreeing to halt repression, reverse restrictions on civic and political activism, and allow the UN High Commissioner for Human Rights office to return to Caracas.</li><li>Keep channels of communication open by all available diplomatic means.</li><li>Extend sanctions against those responsible for human rights violations, corruption and vote rigging.</li><li>Continue support for civil society in its pushback against narrowing of the civic and political space.</li></ul>" + '<a href="https://www.crisisgroup.org/global/watch-list-2024-autumn-update#venezuela" target="_blank">&#8594; [Read more]</a>' + '<div class="spacer"></div>' + "<img src='images/vz.jpg' /><p class='photocaption'>Venezuelan opposition leader Maria Corina Machado holds up a copy of electoral records during a protest against the election results announced by President Nicolas Maduro's government. Caracas, Venezuela, August 28, 2024. REUTERS/Maxwell Briceno</p>",
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
        {
          layer: "venez_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "venez",
          duration: 2000,
          opacity: .7,
        },
      ],
      onChapterExit: [
        {
          layer: "venez_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "venez",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "MYANMAR",
      alignment: "left",
      hidden: false,
      title: "Myanmar: The Death Throes of Min Aung Hlaing’s Regime",
      image: "",
      description:
        "The European Union and its member states can help address the crisis in Myanmar by: <ul><li>Maintaining and expanding sanctions on the regime but not revoking the Everything But Arms trade preferences scheme which supports the jobs of hundreds of thousands of garment workers (most of them women) but provides little benefit to the regime.</li><li>Reversing development cuts, including for programming in areas outside regime control, to help improve livelihoods and promote better governance, and maintain support for vulnerable Rohingya populations.</li><li>Urging Myanmar’s neighbours to adopt more realistic policies that reflect the military’s loss of control in border areas and the needs of populations in ethnic armed group-controlled parts of Myanmar, and pressing them not to endorse or support flawed elections that may be held in 2025.</li><li>Pushing for the appointment of an experienced, permanent UN resident and humanitarian coordinator in the country.</li></ul>" + '<a href="https://www.crisisgroup.org/global/watch-list-2024-autumn-update#myanmar" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [35.08351, 32.23019],
        zoom: 7.5,
        pitch: 0,
        bearing: 0,
        speed: 0.4,
        bbox: [[88.99873, 15.62231],[100.63204, 23.38514]],
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
        {
          layer: "myanmar_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "myanmar",
          duration: 2000,
          opacity: .7,
        },
        {
          layer: "naypyidaw_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "naypyidaw",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "rakhine",
          duration: 2000,
          opacity: .8,
        },
        {
          layer: "rakhine_label",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "myanmar_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "myanmar",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "naypyidaw_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "naypyidaw",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "rakhine",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "rakhine_label",
          duration: 2000,
          opacity: 0,
        },
      ],
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

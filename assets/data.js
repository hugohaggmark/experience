const data = {
  experience: {
    positions: [
      {
        company: "Grafana Labs",
        title: "Software Engineer",
        description:
          "Member of the Front Platform Squad responsible for developing and maintaining Front End UI components, frameworks, tools and tests used by internal and external contributors.  Working mainly with TypeScript, React, RxJs and Redux but also AngularJs and Go #democratizemetrics",
        location: "Stockholm, Sweden",
        start: "Jan 2019",
        end: "Feb 2022",
        logo: "assets/grafana.png",
        url: "https://grafana.com/",
      },
      {
        company: "RaySearch Laboratories",
        title: "Software Engineer",
        description:
          "Member of the FrontEnd Core Team responsible for developing and maintaining Front End UI components, frameworks, tools and tests used by feature teams.  Working mainly with TypeScript and Redux but also AngularJs, SignalR, Selenium and C#.  #fightingcancerwithcode",
        location: "Stockholm, Sweden",
        start: "Mar 2017",
        end: "Dec 2018",
        logo: "assets/raysearch.png",
        url: "https://www.raysearchlabs.com/",
      },
      {
        company: "TUI Nordic",
        title: "Software Engineer (as Consultant)",
        description:
          "Full Stack developer working with:  React, Redux, Node, Grafana, Prometheus, C#, REST API:s, MongoDB, Nancy, ASP.Net Mvc, Javascript, Bootstrap, Octopus Deploy, Git, Graylog, RabbitMQ, Mob Programming",
        location: "Stockholm, Sweden",
        start: "Aug 2016",
        end: "Mar 2017",
        logo: "assets/tui.png",
        url: "https://www.tui.se/",
      },
      {
        company: "Aptitud",
        title: "Happy Software Dude & Coach",
        description:
          "I'm a Full Stack developer with strong focus on Web development.  I'm not religious about specific languages, frameworks or tools instead I find great passion in exploring new languages, frameworks and tools.  I'm a strong team player that brings lots of skills, warmness and humor to the team.  I'm as equally passionate about coaching team members as I am being coached by team members.",
        location: "Stockholm, Sweden",
        start: "Dec 2012",
        end: "Mar 2017",
        logo: "assets/aptitud.png",
        url: "https://www.aptitud.se/",
      },
      {
        company: "Häggmark Home Inc",
        title: "Parental leave",
        description: "",
        location: "Vallentuna",
        start: "Jan 2016",
        end: "Aug 2016",
        logo: "assets/profile.png",
        url: "http://www.hugohaggmark.com/",
      },
      {
        company: "TUI Nordic",
        title: "Software Engineer (as Consultant)",
        description:
          "Full Stack developer working with:  C#, REST API:s, MongoDB, Nancy, ASP.Net Mvc, Javascript, Knockout, Bootstrap, Jenkins, Octopus Deploy, Git, Graylog, RavenDb, RabbitMQ, UI Testing with Selenium and Jasmine, Pair Programming, Mob Programming, Google Tag Manager.",
        location: "Stockholm, Sweden",
        start: "Jan 2014",
        end: "Dec 2015",
        logo: "assets/tui.png",
        url: "https://www.tui.se/",
      },
      {
        company: "Swedish Armed Forces",
        title: "Team Coach & Software Engineer (as Consultant)",
        description:
          "C#, JavaScript, SharePoint, Nancy,Coaching, Pair Programming, Coding Dojos, Specification By Example, BDD, SpecFlow, Test Automation, UI Testing",
        location: "Stockholm, Sweden",
        start: "Oct 2011",
        end: "Dec 2013",
        logo: "assets/fmv.png",
        url: "https://www.forsvarsmakten.se/en/",
      },
      {
        company: "Avega Group AB",
        title: "Coach & Senior Consultant",
        description: "My time as an Avega Coach is divided between coaching engagements with customer and Avega Group and Elevate.",
        location: "Stockholm, Sweden",
        start: "Oct 2010",
        end: "Dec 2012",
        logo: "assets/avega.png",
        url: "https://www.avegagroup.se/",
      },
      {
        company: "Handelsbanken",
        title: "Team Coach & Software Engineer (as Consultant)",
        description:
          "Coaching development teams in good coding practices, agile processes and testing.  Responsible for developing and implementing a central deployment of TFS 2010.  Responsible for developing and implementing Continuous Integration, Continuous Delivery and automated testing  processes and components for: .Net 3.5, .Net 4.0, BizTalk 2010, ASP.Net, NuGet packaging  C#, WCF, MsTest",
        location: "Stockholm, Sweden",
        start: "Nov 2010",
        end: "Sep 2011",
        logo: "assets/shb.png",
        url: "https://www.handelsbanken.se/en/",
      },
      {
        company: "Microsoft AB",
        title: "Senior Consultant",
        description:
          "Did several assignments as:  * Software Engineer  * Team Coach * ALM Coach  Customers: - Stockholms stad - Handelsbanken - SIDA - Läkemedelsverket",
        location: "Stockholm, Sweden",
        start: "Jul 2007",
        end: "Oct 2010",
        logo: "assets/microsoft.png",
        url: "https://www.microsoft.com/en-us",
      },
      {
        company: "Medical Products Agency Läkemedelsverket",
        title: "Team Coach & Software Engineer (as Consultant)",
        description: "C#, SharePoint, WCF, Coaching, Continuous Integration, Test Automation",
        location: "Uppsala, Sweden",
        start: "Jan 2008",
        end: "Sep 2009",
        logo: "assets/mpa.png",
        url: "https://www.lakemedelsverket.se/en",
      },
      {
        company: "Online CC AB",
        title: "Software Engineer and Architect",
        description: "",
        location: "Stockholm, Sweden",
        start: "Jan 2001",
        end: "May 2007",
        logo: "assets/no.png",
        url: "",
      },
      {
        company: "Arkipelago",
        title: "Software Engineer",
        description: "",
        location: "Stockholm, Sweden",
        start: "Jun 1997",
        end: "Apr 1999",
        logo: "assets/arkipelago.png",
        url: "",
      },
    ],
  },
};

let darkTheme = false;
const THEME_DARK = "dark";
const THEME_LIGHT = "light";

function renderExperience() {
  const root = document.getElementById("experience");
  for (const position of data.experience.positions) {
    const gridContainer = document.createElement("div");
    gridContainer.setAttribute("class", "grid-container");

    const logo = document.createElement("logo");

    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", position.logo);
    img.setAttribute("class", "logo");
    img.setAttribute("alt", `logotype for ${position.company}`);
    img.setAttribute("width", "56");
    img.setAttribute("height", "56");
    imgContainer.appendChild(img);
    logo.appendChild(imgContainer);

    const header = document.createElement("header");
    header.setAttribute("class", "normal-text");

    const anchor = document.createElement("a");
    anchor.setAttribute("class", "anchor-text normal-text");
    anchor.setAttribute("href", position.url);
    anchor.setAttribute("target", "_blank");
    anchor.setAttribute("rel", "noopener");

    const title = document.createElement("div");
    title.setAttribute("class", "title-text");
    title.innerText = position.title;

    const company = document.createElement("div");
    company.innerText = position.company;

    const dates = document.createElement("div");
    dates.innerText = `${position.start} - ${position.end || "Present"}`;

    const location = document.createElement("div");
    location.innerText = position.location;

    if (position.url) {
      anchor.appendChild(title);
      anchor.appendChild(company);
      anchor.appendChild(dates);
      anchor.appendChild(location);
      header.appendChild(anchor);
    }

    if (!position.url) {
      header.appendChild(title);
      header.appendChild(company);
      header.appendChild(dates);
      header.appendChild(location);
    }

    const desc = document.createElement("desc");
    desc.setAttribute("class", "normal-text");

    const description = document.createElement("div");
    description.innerText = position.description;

    desc.appendChild(description);

    gridContainer.appendChild(logo);
    gridContainer.appendChild(header);
    gridContainer.appendChild(desc);
    root.appendChild(gridContainer);
  }
}

function toggleTheme() {
  darkTheme = !darkTheme;
  document.body.className = darkTheme ? THEME_DARK : THEME_LIGHT;
  const themeToggle = document.getElementsByClassName("theme-toggle")[0];
  themeToggle.innerText = darkTheme ? THEME_LIGHT : THEME_DARK;
}

function consent() {
  const cookie = document.getElementById("cookie");
  cookie.classList.add("hidden");
  localStorage.setItem("hugo.contact.consent", "yes");
}

function checkConsent() {
  const consented = localStorage.getItem("hugo.contact.consent");
  if (consented !== "yes") {
    const cookie = document.getElementById("cookie");
    cookie.classList.remove("hidden");
  }
}

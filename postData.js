const data = [
  {
    imgSrc: "img/ababil_home.png",
    title: "Material Homepage",
    description: `A browser <span>Homepage</span> for Professional users.
      It's featured with popular <em>Search Engines and website shortcuts</em>
      <br>
      <br>
      Preview: <a href="https://mrsihab.github.io/material-homepage"><span>Click Here</span></a>
      <br>
      Github: <a href="https://github.com/mrsihab/material-homepage"><span>Click Here</span></a>
      `,
    link: "https://github.com/MrSIHAB/material-homepage",
  },
  {
    imgSrc: "img/portfolio.png",
    title: "Portfolio",
    description: `This is my portfolio website that you're currently exploring.
              There's a lot of feature is being added to this website to make it
              more user-friendly.`,
    link: "https://mrsihab.github.io/portfolio",
  },
  {
    imgSrc: "img/mathab.png",
    title: "Mathab Extension",
    description:
      ` A <span>VS-Code/Codium</span> theme Extension. I specially designed it for
              myself. Lite Weight Extension works fine with any system.
              Available on VS-Code marketplace. See more on github...`,
    link: "https://github.com/MrSIHAB/vscode-mathab",
  },
];

const PortfolioParent = document.getElementById("post-parent");
const postCardTemplate = ({ imgSrc, title, description, link }) => {
  return `
        <div class="card">
                <img src="${imgSrc}" alt="post" loading="lazy">
                <div class="info">
                    <h5>${title}</h5>
                    <p>
                     <airticle>${description}</airticle>
                    </p>
                    <a href="${link}">
                        <button class="btn">
                            <i 
                                class="fa-solid 
                                fa-arrow-up-right-from-square 
                                fa-shake"
                            ></i>
                        </button>
                    </a>
                </div>
            </div>
        `;
};
data.forEach((item) => {
  PortfolioParent.innerHTML += postCardTemplate(item);
});

const postCardTemplate = ({ imgSrc, title, description, link }) => {
  return `
        <div class="card">
                <img src="${imgSrc}" alt="post" loading="lazy">
                <div class="info">
                    <h5>${title}</h5>
                    <p>${description}</p>
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

export default { postCardTemplate };

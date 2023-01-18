exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: 'babel-preset-gatsby',
        options: {
            reactRuntime: 'automatic',
        },
    });
};

// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage, deletePage } = actions;

//     // Check if the page is a localized 404
//     if (page.path.match(/^(\/[a-z]{2})?\/404\/$/)) {
//         const oldPage = { ...page };

//         // Get the language code from the path, and match all paths
//         // starting with this code (apart from other valid paths)
//         const langCode = page.path.split(`/`)[1];
//         page.matchPath = `/${langCode}/*`;

//         console.log(page.path, 'path');
//         console.log(page, 'pagep');

//         // Recreate the modified page
//         deletePage(oldPage);
//         // createPage(page);
//     }
// };

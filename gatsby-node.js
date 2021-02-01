const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const glossaryTemplate = path.resolve(`./src/templates/glossary.tsx`);
  const termTemplate = path.resolve(`./src/templates/term.tsx`);
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`);

  const result = await graphql(
    `
      {
        glossaryRemark: allFile(
          filter: { sourceInstanceName: { eq: "terms" } }
          sort: {
            fields: childMarkdownRemark___frontmatter___title
            order: ASC
          }
        ) {
          nodes {
            childMarkdownRemark {
              fields {
                letter
              }
              id
              frontmatter {
                title
                slug
              }
            }
          }
        }
        blogRemark: allFile(
          filter: { sourceInstanceName: { eq: "posts" } }
          sort: { fields: childMarkdownRemark___frontmatter___date, order: ASC }
        ) {
          nodes {
            childMarkdownRemark {
              fields {
                letter
              }
              id
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const glossary = result.data.glossaryRemark.nodes;
  const blogPosts = result.data.blogRemark.nodes;

  glossary.forEach((term, index) => {
    createPage({
      path: `/glossary/${term.childMarkdownRemark.fields.letter}/${term.childMarkdownRemark.frontmatter.slug}`,
      component: termTemplate,
      context: {
        slug: term.childMarkdownRemark.frontmatter.slug,
      },
    });
  });

  [...Array(26)].map((val, i) => {
    const letter = String.fromCharCode(i + 65).toLowerCase();

    createPage({
      path: `/glossary/${letter}`,
      component: glossaryTemplate,
      context: {
        grouping: letter,
      },
    });
  });

  blogPosts.forEach((post, index) => {
    const previous =
      index === blogPosts.length - 1
        ? null
        : blogPosts[index + 1].childMarkdownRemark;
    const next = index === 0 ? null : blogPosts[index - 1].childMarkdownRemark;
    const { slug } = post.childMarkdownRemark.frontmatter;
    const path = `/blog/${slug}`;

    createPage({
      path,
      component: blogPostTemplate,
      context: {
        slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const { sourceInstanceName } = getNode(node.parent);

    if (sourceInstanceName === "terms") {
      const grouping = node.frontmatter.slug.charAt(0).toLowerCase();

      createNodeField({
        name: `letter`,
        node,
        value: grouping,
      });
    }
  }
};

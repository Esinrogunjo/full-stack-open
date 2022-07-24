const dummy = (blogs) => {
  return 1;
};
const totalLikes = (blogs) => {
  const total = blogs.reduce((acc, curr) => acc + curr.likes, 0);
  return total;
};
const favoriteBlog = (blogs) => {
  let favourtieBlog = blogs[0];
  blogs.map((blog) => {
    if (blog.likes >= favourtieBlog.likes) favourtieBlog = blog;
  });
  return favourtieBlog;
};

const mostBlogs = (blogs) => {
  const authorLikes = blogs.reduce((acc, curr) => {
    acc[curr.author] = acc[curr.author] || 0;
    acc[curr.author] += curr.likes;
    return authorLikes;
  }, {});
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};

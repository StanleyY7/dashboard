export const fetchData = async (user: string) => {
  const response = await fetch(`https://www.codewars.com/api/v1/users/${user}`);
  const data = response.json();
  console.log(data);
  return data;
};

export const fetchGithubData = async (user: string) => {
  const response = await fetch(`https://api.github.com/users/${user}/repos`);
  const data = response.json();
  console.log(data);
  return data;
};

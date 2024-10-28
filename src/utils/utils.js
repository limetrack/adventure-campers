export const getReviewsText = reviews => {
  const count = reviews?.length ?? 0;

  return count > 1
    ? `${count} Reviews`
    : count === 1
			? '1 Review'
			: 'No reviews';
};

export const capitalize = str => {
  return str[0].toUpperCase() + str.slice(1);
};

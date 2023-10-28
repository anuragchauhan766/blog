export const autoHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  e.currentTarget.style.height = "auto";
  e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
};

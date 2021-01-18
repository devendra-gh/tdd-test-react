export const { document } = window;

type ISetTitle = (title: string) => void;

export const setTitle: ISetTitle = title => {
  window.document.title = title;
};

export default window;

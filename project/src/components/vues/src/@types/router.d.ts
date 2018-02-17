interface router{}
declare namespace router{
  let goIndex: () => void;
  let goPage: (page: number) => void;
  let goPost: (postUrl: string) => void;
}

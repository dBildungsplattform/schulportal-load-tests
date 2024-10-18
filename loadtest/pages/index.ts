import { loadPage } from "../util/page.ts";

export class PageObject {
  constructor(
    public name: string,
    public url: string,
  ) {}

  navigate() {
    loadPage(this.url, this.name);
  }
}

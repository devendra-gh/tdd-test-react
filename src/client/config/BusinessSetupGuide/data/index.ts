import { data as dataEn } from './data.json';
import { data as dataAr } from './data_ar.json';

export interface ICategory {
  title: string;
  icon: string;
  link: string;
  guide?: IStep[];
}

export interface IStep {
  stepTitle: string;
  entities: IEntity[];
  details: IDetail[];
}

export interface IEntity {
  image: string;
  title: string;
  subTitle?: string;
  location?: string;
  phone?: string;
  officeHours?: string;
  websiteUrl?: string;
}

export interface IDetail {
  title: string;
  text?: string;
}

export const categoriesEn: ICategory[] = dataEn
  .map(d => {
    return {
      title: d.title,
      icon: d.icon,
      link: d.link,
    };
  })
  .sort((a, b) => (a.link > b.link ? 1 : -1));

export const categoriesAr: ICategory[] = dataAr
  .map(d => {
    return {
      title: d.title,
      icon: d.icon,
      link: d.link,
    };
  })
  .sort((a, b) => (a.link > b.link ? 1 : -1));

export const categoryByLinkEn = (link: string) =>
  dataEn.find(c => c.link === link);

export const categoryByLinkAr = (link: string) =>
  dataAr.find(c => c.link === link);
